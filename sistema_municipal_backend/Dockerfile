FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy Gradle files
COPY build.gradle .
COPY settings.gradle .
COPY gradlew .
COPY gradlew.bat .
COPY gradle gradle

# Make gradlew executable
RUN chmod +x gradlew

# Copy source code
COPY src src

# Build the application
RUN ./gradlew build -x test

# Expose port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "build/libs/sistema_municipal_backend-0.0.1-SNAPSHOT.jar"]
