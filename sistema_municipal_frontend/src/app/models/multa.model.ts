export interface Multa {
  id?: number;
  codigo: string;
  apellidosNombres: string;
  domicilio: string;
  dniRuc: string;
  codigoInfraccion: string;
  calificacion: string;
  sancion: string;
  puntosAcumula: number;
  medidaPreventiva: string;
  fechaInfraccion: string;
  horaInfraccion?: string;
  descripcionInfraccion: string;
  informacionAdicional?: string;
  lugarInfraccion: string;
  distrito: string;
  provincia: string;
  departamento: string;
  referencia?: string;
  placa: string;
  tarjetaIdentificacion?: string;
  apellidosAutoridad: string;
  nombresAutoridad: string;
  cipDni: string;
  estado: string;
  usuarioId?: number;
  
  // Campos opcionales para compatibilidad
  fechaCreacion?: string;
  fechaActualizacion?: string;
}

export enum EstadoMulta {
  PENDIENTE = 'PENDIENTE',
  PAGADA = 'PAGADA',
  VENCIDA = 'VENCIDA',
  ANULADA = 'ANULADA',
  EN_PROCESO = 'EN_PROCESO'
}

export enum TipoInfraccion {
  TRANSITO = 'TRANSITO',
  COMERCIO = 'COMERCIO',
  CONSTRUCCION = 'CONSTRUCCION',
  MEDIO_AMBIENTE = 'MEDIO_AMBIENTE',
  TRIBUTARIA = 'TRIBUTARIA',
  SERENAZGO = 'SERENAZGO',
  LICENCIAS = 'LICENCIAS',
  RUIDOS = 'RUIDOS',
  LIMPIEZA = 'LIMPIEZA',
  OTROS = 'OTROS'
}

export interface MultaResponse {
  content: Multa[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  size: number;
}

export interface MultaEstadisticas {
  porEstado: { [key: string]: number };
  porTipo: { [key: string]: number };
  total: number;
}
