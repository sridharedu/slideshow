export const serviceDiscoverySlides = [
  {
    title: "What is Service Discovery?",
    points: [
      "✔️ Mechanism for microservices to find and communicate with each other",
      "Services register themselves and discover others dynamically",
      "Eliminates hardcoded service locations and ports",
      "🔥 Essential for scalable microservices architecture"
    ],
    note: "🧠 Service Discovery = Phone book for microservices",
    keepInMind: "Service discovery enables dynamic scaling and deployment without manual configuration updates."
  },
  {
    title: "Why Service Discovery?",
    points: [
      "**Problems without Service Discovery:**",
      "• Hardcoded IP addresses and ports",
      "• Manual configuration updates for scaling",
      "• Service failures break dependent services",
      "• Complex load balancing setup",
      "",
      "**Benefits:**",
      "• Dynamic service registration/deregistration",
      "• Automatic load balancing",
      "• Health checking and failover",
      "• Zero-downtime deployments"
    ],
    keepInMind: "Service discovery transforms static, brittle service communication into dynamic, resilient interactions."
  },
  {
    title: "Service Discovery Patterns",
    points: [
      "```table",
      "Pattern | Description | Example",
      "Client-Side | Client queries registry directly | Netflix Eureka + Ribbon",
      "Server-Side | Load balancer queries registry | AWS ELB + Route 53",
      "Service Mesh | Sidecar proxy handles discovery | Istio, Linkerd",
      "DNS-Based | Use DNS for service resolution | Kubernetes DNS",
      "```"
    ],
    keepInMind: "This table outlines common strategies for service discovery. Client-side discovery involves the client application directly querying the service registry. Server-side discovery offloads this to a load balancer. A service mesh uses sidecar proxies for discovery, and DNS-based discovery leverages the DNS system to resolve service names to IP addresses. Each pattern has trade-offs between complexity, performance, and operational overhead."
  },
  {
    title: "Netflix Eureka Overview",
    points: [
      "✔️ Client-side service discovery solution",
      "Services register with Eureka Server",
      "Clients cache service registry locally",
      "Built-in health checking and failover",
      "Part of Netflix OSS stack",
      "🔥 Most popular choice for Spring Boot microservices"
    ],
    keepInMind: "Eureka prioritizes availability over consistency (AP in CAP theorem)."
  },
  {
    title: "Eureka Server Setup",
    points: [
      "**Dependencies:**",
      "```xml",
      "<!-- Spring Cloud starter for creating a Eureka server -->",
      "<dependency>",
      "    <groupId>org.springframework.cloud</groupId>",
      "    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>",
      "</dependency>",
      "```",
      "**Main Class:**",
      "```java",
      "// This annotation enables the Eureka server functionality",
      "@SpringBootApplication",
      "@EnableEurekaServer",
      "public class EurekaServerApplication {",
      "    public static void main(String[] args) {",
      "        SpringApplication.run(EurekaServerApplication.class, args);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Setting up a Eureka Server is straightforward. You need the `spring-cloud-starter-netflix-eureka-server` dependency and the `@EnableEurekaServer` annotation on your main Spring Boot application class. This turns the application into a service registry. Eureka Server is just a Spring Boot application with @EnableEurekaServer annotation."
  },
  {
    title: "Eureka Server Configuration",
    points: [
      "```yaml",
      "server:",
      "  port: 8761 # Default Eureka port",
      "",
      "eureka:",
      "  instance:",
      "    hostname: localhost",
      "  client:",
      "    # A standalone Eureka server doesn't need to register with itself",
      "    register-with-eureka: false",
      "    fetch-registry: false",
      "    service-url:",
      "      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/",
      "```",
      "🔥 Server doesn't register with itself in standalone mode"
    ],
    keepInMind: "The configuration for a standalone Eureka server is minimal. `register-with-eureka` and `fetch-registry` are set to `false` because the server does not need to register itself or fetch the registry. The `defaultZone` is the URL other services will use to connect to this Eureka server. In production, run multiple Eureka servers for high availability."
  },
  {
    title: "Eureka Client Setup",
    points: [
      "**Dependencies:**",
      "```xml",
      "<!-- Spring Cloud starter for creating a Eureka client -->",
      "<dependency>",
      "    <groupId>org.springframework.cloud</groupId>",
      "    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>",
      "</dependency>",
      "```",
      "**Main Class:**",
      "```java",
      "// This annotation enables the Eureka client functionality",
      "@SpringBootApplication",
      "@EnableEurekaClient",
      "public class UserServiceApplication {",
      "    public static void main(String[] args) {",
      "        SpringApplication.run(UserServiceApplication.class, args);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "To make a microservice a Eureka client, you include the `spring-cloud-starter-netflix-eureka-client` dependency and use the `@EnableEurekaClient` annotation. This allows the service to register with the Eureka server. @EnableEurekaClient is optional in newer Spring Cloud versions - auto-configuration handles it."
  },
  {
    title: "Eureka Client Configuration",
    points: [
      "```yaml",
      "spring:",
      "  application:",
      "    name: user-service # Service ID in Eureka",
      "",
      "server:",
      "  port: 8081",
      "",
      "eureka:",
      "  client:",
      "    service-url:",
      "      # URL of the Eureka server",
      "      defaultZone: http://localhost:8761/eureka/",
      "  instance:",
      "    prefer-ip-address: true",
      "    lease-renewal-interval-in-seconds: 30 # Heartbeat interval",
      "    lease-expiration-duration-in-seconds: 90 # Deregister after 90s",
      "```"
    ],
    keepInMind: "The client configuration specifies the application name (which becomes the service ID), the server port, and the location of the Eureka server. The `lease-renewal-interval` and `lease-expiration-duration` control the heartbeat mechanism. Application name becomes the service ID in Eureka registry."
  },
  {
    title: "Service-to-Service Communication",
    points: [
      "**Using RestTemplate with @LoadBalanced:**",
      "```java",
      "// Configuration to create a load-balanced RestTemplate bean",
      "@Configuration",
      "public class RestConfig {",
      "    @Bean",
      "    @LoadBalanced // Enables client-side load balancing",
      "    public RestTemplate restTemplate() {",
      "        return new RestTemplate();",
      "    }",
      "}",
      "",
      "// Service making a call to another service",
      "@Service",
      "public class OrderService {",
      "    @Autowired",
      "    private RestTemplate restTemplate;",
      "    ",
      "    public User getUser(Long userId) {",
      "        // Use service name instead of hostname",
      "        return restTemplate.getForObject(",
      "            \"http://user-service/users/\" + userId, User.class);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "With `@LoadBalanced`, `RestTemplate` can use service names (like `user-service`) instead of hardcoded hostnames and ports. Eureka provides the actual host and port, and if multiple instances are available, Ribbon (the client-side load balancer) will choose one. @LoadBalanced enables service name resolution and client-side load balancing."
  },
  {
    title: "Using OpenFeign for Service Calls",
    points: [
      "**Dependencies:**",
      "```xml",
      "<!-- Spring Cloud starter for using OpenFeign -->",
      "<dependency>",
      "    <groupId>org.springframework.cloud</groupId>",
      "    <artifactId>spring-cloud-starter-openfeign</artifactId>",
      "</dependency>",
      "```",
      "**Feign Client:**",
      "```java",
      "// Declarative REST client for 'user-service'",
      "@FeignClient(name = \"user-service\")",
      "public interface UserServiceClient {",
      "    @GetMapping(\"/users/{id}\")",
      "    User getUserById(@PathVariable Long id);",
      "    ",
      "    @PostMapping(\"/users\")",
      "    User createUser(@RequestBody User user);",
      "}",
      "```",
      "**Enable Feign:**",
      "```java",
      "// Enable Feign clients in the application",
      "@EnableFeignClients",
      "@SpringBootApplication",
      "public class OrderServiceApplication { }",
      "```"
    ],
    keepInMind: "OpenFeign provides a declarative way to create REST clients. You define an interface with annotations, and Feign implements it for you. It integrates with Eureka for service discovery and Ribbon for load balancing automatically. Feign provides a declarative way to call REST services with automatic load balancing."
  },
  {
    title: "Health Checks and Monitoring",
    points: [
      "**Actuator Health Endpoint:**",
      "```yaml",
      "management:",
      "  endpoints:",
      "    web:",
      "      exposure:",
      "        include: health,info # Expose health and info endpoints",
      "  endpoint:",
      "    health:",
      "      show-details: always # Show full health details",
      "```",
      "**Custom Health Indicator:**",
      "```java",
      "// Custom logic to determine service health",
      "@Component",
      "public class DatabaseHealthIndicator implements HealthIndicator {",
      "    @Override",
      "    public Health health() {",
      "        if (isDatabaseUp()) {",
      "            return Health.up().withDetail(\"database\", \"Available\").build();",
      "        }",
      "        return Health.down().withDetail(\"database\", \"Unavailable\").build();",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Spring Boot Actuator's health endpoint is used by Eureka to determine if a service is healthy. You can expose detailed health information and create custom health indicators to check the status of databases, external services, etc. Eureka uses health endpoints to determine service availability."
  },
  {
    title: "Service Discovery Alternatives",
    points: [
      "```table",
      "Solution | Type | Best For",
      "Consul | HashiCorp service mesh | Multi-datacenter setups",
      "Zookeeper | Apache coordination service | Kafka, Hadoop ecosystems",
      "etcd | Kubernetes-native | Cloud-native applications",
      "AWS Cloud Map | Managed service discovery | AWS-native applications",
      "Kubernetes DNS | Built-in DNS | Kubernetes deployments",
      "```"
    ],
    keepInMind: "While Eureka is popular, other tools exist. Consul is a full-featured service mesh, Zookeeper is a mature coordination service, etcd is the backbone of Kubernetes, and cloud providers like AWS offer managed services. Kubernetes itself has built-in DNS for service discovery. Choose based on your infrastructure, cloud provider, and operational requirements."
  },
  {
    title: "Kubernetes Service Discovery",
    points: [
      "**Service Definition:**",
      "```yaml",
      "apiVersion: v1",
      "kind: Service",
      "metadata:",
      "  name: user-service",
      "spec:",
      "  selector:",
      "    app: user-service # Selects pods with this label",
      "  ports:",
      "  - port: 80",
      "    targetPort: 8080",
      "```",
      "**DNS Resolution:**",
      "```java",
      "// Kubernetes DNS resolves 'user-service' to the service's IP",
      "String url = \"http://user-service/users/\" + userId;",
      "```",
      "🔥 Kubernetes provides built-in service discovery via DNS"
    ],
    keepInMind: "In Kubernetes, you define a Service object which gets a stable DNS name. Pods can then use this DNS name to communicate with the service, and Kubernetes handles the routing and load balancing to the underlying pods. In Kubernetes, you typically don't need external service discovery tools."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use health checks for accurate service status",
      "✅ Implement graceful shutdown for clean deregistration",
      "✅ Configure appropriate heartbeat intervals",
      "✅ Use circuit breakers for fault tolerance",
      "✅ Monitor service registry health",
      "❌ Don't rely on service discovery for data consistency",
      "❌ Don't ignore network partitions and split-brain scenarios",
      "❌ Don't hardcode service discovery URLs in production"
    ],
    note: "🧠 Interview tip: Explain client-side vs server-side discovery trade-offs",
    keepInMind: "Service discovery is about availability and resilience, not just convenience."
  },
  {
    title: "Service Discovery Summary",
    points: [
      "🔍 **Purpose** - Dynamic service location and communication",
      "📋 **Patterns** - Client-side, server-side, service mesh, DNS-based",
      "🌐 **Netflix Eureka** - Popular client-side discovery for Spring Boot",
      "⚖️ **Load Balancing** - @LoadBalanced RestTemplate and Feign clients",
      "💓 **Health Checks** - Actuator endpoints for service health monitoring",
      "☸️ **Kubernetes** - Built-in DNS-based service discovery",
      "🛠️ **Alternatives** - Consul, Zookeeper, etcd, Cloud Map",
      "🔥 **Essential** for scalable, resilient microservices architecture"
    ],
    note: "🧠 Service discovery enables microservices to find each other dynamically",
    keepInMind: "Choose the right service discovery solution based on your infrastructure and operational needs."
  }
];