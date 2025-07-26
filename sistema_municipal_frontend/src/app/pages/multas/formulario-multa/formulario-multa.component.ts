import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MultaService } from '../../../services/multa.service';
import { Multa } from '../../../models/multa.model';

@Component({
  selector: 'app-formulario-multa',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0">
            <i class="fas fa-file-plus me-2"></i>
            Gestión de Multas de Tránsito
          </h4>
          <small class="text-light">Municipalidad de Arequipa - Sistema de Infracciones</small>
        </div>
        <div class="card-body">
          <form (ngSubmit)="guardarMulta()" #multaForm="ngForm">
            <!-- Progreso del formulario -->
            <div class="row mb-4">
              <div class="col-12">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="step" [class.active]="paso >= 1" [class.completed]="paso > 1">
                    <div class="step-number">1</div>
                    <div class="step-label">Datos del Presunto Responsable</div>
                  </div>
                  <div class="step" [class.active]="paso >= 2" [class.completed]="paso > 2">
                    <div class="step-number">2</div>
                    <div class="step-label">Conducta Infractora</div>
                  </div>
                  <div class="step" [class.active]="paso >= 3" [class.completed]="paso > 3">
                    <div class="step-number">3</div>
                    <div class="step-label">Información de la Infracción</div>
                  </div>
                  <div class="step" [class.active]="paso >= 4" [class.completed]="paso > 4">
                    <div class="step-number">4</div>
                    <div class="step-label">Datos del Vehículo</div>
                  </div>
                  <div class="step" [class.active]="paso >= 5">
                    <div class="step-number">5</div>
                    <div class="step-label">Datos de la Autoridad</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Paso 1: Datos del Presunto Responsable -->
            <div *ngIf="paso === 1" class="fade-in">
              <h5 class="text-primary mb-4">
                <i class="fas fa-user me-2"></i>
                Datos del Presunto Responsable
              </h5>
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Apellidos y Nombres/Razón Social *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.apellidosNombres" name="apellidosNombres" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">DNI/RUC *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.dniRuc" name="dniRuc" required maxlength="11">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Domicilio *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.domicilio" name="domicilio" required>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Distrito *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.distrito" name="distrito" required>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Provincia *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.provincia" name="provincia" required>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Departamento *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.departamento" name="departamento" required>
                  </div>
                </div>
              </div>
            </div>

            <!-- Paso 2: Conducta Infractora Detectada -->
            <div *ngIf="paso === 2" class="fade-in">
              <h5 class="text-primary mb-4">
                <i class="fas fa-exclamation-triangle me-2"></i>
                Conducta Infractora Detectada
              </h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Código de Infracción *</label>
                    <select class="form-select" [(ngModel)]="multa.codigoInfraccion" name="codigoInfraccion" required>
                      <option value="">Seleccionar tipo...</option>
                      <option value="TRANSITO">Tránsito</option>
                      <option value="COMERCIO">Comercio</option>
                      <option value="CONSTRUCCION">Construcción</option>
                      <option value="MEDIO_AMBIENTE">Medio Ambiente</option>
                      <option value="TRIBUTARIA">Tributaria</option>
                      <option value="SERENAZGO">Serenazgo</option>
                      <option value="LICENCIAS">Licencias</option>
                      <option value="RUIDOS">Ruidos</option>
                      <option value="LIMPIEZA">Limpieza</option>
                      <option value="OTROS">Otros</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Calificación *</label>
                    <select class="form-select" [(ngModel)]="multa.calificacion" name="calificacion" required>
                      <option value="">Seleccionar...</option>
                      <option value="LEVE">Leve</option>
                      <option value="GRAVE">Grave</option>
                      <option value="MUY_GRAVE">Muy Grave</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Sanción que correspondería *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.sancion" name="sancion" placeholder="Ej: 0.5 UIT - 150.00 S/" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Puntos que acumula *</label>
                    <input type="number" class="form-control" [(ngModel)]="multa.puntosAcumula" name="puntosAcumula" min="0" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Medida Preventiva *</label>
                    <select class="form-select" [(ngModel)]="multa.medidaPreventiva" name="medidaPreventiva" required>
                      <option value="">Seleccionar...</option>
                      <option value="ninguna">Ninguna</option>
                      <option value="retencion">Retención de Licencia</option>
                      <option value="internamiento">Internamiento de Vehículo</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Paso 3: Información de la Infracción -->
            <div *ngIf="paso === 3" class="fade-in">
              <h5 class="text-primary mb-4">
                <i class="fas fa-info-circle me-2"></i>
                Información de la Infracción
              </h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Código de Multa *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.codigo" name="codigo" required placeholder="Ej: MTA-2025-001234">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Estado de la Multa *</label>
                    <select class="form-select" [(ngModel)]="multa.estado" name="estado" required>
                      <option value="PENDIENTE">Pendiente</option>
                      <option value="PAGADA">Pagada</option>
                      <option value="VENCIDA">Vencida</option>
                      <option value="ANULADA">Anulada</option>
                      <option value="EN_PROCESO">En Proceso</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Fecha de Infracción *</label>
                    <input type="date" class="form-control" [(ngModel)]="multa.fechaInfraccion" name="fechaInfraccion" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Hora de Infracción *</label>
                    <input type="time" class="form-control" [(ngModel)]="multa.horaInfraccion" name="horaInfraccion" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Lugar de la Infracción *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.lugarInfraccion" name="lugarInfraccion" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Referencia</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.referencia" name="referencia">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Descripción de la Infracción *</label>
                    <textarea class="form-control" rows="3" [(ngModel)]="multa.descripcionInfraccion" name="descripcionInfraccion" required></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Información Adicional</label>
                    <textarea class="form-control" rows="3" [(ngModel)]="multa.informacionAdicional" name="informacionAdicional"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- Paso 4: Datos del Vehículo -->
            <div *ngIf="paso === 4" class="fade-in">
              <h5 class="text-primary mb-4">
                <i class="fas fa-car me-2"></i>
                Datos del Vehículo
              </h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">N° Placa Única Nacional de Rodaje *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.placa" name="placa" style="text-transform: uppercase;" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">N° de Tarjeta de Identificación Vehicular *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.tarjetaIdentificacion" name="tarjetaIdentificacion" required>
                  </div>
                </div>
              </div>
            </div>

            <!-- Paso 5: Datos de la Autoridad -->
            <div *ngIf="paso === 5" class="fade-in">
              <h5 class="text-primary mb-4">
                <i class="fas fa-user-shield me-2"></i>
                Datos de la Autoridad
              </h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Apellidos *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.apellidosAutoridad" name="apellidosAutoridad" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Nombres *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.nombresAutoridad" name="nombresAutoridad" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">CIP/DNI *</label>
                    <input type="text" class="form-control" [(ngModel)]="multa.cipDni" name="cipDni" required>
                  </div>
                </div>
              </div>
            </div>

            <!-- Botones de navegación -->
            <div class="d-flex justify-content-between mt-4">
              <button type="button" class="btn btn-secondary" (click)="pasoAnterior()" [disabled]="paso === 1">
                <i class="fas fa-arrow-left me-2"></i>
                Anterior
              </button>
              
              <div>
                <button type="button" class="btn btn-primary me-2" (click)="siguientePaso()" *ngIf="paso < 5">
                  Siguiente
                  <i class="fas fa-arrow-right ms-2"></i>
                </button>
                <button type="submit" class="btn btn-success" *ngIf="paso === 5" [disabled]="guardando">
                  <span *ngIf="guardando" class="spinner-border spinner-border-sm me-2"></span>
                  <i *ngIf="!guardando" class="fas fa-save me-2"></i>
                  {{ guardando ? 'Guardando...' : 'Guardar Multa' }}
                </button>
              </div>
            </div>

            <!-- Mensajes de error -->
            <div *ngIf="error" class="alert alert-danger mt-3">
              <i class="fas fa-exclamation-triangle me-2"></i>
              {{ error }}
            </div>

            <!-- Mensaje de éxito -->
            <div *ngIf="exito" class="alert alert-success mt-3">
              <i class="fas fa-check-circle me-2"></i>
              {{ exito }}
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      flex: 1;
    }

    .step-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #e9ecef;
      color: #6c757d;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-bottom: 8px;
      transition: all 0.3s ease;
    }

    .step.active .step-number {
      background-color: #3498db;
      color: white;
    }

    .step.completed .step-number {
      background-color: #27ae60;
      color: white;
    }

    .step-label {
      font-size: 0.9rem;
      text-align: center;
      color: #6c757d;
      font-weight: 500;
    }

    .step.active .step-label {
      color: #3498db;
      font-weight: 600;
    }

    .step.completed .step-label {
      color: #27ae60;
      font-weight: 600;
    }

    .step:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 20px;
      left: calc(50% + 20px);
      width: calc(100% - 40px);
      height: 2px;
      background-color: #e9ecef;
      z-index: -1;
    }

    .step.completed:not(:last-child)::after {
      background-color: #27ae60;
    }

    .card-header {
      background: linear-gradient(135deg, #3498db, #2980b9) !important;
      color: white !important;
    }

    .fade-in {
      animation: fadeIn 0.3s ease-in;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .form-control:focus, .form-select:focus {
      border-color: #3498db;
      box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
    }

    .btn-success {
      background: linear-gradient(45deg, #27ae60, #229954);
      border: none;
    }

    .btn-success:hover {
      background: linear-gradient(45deg, #229954, #1e8449);
      transform: translateY(-1px);
    }

    .alert {
      border-radius: 10px;
    }

    .spinner-border-sm {
      width: 1rem;
      height: 1rem;
    }

    input[style*="text-transform: uppercase"] {
      text-transform: uppercase;
    }
  `]
})
export class FormularioMultaComponent {
  paso: number = 1;
  guardando: boolean = false;
  error: string = '';
  exito: string = '';
  
  multa: any = {
    codigo: '',
    apellidosNombres: '',
    domicilio: '',
    dniRuc: '',
    codigoInfraccion: 'TRANSITO',
    calificacion: '',
    sancion: '',
    puntosAcumula: 0,
    medidaPreventiva: '',
    fechaInfraccion: '',
    horaInfraccion: '',
    descripcionInfraccion: '',
    informacionAdicional: '',
    lugarInfraccion: '',
    distrito: 'Arequipa',
    provincia: 'Arequipa',
    departamento: 'Arequipa',
    referencia: '',
    placa: '',
    tarjetaIdentificacion: '',
    apellidosAutoridad: '',
    nombresAutoridad: '',
    cipDni: '',
    estado: 'PENDIENTE'
  };

  constructor(
    private multaService: MultaService,
    private router: Router
  ) {
    // Generar código automático
    this.multa.codigo = this.generarCodigoMulta();
    
    // Establecer fecha actual por defecto
    const now = new Date();
    this.multa.fechaInfraccion = now.toISOString().slice(0, 10); // Solo fecha
    this.multa.horaInfraccion = now.toTimeString().slice(0, 5); // Solo hora
  }

  siguientePaso() {
    if (this.paso < 5) {
      this.paso++;
    }
  }

  pasoAnterior() {
    if (this.paso > 1) {
      this.paso--;
    }
  }

  guardarMulta() {
    if (!this.validarDatos()) {
      return;
    }

    this.guardando = true;
    this.error = '';
    this.exito = '';

    this.multaService.crearMulta(this.multa).subscribe({
      next: (respuesta) => {
        this.guardando = false;
        this.exito = 'Multa guardada exitosamente';
        setTimeout(() => {
          this.router.navigate(['/lista-multas']);
        }, 2000);
      },
      error: (error) => {
        this.guardando = false;
        this.error = 'Error al guardar la multa. Verifique los datos e intente nuevamente.';
        console.error('Error al guardar multa:', error);
      }
    });
  }

  private generarCodigoMulta(): string {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const numero = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
    return `MTA-${año}-${numero}`;
  }

  validarDatos(): boolean {
    // Validar código de multa
    if (!this.multa.codigo.trim()) {
      this.error = 'El código de multa es obligatorio';
      return false;
    }

    // Validar DNI/RUC
    if (!this.multa.dniRuc || this.multa.dniRuc.length < 8) {
      this.error = 'El DNI/RUC debe tener al menos 8 dígitos';
      return false;
    }

    // Validar apellidos y nombres
    if (!this.multa.apellidosNombres.trim()) {
      this.error = 'Los apellidos y nombres son obligatorios';
      return false;
    }

    // Validar domicilio
    if (!this.multa.domicilio.trim()) {
      this.error = 'El domicilio es obligatorio';
      return false;
    }

    // Validar código de infracción
    if (!this.multa.codigoInfraccion) {
      this.error = 'El código de infracción es obligatorio';
      return false;
    }

    // Validar calificación
    if (!this.multa.calificacion) {
      this.error = 'La calificación es obligatoria';
      return false;
    }

    // Validar sanción
    if (!this.multa.sancion.trim()) {
      this.error = 'La sanción es obligatoria';
      return false;
    }

    // Validar lugar de infracción
    if (!this.multa.lugarInfraccion.trim()) {
      this.error = 'El lugar de la infracción es obligatorio';
      return false;
    }

    // Validar fecha de infracción
    if (!this.multa.fechaInfraccion) {
      this.error = 'La fecha de infracción es obligatoria';
      return false;
    }

    // Validar placa
    if (!this.multa.placa.trim()) {
      this.error = 'La placa del vehículo es obligatoria';
      return false;
    }

    // Validar autoridad
    if (!this.multa.apellidosAutoridad.trim()) {
      this.error = 'Los apellidos de la autoridad son obligatorios';
      return false;
    }

    if (!this.multa.nombresAutoridad.trim()) {
      this.error = 'Los nombres de la autoridad son obligatorios';
      return false;
    }

    if (!this.multa.cipDni.trim()) {
      this.error = 'El CIP/DNI de la autoridad es obligatorio';
      return false;
    }

    // Convertir placa a mayúsculas
    this.multa.placa = this.multa.placa.toUpperCase();

    // Convertir código a mayúsculas
    this.multa.codigo = this.multa.codigo.toUpperCase();

    return true;
  }

  cancelar() {
    if (confirm('¿Está seguro de cancelar? Se perderán los datos ingresados.')) {
      this.router.navigate(['/lista-multas']);
    }
  }
}
