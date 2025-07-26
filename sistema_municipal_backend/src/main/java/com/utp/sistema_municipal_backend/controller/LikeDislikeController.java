package com.utp.sistema_municipal_backend.controller;

import com.utp.sistema_municipal_backend.model.VoteType;
import com.utp.sistema_municipal_backend.service.LikeDislikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/votos")
public class LikeDislikeController {

    @Autowired
    private LikeDislikeService likeDislikeService;

    // Votar en un foro
    @PostMapping("/foro/{foroId}")
    public ResponseEntity<?> votarForo(@PathVariable Long foroId,
                                       @RequestParam VoteType tipoVoto,
                                       Authentication authentication) {
        try {
            String emailUsuario = authentication.getName();
            likeDislikeService.votarForo(foroId, emailUsuario, tipoVoto);
            return ResponseEntity.ok("Voto registrado correctamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Votar en un comentario
    @PostMapping("/comentario/{comentarioId}")
    public ResponseEntity<?> votarComentario(@PathVariable Long comentarioId,
                                             @RequestParam VoteType tipoVoto,
                                             Authentication authentication) {
        try {
            String emailUsuario = authentication.getName();
            likeDislikeService.votarComentario(comentarioId, emailUsuario, tipoVoto);
            return ResponseEntity.ok("Voto registrado correctamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Obtener conteo de likes y dislikes de foro
    @GetMapping("/foro/{foroId}/conteos")
    public ResponseEntity<?> conteosForo(@PathVariable Long foroId) {
        long likes = likeDislikeService.contarLikesForo(foroId);
        long dislikes = likeDislikeService.contarDislikesForo(foroId);
        return ResponseEntity.ok(new ConteoResponse(likes, dislikes));
    }

    // Obtener conteo de likes y dislikes de comentario
    @GetMapping("/comentario/{comentarioId}/conteos")
    public ResponseEntity<?> conteosComentario(@PathVariable Long comentarioId) {
        long likes = likeDislikeService.contarLikesComentario(comentarioId);
        long dislikes = likeDislikeService.contarDislikesComentario(comentarioId);
        return ResponseEntity.ok(new ConteoResponse(likes, dislikes));
    }

    // DTO interno para conteos
    private static class ConteoResponse {
        private long likes;
        private long dislikes;

        public ConteoResponse(long likes, long dislikes) {
            this.likes = likes;
            this.dislikes = dislikes;
        }

        public long getLikes() {
            return likes;
        }

        public long getDislikes() {
            return dislikes;
        }
    }
}
