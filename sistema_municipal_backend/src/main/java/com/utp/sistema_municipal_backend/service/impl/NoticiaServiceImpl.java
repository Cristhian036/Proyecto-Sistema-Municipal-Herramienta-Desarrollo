package com.utp.sistema_municipal_backend.service.impl;

import com.utp.sistema_municipal_backend.model.Noticia;
import com.utp.sistema_municipal_backend.repository.NoticiaRepository;
import com.utp.sistema_municipal_backend.service.NoticiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoticiaServiceImpl implements NoticiaService {

    @Autowired
    private NoticiaRepository noticiaRepository;

    @Override
    public Noticia crearNoticia(Noticia noticia) {
        return noticiaRepository.save(noticia);
    }

    @Override
    public List<Noticia> listarNoticias() {
        return noticiaRepository.findAll(Sort.by(Sort.Direction.DESC, "fecha"));
    }

    @Override
    public Noticia obtenerNoticia(Long id) {
        return noticiaRepository.findById(id).orElse(null);
    }

    @Override
    public void eliminarNoticia(Long id) {
        noticiaRepository.deleteById(id);
    }
}