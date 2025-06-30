package com.example.sistemamultasss.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Pago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codigoMulta;
    private String numeroTarjeta;
    private String monto;
    private LocalDateTime fechaHoraPago;

    // Relación con la entidad Multa
    @ManyToOne
    @JoinColumn(name = "multa_id")
    private Multa multa;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodigoMulta() {
        return codigoMulta;
    }

    public void setCodigoMulta(String codigoMulta) {
        this.codigoMulta = codigoMulta;
    }

    public String getNumeroTarjeta() {
        return numeroTarjeta;
    }

    public void setNumeroTarjeta(String numeroTarjeta) {
        this.numeroTarjeta = numeroTarjeta;
    }

    public String getMonto() {
        return monto;
    }

    public void setMonto(String monto) {
        this.monto = monto;
    }

    public LocalDateTime getFechaHoraPago() {
        return fechaHoraPago;
    }

    public void setFechaHoraPago(LocalDateTime fechaHoraPago) {
        this.fechaHoraPago = fechaHoraPago;
    }

    public Multa getMulta() {
        return multa;
    }

    public void setMulta(Multa multa) {
        this.multa = multa;
    }
}
