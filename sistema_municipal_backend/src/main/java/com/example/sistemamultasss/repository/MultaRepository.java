package com.example.sistemamultasss.repository;

import java.util.List;
import java.util.Optional;

import com.example.sistemamultasss.model.Multa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface MultaRepository extends JpaRepository<Multa, Long> {
    Optional<Multa> findByCodigo(String codigo);
    List<Multa> findByCodigoOrNumeroTarjetaIdentificacionVehicular(String codigo, String numeroTarjetaIdentificacionVehicular);
}
