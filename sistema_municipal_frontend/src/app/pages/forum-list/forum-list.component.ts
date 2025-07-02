import { Component, OnInit } from '@angular/core';
import { ForumService, ForumPost } from '../../services/forum.service';
import { CommentService, Comment } from '../../services/comment.service'; // Necesitas implementar este servicio
import { LikeDislikeService, VoteType } from '../../services/like-dislike.service'; // También este

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
  comentarios: Comment[] = [];
  nuevoComentario: string = '';

  constructor(
    private forumService: ForumService,
    private commentService: CommentService,
    private likeDislikeService: LikeDislikeService
  ) {}

  ngOnInit(): void {
    this.cargarTemas();
  }

  cargarTemas() {
    this.cargando = true;
    this.forumService.obtenerForos().subscribe({
      next: (data) => {
        this.temas = data;
        this.cargando = false;
      },
      error: () => {
        alert('Error al cargar los temas');
        this.cargando = false;
      }
    });
  }

  crearTema() {
    if (!this.nuevoTitulo.trim() || !this.nuevoContenido.trim()) {
      alert('El título y contenido son obligatorios');
      return;
    }

    const nuevoTema: Partial<ForumPost> = {
      titulo: this.nuevoTitulo,
      contenido: this.nuevoContenido
    };

    this.forumService.crearForo(nuevoTema).subscribe({
      next: (foroCreado) => {
        this.temas.unshift(foroCreado);
        this.nuevoTitulo = '';
        this.nuevoContenido = '';
      },
      error: () => {
        alert('Error al crear el tema');
      }
    });
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
    this.cargarComentarios(foro.id!);
  }

  cargarComentarios(foroId: number) {
    this.commentService.obtenerComentariosPorForo(foroId).subscribe({
      next: (data) => this.comentarios = data,
      error: () => alert('Error al cargar comentarios')
    });
  }

  agregarComentario() {
    if (!this.nuevoComentario.trim() || !this.foroSeleccionado) return;

    this.commentService.crearComentario(this.foroSeleccionado.id!, { contenido: this.nuevoComentario }).subscribe({
      next: (comentario) => {
        this.comentarios.push(comentario);
        this.nuevoComentario = '';
      },
      error: () => alert('Error al agregar comentario')
    });
  }

  votarForo(tipo: VoteType) {
    if (!this.foroSeleccionado) return;

    this.likeDislikeService.votarForo(this.foroSeleccionado.id!, tipo).subscribe({
      next: () => this.cargarTemas(),
      error: () => alert('Error al votar foro')
    });
  }

  votarComentario(comentarioId: number, tipo: VoteType) {
    this.likeDislikeService.votarComentario(comentarioId, tipo).subscribe({
      next: () => {
        if (this.foroSeleccionado)
          this.cargarComentarios(this.foroSeleccionado.id!);
      },
      error: () => alert('Error al votar comentario')
    });
  }
}
