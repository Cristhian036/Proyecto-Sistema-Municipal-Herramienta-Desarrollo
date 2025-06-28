-- Script SQL para inicializar datos de prueba en el sistema de noticias

-- Insertar roles si no existen
INSERT IGNORE INTO roles (rol_id, rol_nombre) VALUES 
(1, 'ADMIN'),
(2, 'USER');

-- Insertar usuario de prueba si no existe
INSERT IGNORE INTO usuarios (id, email, password, nombre, apellido, telefono, enabled) VALUES 
(1, 'rene@rene.com', '1234', 'René', 'García', '123456789', true);

-- Insertar relación usuario-rol si no existe
INSERT IGNORE INTO usuario_rol (usuario_rol_id, usuario_id, rol_id) VALUES 
(1, 1, 1);

-- Insertar noticias de prueba (puedes ejecutar esto manualmente)
-- Nota: Las fechas se pueden ajustar según necesites
INSERT INTO noticias (titulo, descripcion, autor, fecha, imagen) VALUES 
('Primera Noticia del Sistema Municipal', 
 'Esta es la primera noticia de nuestro sistema municipal. Aquí podrás encontrar todas las últimas noticias y eventos importantes de nuestra comunidad. El sistema permite a los administradores gestionar las noticias de manera eficiente.',
 'René García',
 NOW(),
 'default_news_1.jpg'),

('Mejoras en los Servicios Públicos', 
 'Estamos implementando mejoras significativas en los servicios públicos de la ciudad. Estas mejoras incluyen modernización de la infraestructura, mejores sistemas de atención al ciudadano y digitalización de trámites municipales.',
 'Administración Municipal',
 DATE_SUB(NOW(), INTERVAL 1 DAY),
 'servicios_publicos.jpg'),

('Evento Comunitario del Fin de Semana', 
 'Te invitamos a participar en el gran evento comunitario que se realizará este fin de semana en el parque central. Habrá actividades para toda la familia, música en vivo, comida típica y mucho más. No te lo pierdas.',
 'Departamento de Cultura',
 DATE_SUB(NOW(), INTERVAL 2 DAY),
 'evento_comunitario.jpg');
