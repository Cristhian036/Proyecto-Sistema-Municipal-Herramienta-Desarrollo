import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MultaService } from '../../../services/multa.service';

@Component({
  selector: 'app-buscar-multa',
  template: `
    <div class="hero-section">
      <div class="container text-center">
        <h1 class="display-5 fw-bold mb-3">Consulta de Multas de Tránsito</h1>
        <p class="lead">Municipalidad de Arequipa - Sistema de Consultas</p>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="search-card fade-in">
            <h3 class="text-center text-primary mb-4">Buscar Multa por Código</h3>
            <p class="text-center text-muted mb-4">
              Ingrese el código de la multa para consultar su estado y detalles
            </p>

            <form (ngSubmit)="buscarMulta()" #multaForm="ngForm">
              <div class="row align-items-end">
                <div class="col-md-2">
                  <label class="form-label fw-bold">Código de Multa:</label>
                  <div class="input-group">
                    <span class="input-group-text bg-primary text-white">#</span>
                  </div>
                </div>
                <div class="col-md-7">
                  <input 
                    type="text" 
                    class="form-control form-control-lg" 
                    [(ngModel)]="codigoMulta"
                    name="codigoMulta"
                    placeholder="Ej: MTA-2024-001234"
                    required
                    #codigo="ngModel">
                </div>
                <div class="col-md-3">
                  <button 
                    type="submit" 
                    class="btn btn-search btn-lg w-100 text-white"
                    [disabled]="!multaForm.form.valid || loading">
                    <span *ngIf="loading" class="loading-spinner me-2"></span>
                    <i *ngIf="!loading" class="fas fa-search me-2"></i>
                    {{ loading ? 'Buscando...' : 'Buscar Multa' }}
                  </button>
                </div>
              </div>
            </form>

            <div class="info-alert alert mt-4" *ngIf="!loading">
              <h6 class="fw-bold mb-2">
                <i class="fas fa-info-circle me-2"></i>
                Consejo de búsqueda
              </h6>
              <ul class="mb-0 small">
                <li>El código de multa se encuentra en la papeleta de infracción</li>
                <li>Formato típico: MTA-YYYY-XXXXXX (donde Y=año, X=número)</li>
                <li>Verifique que no haya espacios al inicio o final del código</li>
                <li>Si no encuentra su multa, contacte con la oficina de tránsito</li>
              </ul>
            </div>

            <div class="alert alert-danger mt-3" *ngIf="error">
              <i class="fas fa-exclamation-triangle me-2"></i>
              {{ error }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      padding: 4rem 0 2rem;
      margin-bottom: 2rem;
    }

    .search-card {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
      border: 1px solid #e9ecef;
    }

    .btn-search {
      background: linear-gradient(45deg, #3498db, #2980b9);
      border: none;
      transition: all 0.3s ease;
    }

    .btn-search:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
    }

    .info-alert {
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 10px;
      color: #6c757d;
    }

    .loading-spinner {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
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
  `]
})
export class BuscarMultaComponent {
  codigoMulta: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(
    private multaService: MultaService,
    private router: Router
  ) {}

  buscarMulta() {
    if (!this.codigoMulta.trim()) {
      this.error = 'Por favor ingrese un código de multa válido';
      return;
    }

    this.loading = true;
    this.error = '';

    this.multaService.buscarPorCodigo(this.codigoMulta.trim()).subscribe({
      next: (multa) => {
        this.loading = false;
        this.router.navigate(['/resultado-multa', this.codigoMulta.trim()]);
      },
      error: (error) => {
        this.loading = false;
        this.error = 'No se encontró ninguna multa con el código ingresado. Verifique el código e intente nuevamente.';
        console.error('Error al buscar multa:', error);
      }
    });
  }
}
