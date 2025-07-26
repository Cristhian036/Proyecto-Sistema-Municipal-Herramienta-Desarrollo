import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-publicos',
  template: `
    <div class="container">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a routerLink="/">Inicio</a></li>
          <li class="breadcrumb-item"><a routerLink="/tramites">Trámites</a></li>
          <li class="breadcrumb-item active">Servicios Públicos</li>
        </ol>
      </nav>

      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0">
            <i class="fas fa-lightbulb me-2"></i>
            Servicios Públicos
          </h3>
        </div>
        <div class="card-body">
          <p class="lead">Servicios de agua, luz, limpieza y mantenimiento urbano.</p>
          
          <div class="alert alert-info">
            <h6 class="fw-bold">
              <i class="fas fa-info-circle me-2"></i>
              Información
            </h6>
            <p class="mb-0">Esta sección está en desarrollo. Pronto estará disponible con información detallada sobre servicios públicos municipales.</p>
          </div>

          <div class="text-center mt-4">
            <a routerLink="/tramites" class="btn btn-secondary me-2">
              <i class="fas fa-arrow-left me-2"></i>
              Volver a Trámites
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServiciosPublicosComponent { }
