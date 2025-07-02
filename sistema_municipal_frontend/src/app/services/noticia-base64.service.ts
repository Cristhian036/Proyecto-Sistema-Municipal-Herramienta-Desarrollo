import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

export interface NoticiaBase64 {
  id?: number;
  titulo: string;
  descripcion: string;
  autor: string;
  imagenBase64?: string; // Imagen en formato Base64
  imagenNombre?: string; // Nombre original del archivo
  fecha?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiaBase64Service {

  constructor(private http: HttpClient) { }

  // Listar todas las noticias
  listarNoticias(): Observable<NoticiaBase64[]> {
    return this.http.get<NoticiaBase64[]>(`${baseUrl}/noticias/`);
  }

  // Obtener una noticia por ID
  obtenerNoticia(id: number): Observable<NoticiaBase64> {
    return this.http.get<NoticiaBase64>(`${baseUrl}/noticias/${id}`);
  }

  // Crear noticia con imagen Base64
  crearNoticiaBase64(noticia: NoticiaBase64): Observable<NoticiaBase64> {
    return this.http.post<NoticiaBase64>(`${baseUrl}/noticias/base64`, noticia);
  }

  // Convertir archivo a Base64
  convertirArchivoABase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  // Eliminar una noticia
  eliminarNoticia(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/noticias/${id}`);
  }
}
