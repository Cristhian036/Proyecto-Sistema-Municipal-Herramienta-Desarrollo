package com.utp.sistema_municipal_backend.controller;

import com.utp.sistema_municipal_backend.model.Multa;
import com.utp.sistema_municipal_backend.service.MultaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/multas")
public class MultaController {

    @Autowired
    private MultaService multaService;

    // 1. Crear multa (actualizado)
    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> crearMulta(@Valid @RequestBody Multa multa) {
        try {
            Multa nuevaMulta = multaService.crearMulta(multa);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevaMulta);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Error al crear la multa",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 2. Buscar por código (sin cambios)
    @GetMapping("/codigo/{codigo}")
    public ResponseEntity<?> buscarPorCodigo(@PathVariable String codigo) {
        try {
            Multa multa = multaService.buscarPorCodigo(codigo);
            return ResponseEntity.ok(multa);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(
                "error", "Multa no encontrada",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 3. Buscar por DNI (actualizado)
    @GetMapping("/dni/{dniRuc}")
    public ResponseEntity<?> buscarPorDniRuc(
            @PathVariable String dniRuc,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fechaInfraccion") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        try {
            Sort sort = sortDir.equalsIgnoreCase("desc") 
                ? Sort.by(sortBy).descending() 
                : Sort.by(sortBy).ascending();
            
            Pageable pageable = PageRequest.of(page, size, sort);
            Page<Multa> multas = multaService.buscarPorDniRuc(dniRuc, pageable);
            
            return ResponseEntity.ok(Map.of(
                "content", multas.getContent(),
                "totalElements", multas.getTotalElements(),
                "totalPages", multas.getTotalPages(),
                "currentPage", multas.getNumber(),
                "size", multas.getSize()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "Error al buscar multas",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 4. Obtener todas (actualizado)
    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> obtenerTodas(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fechaInfraccion") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        try {
            System.out.println("🔍 Obteniendo multas - página: " + page + ", tamaño: " + size + ", ordenar por: " + sortBy);
            
            // Validar campo de ordenamiento
            String[] camposValidos = {"id", "codigo", "fechaInfraccion", "apellidosNombres", "dniRuc", "lugarInfraccion"};
            boolean campoValido = false;
            for (String campo : camposValidos) {
                if (campo.equals(sortBy)) {
                    campoValido = true;
                    break;
                }
            }
            
            if (!campoValido) {
                System.out.println("⚠️ Campo de ordenamiento inválido: " + sortBy + ". Usando 'id' por defecto.");
                sortBy = "id";
            }
            
            Sort sort = sortDir.equalsIgnoreCase("desc") 
                ? Sort.by(sortBy).descending() 
                : Sort.by(sortBy).ascending();
            
            Pageable pageable = PageRequest.of(page, size, sort);
            Page<Multa> multas = multaService.obtenerTodas(pageable);
            
            System.out.println("✅ Multas obtenidas: " + multas.getTotalElements() + " total, " + multas.getContent().size() + " en esta página");
            
            // Si no hay multas, retornar mensaje apropiado
            if (multas.getTotalElements() == 0) {
                return ResponseEntity.ok(Map.of(
                    "content", multas.getContent(),
                    "totalElements", 0L,
                    "totalPages", 0,
                    "currentPage", 0,
                    "size", size,
                    "mensaje", "No hay multas registradas en el sistema"
                ));
            }
            
            return ResponseEntity.ok(Map.of(
                "content", multas.getContent(),
                "totalElements", multas.getTotalElements(),
                "totalPages", multas.getTotalPages(),
                "currentPage", multas.getNumber(),
                "size", multas.getSize()
            ));
        } catch (Exception e) {
            System.err.println("❌ Error al obtener multas: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "Error al obtener multas",
                "mensaje", e.getMessage(),
                "tipo", e.getClass().getSimpleName()
            ));
        }
    }

    // 5. Obtener por ID (sin cambios)
    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> obtenerPorId(@PathVariable Long id) {
        try {
            Multa multa = multaService.obtenerPorId(id);
            return ResponseEntity.ok(multa);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(
                "error", "Multa no encontrada",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 6. Actualizar multa (sin cambios)
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> actualizarMulta(@PathVariable Long id, @Valid @RequestBody Multa multa) {
        try {
            Multa multaActualizada = multaService.actualizarMulta(id, multa);
            return ResponseEntity.ok(multaActualizada);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Error al actualizar la multa",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 7. Eliminar multa (sin cambios)
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> eliminarMulta(@PathVariable Long id) {
        try {
            multaService.eliminarMulta(id);
            return ResponseEntity.ok(Map.of("mensaje", "Multa eliminada exitosamente"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Error al eliminar la multa",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 8. Pagar multa (actualizado)
    @PostMapping("/pagar/{codigo}")
    public ResponseEntity<?> pagarMulta(@PathVariable String codigo) {
        try {
            Multa multaPagada = multaService.pagarMulta(codigo);
            return ResponseEntity.ok(Map.of(
                "mensaje", "Multa pagada exitosamente",
                "multa", multaPagada
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Error al pagar la multa",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 9. Cambiar estado (actualizado)
    @PatchMapping("/{id}/estado")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> cambiarEstado(@PathVariable Long id, @RequestParam String estado) {
        try {
            Multa multaActualizada = multaService.cambiarEstado(id, estado);
            return ResponseEntity.ok(multaActualizada);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Error al cambiar estado",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 10. Buscar por estado (actualizado)
    @GetMapping("/estado/{estado}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> buscarPorEstado(
            @PathVariable String estado,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fechaInfraccion") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        try {
            Sort sort = sortDir.equalsIgnoreCase("desc") 
                ? Sort.by(sortBy).descending() 
                : Sort.by(sortBy).ascending();
            
            Pageable pageable = PageRequest.of(page, size, sort);
            Page<Multa> multas = multaService.buscarPorEstado(estado, pageable);
            
            return ResponseEntity.ok(Map.of(
                "content", multas.getContent(),
                "totalElements", multas.getTotalElements(),
                "totalPages", multas.getTotalPages(),
                "currentPage", multas.getNumber(),
                "size", multas.getSize()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "Error al buscar multas por estado",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 11. Buscar pendientes (actualizado)
    @GetMapping("/pendientes/{dniRuc}")
    public ResponseEntity<?> buscarMultasPendientes(@PathVariable String dniRuc) {
        try {
            List<Multa> multasPendientes = multaService.buscarMultasPendientes(dniRuc);
            return ResponseEntity.ok(multasPendientes);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "Error al buscar multas pendientes",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 12. Búsqueda con filtros (actualizado)
    @GetMapping("/buscar")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> buscarConFiltros(
            @RequestParam(required = false) String dniRuc,
            @RequestParam(required = false) String estado,
            @RequestParam(required = false) String codigoInfraccion,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fechaInfraccion") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        try {
            Sort sort = sortDir.equalsIgnoreCase("desc") 
                ? Sort.by(sortBy).descending() 
                : Sort.by(sortBy).ascending();
            
            Pageable pageable = PageRequest.of(page, size, sort);
            Page<Multa> multas = multaService.buscarConFiltros(
                dniRuc, 
                estado, 
                codigoInfraccion,
                fechaDesde, 
                fechaHasta, 
                pageable
            );
            
            return ResponseEntity.ok(Map.of(
                "content", multas.getContent(),
                "totalElements", multas.getTotalElements(),
                "totalPages", multas.getTotalPages(),
                "currentPage", multas.getNumber(),
                "size", multas.getSize()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "Error al buscar con filtros",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 13. Obtener estadísticas (actualizado)
    @GetMapping("/estadisticas")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> obtenerEstadisticas() {
        try {
            Map<String, Object> estadisticas = multaService.obtenerEstadisticas();
            return ResponseEntity.ok(estadisticas);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "Error al obtener estadísticas",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 14. Generar código único (sin cambios)
    @GetMapping("/generar-codigo")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('TRABAJADOR')")
    public ResponseEntity<?> generarCodigo() {
        try {
            String codigo = multaService.generarCodigoUnico();
            return ResponseEntity.ok(Map.of("codigo", codigo));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "Error al generar código",
                "mensaje", e.getMessage()
            ));
        }
    }

    // 15. Nuevo: Obtener posibles estados
    @GetMapping("/posibles-estados")
    public ResponseEntity<?> obtenerPosiblesEstados() {
        return ResponseEntity.ok(List.of("ACTIVO", "PAGADO"));
    }

}