package com.utp.sistema_municipal_backend.repositorios;

import com.utp.sistema_municipal_backend.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    public Usuario findByUsername(String username);
}
