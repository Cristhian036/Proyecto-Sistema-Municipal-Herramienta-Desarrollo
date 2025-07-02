import { Component, OnInit } from '@angular/core';
import { NoticiaService, Noticia } from '../../../services/noticia.service';
import { LoginService } from '../../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

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
  currentUser: any = null;

  constructor(
    private noticiaService: NoticiaService,
    private loginService: LoginService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verificarAutenticacion();
    this.cargarNoticias();
  }

  verificarAutenticacion() {
    this.isLoggedIn = this.loginService.isLoggedIn();
    console.log('🔍 NoticiasComponent - isLoggedIn:', this.isLoggedIn);
    console.log('🔍 NoticiasComponent - token exists:', !!this.loginService.getToken());
    
    if (this.isLoggedIn) {
      this.currentUser = this.loginService.getUser();
      console.log('👤 NoticiasComponent - Current user:', this.currentUser);
      
      if (this.currentUser && this.currentUser.authorities) {
        this.userRole = this.currentUser.authorities[0].authority;
        console.log('🔑 NoticiasComponent - User role:', this.userRole);
        
        // Auto-rellenar el autor con el nombre del usuario logueado
        if (this.currentUser.nombre) {
          this.noticia.autor = this.currentUser.nombre;
          console.log('✏️ NoticiasComponent - Auto-filled author:', this.noticia.autor);
        }
      } else {
        console.log('⚠️ NoticiasComponent - No authorities found for user');
      }
    } else {
      console.log('❌ NoticiasComponent - User not logged in');
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Validar tamaño del archivo (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.snack.open('❌ La imagen no debe superar los 5MB', 'Aceptar', { duration: 4000 });
        return;
      }

      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        this.snack.open('❌ Solo se permiten archivos de imagen', 'Aceptar', { duration: 4000 });
        return;
      }

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
    console.log('📝 NoticiasComponent - Iniciando creación de noticia');
    
    // Forzar verificación de autenticación
    if (!this.forceAuthCheck()) {
      return;
    }
    
    console.log('🔍 NoticiasComponent - isLoggedIn:', this.isLoggedIn);
    console.log('🔍 NoticiasComponent - userRole:', this.userRole);
    console.log('🔍 NoticiasComponent - token:', this.loginService.getToken() ? 'EXISTS' : 'NULL');

    // Verificar permisos (Solo TRABAJADOR puede crear noticias)
    if (this.userRole !== 'TRABAJADOR') {
      console.log('❌ NoticiasComponent - Permisos insuficientes. Rol:', this.userRole);
      this.snack.open('❌ Solo los trabajadores pueden crear noticias', 'Aceptar', { duration: 4000 });
      return;
    }

    // Validaciones del formulario
    if (!this.noticia.titulo.trim()) {
      this.snack.open('❌ El título es requerido', 'Aceptar', { duration: 3000 });
      return;
    }

    if (this.noticia.titulo.length > 200) {
      this.snack.open('❌ El título no debe superar los 200 caracteres', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.noticia.descripcion.trim()) {
      this.snack.open('❌ La descripción es requerida', 'Aceptar', { duration: 3000 });
      return;
    }

    if (this.noticia.descripcion.length > 1000) {
      this.snack.open('❌ La descripción no debe superar los 1000 caracteres', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.noticia.autor.trim()) {
      this.snack.open('❌ El autor es requerido', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.imagenSeleccionada) {
      this.snack.open('❌ Debe seleccionar una imagen', 'Aceptar', { duration: 3000 });
      return;
    }

    const formData = new FormData();
    formData.append('titulo', this.noticia.titulo.trim());
    formData.append('descripcion', this.noticia.descripcion.trim());
    formData.append('autor', this.noticia.autor.trim());
    formData.append('imagen', this.imagenSeleccionada);

    console.log('📤 NoticiasComponent - Preparando envío de FormData');
    console.log('📤 NoticiasComponent - Título:', this.noticia.titulo.trim());
    console.log('📤 NoticiasComponent - Autor:', this.noticia.autor.trim());
    console.log('📤 NoticiasComponent - Imagen:', this.imagenSeleccionada?.name);
    console.log('📤 NoticiasComponent - Token antes del envío:', this.loginService.getToken() ? 'EXISTS' : 'NULL');

    this.enviando = true;

    this.noticiaService.crearNoticia(formData).subscribe(
      (response) => {
        console.log('✅ NoticiasComponent - Noticia creada exitosamente:', response);
        this.snack.open('✅ Noticia publicada exitosamente', 'Aceptar', { duration: 3000 });
        this.limpiarFormulario();
        this.cargarNoticias(); // Recargar la lista
        this.enviando = false;
      },
      (error) => {
        console.error('❌ NoticiasComponent - Error al crear noticia:', error);
        console.error('❌ Error status:', error.status);
        console.error('❌ Error message:', error.message);
        console.error('❌ Error details:', error.error);
        
        this.enviando = false;
        
        if (error.status === 401) {
          console.log('❌ Error 401 - Problemas de autenticación');
          this.snack.open('❌ Error de autenticación. Inicie sesión nuevamente', 'Ir a Login', { duration: 4000 })
            .onAction().subscribe(() => {
              this.loginService.logout();
              this.router.navigate(['/login']);
            });
        } else if (error.status === 403) {
          console.log('❌ Error 403 - Permisos insuficientes');
          this.snack.open('❌ No tiene permisos para realizar esta acción', 'Aceptar', { duration: 4000 });
        } else if (error.status === 500) {
          let mensaje = '❌ Error del servidor al publicar la noticia';
          if (error.error && error.error.includes('FileNotFoundException')) {
            mensaje = '🚨 Error de configuración del servidor. Contacte al administrador.';
          } else if (error.error && error.error.includes('uploads')) {
            mensaje = '📁 Error al guardar la imagen. Intente nuevamente.';
          }
          this.snack.open(mensaje, 'Aceptar', { duration: 6000 });
        } else {
          this.snack.open('❌ Error al publicar la noticia. Intente nuevamente.', 'Aceptar', { duration: 4000 });
        }
      }
    );
  }

  cargarNoticias() {
    this.cargando = true;
    this.noticiaService.listarNoticias().subscribe(
      (data) => {
        this.noticias = data.sort((a, b) => {
          // Ordenar por fecha descendente (más recientes primero)
          return new Date(b.fecha!).getTime() - new Date(a.fecha!).getTime();
        });
        this.cargando = false;
      },
      (error) => {
        console.error('Error al cargar noticias:', error);
        this.snack.open('❌ Error al cargar las noticias', 'Reintentar', { duration: 4000 })
          .onAction().subscribe(() => {
            this.cargarNoticias();
          });
        this.cargando = false;
      }
    );
  }

  eliminarNoticia(id: number) {
    if (!this.isLoggedIn) {
      this.snack.open('⚠️ Debe iniciar sesión para eliminar noticias', 'Ir a Login', { duration: 4000 })
        .onAction().subscribe(() => {
          this.router.navigate(['/login']);
        });
      return;
    }

    if (this.userRole !== 'ADMIN' && this.userRole !== 'TRABAJADOR') {
      this.snack.open('❌ Solo los administradores y trabajadores pueden eliminar noticias', 'Aceptar', { duration: 4000 });
      return;
    }

    if (confirm('¿Está seguro de que desea eliminar esta noticia?\n\nEsta acción no se puede deshacer.')) {
      this.noticiaService.eliminarNoticia(id).subscribe(
        () => {
          this.snack.open('🗑️ Noticia eliminada exitosamente', 'Aceptar', { duration: 3000 });
          this.cargarNoticias(); // Recargar la lista
        },
        (error) => {
          console.error('Error al eliminar noticia:', error);
          if (error.status === 401) {
            this.snack.open('❌ Error de autenticación', 'Ir a Login', { duration: 4000 })
              .onAction().subscribe(() => {
                this.loginService.logout();
                this.router.navigate(['/login']);
              });
          } else if (error.status === 403) {
            this.snack.open('❌ No tiene permisos para eliminar esta noticia', 'Aceptar', { duration: 4000 });
          } else {
            this.snack.open('❌ Error al eliminar la noticia', 'Aceptar', { duration: 4000 });
          }
        }
      );
    }
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

  limpiarFormulario() {
    this.noticia = {
      titulo: '',
      descripcion: '',
      autor: this.currentUser?.nombre || ''
    };
    this.imagenSeleccionada = null;
    this.imagenPreview = null;
    
    // Limpiar el input de archivo
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
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

  // Método para obtener las iniciales del autor para el avatar
  getInitials(autor: string): string {
    return autor.split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  // Verificar si el usuario puede gestionar noticias (crear/editar/eliminar) - Solo TRABAJADOR
  canManageNoticias(): boolean {
    return this.isLoggedIn && this.userRole === 'TRABAJADOR';
  }

  // Verificar si es solo usuario de lectura
  isReadOnlyUser(): boolean {
    return this.isLoggedIn && this.userRole === 'USUARIO';
  }

  // Forzar re-verificación de autenticación
  forceAuthCheck(): boolean {
    console.log('🔄 NoticiasComponent - Forzando verificación de autenticación');
    
    const token = this.loginService.getToken();
    const isLoggedIn = this.loginService.isLoggedIn();
    const user = this.loginService.getUser();
    
    console.log('🔍 ForceAuthCheck - Token:', token ? `${token.substring(0, 20)}...` : 'NULL');
    console.log('🔍 ForceAuthCheck - IsLoggedIn:', isLoggedIn);
    console.log('🔍 ForceAuthCheck - User:', user);
    
    if (!token || !isLoggedIn || !user) {
      console.log('❌ ForceAuthCheck - Autenticación inválida');
      this.snack.open('❌ Su sesión ha expirado. Por favor, inicie sesión nuevamente.', 'Ir a Login', { duration: 4000 })
        .onAction().subscribe(() => {
          this.loginService.logout();
          this.router.navigate(['/login']);
        });
      return false;
    }
    
    // Actualizar variables locales
    this.isLoggedIn = isLoggedIn;
    this.currentUser = user;
    if (user && user.authorities && user.authorities.length > 0) {
      this.userRole = user.authorities[0].authority;
    }
    
    console.log('✅ ForceAuthCheck - Autenticación válida. Rol:', this.userRole);
    return true;
  }
}
