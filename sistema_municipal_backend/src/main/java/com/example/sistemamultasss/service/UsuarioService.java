package com.example.sistemamultasss.service;

import java.util.Optional;

import com.example.sistemamultasss.model.Usuario;
import com.example.sistemamultasss.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UsuarioService {
	@Autowired
	private UsuarioRepository usuarioRepository;

	public Optional<Usuario> findByEmail(String email) {
		return usuarioRepository.findByEmail(email);
	}

	public Usuario save(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
}
