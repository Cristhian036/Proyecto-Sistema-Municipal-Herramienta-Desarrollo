import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from './helper';

export interface Noticia {
  id?: number;
  titulo: string;
  descripcion: string;
  autor: string;
  imagen?: string;
  fecha?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  // Listar todas las noticias
  listarNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${baserUrl}/noticias/`);
  }

  // Obtener una noticia por ID
  obtenerNoticia(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${baserUrl}/noticias/${id}`);
  }

  // Crear una nueva noticia con imagen
  crearNoticia(formData: FormData): Observable<Noticia> {
    return this.http.post<Noticia>(`${baserUrl}/noticias/`, formData);
  }

  // Eliminar una noticia
  eliminarNoticia(id: number): Observable<any> {
    return this.http.delete(`${baserUrl}/noticias/${id}`);
  }

  // Actualizar una noticia existente
  actualizarNoticia(id: number, formData: FormData): Observable<Noticia> {
    return this.http.put<Noticia>(`${baserUrl}/noticias/${id}`, formData);
  }

  // Obtener URL de imagen
  obtenerUrlImagen(nombreImagen: string): string {
    return `${baserUrl}/noticias/imagen/${nombreImagen}`;
  }
}
