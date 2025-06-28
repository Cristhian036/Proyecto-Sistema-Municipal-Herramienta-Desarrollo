package com.utp.sistema_municipal_backend.controller;

import com.utp.sistema_municipal_backend.model.Noticia;
import com.utp.sistema_municipal_backend.service.NoticiaService;
import com.utp.sistema_municipal_backend.util.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/noticias")
@CrossOrigin("*")
public class NoticiaController {

    @Autowired
    private NoticiaService noticiaService;

    @Value("${app.upload.dir:uploads}")
    private String uploadDir;

    @PostMapping("/")
    public ResponseEntity<?> crearNoticia(
            @RequestParam("titulo") String titulo,
            @RequestParam("descripcion") String descripcion,
            @RequestParam("autor") String autor,
            @RequestParam("imagen") MultipartFile imagen
    ) {
        try {
            System.out.println("Iniciando creación de noticia...");
            System.out.println("Directorio configurado: " + uploadDir);

            if (titulo == null || titulo.trim().isEmpty()) {
                return ResponseEntity.badRequest().body("El título es requerido");
            }
            if (descripcion == null || descripcion.trim().isEmpty()) {
                return ResponseEntity.badRequest().body("La descripción es requerida");
            }
            if (autor == null || autor.trim().isEmpty()) {
                return ResponseEntity.badRequest().body("El autor es requerido");
            }
            if (imagen == null || imagen.isEmpty()) {
                return ResponseEntity.badRequest().body("La imagen es requerida");
            }

            if (!ImageUtils.isValidImageFile(imagen)) {
                return ResponseEntity.badRequest().body("Archivo de imagen no válido. Formatos permitidos: JPG, PNG, GIF, BMP. Tamaño máximo: 10MB");
            }

            Path uploadsPath;
            if (Paths.get(uploadDir).isAbsolute()) {
                uploadsPath = Paths.get(uploadDir);
            } else {
                // Si es relativa, la resolvemos desde el directorio de trabajo actual
                uploadsPath = Paths.get(System.getProperty("user.dir"), uploadDir);
            }
            
            try {
                if (!Files.exists(uploadsPath)) {
                    Files.createDirectories(uploadsPath);
                    System.out.println("Directorio uploads creado: " + uploadsPath.toAbsolutePath());
                } else {
                    System.out.println("Directorio uploads ya existe: " + uploadsPath.toAbsolutePath());
                }
            } catch (IOException e) {
                System.err.println("Error al crear directorio uploads: " + e.getMessage());
                return ResponseEntity.status(500).body("Error al crear directorio de uploads: " + e.getMessage());
            }

            // nombre único
            String nombreImagen = ImageUtils.generateUniqueFileName(imagen.getOriginalFilename());
            Path archivoPath = uploadsPath.resolve(nombreImagen);
            
            System.out.println("Guardando imagen como: " + nombreImagen);
            System.out.println("Ruta completa: " + archivoPath.toAbsolutePath());

            // guardar
            try {
                imagen.transferTo(archivoPath.toFile());
                System.out.println("Imagen guardada exitosamente");
            } catch (IOException e) {
                System.err.println("Error al guardar imagen: " + e.getMessage());
                return ResponseEntity.status(500).body("Error al guardar la imagen: " + e.getMessage());
            }

            // Crear la noticia
            Noticia noticia = new Noticia();
            noticia.setTitulo(titulo.trim());
            noticia.setDescripcion(descripcion.trim());
            noticia.setAutor(autor.trim());
            noticia.setImagen(nombreImagen);
            noticia.setFecha(LocalDateTime.now());

            Noticia noticiaGuardada = noticiaService.crearNoticia(noticia);
            System.out.println("Noticia creada con ID: " + noticiaGuardada.getId());
            
            return ResponseEntity.ok(noticiaGuardada);

        } catch (Exception e) {
            System.err.println("Error general al crear noticia: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error interno del servidor: " + e.getMessage());
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<Noticia>> listarNoticias() {
        try {
            List<Noticia> noticias = noticiaService.listarNoticias();
            return ResponseEntity.ok(noticias);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Noticia> obtenerNoticia(@PathVariable Long id) {
        try {
            Noticia noticia = noticiaService.obtenerNoticia(id);
            if (noticia == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(noticia);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarNoticia(@PathVariable Long id) {
        try {
            System.out.println("🗑️ Eliminando noticia con ID: " + id);
            
            Noticia noticia = noticiaService.obtenerNoticia(id);
            if (noticia == null) {
                return ResponseEntity.notFound().build();
            }
            
            // Eliminar archivo de imagen si existe
            if (noticia.getImagen() != null) {
                Path imagenPath = Paths.get(uploadDir).resolve(noticia.getImagen());
                try {
                    if (Files.exists(imagenPath)) {
                        Files.delete(imagenPath);
                        System.out.println("Imagen eliminada: " + imagenPath.toAbsolutePath());
                    }
                } catch (IOException e) {
                    System.err.println("No se pudo eliminar la imagen: " + e.getMessage());
                }
            }
            
            noticiaService.eliminarNoticia(id);
            System.out.println("Noticia eliminada exitosamente");
            return ResponseEntity.ok("Noticia eliminada exitosamente");
            
        } catch (Exception e) {
            System.err.println("Error al eliminar noticia: " + e.getMessage());
            return ResponseEntity.status(500).body("Error al eliminar la noticia: " + e.getMessage());
        }
    }

    @GetMapping("/imagen/{nombreArchivo}")
    public ResponseEntity<byte[]> obtenerImagen(@PathVariable String nombreArchivo) {
        try {
            Path imagenPath = Paths.get(uploadDir).resolve(nombreArchivo);
            
            if (!Files.exists(imagenPath)) {
                System.out.println("Imagen no encontrada: " + imagenPath.toAbsolutePath());
                return ResponseEntity.notFound().build();
            }

            byte[] imagen = Files.readAllBytes(imagenPath);
            
            // Determinar el tipo de contenido
            String contentType = ImageUtils.getImageContentType(nombreArchivo);
            
            System.out.println("Sirviendo imagen: " + imagenPath.toAbsolutePath());
            
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_TYPE, contentType)
                    .body(imagen);
                    
        } catch (Exception e) {
            System.err.println("Error al servir imagen: " + e.getMessage());
            return ResponseEntity.status(500).build();
        }
    }
}