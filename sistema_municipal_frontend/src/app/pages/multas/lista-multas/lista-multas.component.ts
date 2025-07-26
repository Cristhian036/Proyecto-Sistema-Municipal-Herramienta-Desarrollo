import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultaService } from '../../../services/multa.service';
import { Multa } from '../../../models/multa.model';

@Component({
  selector: 'app-lista-multas',
  template: `
    <div class="container-fluid">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">
            <i class="fas fa-list me-2"></i>
            Lista de Multas de Tránsito
          </h4>
        </div>
        <div class="card-body">
          <!-- Mensaje de error/información -->
          <div *ngIf="errorMessage" class="alert alert-warning alert-dismissible fade show mb-4" role="alert">
            <i class="fas fa-exclamation-triangle me-2"></i>
            <strong>Información:</strong> {{ errorMessage }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <!-- Sección de búsqueda -->
          <div class="row mb-4">
            <div class="col-md-8">
              <h5>Buscar Multas</h5>
              <div class="row">
                <div class="col-md-6">
                  <label class="form-label">Buscar por código o placa:</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    [(ngModel)]="filtroTexto"
                    placeholder="Ingrese código o placa..."
                    (input)="filtrarMultas()">
                </div>
                <div class="col-md-3">
                  <label class="form-label">&nbsp;</label>
                  <button class="btn btn-primary d-block" (click)="filtrarMultas()">
                    <i class="fas fa-search me-2"></i>
                    Buscar
                  </button>
                </div>
                <div class="col-md-3">
                  <label class="form-label">&nbsp;</label>
                  <button class="btn btn-secondary d-block" (click)="limpiarFiltros()">
                    <i class="fas fa-times me-2"></i>
                    Limpiar
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-end">
              <button class="btn btn-success" (click)="irFormulario()">
                <i class="fas fa-plus me-2"></i>
                Agregar Nueva Multa
              </button>
            </div>
          </div>

          <!-- Tabla de multas -->
          <div class="table-responsive">
            <h5>Registro de Multas</h5>
            <table class="table table-striped table-hover">
              <thead class="table-dark">
                <tr>
                  <th>Código</th>
                  <th>Responsable</th>
                  <th>DNI/RUC</th>
                  <th>Descripción</th>
                  <th>Código Infracción</th>
                  <th>Calificación</th>
                  <th>Lugar</th>
                  <th>Fecha</th>
                  <th>Placa</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="loading">
                  <td colspan="11" class="text-center py-4">
                    <div class="loading-spinner me-2"></div>
                    Cargando multas...
                  </td>
                </tr>
                <tr *ngIf="!loading && multasFiltradas.length === 0">
                  <td colspan="11" class="text-center py-4 text-muted">
                    <i class="fas fa-inbox fa-2x mb-2 d-block"></i>
                    No se encontraron multas
                  </td>
                </tr>
                <tr *ngFor="let multa of multasPaginadas" class="fade-in">
                  <td class="fw-bold text-primary">{{ multa.codigo }}</td>
                  <td>{{ multa.apellidosNombres }}</td>
                  <td>{{ multa.dniRuc }}</td>
                  <td>{{ multa.descripcionInfraccion }}</td>
                  <td>{{ multa.codigoInfraccion }}</td>
                  <td>
                    <span class="badge" [class]="getCalificacionClass(multa.calificacion)">
                      {{ multa.calificacion }}
                    </span>
                  </td>
                  <td>{{ multa.lugarInfraccion }}</td>
                  <td>{{ formatearFecha(multa.fechaInfraccion) }}</td>
                  <td class="fw-bold">{{ multa.placa || 'N/A' }}</td>
                  <td>
                    <span class="badge" [class]="getEstadoClass(multa.estado)">
                      {{ multa.estado }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm">
                      <button class="btn btn-info btn-sm" (click)="verMulta(multa.codigo)">
                        <i class="fas fa-eye"></i>
                        Ver
                      </button>
                      <button class="btn btn-danger btn-sm" (click)="eliminarMulta(multa)">
                        <i class="fas fa-trash"></i>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Paginación -->
          <nav *ngIf="multasFiltradas.length > itemsPorPagina">
            <ul class="pagination justify-content-center">
              <li class="page-item" [class.disabled]="paginaActual === 1">
                <button class="page-link" (click)="cambiarPagina(paginaActual - 1)">Anterior</button>
              </li>
              <li class="page-item" 
                  *ngFor="let pagina of getPaginas()" 
                  [class.active]="pagina === paginaActual">
                <button class="page-link" (click)="cambiarPagina(pagina)">{{ pagina }}</button>
              </li>
              <li class="page-item" [class.disabled]="paginaActual === totalPaginas">
                <button class="page-link" (click)="cambiarPagina(paginaActual + 1)">Siguiente</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .loading-spinner {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border: 2px solid #f3f3f3;
      border-top: 2px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .fade-in {
      animation: fadeIn 0.3s ease-in;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .table th {
      font-weight: 600;
      font-size: 0.9rem;
    }

    .btn-group-sm .btn {
      margin-right: 2px;
    }

    .badge {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    }

    .table td {
      vertical-align: middle;
    }
  `]
})
export class ListaMultasComponent implements OnInit {
  multas: Multa[] = [];
  multasFiltradas: Multa[] = [];
  multasPaginadas: Multa[] = [];
  filtroTexto: string = '';
  loading: boolean = true;
  errorMessage: string = '';
  
