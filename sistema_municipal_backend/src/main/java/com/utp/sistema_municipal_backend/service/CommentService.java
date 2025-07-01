package com.utp.sistema_municipal_backend.service;

import com.utp.sistema_municipal_backend.model.Comment;
import com.utp.sistema_municipal_backend.model.ForumPost;

import java.util.List;

public interface CommentService {
    Comment crearComentario(Comment comment) throws Exception;
    List<Comment> obtenerComentariosPorForo(ForumPost foro);
}
