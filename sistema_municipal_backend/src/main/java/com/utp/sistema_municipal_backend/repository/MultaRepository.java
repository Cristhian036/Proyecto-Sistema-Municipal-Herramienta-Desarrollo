package com.utp.sistema_municipal_backend.repository;

import com.utp.sistema_municipal_backend.model.Multa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MultaRepository extends JpaRepository<Multa, Long> {
    
    // Métodos existentes
    Optional<Multa> findByCodigo(String codigo);
    List<Multa> findByCodigoOrTarjetaIdentificacion(String codigo, String tarjetaIdentificacion);
    
    // Nuevos métodos para búsquedas específicas
    Page<Multa> findByDniRucContaining(String dniRuc, Pageable pageable);
    
    Page<Multa> findByPlacaContainingIgnoreCase(String placa, Pageable pageable);
    
    Page<Multa> findByEstado(String estado, Pageable pageable);
    
    Page<Multa> findByCalificacion(String calificacion, Pageable pageable);
    
    Page<Multa> findByNombresAutoridadContainingIgnoreCase(String nombres, Pageable pageable);
    
    Page<Multa> findByApellidosAutoridadContainingIgnoreCase(String apellidos, Pageable pageable);
    
    // Búsquedas por ubicación
    Page<Multa> findByDistritoContainingIgnoreCase(String distrito, Pageable pageable);
    
    Page<Multa> findByProvinciaContainingIgnoreCase(String provincia, Pageable pageable);
    
    Page<Multa> findByDepartamentoContainingIgnoreCase(String departamento, Pageable pageable);
    
    // Búsqueda combinada por nombres y apellidos del infractor
    @Query("SELECT m FROM Multa m WHERE m.apellidosNombres LIKE %:busqueda%")
    Page<Multa> findByApellidosNombresContaining(@Param("busqueda") String busqueda, Pageable pageable);
    
    // Búsqueda por descripción de infracción
    Page<Multa> findByDescripcionInfraccionContainingIgnoreCase(String descripcion, Pageable pageable);
    
    // Búsqueda por lugar de infracción
    Page<Multa> findByLugarInfraccionContainingIgnoreCase(String lugar, Pageable pageable);
}
