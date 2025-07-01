-- Insertar roles
INSERT INTO roles (rol_id, rol_nombre) VALUES 
(1, 'TRABAJADOR'),
(2, 'USUARIO');

-- Insertar usuarios
INSERT INTO usuarios (email, password, nombre, apellido, telefono, enabled) VALUES 
('admin@municipio.com', 'admin123', 'Carlos', 'González', '987654321', true),
('maria.lopez@email.com', 'maria123', 'María', 'López', '987654322', true),
('juan.perez@email.com', 'juan123', 'Juan', 'Pérez', '987654323', true),
('ana.torres@email.com', 'ana123', 'Ana', 'Torres', '987654324', true),
('luis.martinez@email.com', 'luis123', 'Luis', 'Martínez', '987654325', true),
('sofia.hernandez@email.com', 'sofia123', 'Sofía', 'Hernández', '987654326', true),
('diego.ramirez@email.com', 'diego123', 'Diego', 'Ramírez', '987654327', true),
('elena.castro@email.com', 'elena123', 'Elena', 'Castro', '987654328', true),
('miguel.vargas@email.com', 'miguel123', 'Miguel', 'Vargas', '987654329', true),
('carla.mendoza@email.com', 'carla123', 'Carla', 'Mendoza', '987654330', true),
('trabajador1@municipio.com', 'trab123', 'Pedro', 'Sánchez', '987654331', true),
('trabajador2@municipio.com', 'trab123', 'Laura', 'Jiménez', '987654332', true);

-- Insertar usuario_roles (relación usuarios-roles)
INSERT INTO usuario_rol (usuario_id, rol_id) VALUES 
(1, 1), -- Carlos González - TRABAJADOR
(2, 2), -- María López - USUARIO
(3, 2), -- Juan Pérez - USUARIO
(4, 2), -- Ana Torres - USUARIO
(5, 2), -- Luis Martínez - USUARIO
(6, 2), -- Sofía Hernández - USUARIO
(7, 2), -- Diego Ramírez - USUARIO
(8, 2), -- Elena Castro - USUARIO
(9, 2), -- Miguel Vargas - USUARIO
(10, 2), -- Carla Mendoza - USUARIO
(11, 1), -- Pedro Sánchez - TRABAJADOR
(12, 1); -- Laura Jiménez - TRABAJADOR

-- Insertar noticias
INSERT INTO noticias (titulo, descripcion, autor, fecha_creacion, imagen_nombre, imagen_datos) VALUES 
('Apertura de Nueva Biblioteca Municipal', 'El municipio inaugura una moderna biblioteca con más de 10,000 libros y espacios digitales para la comunidad.', 'Carlos González', NOW(), 'biblioteca.jpg', NULL),
('Mejoras en el Sistema de Transporte Público', 'Se implementan nuevas rutas y horarios extendidos para mejorar la movilidad ciudadana.', 'Pedro Sánchez', NOW(), 'transporte.jpg', NULL),
('Campaña de Vacunación Gratuita', 'El centro de salud municipal ofrece vacunas gratuitas para niños y adultos mayores.', 'Laura Jiménez', NOW(), 'vacunacion.jpg', NULL),
('Festival Cultural de Primavera', 'Gran festival con artistas locales, comida típica y actividades para toda la familia.', 'Carlos González', NOW(), 'festival.jpg', NULL),
('Renovación del Parque Central', 'El parque central estrena nuevos juegos infantiles y áreas verdes renovadas.', 'Pedro Sánchez', NOW(), 'parque.jpg', NULL),
('Programa de Reciclaje Comunitario', 'Nueva iniciativa para promover el reciclaje y cuidado del medio ambiente.', 'Laura Jiménez', NOW(), 'reciclaje.jpg', NULL),
('Construcción de Nuevo Centro Deportivo', 'Inicia la construcción de un moderno complejo deportivo con piscina y canchas.', 'Carlos González', NOW(), 'deportivo.jpg', NULL),
('Mercado de Productos Orgánicos', 'Todos los sábados: mercado con productos frescos y orgánicos de productores locales.', 'Pedro Sánchez', NOW(), 'mercado.jpg', NULL),
('Cursos Gratuitos de Computación', 'El municipio ofrece cursos básicos de computación para adultos mayores.', 'Laura Jiménez', NOW(), 'computacion.jpg', NULL),
('Iluminación LED en Calles Principales', 'Modernización del alumbrado público con tecnología LED más eficiente.', 'Carlos González', NOW(), 'iluminacion.jpg', NULL),
('Jornada de Adopción de Mascotas', 'Centro de adopción municipal busca familias responsables para mascotas rescatadas.', 'Pedro Sánchez', NOW(), 'mascotas.jpg', NULL),
('Ampliación del Hospital Municipal', 'Nueva ala del hospital con equipos modernos y más camas para pacientes.', 'Laura Jiménez', NOW(), 'hospital.jpg', NULL);

