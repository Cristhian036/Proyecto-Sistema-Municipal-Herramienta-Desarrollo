package com.utp.sistema_municipal_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "noticias")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Noticia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El título es requerido")
    @Size(min = 3, max = 200, message = "El título debe tener entre 3 y 200 caracteres")
    @Column(nullable = false, length = 200)
    private String titulo;

    @Column(length = 500)
    private String imagen; // nombre del archivo

    @NotBlank(message = "La descripción es requerida")
    @Size(min = 10, max = 2000, message = "La descripción debe tener entre 10 y 2000 caracteres")
    @Column(nullable = false, length = 2000)
    private String descripcion;

    @NotBlank(message = "El autor es requerido")
    @Size(min = 2, max = 100, message = "El autor debe tener entre 2 y 100 caracteres")
    @Column(nullable = false, length = 100)
    private String autor;

    @NotNull
    @Column(nullable = false)
    private LocalDateTime fecha;

    @PrePersist
    public void prePersist() {
        if (fecha == null) {
            fecha = LocalDateTime.now();
        }
    }
}