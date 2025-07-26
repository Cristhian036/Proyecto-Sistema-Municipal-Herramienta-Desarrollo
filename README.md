# Sistema Municipal - Plataforma de Gestión y Difusión

[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://docker.com)  
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.5-green?logo=spring)](https://spring.io/projects/spring-boot)  
[![Angular](https://img.shields.io/badge/Angular-14-red?logo=angular)](https://angular.io)

---

## 📋 Descripción General

**Sistema Municipal** es una plataforma integral orientada a mejorar la comunicación, transparencia y participación ciudadana dentro de una municipalidad. Facilita la difusión de información pública, promueve la interacción entre ciudadanos y autoridades, y permite una administración eficiente de usuarios y roles.

---

## 🎯 Objetivos

- 📢 **Mejorar la comunicación institucional** mediante la publicación de noticias, alertas y avisos oficiales.
- 🧾 **Garantizar la transparencia** ofreciendo acceso abierto a documentos, normativas y datos públicos.
- 🤝 **Fomentar la participación ciudadana** a través de foros temáticos con posibilidad de interacción y valoración de comentarios.
- 🔐 **Gestionar el acceso** mediante un sistema robusto de autenticación JWT y control de roles administrativos.

---

## 🏗️ Tecnologías Utilizadas

- **Frontend**: Angular 14
- **Backend**: Spring Boot 3.4.5
- **Base de Datos**: MySQL
- **Containerización**: Docker & Docker Compose

---

## 🚀 Instalación

### 🔁 Opción 1: Instalación Rápida con Docker (Recomendada)

#### 📦 Prerrequisitos
- Docker y Docker Compose instalados

#### 🧪 Pasos

```bash
# Clonar el repositorio
git clone https://github.com/Cristhian036/Proyecto-Sistema-Municipal-Herramienta-Desarrollo.git
cd Proyecto-Sistema-Municipal-Herramienta-Desarrollo

# Levantar todos los servicios
docker-compose up -d
```

#### 🌐 Accesos

- **Frontend**: http://localhost
- **Backend API**: http://localhost:8080
- **MySQL**: localhost:3307 (usuario: `root` / contraseña: `root`)

#### ⚙️ Comandos Útiles

```bash
# Ver contenedores en ejecución
docker ps

# Ver logs de los servicios
docker-compose logs -f

# Detener servicios
docker-compose down

# Reiniciar todo
docker-compose down && docker-compose up -d
```

---

### 🛠️ Opción 2: Instalación Manual

#### 📌 Frontend (Angular)

**Requisitos:** Node.js y Angular CLI instalados

```bash
# Ir al proyecto frontend
cd sistema_municipal_frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

- Acceso: http://localhost:4200

#### 📌 Backend (Spring Boot)

**Requisitos:** JDK 17+, Gradle y MySQL corriendo

```bash
# Ir al proyecto backend
cd sistema_municipal_backend

# Compilar el proyecto
./gradlew build

# Ejecutar la aplicación
./gradlew bootRun
```

- Acceso API: http://localhost:8080

> ⚠️ **Importante:** Configura el archivo `application.properties` con las credenciales correctas de tu base de datos MySQL.

---

## 👥 Autores

- Cristhian036
- yhojan-yauli
- YinyerAle05

---
