package com.utp.sistema_municipal_backend.servicios;

import com.utp.sistema_municipal_backend.modelo.Usuario;
import com.utp.sistema_municipal_backend.modelo.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);
}
