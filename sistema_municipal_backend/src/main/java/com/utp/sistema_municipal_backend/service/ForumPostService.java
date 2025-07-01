package com.utp.sistema_municipal_backend.service;

import com.utp.sistema_municipal_backend.model.ForumPost;

import java.util.List;

public interface ForumPostService {
    ForumPost crearForo(ForumPost foro) throws Exception;
    List<ForumPost> obtenerTodos();
    ForumPost obtenerPorId(Long id) throws Exception;
}
