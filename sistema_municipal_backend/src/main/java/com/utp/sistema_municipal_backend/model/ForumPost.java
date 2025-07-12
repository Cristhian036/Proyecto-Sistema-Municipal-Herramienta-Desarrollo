package com.utp.sistema_municipal_backend.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "forum_posts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ForumPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String contenido;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;  // quien creó el foro

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaCreacion = new Date();

    @OneToMany(mappedBy = "forumPost", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<Comment> comentarios = new HashSet<>();
}
