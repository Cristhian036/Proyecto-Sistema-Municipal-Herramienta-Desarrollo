package com.utp.sistema_municipal_backend.config;

/**
 * Constantes de la aplicación Sistema Municipal
 * Mantiene consistencia con el frontend y evita conflictos
 */
public class AppConstants {
    
    // Información de la aplicación
    public static final String APP_NAME = "Sistema Municipal";
    public static final String APP_VERSION = "1.0.0";
    public static final String APP_DESCRIPTION = "Sistema de Gestión Municipal - Noticias, Foros y Servicios";
    
    // Roles del sistema
    public static final String ROLE_TRABAJADOR = "TRABAJADOR";
    public static final String ROLE_USUARIO = "USUARIO";
    
    // Endpoints de la API
    public static final String API_BASE_PATH = "/api";
    public static final String AUTH_ENDPOINT = "/auth";
    public static final String USERS_ENDPOINT = "/usuarios";
    public static final String NEWS_ENDPOINT = "/noticias";
    public static final String FORUM_ENDPOINT = "/forum";
    public static final String POSTS_ENDPOINT = "/posts";
    public static final String COMMENTS_ENDPOINT = "/comments";
    public static final String UPLOADS_ENDPOINT = "/uploads";
    
    // Configuración de archivos
    public static final long MAX_FILE_SIZE = 10485760L; // 10MB
    public static final String[] ALLOWED_FILE_TYPES = {
        "image/jpeg", "image/png", "image/gif", "application/pdf"
    };
    public static final String UPLOAD_DIR = "uploads";
    
    // Configuración de JWT
    public static final String JWT_TOKEN_PREFIX = "Bearer ";
    public static final String JWT_HEADER_NAME = "Authorization";
    public static final long JWT_EXPIRATION_TIME = 86400L; // 24 horas
    public static final long JWT_REFRESH_THRESHOLD = 300L; // 5 minutos
    
    // Configuración de base de datos
    public static final String DB_NAME = "sistema_municipal";
    public static final String DB_CHARSET = "utf8mb4";
    
    // Configuración de paginación
    public static final int DEFAULT_PAGE_SIZE = 10;
    public static final int MAX_PAGE_SIZE = 100;
    public static final int[] PAGE_SIZE_OPTIONS = {5, 10, 20, 50};
    
    // Headers CORS
    public static final String[] CORS_ALLOWED_ORIGINS = {
        "http://localhost:4200", "http://localhost:3000"
    };
    public static final String[] CORS_ALLOWED_METHODS = {
        "GET", "POST", "PUT", "DELETE", "OPTIONS"
    };
    public static final String[] CORS_ALLOWED_HEADERS = {"*"};
    
    // Mensajes del sistema
    public static final class Messages {
        public static final String SUCCESS_LOGIN = "Bienvenido al Sistema Municipal";
        public static final String SUCCESS_LOGOUT = "Sesión cerrada correctamente";
        public static final String SUCCESS_SAVE = "Datos guardados correctamente";
        public static final String SUCCESS_DELETE = "Elemento eliminado correctamente";
        public static final String SUCCESS_UPDATE = "Datos actualizados correctamente";
        
        public static final String ERROR_GENERIC = "Ha ocurrido un error inesperado";
        public static final String ERROR_LOGIN = "Credenciales incorrectas";
        public static final String ERROR_UNAUTHORIZED = "No tienes permisos para realizar esta acción";
        public static final String ERROR_FILE_SIZE = "El archivo excede el tamaño máximo permitido";
        public static final String ERROR_FILE_TYPE = "Tipo de archivo no permitido";
        public static final String ERROR_VALIDATION = "Error de validación de datos";
    }
    
    // Patrones de validación
    public static final class ValidationPatterns {
        public static final String EMAIL_PATTERN = "^[A-Za-z0-9+_.-]+@(.+)$";
        public static final String PHONE_PATTERN = "^\\d{9,15}$";
        public static final String PASSWORD_PATTERN = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{6,}$";
    }
    
    // Estados de entidades
    public static final class EntityStatus {
        public static final String ACTIVE = "ACTIVE";
        public static final String INACTIVE = "INACTIVE";
        public static final String PENDING = "PENDING";
        public static final String DELETED = "DELETED";
    }
}
