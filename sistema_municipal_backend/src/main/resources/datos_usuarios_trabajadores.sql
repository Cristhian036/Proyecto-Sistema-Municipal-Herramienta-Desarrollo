-- ==========================================
-- SCRIPT SQL PARA INSERTAR USUARIOS Y TRABAJADORES
-- Sistema Municipal - Basado en el backend Spring Boot
-- ==========================================

-- Nota: Este script asume que ya tienes las tablas creadas por Spring Boot JPA
-- con spring.jpa.hibernate.ddl-auto=update

-- ==========================================
-- 1. INSERTAR ROLES (si no existen)
-- ==========================================

INSERT IGNORE INTO roles (rol_id, rol_nombre) VALUES 
(1, 'TRABAJADOR'),
(2, 'USUARIO');

-- ==========================================
-- 2. INSERTAR USUARIOS CIUDADANOS
-- ==========================================

INSERT IGNORE INTO usuario (email, password, nombre, apellido, telefono, enabled) VALUES 
('juan.perez@gmail.com', 'password123', 'Juan', 'Pérez García', '987654321', true),
('maria.gonzalez@gmail.com', 'password123', 'María', 'González López', '987654322', true),
('carlos.rodriguez@gmail.com', 'password123', 'Carlos', 'Rodríguez Méndez', '987654323', true),
('ana.martinez@gmail.com', 'password123', 'Ana', 'Martínez Silva', '987654324', true),
('luis.torres@gmail.com', 'password123', 'Luis', 'Torres Vargas', '987654325', true),
('sofia.ramirez@gmail.com', 'password123', 'Sofía', 'Ramírez Cruz', '987654326', true),
('diego.flores@gmail.com', 'password123', 'Diego', 'Flores Herrera', '987654327', true),
('lucia.morales@gmail.com', 'password123', 'Lucía', 'Morales Jiménez', '987654328', true),
('fernando.castro@gmail.com', 'password123', 'Fernando', 'Castro Ruiz', '987654329', true),
('valeria.ortiz@gmail.com', 'password123', 'Valeria', 'Ortiz Sánchez', '987654330', true);

-- ==========================================
-- 3. INSERTAR TRABAJADORES MUNICIPALES
-- ==========================================

INSERT IGNORE INTO usuario (email, password, nombre, apellido, telefono, enabled) VALUES 
('admin@municipalidad.gob.pe', 'admin123', 'Administrador', 'Del Sistema', '987000001', true),
('secretario.general@municipalidad.gob.pe', 'secretario123', 'Roberto', 'Mendoza Alarcón', '987000002', true),
('tesoreria@municipalidad.gob.pe', 'tesorero123', 'Patricia', 'Vásquez Herrera', '987000003', true),
('obras.publicas@municipalidad.gob.pe', 'obras123', 'Miguel', 'Quispe Mamani', '987000004', true),
('transito@municipalidad.gob.pe', 'transito123', 'Carmen', 'Flores Ccahuantico', '987000005', true),
('licencias@municipalidad.gob.pe', 'licencias123', 'Jorge', 'Pinto Salazar', '987000006', true),
('catastro@municipalidad.gob.pe', 'catastro123', 'Elena', 'Zamora Cáceres', '987000007', true),
('medio.ambiente@municipalidad.gob.pe', 'ambiente123', 'Raúl', 'Huamán Ticona', '987000008', true),
('inspector1@municipalidad.gob.pe', 'inspector123', 'José', 'García Leyva', '987000009', true),
('inspector2@municipalidad.gob.pe', 'inspector123', 'Mónica', 'Silva Condori', '987000010', true);

-- ==========================================
-- 4. ASIGNAR ROLES A USUARIOS CIUDADANOS
-- ==========================================

-- Obtener IDs de usuarios ciudadanos y asignar rol USUARIO (2)
INSERT IGNORE INTO usuario_rol (usuario_id, rol_rol_id) 
SELECT u.id, 2 
FROM usuario u 
WHERE u.email IN (
    'juan.perez@gmail.com',
    'maria.gonzalez@gmail.com',
    'carlos.rodriguez@gmail.com',
    'ana.martinez@gmail.com',
    'luis.torres@gmail.com',
    'sofia.ramirez@gmail.com',
    'diego.flores@gmail.com',
    'lucia.morales@gmail.com',
    'fernando.castro@gmail.com',
    'valeria.ortiz@gmail.com'
);

-- ==========================================
-- 5. ASIGNAR ROLES A TRABAJADORES MUNICIPALES
-- ==========================================

-- Obtener IDs de trabajadores y asignar rol TRABAJADOR (1)
INSERT IGNORE INTO usuario_rol (usuario_id, rol_rol_id) 
SELECT u.id, 1 
FROM usuario u 
WHERE u.email IN (
    'admin@municipalidad.gob.pe',
    'secretario.general@municipalidad.gob.pe',
    'tesoreria@municipalidad.gob.pe',
    'obras.publicas@municipalidad.gob.pe',
    'transito@municipalidad.gob.pe',
    'licencias@municipalidad.gob.pe',
    'catastro@municipalidad.gob.pe',
    'medio.ambiente@municipalidad.gob.pe',
    'inspector1@municipalidad.gob.pe',
    'inspector2@municipalidad.gob.pe'
);

-- ==========================================
-- 6. VERIFICAR DATOS INSERTADOS
-- ==========================================

-- Consulta para verificar usuarios ciudadanos
SELECT 
    u.id,
    u.email,
    u.nombre,
    u.apellido,
    r.rol_nombre as rol
FROM usuario u
JOIN usuario_rol ur ON u.id = ur.usuario_id
JOIN roles r ON ur.rol_rol_id = r.rol_id
WHERE r.rol_nombre = 'USUARIO'
ORDER BY u.nombre;

-- Consulta para verificar trabajadores municipales
SELECT 
    u.id,
    u.email,
    u.nombre,
    u.apellido,
    r.rol_nombre as rol
FROM usuario u
JOIN usuario_rol ur ON u.id = ur.usuario_id
JOIN roles r ON ur.rol_rol_id = r.rol_id
WHERE r.rol_nombre = 'TRABAJADOR'
ORDER BY u.nombre;

-- ==========================================
-- NOTAS IMPORTANTES:
-- ==========================================
-- 1. Las contraseñas están en texto plano porque el backend usa NoOpPasswordEncoder
-- 2. Todos los usuarios están habilitados (enabled = true)
-- 3. Se usa INSERT IGNORE para evitar errores si ya existen los registros
-- 4. Los emails siguen un patrón estándar para facilitar las pruebas
-- 5. Los trabajadores tienen emails corporativos (@municipalidad.gob.pe)
-- 6. Los roles se asignan automáticamente según el tipo de usuario

-- ==========================================
-- CREDENCIALES DE PRUEBA:
-- ==========================================
-- Administrador: admin@municipalidad.gob.pe / admin123
-- Ciudadano ejemplo: juan.perez@gmail.com / password123
-- Inspector: inspector1@municipalidad.gob.pe / inspector123
-- ==========================================
