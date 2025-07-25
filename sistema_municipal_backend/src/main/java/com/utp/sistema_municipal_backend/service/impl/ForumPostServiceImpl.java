package com.utp.sistema_municipal_backend.service.impl;

import com.utp.sistema_municipal_backend.model.ForumPost;
import com.utp.sistema_municipal_backend.repository.ForumPostRepository;
import com.utp.sistema_municipal_backend.service.ForumPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForumPostServiceImpl implements ForumPostService {

    @Autowired
    private ForumPostRepository forumPostRepository;

    @Override
    public ForumPost crearForo(ForumPost foro) throws Exception {
        // Podrías validar aquí, ej: título no vacío
        if (foro.getTitulo() == null || foro.getTitulo().isBlank()) {
            throw new Exception("El título es obligatorio");
        }
        return forumPostRepository.save(foro);
    }

    @Override
    public List<ForumPost> obtenerTodos() {
        return forumPostRepository.findAll();
    }

    @Override
    public ForumPost obtenerPorId(Long id) throws Exception {
        return forumPostRepository.findById(id)
                .orElseThrow(() -> new Exception("Foro no encontrado con id: " + id));
    }
}
