package com.example.sistemamultasss.service;

import com.example.sistemamultasss.model.Multa;
import com.example.sistemamultasss.repository.MultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MultaService {

    @Autowired
    private MultaRepository multaRepository;

    public List<Multa> findAll() {
        return multaRepository.findAll();
    }

    public Optional<Multa> findByCodigo(String codigo) {
        return multaRepository.findByCodigo(codigo);
    }

    public List<Multa> findByCodigoOrPlaca(String search) {
        return multaRepository.findByCodigoOrTarjetaIdentificacion(search, search);
    }

    public Optional<Multa> findById(Long id) {
        return multaRepository.findById(id);
    }

    public Multa save(Multa multa) {
        if (multa.getEstado() == null) {
            multa.setEstado("ACTIVO");
        }
        int puntos = calcularPuntos(multa.getCalificacion());
        multa.setPuntosAcumula(puntos);
        return multaRepository.save(multa);
    }

    public void deleteById(Long id) {
        multaRepository.deleteById(id);
    }

    public void pagarMulta(Long id) {
        Multa multa = multaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ID de multa inválido: " + id));
        multa.setEstado("PAGADO");
        multaRepository.save(multa);
    }

    private int calcularPuntos(String calificacion) {
        switch (calificacion) {
            case "LEVE":
                return 1;
            case "GRAVE":
                return 3;
            case "MUY_GRAVE":
                return 5;
            default:
                return 0;
        }
    }
}
