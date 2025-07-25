package com.utp.sistema_municipal_backend.config;

import com.utp.sistema_municipal_backend.service.impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String requestTokenHeader = request.getHeader("Authorization");
        String email = null;
        String jwtToken = null;
        String requestPath = request.getRequestURI();

        // Endpoints que NO requieren autenticación - pasar directamente
        if (requestPath.equals("/generate-token") || 
            requestPath.equals("/usuarios/") ||
            requestPath.startsWith("/uploads/") ||
            requestPath.startsWith("/noticias/imagen/") ||
            (requestPath.startsWith("/noticias/") && request.getMethod().equals("GET")) ||
            (requestPath.startsWith("/foros/") && request.getMethod().equals("GET")) ||
            (requestPath.startsWith("/comentarios/") && request.getMethod().equals("GET")) ||
            requestPath.startsWith("/error")) {
            
            // No procesar JWT para endpoints públicos
            System.out.println("🟢 JWT Filter - Endpoint público detectado: " + requestPath + " [" + request.getMethod() + "]");
            filterChain.doFilter(request, response);
            return;
        }

        // Solo mostrar logs para endpoints que SÍ deberían tener token
        System.out.println("🔍 JWT Filter - URL: " + request.getRequestURL());
        System.out.println("🔍 JWT Filter - Method: " + request.getMethod());
        System.out.println("🔍 JWT Filter - Authorization Header: " + requestTokenHeader);

        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            System.out.println("✅ JWT Filter - Token extraído: " + jwtToken.substring(0, Math.min(20, jwtToken.length())) + "...");

            try {
                email = this.jwtUtils.extractUsername(jwtToken);  // email está en subject del token
                System.out.println("✅ JWT Filter - Email extraído: " + email);
            } catch (ExpiredJwtException exception) {
                System.out.println("❌ JWT Filter - El token ha expirado");
            } catch (Exception e) {
                System.out.println("❌ JWT Filter - Error al procesar token: " + e.getMessage());
            }

        } else {
            System.out.println("❌ JWT Filter - Token inválido, no empieza con Bearer string");
            if (requestTokenHeader != null) {
                System.out.println("❌ JWT Filter - Header recibido: [" + requestTokenHeader + "]");
            } else {
                System.out.println("❌ JWT Filter - No se recibió header Authorization");
            }
        }

        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);
            if (this.jwtUtils.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                System.out.println("✅ JWT Filter - Usuario autenticado: " + email);
                System.out.println("✅ JWT Filter - Autoridades del usuario: " + userDetails.getAuthorities());
            } else {
                System.out.println("❌ JWT Filter - Token no válido para el usuario: " + email);
            }
        } else if (email == null && requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            System.out.println("❌ JWT Filter - No se pudo extraer email del token");
        }
        
        filterChain.doFilter(request, response);
    }
}
