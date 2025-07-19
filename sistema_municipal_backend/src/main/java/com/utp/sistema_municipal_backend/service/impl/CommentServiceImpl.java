package com.utp.sistema_municipal_backend.service.impl;

import com.utp.sistema_municipal_backend.model.Comment;
import com.utp.sistema_municipal_backend.model.ForumPost;
import com.utp.sistema_municipal_backend.repository.CommentRepository;
import com.utp.sistema_municipal_backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment crearComentario(Comment comment) throws Exception {
        if (comment.getContenido() == null || comment.getContenido().isBlank()) {
            throw new Exception("El contenido del comentario es obligatorio");
        }
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> obtenerComentariosPorForo(ForumPost foro) {
        return commentRepository.findByForumPost(foro);
    }
}
