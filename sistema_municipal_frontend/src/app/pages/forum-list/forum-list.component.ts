import { Component, OnInit } from '@angular/core';
import { ForumService, ForumPost } from '../../services/forum.service';
import { CommentService, Comment } from '../../services/comment.service';
import { LikeDislikeService, VoteType } from '../../services/like-dislike.service';
import { LoginService } from '../../services/login.service';

interface ComentarioLocal extends Comment {
  respuestas?: ComentarioLocal[];
  respondiendo?: boolean;
}

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {

  temas: ForumPost[] = [];
  nuevoTitulo: string = '';
  nuevoContenido: string = '';
  cargando: boolean = false;

  foroSeleccionado?: ForumPost;
  comentarios: ComentarioLocal[] = [];
  nuevoComentario: string = '';
  mostrarFormulario: boolean = false;
  mostrarFormularioTema: boolean = false;

  nuevaRespuesta = {
    contenido: ''
  };

  isAuthenticated: boolean = false;
  currentUser: any = null;

  // Getter para compatibilidad con el HTML
  get isUserAuthenticated(): boolean {
    return this.loginService.isLoggedIn();
  }

  constructor(
    private forumService: ForumService,
    private commentService: CommentService,
    private likeDislikeService: LikeDislikeService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.cargarTemas();
    
    // Suscribirse al estado de autenticación usando LoginService
    this.loginService.loginStatusSubjec.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
      console.log('🔄 ForumList - Estado de autenticación actualizado:', isAuth);
    });

    // Obtener usuario actual si está autenticado
    if (this.loginService.isLoggedIn()) {
      this.currentUser = this.loginService.getUser();
      console.log('👤 ForumList - Usuario actual desde LoginService:', this.currentUser);
    }
  }

  cargarTemas() {
    this.cargando = true;
    console.log('🔄 Cargando temas del foro...');
    
    this.forumService.obtenerForos().subscribe({
      next: (data) => {
        console.log('✅ Temas cargados exitosamente:', data);
        this.temas = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('❌ Error al cargar los temas:', error);
        alert('Error al cargar los temas del foro');
        this.cargando = false;
      }
    });
  }

  crearTema() {
    if (!this.nuevoTitulo.trim() || !this.nuevoContenido.trim()) {
      alert('El título y contenido son obligatorios');
      return;
    }

    // Verificar autenticación usando LoginService
    if (!this.loginService.isLoggedIn()) {
      alert('Debes iniciar sesión para crear un tema');
      return;
    }

    console.log('🎯 ForumList - Creando tema. Usuario autenticado:', this.loginService.isLoggedIn());
    console.log('🎯 ForumList - Token disponible:', !!this.loginService.getToken());

    const nuevoTema: Partial<ForumPost> = {
      titulo: this.nuevoTitulo,
      contenido: this.nuevoContenido
    };

    this.forumService.crearForo(nuevoTema).subscribe({
      next: (foroCreado) => {
        console.log('✅ ForumList - Tema creado exitosamente:', foroCreado);
        this.temas.unshift(foroCreado);
        this.nuevoTitulo = '';
        this.nuevoContenido = '';
        this.mostrarFormularioTema = false;
      },
      error: (error) => {
        console.error('❌ ForumList - Error al crear el tema:', error);
        alert('Error al crear el tema. Verifica que estés autenticado.');
      }
    });
  }

  mostrarFormularioCrearTema() {
    if (!this.loginService.isLoggedIn()) {
      alert('Debes iniciar sesión para crear un tema');
      return;
    }
    this.mostrarFormularioTema = true;
  }

  cancelarTema() {
    this.mostrarFormularioTema = false;
    this.nuevoTitulo = '';
    this.nuevoContenido = '';
  }

  mostrarFormularioComentario() {
    if (!this.loginService.isLoggedIn()) {
      alert('Debes iniciar sesión para comentar');
      return;
    }
    this.mostrarFormulario = true;
  }

  cancelarComentario() {
    this.mostrarFormulario = false;
    this.nuevoComentario = '';
  }

  tiempoRelativo(fechaStr?: string): string {
    if (!fechaStr) return 'desconocido';

    const fecha = new Date(fechaStr);
    const ahora = new Date();
    const diffMs = ahora.getTime() - fecha.getTime();
    const diffSeg = Math.floor(diffMs / 1000);
    if (diffSeg < 60) return 'justo ahora';
    const diffMin = Math.floor(diffSeg / 60);
    if (diffMin < 60) return `${diffMin} minutos atrás`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `${diffH} horas atrás`;
    const diffD = Math.floor(diffH / 24);
    return `${diffD} días atrás`;
  }

  abrirModal(foro: ForumPost) {
    this.foroSeleccionado = foro;
    this.nuevoComentario = '';
    this.mostrarFormulario = false;
    this.cargarComentarios(foro.id!);
  }

  cargarComentarios(foroId: number) {
    this.commentService.obtenerComentariosPorForo(foroId).subscribe({
      next: (data) => {
        // Convertir comentarios del backend al formato local con respuestas vacías
        this.comentarios = data.map(comment => ({
          ...comment,
          respuestas: [],
          respondiendo: false
        }));
      },
      error: () => alert('Error al cargar comentarios')
    });
  }

  agregarComentario() {
    if (!this.nuevoComentario.trim() || !this.foroSeleccionado) return;

    if (!this.loginService.isLoggedIn()) {
      alert('Debes iniciar sesión para comentar');
      return;
    }

    this.commentService.crearComentario(this.foroSeleccionado.id!, { contenido: this.nuevoComentario }).subscribe({
      next: (comentario) => {
        const nuevoComentarioLocal: ComentarioLocal = {
          ...comentario,
          respuestas: [],
          respondiendo: false
        };
        this.comentarios.unshift(nuevoComentarioLocal);
        this.nuevoComentario = '';
        this.mostrarFormulario = false;
      },
      error: () => alert('Error al agregar comentario')
    });
  }

  toggleRespuesta(comentario: ComentarioLocal) {
    if (!this.loginService.isLoggedIn()) {
      alert('Debes iniciar sesión para responder');
      return;
    }
    
    // Cerrar otros formularios de respuesta
    this.comentarios.forEach(c => {
      if (c.id !== comentario.id) {
        c.respondiendo = false;
      }
    });
    
    comentario.respondiendo = !comentario.respondiendo;
    this.nuevaRespuesta = { contenido: '' };
  }

  responderComentario(comentario: ComentarioLocal) {
    if (!this.nuevaRespuesta.contenido.trim()) return;

    // Por ahora, las respuestas se manejan localmente
    // En una implementación completa, crearías un endpoint para respuestas
    const respuesta: ComentarioLocal = {
      id: Math.random() * 1000, // ID temporal
      contenido: this.nuevaRespuesta.contenido.trim(),
      usuario: this.currentUser ? { nombre: this.currentUser.nombre + ' ' + this.currentUser.apellido } : { nombre: 'Usuario' },
      fechaCreacion: new Date().toISOString(),
      respuestas: []
    };

    if (!comentario.respuestas) {
      comentario.respuestas = [];
    }
    comentario.respuestas.push(respuesta);
    this.cancelarRespuesta(comentario);
  }

  cancelarRespuesta(comentario: ComentarioLocal) {
    comentario.respondiendo = false;
    this.nuevaRespuesta = { contenido: '' };
  }

  eliminarComentario(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
      this.comentarios = this.comentarios.filter(c => c.id !== id);
    }
  }

  eliminarRespuesta(comentarioId: number, respuestaId: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta respuesta?')) {
      const comentario = this.comentarios.find(c => c.id === comentarioId);
      if (comentario && comentario.respuestas) {
        comentario.respuestas = comentario.respuestas.filter(r => r.id !== respuestaId);
      }
    }
  }

  votarForo(tipo: VoteType) {
    if (!this.foroSeleccionado) return;

    if (!this.loginService.isLoggedIn()) {
      alert('Debes iniciar sesión para votar');
      return;
    }

    this.likeDislikeService.votarForo(this.foroSeleccionado.id!, tipo).subscribe({
      next: () => {
        // Opcional: actualizar contadores de votos
        console.log(`Voto ${tipo} registrado para el foro`);
      },
      error: () => alert('Error al votar foro')
    });
  }

  votarComentario(comentarioId: number, tipo: VoteType) {
    if (!this.loginService.isLoggedIn()) {
      alert('Debes iniciar sesión para votar');
      return;
    }

    this.likeDislikeService.votarComentario(comentarioId, tipo).subscribe({
      next: () => {
        console.log(`Voto ${tipo} registrado para el comentario`);
      },
      error: () => alert('Error al votar comentario')
    });
  }

  // Métodos de utilidad para el template
  getIniciales(nombre: string): string {
    if (!nombre) return 'U';
    return nombre.split(' ')
      .map(n => n.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  formatearFecha(fechaStr?: string): string {
    if (!fechaStr) return 'Fecha desconocida';
    
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getParticipantesUnicos(): number {
    const autores = new Set();
    this.comentarios.forEach(c => {
      if (c.usuario?.nombre) autores.add(c.usuario.nombre);
      c.respuestas?.forEach(r => {
        if (r.usuario?.nombre) autores.add(r.usuario.nombre);
      });
    });
    return autores.size;
  }

  getTotalComentarios(): number {
    return this.comentarios.reduce((total, c) => total + 1 + (c.respuestas?.length || 0), 0);
  }

  getUltimaActividad(): string {
    if (this.comentarios.length === 0) return 'Sin actividad';
    
    let ultimaFecha = new Date(this.comentarios[0].fechaCreacion || '');
    this.comentarios.forEach(c => {
      const fechaComentario = new Date(c.fechaCreacion || '');
      if (fechaComentario > ultimaFecha) ultimaFecha = fechaComentario;
      
      c.respuestas?.forEach(r => {
        const fechaRespuesta = new Date(r.fechaCreacion || '');
        if (fechaRespuesta > ultimaFecha) ultimaFecha = fechaRespuesta;
      });
    });

    const ahora = new Date();
    const diff = ahora.getTime() - ultimaFecha.getTime();
    const horas = Math.floor(diff / (1000 * 60 * 60));
    
    if (horas < 1) return 'Hace menos de 1 hora';
    if (horas === 1) return 'Hace 1 hora';
    if (horas < 24) return `Hace ${horas} horas`;
    
    const dias = Math.floor(horas / 24);
    if (dias === 1) return 'Hace 1 día';
    return `Hace ${dias} días`;
  }

  getComentariosHoy(): number {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    return this.comentarios.reduce((count, c) => {
      let total = 0;
      const fechaComentario = new Date(c.fechaCreacion || '');
      if (fechaComentario >= hoy) total++;
      
      c.respuestas?.forEach(r => {
        const fechaRespuesta = new Date(r.fechaCreacion || '');
        if (fechaRespuesta >= hoy) total++;
      });
      
      return count + total;
    }, 0);
  }

  getUsuarioMasActivo(): string {
    if (this.comentarios.length === 0) return 'Ninguno';
    
    const conteo: { [key: string]: number } = {};
    
    this.comentarios.forEach(c => {
      const autor = c.usuario?.nombre || 'Anónimo';
      conteo[autor] = (conteo[autor] || 0) + 1;
      
      c.respuestas?.forEach(r => {
        const autorRespuesta = r.usuario?.nombre || 'Anónimo';
        conteo[autorRespuesta] = (conteo[autorRespuesta] || 0) + 1;
      });
    });

    let maxCount = 0;
    let usuarioMasActivo = 'Ninguno';
    
    Object.entries(conteo).forEach(([autor, count]) => {
      if (count > maxCount) {
        maxCount = count;
        usuarioMasActivo = autor;
      }
    });

    return usuarioMasActivo;
  }

  trackByComentario(index: number, comentario: ComentarioLocal): number {
    return comentario.id || index;
  }

  trackByTema(index: number, tema: ForumPost): number {
    return tema.id || index;
  }
}
