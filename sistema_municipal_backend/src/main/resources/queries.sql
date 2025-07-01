-- Consultas para verificar los datos insertados

-- Ver todos los roles
SELECT * FROM roles;

-- Ver todos los usuarios
SELECT id, email, nombre, apellido, telefono, enabled FROM usuarios;

-- Ver relación usuarios-roles
SELECT u.nombre, u.apellido, u.email, r.rol_nombre 
FROM usuarios u 
JOIN usuario_rol ur ON u.id = ur.usuario_id 
JOIN roles r ON ur.rol_id = r.rol_id
ORDER BY u.nombre;

-- Ver todas las noticias
SELECT id, titulo, autor, fecha_creacion, imagen_nombre 
FROM noticias 
ORDER BY fecha_creacion DESC;

-- Ver todos los posts del foro
SELECT fp.id, fp.title, u.nombre as autor, fp.created_at 
FROM forum_posts fp 
JOIN usuarios u ON fp.author_id = u.id 
ORDER BY fp.created_at DESC;

-- Ver comentarios con sus autores y posts
SELECT c.content, u.nombre as autor, fp.title as post_titulo, c.created_at 
FROM comments c 
JOIN usuarios u ON c.author_id = u.id 
JOIN forum_posts fp ON c.forum_post_id = fp.id 
ORDER BY c.created_at DESC;

-- Ver likes y dislikes por post
SELECT fp.title, 
       COUNT(CASE WHEN ld.vote_type = 'LIKE' THEN 1 END) as likes,
       COUNT(CASE WHEN ld.vote_type = 'DISLIKE' THEN 1 END) as dislikes
FROM forum_posts fp 
LEFT JOIN like_dislike ld ON fp.id = ld.forum_post_id 
GROUP BY fp.id, fp.title
ORDER BY likes DESC;

-- Estadísticas generales
SELECT 
    (SELECT COUNT(*) FROM usuarios) as total_usuarios,
    (SELECT COUNT(*) FROM noticias) as total_noticias,
    (SELECT COUNT(*) FROM forum_posts) as total_posts,
    (SELECT COUNT(*) FROM comments) as total_comentarios,
    (SELECT COUNT(*) FROM like_dislike) as total_votos;
