package com.example.sistemamultasss.controller;

import java.util.Optional;

import com.example.sistemamultasss.model.Usuario;
import com.example.sistemamultasss.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.servlet.http.HttpSession;


@Controller
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("usuario", new Usuario()); // Añade un nuevo objeto Usuario al modelo
        return "login"; // Asegúrate de que "login" sea el nombre correcto de tu vista
    }

    @PostMapping("/login")
    public String login(@ModelAttribute Usuario usuario, HttpSession session) {
        Optional<Usuario> existingUser = usuarioService.findByEmail(usuario.getEmail());
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(usuario.getPassword())) {
            session.setAttribute("usuario", existingUser.get());
            if ("TRABAJADOR".equals(existingUser.get().getRol())) {
                return "redirect:/multas"; // Redirige a la lista de multas si el rol es TRABAJADOR
            } else {
                return "redirect:/multas/buscar"; // Redirige a buscar si el rol no es TRABAJADOR
            }
        } else {
            return "redirect:/usuarios/login"; // Redirige de nuevo al login si el inicio de sesión falla
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/usuarios/login";
    }
}
