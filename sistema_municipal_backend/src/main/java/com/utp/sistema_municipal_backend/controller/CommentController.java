package com.utp.sistema_municipal_backend.controller;

import com.utp.sistema_municipal_backend.model.Comment;
import com.utp.sistema_municipal_backend.model.ForumPost;
import com.utp.sistema_municipal_backend.model.Usuario;
import com.utp.sistema_municipal_backend.service.CommentService;
import com.utp.sistema_municipal_backend.service.ForumPostService;
import com.utp.sistema_municipal_backend.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comentarios")
@CrossOrigin("*")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private ForumPostService forumPostService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    // Obtener comentarios de un foro (público)
    @GetMapping("/foro/{foroId}")
    public ResponseEntity<?> obtenerComentarios(@PathVariable Long foroId) {
        try {
            ForumPost foro = forumPostService.obtenerPorId(foroId);
            List<Comment> comentarios = commentService.obtenerComentariosPorForo(foro);
            return ResponseEntity.ok(comentarios);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Crear comentario en foro (requiere autenticación)
    @PostMapping("/foro/{foroId}")
    public ResponseEntity<?> crearComentario(@PathVariable Long foroId, @RequestBody Comment comment, Authentication authentication) {
        try {
            ForumPost foro = forumPostService.obtenerPorId(foroId);
            String email = authentication.getName();
            Usuario usuario = (Usuario) userDetailsService.loadUserByUsername(email);

            comment.setForumPost(foro);
            comment.setUsuario(usuario);

            Comment comentarioCreado = commentService.crearComentario(comment);
            return ResponseEntity.ok(comentarioCreado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
