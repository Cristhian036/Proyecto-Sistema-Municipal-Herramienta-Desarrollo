package com.example.sistemamultasss.controller;

import com.example.sistemamultasss.model.Multa;
import com.example.sistemamultasss.model.Pago;
import com.example.sistemamultasss.service.MultaService;
import com.example.sistemamultasss.service.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;




import java.util.List;

@Controller
@RequestMapping("/multas")
public class MultaController {

	@Autowired
	private MultaService multaService;
	@Autowired
	private PagoService pagoService;




	@GetMapping("/pago")
	public String mostrarPago(@RequestParam Long id, Model model) {
		Multa multa = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		model.addAttribute("multa", multa);
		return "pago";
	}

	@PostMapping("/pagar")
	public String procesarPago(@RequestParam Long id, @RequestParam String cardNumber, @RequestParam String monto) {
		Multa multa = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		multa.setEstado("PAGADO");
		multaService.save(multa);

		// Guardar detalles del pago
		pagoService.guardarPago(multa.getCodigo(), cardNumber, monto);

		return "redirect:/multas/pago-exitoso?id=" + id;
	}




	@GetMapping("/pago-exitoso")
	public String pagoExitoso(Model model, @RequestParam Long id) {
		model.addAttribute("multaId", id);
		return "pago-exitoso";
	}





	@GetMapping("/buscar")
	public String buscarMulta() {
		return "buscar";
	}

	@PostMapping("/buscar")
	public String resultadoMulta(@RequestParam String codigoMulta, Model model) {
		Multa multa = multaService.findByCodigo(codigoMulta)
				.orElseThrow(() -> new IllegalArgumentException("Código de multa inválido"));
		model.addAttribute("multa", multa);
		return "resultado";
	}

	@GetMapping
	public String findAll(@RequestParam(value = "search", required = false) String search, Model model) {
		List<Multa> multas;
		if (search != null && !search.isEmpty()) {
			multas = multaService.findByCodigoOrPlaca(search);
		} else {
			multas = multaService.findAll();
		}
		model.addAttribute("multas", multas);
		return "list";
	}

	@GetMapping("/nuevo")
	public String showFormForAdd(Model model) {
		Multa multa = new Multa();
		model.addAttribute("multa", multa);
		return "form";
	}

	@PostMapping
	public String save(@ModelAttribute Multa multa) {
		if (multa.getCodigo() == null || multa.getCodigo().isEmpty()) {
			multa.setCodigo(generateUniqueCode());
		}
		multaService.save(multa);
		return "redirect:/multas";
	}

	@GetMapping("/editar/{id}")
	public String showFormForUpdate(@PathVariable Long id, Model model) {
		Multa multa = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		model.addAttribute("multa", multa);
		return "form";
	}

	@GetMapping("/eliminar/{id}")
	public String deleteById(@PathVariable Long id) {
		multaService.deleteById(id);
		return "redirect:/multas";
	}

	@GetMapping("/pagar/{id}")
	public String pagarMulta(@PathVariable Long id) {
		multaService.pagarMulta(id);
		return "redirect:/multas";
	}

	private String generateUniqueCode() {
		return "MUL" + System.currentTimeMillis();
	}


	@GetMapping("/resultado")
	public String verResultado(@RequestParam Long id, Model model) {
		Multa multa = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		model.addAttribute("multa", multa);
		return "resultado";
	}

	@GetMapping("/pagos")
	public String verPagos(@RequestParam(required = false) String search, Model model) {
		List<Pago> pagos;
		if (search != null && !search.isEmpty()) {
			pagos = pagoService.buscarPorDniOCodigoMulta(search);
		} else {
			pagos = pagoService.obtenerTodosLosPagos();
		}

		List<Map<String, Object>> pagosConDetalles = pagos.stream().map(pago -> {
			Multa multa = multaService.findByCodigo(pago.getCodigoMulta()).orElse(null);
			Map<String, Object> detalles = new HashMap<>();
			detalles.put("pago", pago);
			detalles.put("dniInfractor", multa != null ? multa.getDniRuc() : "No disponible");
			detalles.put("placaCarro", multa != null ? multa.getPlaca() : "No disponible");
			return detalles;
		}).collect(Collectors.toList());

		model.addAttribute("pagos", pagosConDetalles);
		return "pagos";
	}
}
