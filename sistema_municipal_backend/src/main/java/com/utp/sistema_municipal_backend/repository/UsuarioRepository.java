package com.utp.sistema_municipal_backend.repository;

import com.utp.sistema_municipal_backend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}
