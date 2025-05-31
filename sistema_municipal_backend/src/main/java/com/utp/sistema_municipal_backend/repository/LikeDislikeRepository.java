package com.utp.sistema_municipal_backend.repository;

import com.utp.sistema_municipal_backend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikeDislikeRepository extends JpaRepository<LikeDislike, Long> {

    Optional<LikeDislike> findByUsuarioAndForumPost(Usuario usuario, ForumPost forumPost);

    Optional<LikeDislike> findByUsuarioAndComment(Usuario usuario, Comment comment);

    long countByForumPostAndVoteType(ForumPost forumPost, VoteType voteType);

    long countByCommentAndVoteType(Comment comment, VoteType voteType);
}
