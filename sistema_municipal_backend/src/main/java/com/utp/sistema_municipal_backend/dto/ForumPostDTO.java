package com.utp.sistema_municipal_backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ForumPostDTO {
    private Long id;
    private String titulo;
    private String contenido;
    private String nombreUsuario;
    private Date fechaCreacion;
}
