package com.utp.sistema_municipal_backend.service;

import com.utp.sistema_municipal_backend.model.Noticia;
import java.util.List;

public interface NoticiaService {
    Noticia crearNoticia(Noticia noticia);
    List<Noticia> listarNoticias();
    Noticia obtenerNoticia(Long id);
    void eliminarNoticia(Long id);
}