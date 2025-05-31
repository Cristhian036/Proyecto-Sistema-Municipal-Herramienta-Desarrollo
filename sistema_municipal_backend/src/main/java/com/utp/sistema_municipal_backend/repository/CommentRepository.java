package com.utp.sistema_municipal_backend.repository;

import com.utp.sistema_municipal_backend.model.Comment;
import com.utp.sistema_municipal_backend.model.ForumPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByForumPost(ForumPost forumPost);
}
