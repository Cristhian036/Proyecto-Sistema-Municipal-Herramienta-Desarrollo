package com.example.sistemamultasss.controller;

import java.util.List;
import java.util.Optional;

import com.example.sistemamultasss.model.Multa;
import com.example.sistemamultasss.service.MultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping("/multas")
public class MultaController {
	@Autowired
	private MultaService multaService;

	@GetMapping
	public String findAll(@RequestParam(value = "search", required = false) String search, Model model) {
		List<Multa> multas;
		if (search != null && !search.isEmpty()) {
			multas = multaService.findByCodigoOrPlaca(search);
		} else {
			multas = multaService.findAll();
		}
		model.addAttribute("multas", multas);
		return "list"; // Asegúrate de que "list" sea el nombre correcto de tu vista
	}

	@GetMapping("/{codigo}")
	public String findByCodigo(@PathVariable String codigo, Model model) {
		Optional<Multa> multa = multaService.findByCodigo(codigo);
		if (multa.isPresent()) {
			model.addAttribute("multa", multa.get());
			return "resultado"; // Asegúrate de que "resultado" sea el nombre correcto de tu vista
		} else {
			model.addAttribute("error", "Multa no encontrada");
			return "buscar"; // Asegúrate de que "buscar" sea el nombre correcto de tu vista
		}
	}

	@GetMapping("/new")
	public String showFormForAdd(Model model) {
		model.addAttribute("multa", new Multa());
		return "form"; // Asegúrate de que "form" sea el nombre correcto de tu vista
	}

	@PostMapping
	public String save(@ModelAttribute Multa multa) {
		multaService.save(multa);
		return "redirect:/multas";
	}

	@GetMapping("/delete/{id}")
	public String deleteById(@PathVariable Long id) {
		multaService.deleteById(id);
		return "redirect:/multas";
	}

	@GetMapping("/buscar")
	public String buscarMulta() {
		return "buscar"; // Asegúrate de que "buscar" sea el nombre correcto de tu vista
	}

	@PostMapping("/buscar")
	public String buscarMultaPorCodigo(@RequestParam String codigo, Model model) {
		Optional<Multa> multa = multaService.findByCodigo(codigo);
		if (multa.isPresent()) {
			model.addAttribute("multa", multa.get());
			return "resultado"; // Asegúrate de que "resultado" sea el nombre correcto de tu vista
		} else {
			model.addAttribute("error", "Multa no encontrada");
			return "buscar"; // Asegúrate de que "buscar" sea el nombre correcto de tu vista
		}
	}
}
