import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

export interface ForumPost {
  id?: number;
  titulo: string;
  contenido: string;
  nombreUsuario?: string;
  fechaCreacion?: string;
  totalComentarios?: number;
  totalLikes?: number;
  totalDislikes?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseUrl = baseUrl;

  constructor(private http: HttpClient) {}

  obtenerForos() {
    return this.http.get<ForumPost[]>(`${this.baseUrl}/foros/publicos`);
  }

  obtenerForosPorId(id: number) {
    return this.http.get<ForumPost>(`${this.baseUrl}/foros/${id}`);
  }

  crearForo(foro: Partial<ForumPost>) {
    return this.http.post<ForumPost>(`${this.baseUrl}/foros/`, foro);
  }
}
