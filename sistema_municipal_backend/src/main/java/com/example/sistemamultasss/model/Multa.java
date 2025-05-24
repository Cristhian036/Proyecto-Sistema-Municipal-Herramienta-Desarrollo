package com.example.sistemamultasss.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Multa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codigo;

    // Datos del Conductor
    private String licenciaConducir;
    private String tipoDocumentoIdentidad;
    private String documentoIdentidad;
    private String nombresConductor;
    private String apellidosConductor;
    private String domicilio;
    private String departamentoNacimiento;
    private String provinciaNacimiento;
    private String distritoNacimiento;

    // Datos del Vehículo
    private String numeroTarjetaIdentificacionVehicular;
    private String tipoPlaca; // "PERU", "EXTRANJERA", "SIN_PLACA"
    private String modalidadServicio; // "PARTICULAR", "MERCANCIAS", "PASAJEROS", etc.

    // Datos de la Infracción
    private String codigoInfraccion;
    private String calificacion; // "LEVE", "GRAVE", "MUY_GRAVE"
    private String sancion; // "MULTA", "NO_PECUNIARIA"
    private Boolean esReincidente;
    private Integer puntosAcumulados;
    private String medidaPreventiva; // "RETENCION_LICENCIA", "INTERNAMIENTO_VEHICULO", etc.

    // Ubicación de la Infracción
    private String codigoDepartamento;
    private String codigoProvincia;
    private String codigoDistrito;
    private LocalDateTime fechaHora;
    private String codigoRutaVia;
    private String kilometroCuadra;
    private String nombreVia;
    private String descripcionConductaInfractora;
    private String descripcionHeridos;
    private String observacionPNP;
    private String detallesTestigo;

    // Datos del Agente
    private String apellidoPaternoAgente;
    private String apellidoMaternoAgente;
    private String nombreAgente;
    private String numeroCIP;

    // Detalles adicionales del Conductor
    private String detallesConductor;

    @ManyToOne
    private Usuario usuario;

    // Getters y setters

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

    public String getLicenciaConducir() {
        return licenciaConducir;
    }

    public void setLicenciaConducir(String licenciaConducir) {
        this.licenciaConducir = licenciaConducir;
    }

    public String getTipoDocumentoIdentidad() {
        return tipoDocumentoIdentidad;
    }

    public void setTipoDocumentoIdentidad(String tipoDocumentoIdentidad) {
        this.tipoDocumentoIdentidad = tipoDocumentoIdentidad;
    }

    public String getDocumentoIdentidad() {
        return documentoIdentidad;
    }

    public void setDocumentoIdentidad(String documentoIdentidad) {
        this.documentoIdentidad = documentoIdentidad;
    }

    public String getNombresConductor() {
        return nombresConductor;
    }

    public void setNombresConductor(String nombresConductor) {
        this.nombresConductor = nombresConductor;
    }

    public String getApellidosConductor() {
        return apellidosConductor;
    }

    public void setApellidosConductor(String apellidosConductor) {
        this.apellidosConductor = apellidosConductor;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getDepartamentoNacimiento() {
        return departamentoNacimiento;
    }

    public void setDepartamentoNacimiento(String departamentoNacimiento) {
        this.departamentoNacimiento = departamentoNacimiento;
    }

    public String getProvinciaNacimiento() {
        return provinciaNacimiento;
    }

    public void setProvinciaNacimiento(String provinciaNacimiento) {
        this.provinciaNacimiento = provinciaNacimiento;
    }

    public String getDistritoNacimiento() {
        return distritoNacimiento;
    }

    public void setDistritoNacimiento(String distritoNacimiento) {
        this.distritoNacimiento = distritoNacimiento;
    }

    public String getNumeroTarjetaIdentificacionVehicular() {
        return numeroTarjetaIdentificacionVehicular;
    }

    public void setNumeroTarjetaIdentificacionVehicular(String numeroTarjetaIdentificacionVehicular) {
        this.numeroTarjetaIdentificacionVehicular = numeroTarjetaIdentificacionVehicular;
    }

    public String getTipoPlaca() {
        return tipoPlaca;
    }

    public void setTipoPlaca(String tipoPlaca) {
        this.tipoPlaca = tipoPlaca;
    }

    public String getModalidadServicio() {
        return modalidadServicio;
    }

    public void setModalidadServicio(String modalidadServicio) {
        this.modalidadServicio = modalidadServicio;
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

    public Boolean getEsReincidente() {
        return esReincidente;
    }

    public void setEsReincidente(Boolean esReincidente) {
        this.esReincidente = esReincidente;
    }

    public Integer getPuntosAcumulados() {
        return puntosAcumulados;
    }

    public void setPuntosAcumulados(Integer puntosAcumulados) {
        this.puntosAcumulados = puntosAcumulados;
    }

    public String getMedidaPreventiva() {
        return medidaPreventiva;
    }

    public void setMedidaPreventiva(String medidaPreventiva) {
        this.medidaPreventiva = medidaPreventiva;
    }

    public String getCodigoDepartamento() {
        return codigoDepartamento;
    }

    public void setCodigoDepartamento(String codigoDepartamento) {
        this.codigoDepartamento = codigoDepartamento;
    }

    public String getCodigoProvincia() {
        return codigoProvincia;
    }

    public void setCodigoProvincia(String codigoProvincia) {
        this.codigoProvincia = codigoProvincia;
    }

    public String getCodigoDistrito() {
        return codigoDistrito;
    }

    public void setCodigoDistrito(String codigoDistrito) {
        this.codigoDistrito = codigoDistrito;
    }

    public LocalDateTime getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(LocalDateTime fechaHora) {
        this.fechaHora = fechaHora;
    }

    public String getCodigoRutaVia() {
        return codigoRutaVia;
    }

    public void setCodigoRutaVia(String codigoRutaVia) {
        this.codigoRutaVia = codigoRutaVia;
    }

    public String getKilometroCuadra() {
        return kilometroCuadra;
    }

    public void setKilometroCuadra(String kilometroCuadra) {
        this.kilometroCuadra = kilometroCuadra;
    }

    public String getNombreVia() {
        return nombreVia;
    }

    public void setNombreVia(String nombreVia) {
        this.nombreVia = nombreVia;
    }

    public String getDescripcionConductaInfractora() {
        return descripcionConductaInfractora;
    }

    public void setDescripcionConductaInfractora(String descripcionConductaInfractora) {
        this.descripcionConductaInfractora = descripcionConductaInfractora;
    }

    public String getDescripcionHeridos() {
        return descripcionHeridos;
    }

    public void setDescripcionHeridos(String descripcionHeridos) {
        this.descripcionHeridos = descripcionHeridos;
    }

    public String getObservacionPNP() {
        return observacionPNP;
    }

    public void setObservacionPNP(String observacionPNP) {
        this.observacionPNP = observacionPNP;
    }

    public String getDetallesTestigo() {
        return detallesTestigo;
    }

    public void setDetallesTestigo(String detallesTestigo) {
        this.detallesTestigo = detallesTestigo;
    }

    public String getApellidoPaternoAgente() {
        return apellidoPaternoAgente;
    }

    public void setApellidoPaternoAgente(String apellidoPaternoAgente) {
        this.apellidoPaternoAgente = apellidoPaternoAgente;
    }

    public String getApellidoMaternoAgente() {
        return apellidoMaternoAgente;
    }

    public void setApellidoMaternoAgente(String apellidoMaternoAgente) {
        this.apellidoMaternoAgente = apellidoMaternoAgente;
    }

    public String getNombreAgente() {
        return nombreAgente;
    }

    public void setNombreAgente(String nombreAgente) {
        this.nombreAgente = nombreAgente;
    }

    public String getNumeroCIP() {
        return numeroCIP;
    }

    public void setNumeroCIP(String numeroCIP) {
        this.numeroCIP = numeroCIP;
    }

    public String getDetallesConductor() {
        return detallesConductor;
    }

    public void setDetallesConductor(String detallesConductor) {
        this.detallesConductor = detallesConductor;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Multa() {}
}
