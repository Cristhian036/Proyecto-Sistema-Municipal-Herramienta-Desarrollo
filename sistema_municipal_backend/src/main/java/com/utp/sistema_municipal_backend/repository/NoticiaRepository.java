package com.utp.sistema_municipal_backend.repository;

import com.utp.sistema_municipal_backend.model.Noticia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticiaRepository extends JpaRepository<Noticia, Long> {
}