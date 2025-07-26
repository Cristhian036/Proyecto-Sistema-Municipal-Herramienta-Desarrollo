package com.utp.sistema_municipal_backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

/**
 * Configuración web para manejo de recursos estáticos.
 * NOTA: La configuración CORS se maneja en CorsConfig.java
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${app.upload.dir:uploads}")
    private String uploadDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Convertir a ruta absoluta si es relativa
        String absoluteUploadDir;
        if (Paths.get(uploadDir).isAbsolute()) {
            absoluteUploadDir = uploadDir;
        } else {
            // Si es relativa, la resolvemos desde el directorio de trabajo actual
            absoluteUploadDir = Paths.get(System.getProperty("user.dir"), uploadDir).toAbsolutePath().toString();
        }
        
        String uploadsPath = "file:" + absoluteUploadDir;
        if (!absoluteUploadDir.endsWith("/") && !absoluteUploadDir.endsWith("\\")) {
            uploadsPath += "/";
        }
        
        System.out.println("Configurando recursos estáticos desde: " + uploadsPath);
        System.out.println("Directorio absoluto: " + absoluteUploadDir);
        
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations(uploadsPath);
    }

    // CORS configuration removed - now handled in CorsConfig.java for centralized management
}