-- Insertar posts del foro
INSERT INTO forum_posts (title, content, author_id, created_at, updated_at) VALUES 
('¿Opiniones sobre la nueva biblioteca?', 'Me parece una excelente iniciativa. ¿Qué piensan ustedes sobre los horarios de atención?', 2, NOW(), NOW()),
('Problemas con el transporte público', 'Las nuevas rutas están bien, pero creo que faltan más frecuencias en hora pico.', 3, NOW(), NOW()),
('Agradecimiento por la campaña de vacunación', 'Excelente servicio en el centro de salud. Personal muy amable y eficiente.', 4, NOW(), NOW()),
('Sugerencias para el festival cultural', 'Sería genial incluir más bandas locales y quizás extender el horario.', 5, NOW(), NOW()),
('El parque central se ve increíble', 'Los nuevos juegos para niños son fantásticos. Felicitaciones al municipio.', 6, NOW(), NOW()),
('¿Cómo participar en el programa de reciclaje?', 'Me interesa mucho participar. ¿Dónde puedo obtener más información?', 7, NOW(), NOW()),
('Expectativas del nuevo centro deportivo', 'Espero que incluyan clases de natación para adultos mayores.', 8, NOW(), NOW()),
('Horarios del mercado orgánico', '¿Alguien sabe si el mercado abre temprano los sábados?', 9, NOW(), NOW()),
('Inscripción a cursos de computación', 'Mi abuela está interesada. ¿Hay lista de espera?', 10, NOW(), NOW()),
('La nueva iluminación es excelente', 'Se nota mucho la diferencia en seguridad. Gracias por la mejora.', 2, NOW(), NOW()),
('Adopción responsable de mascotas', 'Adopté un perrito la semana pasada. El proceso fue muy profesional.', 3, NOW(), NOW()),
('Urgencia en ampliación del hospital', 'Era muy necesaria esta ampliación. Esperamos mejor atención médica.', 4, NOW(), NOW());

-- Insertar comentarios
INSERT INTO comments (content, author_id, forum_post_id, created_at) VALUES 
('Totalmente de acuerdo, los horarios son perfectos para estudiantes.', 3, 1, NOW()),
('Yo también he notado ese problema en las horas pico.', 4, 2, NOW()),
('El personal de salud siempre es muy profesional.', 5, 3, NOW()),
('Me encantaría ver más variedad de comida en el festival.', 6, 4, NOW()),
('Mis hijos están felices con los nuevos juegos.', 7, 5, NOW()),
('Puedes llamar al municipio, tienen toda la información.', 8, 6, NOW()),
('Sería genial tener una piscina climatizada.', 9, 7, NOW()),
('Creo que abre a las 7:00 AM todos los sábados.', 10, 8, NOW()),
('Mi madre también se inscribió, hay cupos disponibles.', 2, 9, NOW()),
('La diferencia es notable, especialmente en la noche.', 3, 10, NOW()),
('¡Qué bueno! Yo también estoy pensando en adoptar.', 4, 11, NOW()),
('Era muy necesario, el hospital estaba saturado.', 5, 12, NOW()),
('La biblioteca tiene muy buena conexión a internet.', 6, 1, NOW()),
('Espero que agreguen más rutas hacia las afueras.', 7, 2, NOW()),
('El centro de salud también tiene buenas instalaciones.', 8, 3, NOW());

-- Insertar likes/dislikes
INSERT INTO like_dislike (user_id, forum_post_id, vote_type) VALUES 
(2, 1, 'LIKE'),
(3, 1, 'LIKE'),
(4, 2, 'LIKE'),
(5, 2, 'DISLIKE'),
(6, 3, 'LIKE'),
(7, 3, 'LIKE'),
(8, 4, 'LIKE'),
(9, 4, 'LIKE'),
(10, 5, 'LIKE'),
(2, 5, 'LIKE'),
(3, 6, 'LIKE'),
(4, 6, 'DISLIKE'),
(5, 7, 'LIKE'),
(6, 7, 'LIKE'),
(7, 8, 'LIKE'),
(8, 8, 'LIKE'),
(9, 9, 'LIKE'),
(10, 9, 'LIKE'),
(2, 10, 'LIKE'),
(3, 10, 'LIKE');
