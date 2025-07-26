package com.utp.sistema_municipal_backend.config;

import com.utp.sistema_municipal_backend.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

@EnableWebSecurity
@Configuration
@EnableMethodSecurity
public class MySecurityConfig {

    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private CorsConfigurationSource corsConfigurationSource;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource)) // Usar configuración CORS centralizada
                .authorizeHttpRequests(auth -> auth
                        // Permitir preflight requests (OPTIONS) primero - MUY IMPORTANTE
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        
                        // Endpoints completamente públicos (no requieren autenticación) - ORDEN IMPORTANTE
                        .requestMatchers("/generate-token").permitAll()
                        .requestMatchers("/usuarios/").permitAll()
                        .requestMatchers("/uploads/**").permitAll()
                        .requestMatchers("/noticias/imagen/**").permitAll()
                        
                        // Endpoints de foros (públicos para lectura) - MUY ESPECÍFICOS
                        .requestMatchers(HttpMethod.GET, "/foros/publicos").permitAll()
                        .requestMatchers(HttpMethod.GET, "/foros/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/foros/**").hasAnyAuthority("TRABAJADOR", "USUARIO")
                        
                        // Endpoints de comentarios (públicos para lectura)
                        .requestMatchers(HttpMethod.GET, "/comentarios/**").permitAll()
                        .requestMatchers("/comentarios/foro/*/publicos").permitAll()
                        .requestMatchers(HttpMethod.POST, "/comentarios/**").hasAnyAuthority("TRABAJADOR", "USUARIO")
                        
                        // Endpoints de noticias
                        .requestMatchers(HttpMethod.GET, "/noticias/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/noticias/**").hasAnyAuthority("TRABAJADOR")
                        .requestMatchers(HttpMethod.PUT, "/noticias/**").hasAuthority("TRABAJADOR")
                        .requestMatchers(HttpMethod.DELETE, "/noticias/**").hasAuthority("TRABAJADOR")
                        
                        // Endpoints de multas (públicos para consulta, admin para gestión)
                        .requestMatchers(HttpMethod.GET, "/multas/codigo/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/multas/dni/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/multas/pendientes/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/multas/pagar/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/multas/tipos-infraccion").permitAll()
                        .requestMatchers(HttpMethod.GET, "/multas/estados").permitAll()
                        .requestMatchers("/multas/**").hasAuthority("TRABAJADOR")
                        
                        // Endpoints que requieren autenticación
                        .requestMatchers("/votos/**").hasAnyAuthority("TRABAJADOR", "USUARIO")
                        .requestMatchers("/usuarios/trabajador").hasAuthority("TRABAJADOR")
                        
                        // Todos los demás endpoints requieren autenticación
                        .anyRequest().authenticated()
                )
                .exceptionHandling(ex -> ex.authenticationEntryPoint(unauthorizedHandler))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsServiceImpl);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
}