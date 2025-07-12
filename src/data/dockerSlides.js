export const dockerSlides = [
  {
    title: "What is Docker?",
    points: [
      "✔️ Containerization platform for applications",
      "Packages app + dependencies into lightweight containers",
      "Runs consistently across different environments",
      "🔥 Solves 'it works on my machine' problem"
    ],
    note: "🧠 Docker = Application + Runtime + Dependencies in one package",
    keepInMind: "Docker provides a consistent environment from development to production, reducing deployment friction."
  },
  {
    title: "Dockerfile Basics",
    points: [
      "Text file with instructions to build Docker image",
      "Each instruction creates a new layer",
      "```dockerfile",
      "FROM openjdk:17-jre-slim",
      "COPY app.jar /app.jar",
      "EXPOSE 8080",
      "CMD [\"java\", \"-jar\", \"/app.jar\"]",
      "```",
      "🔥 Instructions are cached for faster builds"
    ],
    keepInMind: "A Dockerfile is the recipe for your application's containerized environment."
  },
  {
    title: "Common Dockerfile Instructions",
    points: [
      "```table",
      "Instruction | Purpose | Example",
      "FROM | Base image | FROM openjdk:17",
      "COPY | Copy files | COPY app.jar /app.jar",
      "RUN | Execute commands | RUN apt-get update",
      "EXPOSE | Document ports | EXPOSE 8080",
      "CMD | Default command | CMD [\"java\", \"-jar\", \"app.jar\"]",
      "```"
    ],
    keepInMind: "Understanding the purpose of each instruction is key to writing efficient Dockerfiles."
  },
  {
    title: "Spring Boot Dockerfile",
    points: [
      "```dockerfile",
      "FROM openjdk:17-jre-slim",
      "",
      "# Create app directory",
      "WORKDIR /app",
      "",
      "# Copy JAR file",
      "COPY target/myapp-1.0.jar app.jar",
      "",
      "# Expose port",
      "EXPOSE 8080",
      "",
      "# Run application",
      "CMD [\"java\", \"-jar\", \"app.jar\"]",
      "```"
    ],
    keepInMind: "This simple Dockerfile is all you need to containerize a basic Spring Boot application."
  },
  {
    title: "Multi-stage Build",
    points: [
      "Build and runtime in separate stages:",
      "```dockerfile",
      "# Build stage",
      "FROM maven:3.8-openjdk-17 AS build",
      "COPY . /app",
      "WORKDIR /app",
      "RUN mvn clean package -DskipTests",
      "",
      "# Runtime stage",
      "FROM openjdk:17-jre-slim",
      "COPY --from=build /app/target/app.jar /app.jar",
      "EXPOSE 8080",
      "CMD [\"java\", \"-jar\", \"/app.jar\"]",
      "```",
      "🔥 Smaller final image size"
    ],
    keepInMind: "Multi-stage builds are a best practice for creating lean, production-ready Docker images."
  },
  {
    title: "Building Docker Image",
    points: [
      "```bash",
      "# Build image",
      "docker build -t myapp:1.0 .",
      "",
      "# List images",
      "docker images",
      "",
      "# Run container",
      "docker run -p 8080:8080 myapp:1.0",
      "```",
      "🔥 Use specific tags instead of 'latest'"
    ],
    keepInMind: "Tagging images with versions is crucial for managing and rolling back deployments."
  },
  {
    title: "Environment Variables",
    points: [
      "```dockerfile",
      "FROM openjdk:17-jre-slim",
      "",
      "ENV SPRING_PROFILES_ACTIVE=prod",
      "ENV SERVER_PORT=8080",
      "",
      "COPY app.jar /app.jar",
      "EXPOSE $SERVER_PORT",
      "CMD [\"java\", \"-jar\", \"/app.jar\"]",
      "```",
      "Override at runtime:",
      "```bash",
      "docker run -e SPRING_PROFILES_ACTIVE=dev myapp:1.0",
      "```"
    ],
    keepInMind: "Environment variables are the standard way to configure your application inside a container."
  },
  {
    title: "Docker Compose",
    points: [
      "Multi-container applications:",
      "```yaml",
      "version: '3.8'",
      "services:",
      "  app:",
      "    build: .",
      "    ports:",
      "      - \"8080:8080\"",
      "    environment:",
      "      - SPRING_PROFILES_ACTIVE=docker",
      "    depends_on:",
      "      - db",
      "  db:",
      "    image: postgres:13",
      "    environment:",
      "      POSTGRES_DB: myapp",
      "```"
    ],
    keepInMind: "Docker Compose is essential for local development and testing of multi-service applications."
  },
  {
    title: "Optimization Tips",
    points: [
      "✅ Use specific base image versions",
      "✅ Leverage layer caching - copy dependencies first",
      "✅ Use .dockerignore file",
      "✅ Multi-stage builds for smaller images",
      "```dockerfile",
      "# Good - dependencies cached separately",
      "COPY pom.xml .",
      "RUN mvn dependency:go-offline",
      "COPY src ./src",
      "RUN mvn package",
      "```"
    ],
    keepInMind: "Optimizing your Dockerfile can significantly speed up your build and deployment pipeline."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use non-root user for security",
      "✅ Keep images small and focused",
      "✅ Use health checks",
      "✅ Tag images properly",
      "❌ Don't include secrets in Dockerfile",
      "❌ Don't use 'latest' tag in production",
      "❌ Don't install unnecessary packages"
    ],
    note: "🧠 Interview tip: Docker enables consistent deployments and microservices",
    keepInMind: "Security and efficiency are the two main pillars of Docker best practices."
  }
];