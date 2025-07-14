export const session2 = [
  {
    title: "Spring Framework Benefits",
    points: [
      "Rapid Application Development (RAD)",
      "  - Pre-built components and templates",
      "  - Convention over configuration",
      "Reduced Error Rate",
      "  - Compile-time error detection",
      "  - Strong type safety",
      "Boilerplate Code Reduction",
      "  - Annotations eliminate repetitive code",
      "  - Auto-configuration handles setup"
    ],
    note: "Spring Framework accelerates development while maintaining code quality and reducing common programming errors."
  },
  {
    title: "Spring Boot Introduction",
    points: [
      "AutoConfiguration",
      "  - Automatically configures Spring applications",
      "  - Based on classpath dependencies",
      "Parent Project",
      "  - Provides dependency management",
      "  - Version compatibility guaranteed",
      "Project Creation",
      "  - Spring Initializr for quick setup",
      "  - Embedded servers included"
    ],
    note: "Spring Boot simplifies Spring development by providing opinionated defaults and auto-configuration."
  },
  {
    title: "Embedded Servers and Databases",
    points: [
      "Embedded Servers:",
      "  • Tomcat (default)",
      "  • Jetty",
      "  • Undertow",
      "Embedded Databases:",
      "  • H2 Database",
      "  • Apache Derby",
      "  • HSQLDB",
      "Benefits: No external server setup required"
    ],
    note: "Embedded components allow applications to run standalone without external infrastructure setup."
  },
  {
    title: "Microservices Architecture Overview",
    points: [
      "Design Principles:",
      "  - Single responsibility per service",
      "  - Decentralized governance",
      "  - Failure isolation",
      "Development Benefits:",
      "  - Independent team development",
      "  - Technology diversity",
      "  - Faster deployment cycles"
    ],
    note: "Microservices break monolithic applications into smaller, manageable, and independently deployable services."
  },
  {
    title: "Microservices Build and Deployment",
    points: [
      "Build Process:",
      "  - Independent build pipelines",
      "  - Containerization (Docker)",
      "  - Automated testing",
      "Deployment Strategies:",
      "  - Blue-green deployment",
      "  - Rolling updates",
      "  - Canary releases",
      "Infrastructure: Container orchestration (Kubernetes)"
    ],
    note: "Modern deployment practices enable zero-downtime updates and reliable service delivery."
  },
  {
    title: "Spring Cloud Integration",
    points: [
      "Service Discovery",
      "  - Netflix Eureka",
      "  - Consul",
      "API Gateway",
      "  - Spring Cloud Gateway",
      "  - Zuul",
      "Distributed Configuration",
      "  - Spring Cloud Config",
      "Circuit Breaker",
      "  - Hystrix, Resilience4j"
    ],
    note: "Spring Cloud provides tools to handle the complexity of distributed systems and microservices."
  },
  {
    title: "Monitoring and Tracing",
    points: [
      "Monitoring Tools:",
      "  - Spring Boot Actuator",
      "  - Micrometer metrics",
      "  - Prometheus integration",
      "Distributed Tracing:",
      "  - Spring Cloud Sleuth",
      "  - Zipkin server",
      "  - Jaeger integration",
      "Health Checks: Built-in endpoints for service health"
    ],
    note: "Comprehensive monitoring is essential for maintaining microservices in production environments."
  },
  {
    title: "Monolithic Application Analysis",
    points: [
      "Advantages:",
      "  • Simple deployment model",
      "  • Easy debugging and testing",
      "  • Better performance for small applications",
      "Disadvantages:",
      "  • Technology lock-in",
      "  • Scaling challenges",
      "  • Large codebase complexity",
      "  • Single point of failure"
    ],
    note: "Monolithic architecture works well for simple applications but becomes challenging as complexity grows."
  },
  {
    title: "Microservices Advantages and Challenges",
    points: [
      "Advantages:",
      "  • Independent scaling",
      "  • Technology flexibility",
      "  • Fault isolation",
      "  • Team autonomy",
      "Disadvantages:",
      "  • Network complexity",
      "  • Data consistency challenges",
      "  • Operational overhead",
      "  • Testing complexity"
    ],
    note: "Microservices offer flexibility and scalability but introduce distributed system complexities."
  },
  {
    title: "Spring Cloud Ecosystem",
    points: [
      "Core Components:",
      "  ```java",
      "  @EnableEurekaServer // Service Registry",
      "  @EnableConfigServer // Configuration Management",
      "  @EnableCircuitBreaker // Fault Tolerance",
      "  ```",
      "Integration Features:",
      "  - Load balancing",
      "  - Service mesh support",
      "  - Security integration",
      "  - Stream processing"
    ],
    note: "Spring Cloud provides a comprehensive toolkit for building resilient distributed systems."
  }
];

export default session2;