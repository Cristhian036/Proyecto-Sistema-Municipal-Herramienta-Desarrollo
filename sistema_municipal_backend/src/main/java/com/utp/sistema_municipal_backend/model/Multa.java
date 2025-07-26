package com.utp.sistema_municipal_backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "multas")
public class Multa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String codigo;
    
    private String apellidosNombres;
    private String domicilio;
    private String dniRuc;
    private String codigoInfraccion;
    private String calificacion;
    private String sancion;
    private Integer puntosAcumula;
    private String medidaPreventiva;
    
    private LocalDate fechaInfraccion;
    private LocalTime horaInfraccion;
    
    @Column(columnDefinition = "TEXT")
    private String descripcionInfraccion;
    
    @Column(columnDefinition = "TEXT")
    private String informacionAdicional;
    
    private String lugarInfraccion;
    private String distrito;
    private String provincia;
    private String departamento;
    private String referencia;
    private String placa;
    private String tarjetaIdentificacion;
    private String apellidosAutoridad;
    private String nombresAutoridad;
    private String cipDni;
    private String estado; // "ACTIVO" o "PAGADO"

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    // Constructores
    public Multa() {}

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getApellidosNombres() {
        return apellidosNombres;
    }

    public void setApellidosNombres(String apellidosNombres) {
        this.apellidosNombres = apellidosNombres;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getDniRuc() {
        return dniRuc;
    }

    public void setDniRuc(String dniRuc) {
        this.dniRuc = dniRuc;
    }

    public String getCodigoInfraccion() {
        return codigoInfraccion;
    }

    public void setCodigoInfraccion(String codigoInfraccion) {
        this.codigoInfraccion = codigoInfraccion;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public String getSancion() {
        return sancion;
    }

    public void setSancion(String sancion) {
        this.sancion = sancion;
    }

    public Integer getPuntosAcumula() {
        return puntosAcumula;
    }

    public void setPuntosAcumula(Integer puntosAcumula) {
        this.puntosAcumula = puntosAcumula;
    }

    public String getMedidaPreventiva() {
        return medidaPreventiva;
    }

    public void setMedidaPreventiva(String medidaPreventiva) {
        this.medidaPreventiva = medidaPreventiva;
    }

    public LocalDate getFechaInfraccion() {
        return fechaInfraccion;
    }

    public void setFechaInfraccion(LocalDate fechaInfraccion) {
        this.fechaInfraccion = fechaInfraccion;
    }

    public LocalTime getHoraInfraccion() {
        return horaInfraccion;
    }

    public void setHoraInfraccion(LocalTime horaInfraccion) {
        this.horaInfraccion = horaInfraccion;
    }

    public String getDescripcionInfraccion() {
        return descripcionInfraccion;
    }

    public void setDescripcionInfraccion(String descripcionInfraccion) {
        this.descripcionInfraccion = descripcionInfraccion;
    }

    public String getInformacionAdicional() {
        return informacionAdicional;
    }

    public void setInformacionAdicional(String informacionAdicional) {
        this.informacionAdicional = informacionAdicional;
    }

    public String getLugarInfraccion() {
        return lugarInfraccion;
    }

    public void setLugarInfraccion(String lugarInfraccion) {
        this.lugarInfraccion = lugarInfraccion;
    }

    public String getDistrito() {
        return distrito;
    }

    public void setDistrito(String distrito) {
        this.distrito = distrito;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getTarjetaIdentificacion() {
        return tarjetaIdentificacion;
    }

    public void setTarjetaIdentificacion(String tarjetaIdentificacion) {
        this.tarjetaIdentificacion = tarjetaIdentificacion;
    }

    public String getApellidosAutoridad() {
        return apellidosAutoridad;
    }

    public void setApellidosAutoridad(String apellidosAutoridad) {
        this.apellidosAutoridad = apellidosAutoridad;
    }

    public String getNombresAutoridad() {
        return nombresAutoridad;
    }

    public void setNombresAutoridad(String nombresAutoridad) {
        this.nombresAutoridad = nombresAutoridad;
    }

    public String getCipDni() {
        return cipDni;
    }

    public void setCipDni(String cipDni) {
        this.cipDni = cipDni;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    
    // Getters y setters adicionales para compatibilidad con frontend
    
    // Mapeo para dniInfractor -> dniRuc
    public String getDniInfractor() {
        return this.dniRuc;
    }
    
    public void setDniInfractor(String dniInfractor) {
        this.dniRuc = dniInfractor;
    }
    
    // Mapeo para nombreInfractor - extraer nombre de apellidosNombres
    public String getNombreInfractor() {
        if (this.apellidosNombres != null && this.apellidosNombres.contains(",")) {
            String[] parts = this.apellidosNombres.split(",");
            return parts.length > 1 ? parts[1].trim() : "";
        }
        return this.apellidosNombres;
    }
    
    public void setNombreInfractor(String nombreInfractor) {
        if (this.apellidosNombres == null) {
            this.apellidosNombres = nombreInfractor;
        } else if (!this.apellidosNombres.contains(",")) {
            this.apellidosNombres = this.apellidosNombres + ", " + nombreInfractor;
        }
    }
    
    // Mapeo para apellidosInfractor - extraer apellidos de apellidosNombres  
    public String getApellidosInfractor() {
        if (this.apellidosNombres != null && this.apellidosNombres.contains(",")) {
            String[] parts = this.apellidosNombres.split(",");
            return parts[0].trim();
        }
        return this.apellidosNombres;
    }
    
    public void setApellidosInfractor(String apellidosInfractor) {
        if (this.apellidosNombres == null) {
            this.apellidosNombres = apellidosInfractor;
        } else if (!this.apellidosNombres.contains(",")) {
            this.apellidosNombres = apellidosInfractor + ", " + this.apellidosNombres;
        }
    }
    
    // Mapeo para monto - por ahora retornamos 0, se puede agregar campo real después
    public Double getMonto() {
        return 0.0; // TODO: agregar campo monto a la entidad si es necesario
    }
    
    public void setMonto(Double monto) {
        // TODO: implementar cuando se agregue campo monto
    }
    
    // Mapeo para placaVehiculo -> placa
    public String getPlacaVehiculo() {
        return this.placa;
    }
    
    public void setPlacaVehiculo(String placaVehiculo) {
        this.placa = placaVehiculo;
    }
    
    // Mapeo para agenteEmisor -> nombresAutoridad
    public String getAgenteEmisor() {
        return this.nombresAutoridad;
    }
    
    public void setAgenteEmisor(String agenteEmisor) {
        this.nombresAutoridad = agenteEmisor;
    }
    
    // Mapeo para observaciones -> informacionAdicional
    public String getObservaciones() {
        return this.informacionAdicional;
    }
    
    public void setObservaciones(String observaciones) {
        this.informacionAdicional = observaciones;
    }
    
    // Mapeo para tipoInfraccion -> codigoInfraccion
    public String getTipoInfraccion() {
        return this.codigoInfraccion;
    }
    
    public void setTipoInfraccion(String tipoInfraccion) {
        this.codigoInfraccion = tipoInfraccion;
    }
    
    // Mapeo para fechaVencimiento - por ahora retornamos null
    public String getFechaVencimiento() {
        return null; // TODO: agregar campo fechaVencimiento si es necesario
    }
    
    public void setFechaVencimiento(String fechaVencimiento) {
        // TODO: implementar cuando se agregue campo fechaVencimiento
    }
}