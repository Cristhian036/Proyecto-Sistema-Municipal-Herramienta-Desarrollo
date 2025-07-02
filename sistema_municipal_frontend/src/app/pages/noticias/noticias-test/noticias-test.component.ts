import { Component, OnInit } from '@angular/core';
import { NoticiaService, Noticia } from '../../../services/noticia.service';
import { LoginService } from '../../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-noticias-test',
  templateUrl: './noticias-test.component.html',
  styleUrls: ['./noticias-test.component.css']
})
export class NoticiasTestComponent implements OnInit {

  // Datos del formulario
  noticia = {
    titulo: '',
    descripcion: '',
    autor: ''
  };

  // Lista de noticias
  noticias: Noticia[] = [];
  
  // Imagen seleccionada
  imagenSeleccionada: File | null = null;
  imagenPreview: string | null = null;
  
  // Estados
  cargando = false;
  enviando = false;
  isLoggedIn = false;
  userRole = '';

  // Datos de login de prueba
  loginData = {
    email: 'admin@gmail.com',
    password: '1234'
  };

  constructor(
    private noticiaService: NoticiaService,
    private loginService: LoginService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.verificarAutenticacion();
    this.cargarNoticias();
  }

  verificarAutenticacion() {
    this.isLoggedIn = this.loginService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.loginService.getUser();
      if (user && user.authorities) {
        this.userRole = user.authorities[0].authority;
      }
    }
  }

  // Login automático para pruebas
  loginAutomatico() {
    this.snack.open('🔐 Intentando login automático...', '', { duration: 2000 });
    
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.loginService.loginUser(data.token);
        
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          this.verificarAutenticacion();
          this.snack.open('✅ Login exitoso como ' + this.userRole, 'Aceptar', { duration: 3000 });
        });
      },
      (error) => {
        console.error('Error en login automático:', error);
        this.snack.open('❌ Login automático falló. Verifica las credenciales en el código', 'Aceptar', { duration: 5000 });
      }
    );
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagenSeleccionada = file;
      
      // Crear preview de la imagen
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  crearNoticia() {
    // Verificar autenticación antes de crear
    if (!this.isLoggedIn) {
      this.snack.open('⚠️ Necesitas estar autenticado. Haz click en "Login automático"', 'Aceptar', { duration: 4000 });
      return;
    }

    if (!this.noticia.titulo.trim()) {
      this.snack.open('El título es requerido', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.noticia.descripcion.trim()) {
      this.snack.open('La descripción es requerida', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.noticia.autor.trim()) {
      this.snack.open('El autor es requerido', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.imagenSeleccionada) {
      this.snack.open('Debe seleccionar una imagen', 'Aceptar', { duration: 3000 });
      return;
    }

    const formData = new FormData();
    formData.append('titulo', this.noticia.titulo);
    formData.append('descripcion', this.noticia.descripcion);
    formData.append('autor', this.noticia.autor);
    formData.append('imagen', this.imagenSeleccionada);

    this.enviando = true;

    this.noticiaService.crearNoticia(formData).subscribe(
      (response) => {
        this.snack.open('✅ Noticia creada exitosamente', 'Aceptar', { duration: 3000 });
        this.limpiarFormulario();
        this.cargarNoticias(); // Recargar la lista
        this.enviando = false;
      },
      (error) => {
        console.error('Error al crear noticia:', error);
        this.enviando = false;
        
        if (error.status === 401) {
          this.snack.open('❌ Error de autenticación. Haz login primero', 'Aceptar', { duration: 4000 });
        } else if (error.status === 500) {
          // Error del servidor - probablemente problema con el directorio uploads
          let mensaje = '❌ Error del servidor';
          if (error.error && error.error.includes('FileNotFoundException')) {
            mensaje = '🚨 Error: Directorio uploads no existe en el backend';
          } else if (error.error && error.error.includes('uploads')) {
            mensaje = '📁 Error: Problema con la carpeta uploads del backend';
          }
          this.snack.open(mensaje, 'Aceptar', { duration: 6000 });
          
          // Mostrar sugerencias en consola
          console.log('🔧 SOLUCIONES SUGERIDAS:');
          console.log('1. Crear directorio uploads en la raíz del proyecto backend');
          console.log('2. Verificar permisos de escritura en el directorio');
          console.log('3. Revisar la configuración de ruta en el backend');
        } else {
          this.snack.open('❌ Error al crear la noticia', 'Aceptar', { duration: 3000 });
        }
      }
    );
  }

  cargarNoticias() {
    this.cargando = true;
    this.noticiaService.listarNoticias().subscribe(
      (data) => {
        this.noticias = data;
        this.cargando = false;
      },
      (error) => {
        console.error('Error al cargar noticias:', error);
        this.snack.open('Error al cargar las noticias', 'Aceptar', { duration: 3000 });
        this.cargando = false;
      }
    );
  }

  eliminarNoticia(id: number) {
    if (!this.isLoggedIn) {
      this.snack.open('⚠️ Necesitas estar autenticado para eliminar', 'Aceptar', { duration: 3000 });
      return;
    }

    if (confirm('¿Está seguro de que desea eliminar esta noticia?')) {
      this.noticiaService.eliminarNoticia(id).subscribe(
        () => {
          this.snack.open('🗑️ Noticia eliminada exitosamente', 'Aceptar', { duration: 3000 });
          this.cargarNoticias(); // Recargar la lista
        },
        (error) => {
          console.error('Error al eliminar noticia:', error);
          if (error.status === 401) {
            this.snack.open('❌ Error de autenticación para eliminar', 'Aceptar', { duration: 3000 });
          } else {
            this.snack.open('❌ Error al eliminar la noticia', 'Aceptar', { duration: 3000 });
          }
        }
      );
    }
  }

  logout() {
    this.loginService.logout();
    this.verificarAutenticacion();
    this.snack.open('🚪 Sesión cerrada', 'Aceptar', { duration: 2000 });
  }

  limpiarFormulario() {
    this.noticia = {
      titulo: '',
      descripcion: '',
      autor: ''
    };
    this.imagenSeleccionada = null;
    this.imagenPreview = null;
  }

  formatearFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
