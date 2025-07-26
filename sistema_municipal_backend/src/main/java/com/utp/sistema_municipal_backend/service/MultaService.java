package com.utp.sistema_municipal_backend.service;

import com.utp.sistema_municipal_backend.model.Multa;
import com.utp.sistema_municipal_backend.repository.MultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MultaService {

    @Autowired
    private MultaRepository multaRepository;

    // Método para crear multa
    public Multa crearMulta(Multa multa) {
        if (multa.getEstado() == null) {
            multa.setEstado("PENDIENTE");
        }
        
        // Mapear campos del frontend al backend
        mapearCamposFrontendBackend(multa);
        
        return multaRepository.save(multa);
    }
    
    // Método para mapear campos del frontend al formato del backend
    private void mapearCamposFrontendBackend(Multa multa) {
        // Si viene con formato del frontend, mapear a formato del backend
        // El frontend envía campos separados que necesitamos combinar o mapear
        
        // Si hay datos de nombres/apellidos separados, combinarlos
        if (multa.getApellidosNombres() == null || multa.getApellidosNombres().isEmpty()) {
            // El frontend podría enviar estos datos en otros campos, por ahora mantenemos lo que hay
        }
        
        // Mapear placa del frontend al backend
        if (multa.getPlaca() == null && multa.getTarjetaIdentificacion() != null) {
            multa.setPlaca(multa.getTarjetaIdentificacion());
        }
    }

    // Método para buscar por código
    public Multa buscarPorCodigo(String codigo) {
        return multaRepository.findByCodigo(codigo)
                .orElseThrow(() -> new RuntimeException("Multa con código " + codigo + " no encontrada"));
    }

    // Método para buscar por DNI/RUC con paginación
    public Page<Multa> buscarPorDniRuc(String dniRuc, Pageable pageable) {
        return multaRepository.findByDniRucContaining(dniRuc, pageable);
    }

    // Método para obtener todas las multas con paginación
    public Page<Multa> obtenerTodas(Pageable pageable) {
        return multaRepository.findAll(pageable);
    }

    // Método para contar todas las multas
    public long contarTodas() {
        return multaRepository.count();
    }

    // Método para obtener multa por ID
    public Multa obtenerPorId(Long id) {
        return multaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Multa con ID " + id + " no encontrada"));
    }

    // Método para actualizar multa
    public Multa actualizarMulta(Long id, Multa multaActualizada) {
        Multa multaExistente = obtenerPorId(id);
        
        // Actualizar campos usando los getters/setters reales
        multaExistente.setCodigo(multaActualizada.getCodigo());
        multaExistente.setApellidosNombres(multaActualizada.getApellidosNombres());
        multaExistente.setDomicilio(multaActualizada.getDomicilio());
        multaExistente.setDniRuc(multaActualizada.getDniRuc());
        multaExistente.setCodigoInfraccion(multaActualizada.getCodigoInfraccion());
        multaExistente.setCalificacion(multaActualizada.getCalificacion());
        multaExistente.setSancion(multaActualizada.getSancion());
        multaExistente.setDescripcionInfraccion(multaActualizada.getDescripcionInfraccion());
        multaExistente.setInformacionAdicional(multaActualizada.getInformacionAdicional());
        multaExistente.setLugarInfraccion(multaActualizada.getLugarInfraccion());
        multaExistente.setDistrito(multaActualizada.getDistrito());
        multaExistente.setProvincia(multaActualizada.getProvincia());
        multaExistente.setDepartamento(multaActualizada.getDepartamento());
        multaExistente.setReferencia(multaActualizada.getReferencia());
        multaExistente.setPlaca(multaActualizada.getPlaca());
        multaExistente.setTarjetaIdentificacion(multaActualizada.getTarjetaIdentificacion());
        multaExistente.setApellidosAutoridad(multaActualizada.getApellidosAutoridad());
        multaExistente.setNombresAutoridad(multaActualizada.getNombresAutoridad());
        multaExistente.setCipDni(multaActualizada.getCipDni());
        multaExistente.setEstado(multaActualizada.getEstado());
        multaExistente.setFechaInfraccion(multaActualizada.getFechaInfraccion());
        multaExistente.setHoraInfraccion(multaActualizada.getHoraInfraccion());
        
        return multaRepository.save(multaExistente);
    }

    // Método para eliminar multa
    public void eliminarMulta(Long id) {
        Multa multa = obtenerPorId(id);
        multaRepository.delete(multa);
    }

    // Método para buscar multas por placa
    public Page<Multa> buscarPorPlaca(String placa, Pageable pageable) {
        return multaRepository.findByPlacaContainingIgnoreCase(placa, pageable);
    }

    // Método para buscar multas por estado
    public Page<Multa> buscarPorEstado(String estado, Pageable pageable) {
        return multaRepository.findByEstado(estado, pageable);
    }

    // Método para buscar multas por tipo (calificación)
    public Page<Multa> buscarPorTipo(String tipo, Pageable pageable) {
        return multaRepository.findByCalificacion(tipo, pageable);
    }

    // Método para buscar multas por agente emisor (nombres)
    public Page<Multa> buscarPorAgente(String agente, Pageable pageable) {
        return multaRepository.findByNombresAutoridadContainingIgnoreCase(agente, pageable);
    }

    // Método para cambiar estado de multa
    public Multa cambiarEstado(Long id, String nuevoEstado) {
        Multa multa = obtenerPorId(id);
        multa.setEstado(nuevoEstado);
        return multaRepository.save(multa);
    }

    // Métodos heredados del código anterior (para compatibilidad)
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
    
    // Método para pagar multa por código
    public Multa pagarMulta(String codigo) {
        Multa multa = multaRepository.findByCodigo(codigo)
                .orElseThrow(() -> new IllegalArgumentException("Código de multa inválido: " + codigo));
        multa.setEstado("PAGADO");
        return multaRepository.save(multa);
    }
    
    // Método para buscar multas pendientes por DNI
    public List<Multa> buscarMultasPendientes(String dniRuc) {
        return multaRepository.findAll().stream()
                .filter(multa -> dniRuc.equals(multa.getDniRuc()) && "PENDIENTE".equals(multa.getEstado()))
                .toList();
    }
    
    // Método para buscar con filtros
    public Page<Multa> buscarConFiltros(String dniRuc, String placa, String estado, 
                                       java.time.LocalDate fechaInicio, java.time.LocalDate fechaFin, 
                                       Pageable pageable) {
        // Implementación básica, se puede mejorar con Criteria API
        return multaRepository.findAll(pageable);
    }
    
    // Método para obtener estadísticas
    public java.util.Map<String, Object> obtenerEstadisticas() {
        List<Multa> todasMultas = multaRepository.findAll();
        long total = todasMultas.size();
        long pendientes = todasMultas.stream().filter(m -> "PENDIENTE".equals(m.getEstado())).count();
        long pagadas = todasMultas.stream().filter(m -> "PAGADO".equals(m.getEstado())).count();
        
        return java.util.Map.of(
            "total", total,
            "pendientes", pendientes,
            "pagadas", pagadas,
            "vencidas", total - pendientes - pagadas
        );
    }
    
    // Método para generar código único
    public String generarCodigoUnico() {
        String prefix = "MTA-";
        String year = String.valueOf(java.time.LocalDate.now().getYear());
        String numero = String.format("%06d", System.currentTimeMillis() % 1000000);
        return prefix + year + "-" + numero;
    }

    private int calcularPuntos(String calificacion) {
        if (calificacion == null) return 0;
        
        switch (calificacion.toUpperCase()) {
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
