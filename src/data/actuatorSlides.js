export const actuatorSlides = [
  {
    title: "What is Spring Boot Actuator?",
    points: [
      "✔️ Production-ready monitoring and management features",
      "Built-in endpoints for health checks, metrics, info",
      "HTTP and JMX endpoint exposure",
      "🔥 Essential for production Spring Boot apps"
    ],
    note: "🧠 Actuator = application observability + operational endpoints",
    keepInMind: "Actuator is the pulse of a Spring Boot application, offering a window into its runtime health and state."
  },
  {
    title: "Adding Actuator Dependency",
    points: [
      "Maven:",
      "```xml",
      "<dependency>",
      "    <groupId>org.springframework.boot</groupId>",
      "    <artifactId>spring-boot-starter-actuator</artifactId>",
      "</dependency>",
      "```",
      "Gradle:",
      "```gradle",
      "implementation 'org.springframework.boot:spring-boot-starter-actuator'",
      "```"
    ],
    keepInMind: "Adding the starter is the only step needed to enable basic monitoring capabilities."
  },
  {
    title: "Key Actuator Endpoints",
    points: [
      "```table",
      "Endpoint | Purpose | URL",
      "/health | App health status | /actuator/health",
      "/info | App information | /actuator/info",
      "/metrics | Application metrics | /actuator/metrics",
      "/env | Environment properties | /actuator/env",
      "/loggers | Logging configuration | /actuator/loggers",
      "```"
    ],
    keepInMind: "While many endpoints exist, 'health', 'metrics', and 'info' are the most commonly used in production environments."
  },
  {
    title: "Health Endpoint",
    points: [
      "Default endpoint: `/actuator/health`",
      "Shows application health status",
      "```json",
      "{",
      "  \"status\": \"UP\",",
      "  \"components\": {",
      "    \"db\": { \"status\": \"UP\" },",
      "    \"diskSpace\": { \"status\": \"UP\" }",
      "  }",
      "}",
      "```",
      "🔥 Used by load balancers for health checks"
    ],
    keepInMind: "The health endpoint is crucial for automated systems like Kubernetes or load balancers to manage application lifecycle."
  },
  {
    title: "Enabling Endpoints",
    points: [
      "By default, only `/health` is exposed over HTTP",
      "Enable more endpoints in `application.yml`:",
      "```yaml",
      "management:",
      "  endpoints:",
      "    web:",
      "      exposure:",
      "        include: health,info,metrics,env",
      "```",
      "Or expose all: `include: \"*\"`"
    ],
    keepInMind: "Security is paramount; never expose all endpoints, especially in a production environment."
  },
  {
    title: "Custom Health Indicators",
    points: [
      "```java",
      "@Component",
      "public class DatabaseHealthIndicator implements HealthIndicator {",
      "    ",
      "    @Override",
      "    public Health health() {",
      "        if (isDatabaseUp()) {",
      "            return Health.up()",
      "                .withDetail(\"database\", \"Available\")",
      "                .build();",
      "        }",
      "        return Health.down()",
      "            .withDetail(\"database\", \"Not available\")",
      "            .build();",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Custom health indicators allow you to extend Actuator's monitoring to your application's specific dependencies."
  },
  {
    title: "Info Endpoint Configuration",
    points: [
      "Add application info in `application.yml`:",
      "```yaml",
      "info:",
      "  app:",
      "    name: My Application",
      "    version: 1.0.0",
      "    description: Sample Spring Boot App",
      "  build:",
      "    artifact: my-app",
      "    version: ${project.version}",
      "```",
      "Access via `/actuator/info`"
    ],
    keepInMind: "The info endpoint is a simple way to version and identify your application without looking at logs."
  },
  {
    title: "Metrics Endpoint",
    points: [
      "View available metrics: `/actuator/metrics`",
      "Specific metric: `/actuator/metrics/jvm.memory.used`",
      "Common metrics:",
      "• `http.server.requests` - HTTP request metrics",
      "• `jvm.memory.used` - JVM memory usage",
      "• `system.cpu.usage` - CPU usage",
      "• `jdbc.connections.active` - DB connections",
      "🔥 Integrate with Prometheus/Grafana"
    ],
    keepInMind: "Actuator provides the raw data; for visualization and alerting, you'll need to integrate with tools like Prometheus and Grafana."
  },
  {
    title: "Security Configuration",
    points: [
      "Secure actuator endpoints:",
      "```yaml",
      "management:",
      "  endpoints:",
      "    web:",
      "      base-path: /manage",
      "  endpoint:",
      "    health:",
      "      show-details: when-authorized",
      "```",
      "Spring Security config:",
      "```java",
      ".requestMatchers(\"/manage/**\").hasRole(\"ADMIN\")",
      "```"
    ],
    keepInMind: "Securing Actuator endpoints is not optional; it's a critical step to prevent exposing sensitive application data."
  },
  {
    title: "Production Best Practices",
    points: [
      "✅ Secure sensitive endpoints with authentication",
      "✅ Use different port for management endpoints",
      "✅ Monitor health endpoint with load balancers",
      "✅ Export metrics to monitoring systems",
      "❌ Don't expose all endpoints in production",
      "❌ Don't expose sensitive info without security"
    ],
    note: "🧠 Interview tip: Actuator enables DevOps practices and monitoring",
    keepInMind: "Treat Actuator endpoints as you would any other sensitive API; they are a gateway to your application's internals."
  }
];