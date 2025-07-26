# Sistema Municipal - Plataforma de Gestión y Difusión

[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://docker.com)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.5-green?logo=spring)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-14-red?logo=angular)](https://angular.io)

## 📋 Descripción

Sistema integral para la gestión municipal que incluye:

- **Comunicación Ciudadana**: Noticias, avisos y alertas
- **Transparencia**: Acceso a información pública
- **Participación Ciudadana**: Foros de discusión con sistema de valoración
- **Gestión de Usuarios**: Autenticación JWT y roles

## 🏗️ Tecnologías

- **Frontend**: Angular
- **Backend**: Spring Boot
- **Base de Datos**: MySQL
- **Containerización**: Docker

## 🚀 Instalación

### Prerrequisitos
- Docker Desktop instalado

### Instalación Rápida
```bash
# Clonar repositorio
git clone https://github.com/Cristhian036/Proyecto-Sistema-Municipal-Herramienta-Desarrollo.git
cd Proyecto-Sistema-Municipal-Herramienta-Desarrollo

# Levantar sistema completo
docker-compose up -d


### 🌐 Acceso
- **Frontend**: http://localhost
- **Backend API**: http://localhost:8080
- **Base de Datos**: localhost:3307

### ⚙️ Comandos Básicos
```bash
# Ver estado
docker ps

# Ver logs
docker-compose logs -f

# Detener sistema
docker-compose down

# Reiniciar
docker-compose down && docker-compose up -d
```

---

**Desarrollado por**: Cristhian036, yhojan-yauli y YinyerAle05 
