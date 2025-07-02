import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

export interface ForumPost {
  id?: number;
  titulo: string;
  contenido: string;
  usuario?: { nombre: string };
  fechaCreacion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseUrl = baseUrl;

  constructor(private http: HttpClient) {}

  obtenerForos() {
    return this.http.get<ForumPost[]>(`${this.baseUrl}/foros/`);
  }

  crearForo(foro: Partial<ForumPost>) {
    return this.http.post<ForumPost>(`${this.baseUrl}/foros/`, foro);
  }
}
