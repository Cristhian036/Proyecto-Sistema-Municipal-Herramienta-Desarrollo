import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multa } from '../models/multa.model';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  private apiUrl = 'http://localhost:8080/multas';

  constructor(private http: HttpClient) { }

  // Métodos para Multas

  // Buscar multa por código (Público)
  buscarPorCodigo(codigo: string): Observable<Multa> {
    return this.http.get<Multa>(`${this.apiUrl}/codigo/${codigo}`);
  }

  // Buscar multas por DNI (Público)
  buscarPorDni(dni: string, page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', 'fechaInfraccion')
      .set('sortDir', 'desc');
    
    return this.http.get<any>(`${this.apiUrl}/dni/${dni}`, { params });
  }

  // Buscar multas pendientes por DNI (Público)
  buscarMultasPendientes(dni: string): Observable<Multa[]> {
    return this.http.get<Multa[]>(`${this.apiUrl}/pendientes/${dni}`);
  }

  // Pagar multa (Público)
  pagarMulta(codigo: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pagar/${codigo}`, {});
  }

  // Obtener tipos de infracción (Público)
  obtenerTiposInfraccion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tipos-infraccion`);
  }

  // Obtener estados de multa (Público)
  obtenerEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/estados`);
  }

  // === MÉTODOS ADMINISTRATIVOS (Requieren autenticación) ===

  // Obtener todas las multas (Admin)
  obtenerTodas(page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', 'fechaInfraccion')
      .set('sortDir', 'desc');
    
    return this.http.get<any>(`${this.apiUrl}`, { params });
  }

  // Crear multa (Admin)
  crearMulta(multa: Multa): Observable<Multa> {
    return this.http.post<Multa>(`${this.apiUrl}`, multa);
  }

  // Obtener multa por ID (Admin)
  obtenerPorId(id: number): Observable<Multa> {
    return this.http.get<Multa>(`${this.apiUrl}/${id}`);
  }

  // Actualizar multa (Admin)
  actualizarMulta(id: number, multa: Multa): Observable<Multa> {
    return this.http.put<Multa>(`${this.apiUrl}/${id}`, multa);
  }

  // Eliminar multa (Admin)
  eliminarMulta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Cambiar estado de multa (Admin)
  cambiarEstado(id: number, estado: string): Observable<Multa> {
    const params = new HttpParams().set('estado', estado);
    return this.http.patch<Multa>(`${this.apiUrl}/${id}/estado`, {}, { params });
  }

  // Buscar por estado (Admin)
  buscarPorEstado(estado: string): Observable<Multa[]> {
    return this.http.get<Multa[]>(`${this.apiUrl}/estado/${estado}`);
  }

  // Buscar con filtros (Admin)
  buscarConFiltros(filtros: any, page: number = 0, size: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', 'fechaCreacion')
      .set('sortDir', 'desc');

    if (filtros.dni) {
      params = params.set('dni', filtros.dni);
    }
    if (filtros.estado) {
      params = params.set('estado', filtros.estado);
    }
    if (filtros.tipoInfraccion) {
      params = params.set('tipoInfraccion', filtros.tipoInfraccion);
    }
    if (filtros.fechaDesde) {
      params = params.set('fechaDesde', filtros.fechaDesde);
    }
    if (filtros.fechaHasta) {
      params = params.set('fechaHasta', filtros.fechaHasta);
    }

    return this.http.get<any>(`${this.apiUrl}/buscar`, { params });
  }

  // Obtener estadísticas (Admin)
  obtenerEstadisticas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estadisticas`);
  }

  // Marcar multas vencidas (Admin)
  marcarMultasVencidas(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/marcar-vencidas`, {});
  }

  // Generar código único (Admin)
  generarCodigo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/generar-codigo`);
  }
}
