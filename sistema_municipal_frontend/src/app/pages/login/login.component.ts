import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '',
    password: '',
  }

  showPassword = false;
  rememberMe = false;
  loading = false;
  error = '';

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    // Verificar si el usuario ya está logueado
    if (this.loginService.isLoggedIn()) {
      console.log('🔍 Login - Usuario ya autenticado, redirigiendo...');
      this.redirectToUserDashboard();
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  private redirectToUserDashboard() {
    const role = this.loginService.getUserRole();
    console.log('🎯 Login - Redirigiendo usuario con rol:', role);
    
    if (role === 'TRABAJADOR') {
      this.router.navigate(['test-noticias']);
    } else if (role === 'USUARIO') {
      this.router.navigate(['foros']);
    } else {
      // Si no hay rol claro, ir al home
      this.router.navigate(['']);
    }
  }

  formSubmit() {
    this.error = '';
    this.loading = true;

    if (!this.loginData.email || this.loginData.email.trim() === '') {
      this.error = 'El email es requerido';
      this.loading = false;
      this.snack.open('El email es requerido !!', 'Aceptar', {
        duration: 3000
      });
      return;
    }

    if (!this.loginData.password || this.loginData.password.trim() === '') {
      this.error = 'La contraseña es requerida';
      this.loading = false;
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('🔍 Login - Respuesta completa del servidor:', data);
        console.log('🔍 Login - Token en respuesta:', data.token);
        
        // Validar que recibimos un token
        if (!data.token) {
          console.error('❌ Login - No se recibió token en la respuesta');
          this.error = 'Error: No se recibió token de autenticación';
          this.loading = false;
          this.snack.open('Error: No se recibió token de autenticación', 'Aceptar', {
            duration: 3000
          });
          return;
        }

        // Intentar guardar el token
        const tokenSaved = this.loginService.loginUser(data.token);
        
        if (!tokenSaved) {
          console.error('❌ Login - Falló el guardado del token');
          this.error = 'Error: No se pudo guardar el token';
          this.loading = false;
          this.snack.open('Error: No se pudo guardar el token', 'Aceptar', {
            duration: 3000
          });
          return;
        }
        
        // Verificar inmediatamente que el token se guardó
        setTimeout(() => {
          const savedToken = this.loginService.getToken();
          console.log('🔍 Login - Token verificado después de timeout:', savedToken);
          
          if (!savedToken) {
            console.error('❌ Login - Token desapareció después del guardado');
            this.error = 'Error crítico: Token no persistió';
            this.loading = false;
            this.snack.open('Error crítico: Token no persistió', 'Aceptar', {
              duration: 5000
            });
            return;
          }

          // Ahora obtener la información del usuario
          console.log('👤 Login - Obteniendo información del usuario...');
          this.loginService.getCurrentUser().subscribe((user: any) => {
            console.log('✅ Login - Usuario obtenido del backend:', user);
            this.loginService.setUser(user);

            // IMPORTANTE: Notificar explícitamente el cambio de estado
            this.loginService.loginStatusSubjec.next(true);
            console.log('🔄 Login - Estado de autenticación notificado');

            const role = this.loginService.getUserRole();
            console.log('🔍 Login - Rol detectado:', role);

            this.loading = false;

            // Mostrar mensaje de éxito
            this.snack.open('¡Bienvenido ' + (user.nombre || user.email) + '!', 'Aceptar', {
              duration: 3000
            });

            // Pequeño delay para asegurar que la UI se actualice antes de navegar
            setTimeout(() => {
              // Redirigir según el rol
              if (role === 'TRABAJADOR') {
                console.log('🎯 Login - Redirigiendo a dashboard de trabajador');
                this.router.navigate(['test-noticias']);
              }
              else if (role === 'USUARIO') {
                console.log('🎯 Login - Redirigiendo a dashboard de usuario'); 
                this.router.navigate(['foros']);
              }
              else {
                console.warn('⚠️ Login - Rol no reconocido:', role);
                this.error = 'Rol de usuario no válido: ' + role;
                this.snack.open('Rol de usuario no válido: ' + role, 'Aceptar', { duration: 5000 });
                this.loginService.logout();
              }
            }, 500);

          },
          (userError) => {
            console.error('❌ Login - Error al obtener información del usuario:', userError);
            this.error = 'Error al obtener información del usuario';
            this.loading = false;
            this.snack.open('Error al obtener información del usuario', 'Aceptar', {
              duration: 3000
            });
            // Limpiar el token si no podemos obtener el usuario
            this.loginService.logout();
          });
        }, 100); // Pequeño delay para asegurar que el localStorage se ha actualizado
      },
      (error) => {
        console.error('❌ Login - Error en autenticación:', error);
        this.error = 'Credenciales inválidas, vuelva a intentar';
        this.loading = false;
        this.snack.open('Credenciales inválidas, vuelva a intentar', 'Aceptar', {
          duration: 3000
        });
      }
    );
  }

  // Método de prueba para verificar que el token se envía correctamente
  testTokenSending() {
    const token = this.loginService.getToken();
    if (token) {
      console.log('🧪 Test - Token disponible, probando endpoint protegido');
      this.loginService.getCurrentUser().subscribe({
        next: (user) => {
          console.log('✅ Test - Endpoint funcionando correctamente:', user);
          this.snack.open('Test exitoso: Token funcionando!', 'Aceptar', { duration: 3000 });
        },
        error: (error) => {
          console.error('❌ Test - Error en endpoint protegido:', error);
          this.snack.open('Test fallido: Error con token', 'Aceptar', { duration: 3000 });
        }
      });
    } else {
      console.log('❌ Test - No hay token disponible');
      this.snack.open('No hay token para probar', 'Aceptar', { duration: 3000 });
    }
  }

  // Método para depurar el estado completo del login
  debugLoginState() {
    console.log('🔧 DEBUG - Estado completo del sistema de login:');
    this.loginService.debugTokenState();
    
    // Probar guardar un token manualmente
    console.log('🔧 DEBUG - Probando guardar token manualmente...');
    const testToken = 'test-token-' + Date.now();
    localStorage.setItem('test-token', testToken);
    const retrievedToken = localStorage.getItem('test-token');
    console.log('🔧 DEBUG - Token de prueba guardado:', testToken);
    console.log('🔧 DEBUG - Token de prueba recuperado:', retrievedToken);
    console.log('🔧 DEBUG - LocalStorage funciona correctamente:', testToken === retrievedToken);
    localStorage.removeItem('test-token');
  }
}
