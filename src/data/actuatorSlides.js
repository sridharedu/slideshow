export const actuatorSlides = [
  {
    title: "What is Spring Boot Actuator?",
    points: [
      "✔️ Production-ready monitoring and management features",
      "Built-in endpoints for health checks, metrics, info",
      "HTTP and JMX endpoint exposure",
      "🔥 Essential for production Spring Boot apps"
    ],
    note: "🧠 Actuator = application observability + operational endpoints"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    note: "🧠 Interview tip: Actuator enables DevOps practices and monitoring"
  }
];