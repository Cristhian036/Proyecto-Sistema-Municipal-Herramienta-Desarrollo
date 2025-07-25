// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  baseUrl: 'http://localhost:8080',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
