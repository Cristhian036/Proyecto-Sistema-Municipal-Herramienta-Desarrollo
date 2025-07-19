import { Component } from '@angular/core';

@Component({
  selector: 'app-transporte-vialidad',
  template: `
    <div class="container">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a routerLink="/">Inicio</a></li>
          <li class="breadcrumb-item"><a routerLink="/tramites">Trámites</a></li>
          <li class="breadcrumb-item active">Transporte y Vialidad</li>
        </ol>
      </nav>

      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0">
            <i class="fas fa-truck me-2"></i>
            Transporte y Vialidad
          </h3>
        </div>
        <div class="card-body">
          <p class="lead">Permisos de circulación, transporte público y señalización.</p>
          
          <div class="alert alert-info">
            <h6 class="fw-bold">
              <i class="fas fa-info-circle me-2"></i>
              Información
            </h6>
            <p class="mb-0">Esta sección está en desarrollo. Pronto estará disponible con información detallada sobre trámites de transporte y vialidad.</p>
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
export class TransporteVialidadComponent { }
