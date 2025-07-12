import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

export interface Comment {
  id?: number;
  contenido: string;
  usuario?: { nombre: string };
  fechaCreacion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = baseUrl;

  constructor(private http: HttpClient) {}

  obtenerComentariosPorForo(foroId: number) {
    return this.http.get<Comment[]>(`${this.baseUrl}/comentarios/foro/${foroId}/publicos`);
  }

  crearComentario(foroId: number, comment: Partial<Comment>) {
    return this.http.post<Comment>(`${this.baseUrl}/comentarios/foro/${foroId}`, comment);
  }
}
