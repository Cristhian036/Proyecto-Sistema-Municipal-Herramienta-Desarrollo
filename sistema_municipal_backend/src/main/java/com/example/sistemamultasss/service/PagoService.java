package com.example.sistemamultasss.service;

import com.example.sistemamultasss.model.Pago;
import com.example.sistemamultasss.repository.PagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PagoService {

    @Autowired
    private PagoRepository pagoRepository;

    @Autowired
    private MultaService multaService;

    public Pago guardarPago(String codigoMulta, String numeroTarjeta, String monto) {
        Pago pago = new Pago();
        pago.setCodigoMulta(codigoMulta);
        pago.setNumeroTarjeta(numeroTarjeta);
        pago.setMonto(monto);
        pago.setFechaHoraPago(LocalDateTime.now());
        return pagoRepository.save(pago);
    }

    public List<Pago> obtenerTodosLosPagos() {
        return pagoRepository.findAll();
    }

    public List<Pago> buscarPorDniOCodigoMulta(String search) {
        return pagoRepository.findAll().stream()
                .filter(pago -> {
                    String dni = multaService.findByCodigo(pago.getCodigoMulta())
                            .map(multa -> multa.getDniRuc())
                            .orElse("");
                    return pago.getCodigoMulta().equals(search) || dni.equals(search);
                })
                .collect(Collectors.toList());
    }
}
