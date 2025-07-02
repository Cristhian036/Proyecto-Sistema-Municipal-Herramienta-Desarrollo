package com.utp.sistema_municipal_backend.controller;

import com.utp.sistema_municipal_backend.model.ForumPost;
import com.utp.sistema_municipal_backend.model.Usuario;
import com.utp.sistema_municipal_backend.service.ForumPostService;
import com.utp.sistema_municipal_backend.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foros")
@CrossOrigin("*")
public class ForumPostController {

    @Autowired
    private ForumPostService forumPostService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    // Listar todos los foros (público)
    @GetMapping("/")
    public List<ForumPost> listarForos() {
        return forumPostService.obtenerTodos();
    }

    // Endpoint específico para foros públicos (sin autenticación)
    @GetMapping("/publicos")
    public List<ForumPost> listarForosPublicos() {
        return forumPostService.obtenerTodos();
    }

    // Obtener foro por id (público)
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerForo(@PathVariable Long id) {
        try {
            ForumPost foro = forumPostService.obtenerPorId(id);
            return ResponseEntity.ok(foro);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Crear un foro (requiere autenticación)
    @PostMapping("/")
    public ResponseEntity<?> crearForo(@RequestBody ForumPost foro, Authentication authentication) {
        try {
            // Obtener usuario autenticado
            String email = authentication.getName();
            Usuario usuario = (Usuario) userDetailsService.loadUserByUsername(email);

            // Asociar el usuario al foro
            foro.setUsuario(usuario);

            ForumPost foroCreado = forumPostService.crearForo(foro);
            return ResponseEntity.ok(foroCreado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
