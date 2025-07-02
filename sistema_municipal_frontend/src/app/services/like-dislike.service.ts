import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

export type VoteType = 'LIKE' | 'DISLIKE';

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService {
  private baseUrl = baseUrl;

  constructor(private http: HttpClient) {}

  votarForo(foroId: number, tipo: VoteType) {
    return this.http.post(`${this.baseUrl}/votos/foro/${foroId}?tipoVoto=${tipo}`, {});
  }

  votarComentario(comentarioId: number, tipo: VoteType) {
    return this.http.post(`${this.baseUrl}/votos/comentario/${comentarioId}?tipoVoto=${tipo}`, {});
  }
}
