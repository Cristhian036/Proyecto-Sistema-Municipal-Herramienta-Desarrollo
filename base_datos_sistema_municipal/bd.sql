-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS sistema_municipal;
USE sistema_municipal;

-- Crear la tabla de roles
CREATE TABLE roles (
    rol_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    rol_nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    enabled BOOLEAN DEFAULT TRUE,
    perfil VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de usuarios_roles
CREATE TABLE usuarios_roles (
    usuario_rol_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    usuario_id BIGINT,
    rol_id BIGINT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
);

-- Crear la tabla de foros
CREATE TABLE foros (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    usuario_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear la tabla de comentarios
CREATE TABLE comentarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    contenido TEXT NOT NULL,
    usuario_id BIGINT,
    foro_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (foro_id) REFERENCES foros(id)
);

-- Crear la tabla de noticias
CREATE TABLE noticias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    usuario_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear la tabla de multas
CREATE TABLE multas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    descripcion TEXT NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    usuario_id BIGINT,
    trabajador_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) DEFAULT 'PENDIENTE',
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (trabajador_id) REFERENCES usuarios(id)
);

-- Crear la tabla de pagos
CREATE TABLE pagos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    multa_id BIGINT,
    monto DECIMAL(10, 2) NOT NULL,
    fecha_pago TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (multa_id) REFERENCES multas(id)
);

-- Insertar roles iniciales
INSERT INTO roles (rol_nombre) VALUES ('ADMIN'), ('TRABAJADOR'), ('USUARIO');
