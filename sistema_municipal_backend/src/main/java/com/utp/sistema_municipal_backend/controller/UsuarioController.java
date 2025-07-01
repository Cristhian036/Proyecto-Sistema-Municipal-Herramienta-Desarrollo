package com.utp.sistema_municipal_backend.controller;

import com.utp.sistema_municipal_backend.model.*;
import com.utp.sistema_municipal_backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) throws Exception {
        // perfil eliminado

        Set<UsuarioRol> usuarioRoles = new HashSet<>();

        Rol rol = new Rol();
        rol.setRolId(2L);
        rol.setRolNombre("USUARIO");

        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);
        return usuarioService.guardarUsuario(usuario, usuarioRoles);
    }

    @PostMapping("/trabajador")
    public Usuario guardarTrabajador(@RequestBody Usuario usuario) throws Exception {
        Set<UsuarioRol> usuarioRoles = new HashSet<>();

        Rol rol = new Rol();
        rol.setRolId(1L);
        rol.setRolNombre("TRABAJADOR");

        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);
        return usuarioService.guardarUsuario(usuario, usuarioRoles);
    }

    @GetMapping("/{email}")
    public Usuario obtenerUsuario(@PathVariable("email") String email) {
        return usuarioService.obtenerUsuario(email);
    }

    @GetMapping("/{email}/roles")
    public Set<String> obtenerRolesUsuario(@PathVariable("email") String email) {
        Usuario usuario = usuarioService.obtenerUsuario(email);
        if (usuario != null) {
            return usuario.getUsuarioRoles().stream()
                    .map(usuarioRol -> usuarioRol.getRol().getRolNombre())
                    .collect(Collectors.toSet());
        }
        return new HashSet<>();
    }

    @DeleteMapping("/{usuarioId}")
    public void eliminarUsuario(@PathVariable("usuarioId") Long usuarioId) {
        usuarioService.eliminarUsuario(usuarioId);
    }
}
