CREATE DATABASE IF NOT EXISTS municipalidad_arequipa;
USE municipalidad_arequipa;

-- Roles de usuario
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    dni VARCHAR(20) UNIQUE,
    rol_id INT,
    FOREIGN KEY (rol_id) REFERENCES roles(id)
);

-- Noticias y anuncios públicos
CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT,
    fecha_publicacion DATE,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES usuarios(id)
);

-- Trámites
CREATE TABLE tramites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100),
    descripcion TEXT,
    fecha_solicitud DATE,
    estado ENUM('pendiente', 'en_proceso', 'finalizado') DEFAULT 'pendiente',
    ciudadano_id INT,
    FOREIGN KEY (ciudadano_id) REFERENCES usuarios(id)
);

-- Documentos generados por trámites
CREATE TABLE documentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    url VARCHAR(255),
    tramite_id INT,
    FOREIGN KEY (tramite_id) REFERENCES tramites(id)
);

-- Vehículos (para asociación con multas)
CREATE TABLE vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(20) NOT NULL UNIQUE,
    propietario_id INT,
    FOREIGN KEY (propietario_id) REFERENCES usuarios(id)
);

-- Multas
CREATE TABLE multas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion TEXT,
    monto DECIMAL(10,2),
    fecha DATE,
    estado ENUM('pendiente', 'pagado') DEFAULT 'pendiente',
    vehiculo_id INT,
    inspector_id INT,
    FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id),
    FOREIGN KEY (inspector_id) REFERENCES usuarios(id)
);

-- Pagos de multas
CREATE TABLE pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    multa_id INT,
    fecha_pago DATE,
    monto_pagado DECIMAL(10,2),
    metodo_pago VARCHAR(50),
    comprobante_url VARCHAR(255),
    FOREIGN KEY (multa_id) REFERENCES multas(id)
);
