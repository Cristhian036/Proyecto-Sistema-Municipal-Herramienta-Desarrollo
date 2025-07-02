export const AppConfig = {
  // Configuración de la API
  API_ENDPOINTS: {
    AUTH: '/auth',
    USERS: '/usuarios',
    NEWS: '/noticias',
    FORUM: '/forum',
    POSTS: '/posts',
    COMMENTS: '/comments',
    UPLOADS: '/uploads'
  },

  // Configuración de roles
  ROLES: {
    TRABAJADOR: 'TRABAJADOR',
    USUARIO: 'USUARIO'
  },

  // Configuración de almacenamiento local
  STORAGE_KEYS: {
    TOKEN: 'token',
    USER: 'user',
    REMEMBER_ME: 'rememberMe'
  },

  // Configuración de archivos
  FILE_CONFIG: {
    MAX_SIZE: 10485760, // 10MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
    UPLOAD_PATH: 'uploads'
  },

  // Configuración de la aplicación
  APP_INFO: {
    NAME: 'Sistema Municipal',
    VERSION: '1.0.0',
    DESCRIPTION: 'Sistema de Gestión Municipal - Noticias, Foros y Servicios'
  },

  // Configuración de paginación
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [5, 10, 20, 50],
    MAX_PAGE_SIZE: 100
  },

  // Configuración de base de datos (para referencia)
  DATABASE: {
    NAME: 'sistema_municipal',
    CHARSET: 'utf8mb4'
  },

  // Configuración de JWT
  JWT_CONFIG: {
    EXPIRATION_TIME: 86400, // 24 horas en segundos
    REFRESH_THRESHOLD: 300 // 5 minutos antes de expirar
  },

  // Mensajes de la aplicación
  MESSAGES: {
    SUCCESS: {
      LOGIN: 'Bienvenido al Sistema Municipal',
      LOGOUT: 'Sesión cerrada correctamente',
      SAVE: 'Datos guardados correctamente',
      DELETE: 'Elemento eliminado correctamente',
      UPDATE: 'Datos actualizados correctamente'
    },
    ERROR: {
      GENERIC: 'Ha ocurrido un error inesperado',
      LOGIN: 'Credenciales incorrectas',
      UNAUTHORIZED: 'No tienes permisos para realizar esta acción',
      CONNECTION: 'Error de conexión con el servidor',
      FILE_SIZE: 'El archivo excede el tamaño máximo permitido',
      FILE_TYPE: 'Tipo de archivo no permitido'
    }
  },

  // Configuración de rutas
  ROUTES: {
    HOME: '/',
    LOGIN: '/login',
    DASHBOARD: '/dashboard',
    NEWS: '/noticias',
    FORUM: '/foro',
    PROFILE: '/perfil',
    ADMIN: '/admin'
  }
};
