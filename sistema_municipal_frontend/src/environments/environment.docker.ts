export const environment = {
  production: true,
  apiUrl: '/api',
  baseUrl: '',
  // Configuración de la aplicación
  appName: 'Sistema Municipal',
  appVersion: '1.0.0',
  // Configuración de JWT
  jwtTokenKey: 'token',
  // Configuración de archivos
  maxFileSize: 10485760, // 10MB en bytes
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  // Configuración de la base de datos (para referencia)
  dbName: 'sistema_municipal',
  // Configuración de paginación
  defaultPageSize: 10,
  pageSizeOptions: [5, 10, 20, 50]
};