  // Paginación
  paginaActual: number = 1;
  itemsPorPagina: number = 10;
  totalPaginas: number = 0;

  constructor(
    private multaService: MultaService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('🚀 Inicializando Lista de Multas...');
    this.cargarMultas();
  }

  cargarMultas() {
    this.loading = true;
    this.errorMessage = '';
    
    this.multaService.obtenerTodas(this.paginaActual - 1, this.itemsPorPagina).subscribe({
      next: (response) => {
        console.log('✅ Multas cargadas exitosamente:', response);
        this.multas = response.content || [];
        this.multasFiltradas = [...this.multas];
        this.totalPaginas = response.totalPages || 0;
        
        // Mostrar mensaje si no hay multas
        if (response.totalElements === 0) {
          this.errorMessage = 'No hay multas registradas en el sistema. Use el botón "Agregar Nueva Multa" para crear la primera multa.';
        }
        
        this.actualizarPaginacion();
        this.loading = false;
      },
      error: (error) => {
        console.error('❌ Error al cargar multas:', error);
        console.error('❌ Status:', error.status);
        console.error('❌ Message:', error.message);
        this.loading = false;
        
        // Verificar el tipo de error
        if (error.status === 401 || error.status === 403) {
          this.errorMessage = 'Error de autenticación. Por favor inicie sesión para ver las multas.';
          console.warn('⚠️ Error de autenticación/autorización.');
        } else if (error.status === 0) {
          this.errorMessage = 'No se puede conectar al servidor backend. Verifique que esté ejecutándose.';
          console.warn('⚠️ No se puede conectar al servidor backend.');
        } else if (error.status === 500) {
          this.errorMessage = 'Error interno del servidor. Contacte con el administrador del sistema.';
          console.warn('⚠️ Error 500 del servidor backend.');
          console.error('⚠️ Detalles del error:', error.error);
        } else {
          this.errorMessage = `Error del servidor: ${error.status} - ${error.message}`;
        }
        
        // Limpiar datos en caso de error
        this.multas = [];
        this.multasFiltradas = [];
        this.actualizarPaginacion();
      }
    });
  }

  getPaginas(): number[] {
    const paginas = [];
    for (let i = 1; i <= this.totalPaginas; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  filtrarMultas() {
    if (!this.filtroTexto.trim()) {
      this.multasFiltradas = [...this.multas];
    } else {
      const filtro = this.filtroTexto.toLowerCase().trim();
      this.multasFiltradas = this.multas.filter(multa =>
        multa.codigo.toLowerCase().includes(filtro) ||
        (multa.placa?.toLowerCase().includes(filtro) || false) ||
        multa.apellidosNombres.toLowerCase().includes(filtro) ||
        multa.dniRuc.toLowerCase().includes(filtro) ||
        multa.descripcionInfraccion.toLowerCase().includes(filtro)
      );
    }
    this.paginaActual = 1;
    this.actualizarPaginacion();
  }

  getCalificacionClass(calificacion: string): string {
    switch (calificacion?.toUpperCase()) {
      case 'LEVE':
        return 'bg-success';
      case 'GRAVE':
        return 'bg-warning text-dark';
      case 'MUY_GRAVE':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  getEstadoClass(estado: string): string {
    switch (estado?.toUpperCase()) {
      case 'PENDIENTE':
        return 'bg-warning text-dark';
      case 'PAGADA':
        return 'bg-success';
      case 'VENCIDA':
        return 'bg-danger';
      case 'ANULADA':
        return 'bg-secondary';
      case 'EN_PROCESO':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  }

  limpiarFiltros() {
    this.filtroTexto = '';
    this.multasFiltradas = [...this.multas];
    this.paginaActual = 1;
    this.actualizarPaginacion();
  }

  eliminarMulta(multa: Multa) {
    if (confirm(`¿Está seguro de eliminar la multa ${multa.codigo}?`)) {
        // Nota: Esta funcionalidad requiere implementación en el backend
        // Por ahora mostrar mensaje de no implementado
        alert('Funcionalidad de eliminación no implementada aún');
        console.log('Eliminación solicitada para multa:', multa.codigo);
    }
  }

  verMulta(codigo: string) {
    this.router.navigate(['/resultado-multa', codigo]);
  }

  irFormulario() {
    this.router.navigate(['/formulario-multa']);
  }

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleString('es-PE');
  }

  // Métodos de paginación
  actualizarPaginacion() {
    this.totalPaginas = Math.ceil(this.multasFiltradas.length / this.itemsPorPagina);
    this.actualizarMultasPaginadas();
  }

  actualizarMultasPaginadas() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.multasPaginadas = this.multasFiltradas.slice(inicio, fin);
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.actualizarMultasPaginadas();
    }
  }
}
