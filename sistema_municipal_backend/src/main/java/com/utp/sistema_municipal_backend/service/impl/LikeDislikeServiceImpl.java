package com.utp.sistema_municipal_backend.service.impl;

import com.utp.sistema_municipal_backend.model.*;
import com.utp.sistema_municipal_backend.repository.*;
import com.utp.sistema_municipal_backend.service.LikeDislikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LikeDislikeServiceImpl implements LikeDislikeService {

    @Autowired
    private LikeDislikeRepository likeDislikeRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ForumPostRepository forumPostRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public void votarForo(Long foroId, String emailUsuario, VoteType tipoVoto) throws Exception {
        Usuario usuario = usuarioRepository.findByEmail(emailUsuario);
        if (usuario == null) {
            throw new Exception("Usuario no encontrado");
        }

        ForumPost foro = forumPostRepository.findById(foroId)
                .orElseThrow(() -> new Exception("Foro no encontrado"));

        Optional<LikeDislike> votoExistenteOpt = likeDislikeRepository.findByUsuarioAndForumPost(usuario, foro);

        if (votoExistenteOpt.isPresent()) {
            LikeDislike votoExistente = votoExistenteOpt.get();
            if (votoExistente.getVoteType() == tipoVoto) {
                // Si el voto es igual, eliminamos el voto (toggle)
                likeDislikeRepository.delete(votoExistente);
            } else {
                // Cambiamos el voto
                votoExistente.setVoteType(tipoVoto);
                likeDislikeRepository.save(votoExistente);
            }
        } else {
            LikeDislike nuevoVoto = new LikeDislike();
            nuevoVoto.setUsuario(usuario);
            nuevoVoto.setForumPost(foro);
            nuevoVoto.setVoteType(tipoVoto);
            likeDislikeRepository.save(nuevoVoto);
        }
    }

    @Override
    public void votarComentario(Long comentarioId, String emailUsuario, VoteType tipoVoto) throws Exception {
        Usuario usuario = usuarioRepository.findByEmail(emailUsuario);
        if (usuario == null) {
            throw new Exception("Usuario no encontrado");
        }

        Comment comentario = commentRepository.findById(comentarioId)
                .orElseThrow(() -> new Exception("Comentario no encontrado"));

        Optional<LikeDislike> votoExistenteOpt = likeDislikeRepository.findByUsuarioAndComment(usuario, comentario);

        if (votoExistenteOpt.isPresent()) {
            LikeDislike votoExistente = votoExistenteOpt.get();
            if (votoExistente.getVoteType() == tipoVoto) {
                // Si el voto es igual, eliminamos el voto (toggle)
                likeDislikeRepository.delete(votoExistente);
            } else {
                // Cambiamos el voto
                votoExistente.setVoteType(tipoVoto);
                likeDislikeRepository.save(votoExistente);
            }
        } else {
            LikeDislike nuevoVoto = new LikeDislike();
            nuevoVoto.setUsuario(usuario);
            nuevoVoto.setComment(comentario);
            nuevoVoto.setVoteType(tipoVoto);
            likeDislikeRepository.save(nuevoVoto);
        }
    }

    @Override
    public long contarLikesForo(Long foroId) {
        ForumPost foro = forumPostRepository.findById(foroId).orElse(null);
        if (foro == null) return 0;
        return likeDislikeRepository.countByForumPostAndVoteType(foro, VoteType.LIKE);
    }

    @Override
    public long contarDislikesForo(Long foroId) {
        ForumPost foro = forumPostRepository.findById(foroId).orElse(null);
        if (foro == null) return 0;
        return likeDislikeRepository.countByForumPostAndVoteType(foro, VoteType.DISLIKE);
    }

    @Override
    public long contarLikesComentario(Long comentarioId) {
        Comment comentario = commentRepository.findById(comentarioId).orElse(null);
        if (comentario == null) return 0;
        return likeDislikeRepository.countByCommentAndVoteType(comentario, VoteType.LIKE);
    }

    @Override
    public long contarDislikesComentario(Long comentarioId) {
        Comment comentario = commentRepository.findById(comentarioId).orElse(null);
        if (comentario == null) return 0;
        return likeDislikeRepository.countByCommentAndVoteType(comentario, VoteType.DISLIKE);
    }
}
