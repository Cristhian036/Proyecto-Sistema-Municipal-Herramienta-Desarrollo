package com.example.sistemamultasss.service;

import java.util.List;
import java.util.Optional;

import com.example.sistemamultasss.model.Multa;
import com.example.sistemamultasss.repository.MultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



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
        return multaRepository.findByCodigoOrNumeroTarjetaIdentificacionVehicular(search, search);
    }

    public Multa save(Multa multa) {
        // Calcular puntos acumulados
        int puntos = calcularPuntos(multa.getCalificacion());
        multa.setPuntosAcumulados(puntos);
        return multaRepository.save(multa);
    }

    public void deleteById(Long id) {
        multaRepository.deleteById(id);
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
