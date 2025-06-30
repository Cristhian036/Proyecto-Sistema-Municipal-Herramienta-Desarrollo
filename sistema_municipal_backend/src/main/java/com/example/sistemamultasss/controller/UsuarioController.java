package com.example.sistemamultasss.controller;

import com.example.sistemamultasss.model.Usuario;
import com.example.sistemamultasss.service.UsuarioService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute Usuario usuario, HttpSession session) {
        Optional<Usuario> existingUser = usuarioService.findByEmail(usuario.getEmail());
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(usuario.getPassword())) {
            session.setAttribute("usuario", existingUser.get());
            return "redirect:/multas";
        } else {
            return "redirect:/usuarios/login?error=true";
        }
    }
}
