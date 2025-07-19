import { Component } from '@angular/core';

@Component({
  selector: 'app-tramites',
  template: `
    <div class="container-fluid">
      <div class="hero-section">
        <div class="container text-center">
          <h1 class="display-5 fw-bold mb-3">Guía de Trámites Municipales</h1>
          <p class="lead">Encuentra información sobre los trámites municipales más comunes y cómo realizarlos de manera eficiente.</p>
          
          <div class="row justify-content-center mt-4">
            <div class="col-md-6">
              <div class="input-group">
                <input type="text" class="form-control form-control-lg" placeholder="Buscar trámite...">
                <button class="btn btn-light btn-lg" type="button">
                  <i class="fas fa-search"></i>
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h2 class="text-center mb-5">Categorías de Trámites</h2>
        
        <div class="row">
          <!-- Licencias y Permisos -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-file-alt fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Licencias y Permisos</h5>
                <p class="card-text">Licencias de funcionamiento, edificación, eventos y anuncios publicitarios.</p>
                <a routerLink="/tramites/licencias-permisos" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tributos Municipales -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-dollar-sign fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Tributos Municipales</h5>
                <p class="card-text">Impuesto predial, arbitrios, alcabala y patrimonio vehicular.</p>
                <a routerLink="/tramites/tributos-municipales" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Registros Civiles -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-users fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Registros Civiles</h5>
                <p class="card-text">Partidas de nacimiento, matrimonio, defunción y otros registros.</p>
                <a routerLink="/tramites/registros-civiles" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Obras y Construcción -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-building fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Obras y Construcción</h5>
                <p class="card-text">Permisos de construcción, habilitaciones urbanas y certificados.</p>
                <a routerLink="/tramites/obras-construccion" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Comercio y Publicidad -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-store fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Comercio y Publicidad</h5>
                <p class="card-text">Autorizaciones para comercio ambulatorio, ferias y publicidad.</p>
                <a routerLink="/tramites/comercio-publicidad" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Transporte y Vialidad -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-truck fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Transporte y Vialidad</h5>
                <p class="card-text">Permisos de circulación, transporte público y señalización.</p>
                <a routerLink="/tramites/transporte-vialidad" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Servicios Públicos -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-lightbulb fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Servicios Públicos</h5>
                <p class="card-text">Servicios de agua, luz, limpieza y mantenimiento urbano.</p>
                <a routerLink="/tramites/servicios-publicos" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Otros Trámites -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 text-center tramite-card">
              <div class="card-body">
                <div class="tramite-icon mb-3">
                  <i class="fas fa-question-circle fa-3x text-primary"></i>
                </div>
                <h5 class="card-title">Otros Trámites</h5>
                <p class="card-text">Otros trámites y servicios municipales.</p>
                <a routerLink="/tramites/otros-tramites" class="btn btn-outline-primary">
                  Ver trámites <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección de ayuda -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="card bg-light">
              <div class="card-body text-center">
                <h4 class="mb-3">¿Necesitas ayuda con un trámite?</h4>
                <p class="mb-4">Nuestro equipo está disponible para asistirte en cualquier consulta relacionada con trámites municipales</p>
                <div class="row justify-content-center">
                  <div class="col-md-3">
                    <button class="btn btn-outline-primary w-100">
                      <i class="fas fa-phone me-2"></i>
                      Contactar Mesa de Partes
                    </button>
                  </div>
                  <div class="col-md-3">
                    <button class="btn btn-primary w-100">
                      <i class="fas fa-phone-alt me-2"></i>
                      Llamar al (054) 38-2000
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tramite-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: none;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .tramite-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    .tramite-icon {
      transition: transform 0.3s ease;
    }

    .tramite-card:hover .tramite-icon {
      transform: scale(1.1);
    }
  `]
})
export class TramitesComponent { }
