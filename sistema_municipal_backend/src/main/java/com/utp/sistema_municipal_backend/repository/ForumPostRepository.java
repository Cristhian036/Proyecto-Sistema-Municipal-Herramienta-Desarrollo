package com.utp.sistema_municipal_backend.repository;

import com.utp.sistema_municipal_backend.model.ForumPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForumPostRepository extends JpaRepository<ForumPost, Long> {
    // Puedes agregar métodos de consulta personalizados aquí si los necesitas
}
