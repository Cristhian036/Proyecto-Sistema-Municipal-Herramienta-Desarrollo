package com.example.sistemamultasss.repository;

import com.example.sistemamultasss.model.Multa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MultaRepository extends JpaRepository<Multa, Long> {
    Optional<Multa> findByCodigo(String codigo);
    List<Multa> findByCodigoOrTarjetaIdentificacion(String codigo, String tarjetaIdentificacion);

}
