package com.utp.sistema_municipal_backend.config;

import com.utp.sistema_municipal_backend.model.Rol;
import com.utp.sistema_municipal_backend.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RolRepository rolRepository;

    @Override
    public void run(String... args) throws Exception {
        // Crear rol TRABAJADOR si no existe
        if (rolRepository.findById(1L).isEmpty()) {
            Rol rolTrabajador = new Rol();
            rolTrabajador.setRolId(1L);
            rolTrabajador.setRolNombre("TRABAJADOR");
            rolRepository.save(rolTrabajador);
            System.out.println("Rol TRABAJADOR creado");
        }

        // Crear rol USUARIO si no existe
        if (rolRepository.findById(2L).isEmpty()) {
            Rol rolUsuario = new Rol();
            rolUsuario.setRolId(2L);
            rolUsuario.setRolNombre("USUARIO");
            rolRepository.save(rolUsuario);
            System.out.println("Rol USUARIO creado");
        }
    }
}
