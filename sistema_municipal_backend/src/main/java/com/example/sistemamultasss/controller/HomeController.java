package com.example.sistemamultasss.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "buscar"; // Asegúrate de que "buscar" sea el nombre correcto de tu vista
    }
}
