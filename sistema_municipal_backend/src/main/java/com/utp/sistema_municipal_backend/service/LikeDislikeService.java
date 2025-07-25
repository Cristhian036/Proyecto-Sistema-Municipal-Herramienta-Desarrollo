package com.utp.sistema_municipal_backend.service;

import com.utp.sistema_municipal_backend.model.*;

public interface LikeDislikeService {

    void votarForo(Long foroId, String emailUsuario, VoteType tipoVoto) throws Exception;

    void votarComentario(Long comentarioId, String emailUsuario, VoteType tipoVoto) throws Exception;

    long contarLikesForo(Long foroId);

    long contarDislikesForo(Long foroId);

    long contarLikesComentario(Long comentarioId);

    long contarDislikesComentario(Long comentarioId);
}
