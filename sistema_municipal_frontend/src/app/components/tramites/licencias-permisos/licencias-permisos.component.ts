import { Component } from '@angular/core';

@Component({
  selector: 'app-licencias-permisos',
  template: `
    <div class="container">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a routerLink="/">Inicio</a></li>
          <li class="breadcrumb-item"><a routerLink="/tramites">Trámites</a></li>
          <li class="breadcrumb-item active">Licencias y Permisos</li>
        </ol>
      </nav>

      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0">
            <i class="fas fa-file-alt me-2"></i>
            Licencias y Permisos
          </h3>
        </div>
        <div class="card-body">
          <p class="lead">Información sobre licencias de funcionamiento, edificación, eventos y anuncios publicitarios.</p>

          <h5 class="text-primary mt-4 mb-3">Licencia de Funcionamiento</h5>
          <p><strong>Descripción:</strong> Autorización municipal para el desarrollo de actividades económicas en establecimientos.</p>
          <p><strong>Requisitos:</strong></p>
          <ul>
            <li>Solicitud de licencia de funcionamiento</li>
            <li>Vigencia de poder del representante legal</li>
            <li>Declaración jurada de observancia de condiciones de seguridad</li>
            <li>Copia simple del RUC y DNI del representante legal</li>
          </ul>
          <p><strong>Plazo:</strong> 15 días hábiles</p>
          <p><strong>Costo:</strong> Según UIT vigente</p>

          <h5 class="text-primary mt-4 mb-3">Licencia de Edificación</h5>
          <p><strong>Descripción:</strong> Autorización para ejecutar obras de construcción, ampliación, remodelación o demolición.</p>
          <p><strong>Requisitos:</strong></p>
          <ul>
            <li>Formulario único de edificación (FUE)</li>
            <li>Planos de arquitectura, estructuras, instalaciones eléctricas y sanitarias</li>
            <li>Memoria descriptiva</li>
            <li>Estudio de mecánica de suelos</li>
            <li>Certificado de parámetros urbanísticos</li>
          </ul>
          <p><strong>Plazo:</strong> 30 días hábiles</p>
          <p><strong>Costo:</strong> Variable según área de construcción</p>

          <h5 class="text-primary mt-4 mb-3">Permiso para Eventos</h5>
          <p><strong>Descripción:</strong> Autorización para realizar eventos públicos o privados en espacios públicos.</p>
          <p><strong>Requisitos:</strong></p>
          <ul>
            <li>Solicitud dirigida al alcalde</li>
            <li>Plan de seguridad del evento</li>
            <li>Póliza de seguro de responsabilidad civil</li>
            <li>Cronograma de actividades</li>
            <li>Plano de ubicación del evento</li>
          </ul>
          <p><strong>Plazo:</strong> 10 días hábiles</p>
          <p><strong>Costo:</strong> Según tipo y magnitud del evento</p>

          <h5 class="text-primary mt-4 mb-3">Autorización de Anuncios Publicitarios</h5>
          <p><strong>Descripción:</strong> Permiso para instalar anuncios publicitarios en la vía pública.</p>
          <p><strong>Requisitos:</strong></p>
          <ul>
            <li>Solicitud con datos del anunciante</li>
            <li>Planos de ubicación y diseño del anuncio</li>
            <li>Memoria descriptiva del anuncio</li>
            <li>Autorización del propietario del inmueble</li>
            <li>Certificado de seguridad estructural</li>
          </ul>
          <p><strong>Plazo:</strong> 15 días hábiles</p>
          <p><strong>Costo:</strong> Según dimensiones y ubicación</p>

          <div class="alert alert-info mt-4">
            <h6 class="fw-bold">
              <i class="fas fa-info-circle me-2"></i>
              Información Importante
            </h6>
            <p class="mb-0">Todos los trámites deben ser presentados en Mesa de Partes de la Municipalidad. Los plazos inician desde la presentación de la documentación completa.</p>
          </div>

          <div class="text-center mt-4">
            <a routerLink="/tramites" class="btn btn-secondary me-2">
              <i class="fas fa-arrow-left me-2"></i>
              Volver a Trámites
            </a>
            <button class="btn btn-primary">
              <i class="fas fa-download me-2"></i>
              Descargar Formularios
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LicenciasPermisosComponent { }
