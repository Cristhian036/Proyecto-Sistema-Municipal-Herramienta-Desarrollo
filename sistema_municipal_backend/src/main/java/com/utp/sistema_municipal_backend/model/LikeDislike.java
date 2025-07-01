package com.utp.sistema_municipal_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "likes_dislikes", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"usuario_id", "forum_post_id"}),
        @UniqueConstraint(columnNames = {"usuario_id", "comment_id"})
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LikeDislike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @Enumerated(EnumType.STRING)
    private VoteType voteType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "forum_post_id", nullable = true)
    private ForumPost forumPost;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comment_id", nullable = true)
    private Comment comment;
}
