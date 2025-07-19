package com.example.sistemamultasss.controller;

import com.example.sistemamultasss.model.Multa;
import com.example.sistemamultasss.model.Pago;
import com.example.sistemamultasss.service.MultaService;
import com.example.sistemamultasss.service.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.util.stream.Collectors;
@RestController
@RequestMapping("/api/multas")
public class MultaController {

	@Autowired
	private MultaService multaService;

	@Autowired
	private PagoService pagoService;

	@GetMapping("/{id}/pago")
	public ResponseEntity<Multa> mostrarPago(@PathVariable Long id) {
		Multa multa = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		return ResponseEntity.ok(multa);
	}

	@PostMapping("/{id}/procesar-pago")
	public ResponseEntity<Multa> procesarPago(@PathVariable Long id, @RequestParam String cardNumber, @RequestParam String monto) {
		Multa multa = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		multa.setEstado("PAGADO");
		multaService.save(multa);
		pagoService.guardarPago(multa.getCodigo(), cardNumber, monto);
		return ResponseEntity.ok(multa);
	}

	@GetMapping("/{id}/pago-exitoso")
	public ResponseEntity<Map<String, Long>> pagoExitoso(@PathVariable Long id) {
		Map<String, Long> response = new HashMap<>();
		response.put("multaId", id);
		return ResponseEntity.ok(response);
	}

	@GetMapping("/buscar")
	public ResponseEntity<List<Multa>> buscarMulta() {
		List<Multa> multas = multaService.findAll();
		return ResponseEntity.ok(multas);
	}

	@PostMapping("/buscar")
	public ResponseEntity<Multa> resultadoMulta(@RequestParam String codigoMulta) {
		Multa multa = multaService.findByCodigo(codigoMulta)
				.orElseThrow(() -> new IllegalArgumentException("Código de multa inválido"));
		return ResponseEntity.ok(multa);
	}

	@GetMapping
	public ResponseEntity<List<Multa>> findAll(@RequestParam(value = "search", required = false) String search) {
		List<Multa> multas;
		if (search != null && !search.isEmpty()) {
			multas = multaService.findByCodigoOrPlaca(search);
		} else {
			multas = multaService.findAll();
		}
		return ResponseEntity.ok(multas);
	}

	@PostMapping
	public ResponseEntity<Multa> save(@RequestBody Multa multa) {
		if (multa.getCodigo() == null || multa.getCodigo().isEmpty()) {
			multa.setCodigo(generateUniqueCode());
		}
		Multa savedMulta = multaService.save(multa);
		return ResponseEntity.ok(savedMulta);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Multa> update(@PathVariable Long id, @RequestBody Multa multa) {
		Multa existingMulta = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		multa.setId(id);
		Multa updatedMulta = multaService.save(multa);
		return ResponseEntity.ok(updatedMulta);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id) {
		multaService.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/{id}/pagar")
	public ResponseEntity<Void> pagarMulta(@PathVariable Long id) {
		multaService.pagarMulta(id);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/{id}/resultado")
	public ResponseEntity<Multa> verResultado(@PathVariable Long id) {
		Multa multa = multaService.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
		return ResponseEntity.ok(multa);
	}

	@GetMapping("/pagos")
	public ResponseEntity<List<Map<String, Object>>> verPagos(@RequestParam(required = false) String search) {
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
		return ResponseEntity.ok(pagosConDetalles);
	}

	private String generateUniqueCode() {
		return "MUL" + System.currentTimeMillis();
	}
}
