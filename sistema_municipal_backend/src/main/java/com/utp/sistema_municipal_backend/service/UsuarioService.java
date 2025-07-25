package com.utp.sistema_municipal_backend.service;


import com.utp.sistema_municipal_backend.model.*;

import java.util.Set;

public interface UsuarioService {

    Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    Usuario obtenerUsuario(String email);

    void eliminarUsuario(Long usuarioId);
}
