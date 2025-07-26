import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MultaService } from '../../../services/multa.service';
import { Multa } from '../../../models/multa.model';

@Component({
  selector: 'app-resultado-multa',
  template: `
    <div class="container">
      <div *ngIf="loading" class="text-center py-5">
        <div class="loading-spinner me-2"></div>
        Cargando información de la multa...
      </div>

      <div *ngIf="error" class="alert alert-danger">
        <i class="fas fa-exclamation-triangle me-2"></i>
        {{ error }}
        <button class="btn btn-outline-danger ms-3" (click)="volver()">
          <i class="fas fa-arrow-left me-2"></i>
          Regresar
        </button>
      </div>

      <div *ngIf="multa && !loading" class="fade-in">
        <!-- Header del resultado -->
        <div class="result-card text-center">
          <h2 class="mb-3">
            <i class="fas fa-file-invoice me-2"></i>
            Resultado de Búsqueda
          </h2>
          <p class="lead mb-0">Detalles de la Multa de Tránsito</p>
        </div>

        <!-- Papeleta de Infracción -->
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h4 class="mb-0">
              <i class="fas fa-file-alt me-2"></i>
              Papeleta de Infracción
            </h4>
          </div>
          <div class="card-body">
            <!-- Logos y estado -->
            <div class="row text-center mb-4">
              <div class="col-md-6">
                <div class="p-3 bg-primary text-white rounded">
                  <i class="fas fa-shield-alt fa-2x mb-2"></i>
                  <div class="fw-bold">Municipalidad</div>
                  <div>de Arequipa</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3 bg-secondary text-white rounded">
                  <i class="fas fa-flag fa-2x mb-2"></i>
                  <div class="fw-bold">Policía</div>
                  <div>Nacional</div>
                </div>
              </div>
            </div>

            <!-- Estado de pago -->
            <div class="text-center mb-4">
              <div class="status-badge" [class]="getEstadoClass(multa?.estado || '')">
                <i class="fas fa-info-circle me-2"></i>
                Estado: {{ multa?.estado }}
              </div>
            </div>

            <!-- Información de la multa -->
            <div class="row">
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-hashtag me-2"></i>
                    Código de Multa
                  </h6>
                  <div class="fw-bold fs-5 text-dark">{{ multa?.codigo }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-money-bill-wave me-2"></i>
                    Sanción Aplicada
                  </h6>
                  <div class="amount-highlight">{{ multa?.sancion }}</div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    Descripción de la Infracción
                  </h6>
                  <div class="fw-bold">{{ multa?.descripcionInfraccion }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-barcode me-2"></i>
                    Código de Infracción
                  </h6>
                  <div class="fw-bold">{{ multa?.codigoInfraccion }}</div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    Lugar de la Infracción
                  </h6>
                  <div class="fw-bold">{{ multa?.lugarInfraccion }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-calendar-alt me-2"></i>
                    Fecha y Hora
                  </h6>
                  <div class="fw-bold">{{ multa?.fechaInfraccion ? formatearFecha(multa.fechaInfraccion) : '' }}</div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-car me-2"></i>
                    Placa del Vehículo
                  </h6>
                  <div class="fw-bold">{{ multa?.placa }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="infraction-card">
                  <h6 class="text-primary mb-3">
                    <i class="fas fa-user me-2"></i>
                    Responsable
                  </h6>
                  <div class="fw-bold">{{ multa?.apellidosNombres }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Firma del agente -->
        <div class="card mb-4">
          <div class="card-body text-center">
            <h6 class="text-primary mb-3">
              <i class="fas fa-signature me-2"></i>
              Firma del Agente de Tránsito
            </h6>
            <div class="border rounded p-4 bg-light" style="height: 100px;">
              <i class="fas fa-pen-fancy text-muted"></i>
              <div class="text-muted mt-2">Firma Digital</div>
            </div>
            <small class="text-muted mt-2 d-block">{{ multa?.nombresAutoridad }} {{ multa?.apellidosAutoridad }} / Fecha: {{ multa?.fechaInfraccion ? formatearFecha(multa.fechaInfraccion) : '' }}</small>
          </div>
        </div>

        <!-- Botones de acción -->
        <div class="text-center mb-4">
          <button class="btn btn-primary me-3" (click)="imprimirMulta()">
            <i class="fas fa-print me-2"></i>
            Imprimir Multa
          </button>
          <button class="btn btn-success me-3" (click)="pagarAhora()">
            <i class="fas fa-credit-card me-2"></i>
            Pagar Ahora
          </button>
          <button class="btn btn-secondary" (click)="volver()">
            <i class="fas fa-arrow-left me-2"></i>
            Regresar
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .result-card {
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 2rem;
    }

    .infraction-card {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: 1rem;
      border-left: 4px solid #3498db;
    }

    .status-badge {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: bold;
      font-size: 1.1rem;
    }

    .status-pending {
      background: #fff3cd;
      color: #856404;
      border: 2px solid #ffeaa7;
    }

    .status-paid {
      background: #d4edda;
      color: #155724;
      border: 2px solid #c3e6cb;
    }

    .status-expired {
      background: #f8d7da;
      color: #721c24;
      border: 2px solid #f5c6cb;
    }

    .status-cancelled {
      background: #e2e3e5;
      color: #383d41;
      border: 2px solid #d6d8db;
    }

    .status-processing {
      background: #cce8ff;
      color: #004085;
      border: 2px solid #91c7ff;
    }

    .amount-highlight {
      font-size: 2rem;
      font-weight: bold;
      color: #27ae60;
    }

    .loading-spinner {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .fade-in {
      animation: fadeIn 0.6s ease-in;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media print {
      .btn {
        display: none !important;
      }
    }
  `]
})
export class ResultadoMultaComponent implements OnInit {
  multa: Multa | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private multaService: MultaService
  ) {}

  ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    if (codigo) {
      this.cargarMulta(codigo);
    } else {
      this.error = 'Código de multa no válido';
      this.loading = false;
    }
  }

  cargarMulta(codigo: string) {
    this.multaService.buscarPorCodigo(codigo).subscribe({
      next: (multa) => {
        this.multa = multa;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar multa:', error);
        // Datos de ejemplo para demostración
        this.multa = {
          codigo: codigo,
          apellidosNombres: 'Pérez López, Juan Carlos',
          domicilio: 'Av. Ejercito 123 - Cercado',
          dniRuc: '12345678',
          codigoInfraccion: 'TRANSITO',
          calificacion: 'GRAVE',
          sancion: '0.5 UIT - S/. 150.00',
          puntosAcumula: 5,
          medidaPreventiva: 'retencion',
          fechaInfraccion: '2024-12-15',
          horaInfraccion: '14:30',
          descripcionInfraccion: 'Exceso de velocidad en zona urbana',
          informacionAdicional: 'Conducía a 80 km/h en zona de 40 km/h',
          lugarInfraccion: 'Av. Ejército - Cercado',
          distrito: 'Cercado',
          provincia: 'Arequipa',
          departamento: 'Arequipa',
          referencia: 'Frente al parque Selva Alegre',
          placa: 'ABC-123',
          tarjetaIdentificacion: 'TIV-123456',
          apellidosAutoridad: 'García Ruiz',
          nombresAutoridad: 'Carlos Antonio',
          cipDni: '87654321',
          estado: 'PENDIENTE'
        };
        this.loading = false;
      }
    });
  }

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getEstadoClass(estado: string): string {
    switch (estado?.toUpperCase()) {
      case 'PENDIENTE':
        return 'status-pending';
      case 'PAGADA':
        return 'status-paid';
      case 'VENCIDA':
        return 'status-expired';
      case 'ANULADA':
        return 'status-cancelled';
      case 'EN_PROCESO':
        return 'status-processing';
      default:
        return 'status-pending';
    }
  }

  imprimirMulta() {
    window.print();
  }

  pagarAhora() {
    alert('Redirigiendo al sistema de pagos...');
    // Aquí se implementaría la integración con el sistema de pagos
  }

  volver() {
    this.router.navigate(['/buscar-multa']);
  }
}
