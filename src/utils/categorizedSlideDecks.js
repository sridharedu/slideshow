export const categorizedSlideDecks = {
  "Core Java & Language Features": {
    icon: "☕",
    description: "Core Java fundamentals, Collections, Multithreading, OOP concepts",
    slides: [
      {
        key: 'coreJavaFundamentalsSlides',
        title: 'Core Java Fundamentals',
        description: 'Objects, lifecycle, hashCode/equals contract, aggregation vs composition'
      },
      {
        key: 'javaMemorySlides',
        title: 'Java Memory & Performance',
        description: 'JVM memory areas, garbage collection, performance tuning'
      },
      {
        key: 'javaEnterpriseEvolutionSlides',
        title: 'Java Enterprise Evolution',
        description: 'Java timeline, J2EE platform, Spring framework comparison'
      }
    ]
  },
  "Spring Ecosystem": {
    icon: "🌱",
    description: "Spring Boot, Spring Security, Spring Data, Spring Actuator, OAuth2/JWT",
    slides: [
      {
        key: 'webClientSlides',
        title: 'WebClient in Spring',
        description: 'Non-blocking HTTP client for reactive applications'
      },
      {
        key: 'spyBeansSlides',
        title: '@SpyBean in Spring Boot',
        description: 'Partial mocking with Spring Boot Test'
      },
      {
        key: 'actuatorSlides',
        title: 'Spring Boot Actuator',
        description: 'Production monitoring and management'
      },
      {
        key: 'jwtSlides',
        title: 'JWT Authentication',
        description: 'JSON Web Tokens in Spring Boot'
      },
      {
        key: 'ldapSecuritySlides',
        title: 'Spring Security with LDAP',
        description: 'Enterprise authentication using LDAP'
      },
      {
        key: 'iocContainerSlides',
        title: 'Spring IoC Container',
        description: 'Inversion of Control, dependency injection, bean lifecycle'
      },
      {
        key: 'beanSlides',
        title: 'Spring Beans',
        description: 'Bean definition, autowiring, scopes, lifecycle methods'
      }
    ]
  },
  "Microservices & API Design": {
    icon: "🔗",
    description: "REST APIs, API Gateway, RSocket, Swagger/OpenAPI",
    slides: [
      {
        key: 'swaggerSlides',
        title: 'Swagger API Documentation',
        description: 'Interactive API docs with OpenAPI'
      },
      {
        key: 'serviceDiscoverySlides',
        title: 'Service Discovery',
        description: 'Microservice discovery patterns, Eureka, Kubernetes DNS, Feign clients'
      },
      {
        key: 'apiGatewaySlides',
        title: 'API Gateway',
        description: 'Spring Cloud Gateway, routing, filters, authentication, rate limiting'
      },
      {
        key: 'configurationManagementSlides',
        title: 'Configuration Management',
        description: 'Spring Cloud Config, externalized configuration, encryption, profiles'
      }
    ]
  },
  "Messaging & Event-Driven Architecture": {
    icon: "📨",
    description: "Kafka, RabbitMQ, ActiveMQ, Debezium, Vert.x",
    slides: []
  },
  "Databases & Query Optimization": {
    icon: "🗄️",
    description: "PostgreSQL, MySQL, MongoDB, Redis, PL/SQL, Triggers, Views",
    slides: [
      {
        key: 'jpaSlides',
        title: 'Java Persistence API (JPA)',
        description: 'Object-relational mapping, entities, annotations, entity relationships, EntityManager, Spring Data JPA, repository patterns, query methods'
      },
      {
        key: 'springJpaSlides',
        title: 'Transaction Management and Caching',
        description: 'ACID properties, cascading operations, lazy loading, caching strategies, N+1 solutions, distributed transactions, isolation levels, locking strategies'
      }
    ]
  },
  "DevOps & CI/CD": {
    icon: "🚀",
    description: "Docker, Jenkins, Git, Release Pipelines",
    slides: [
      {
        key: 'dockerSlides',
        title: 'Docker & Dockerfile',
        description: 'Containerizing Spring Boot applications'
      },
      {
        key: 'gitSlides',
        title: 'Git Version Control',
        description: 'Distributed version control system and commands'
      },
      {
        key: 'pomFileSlides',
        title: 'Maven POM File',
        description: 'Project Object Model configuration and dependencies'
      }
    ]
  },
  "Cloud & Infrastructure": {
    icon: "☁️",
    description: "AWS (EC2, Lambda, S3, RDS), Monitoring, Deployment, RBAC",
    slides: [
      {
        key: 'ec2DeploymentSlides',
        title: 'Deploy Service to AWS EC2',
        description: 'Complete guide to EC2 deployment'
      }
    ]
  },
  "Monitoring & Observability": {
    icon: "📊",
    description: "ELK Stack, Prometheus, Grafana, Zipkin, Logging Standards",
    slides: [
      {
        key: 'zipkinSlides',
        title: 'Zipkin Distributed Tracing',
        description: 'Microservice request tracing and debugging'
      },
      {
        key: 'prometheusSlides',
        title: 'Prometheus Monitoring',
        description: 'Time-series monitoring and alerting toolkit'
      },
      {
        key: 'grafanaSlides',
        title: 'Grafana Dashboards',
        description: 'Data visualization and monitoring dashboards'
      }
    ]
  },
  "Testing Frameworks": {
    icon: "🧪",
    description: "JUnit, Mockito, Integration Testing",
    slides: []
  },
  "Soft Skills & Leadership": {
    icon: "👥",
    description: "Mentoring, code reviews, business alignment, documentation, client interaction",
    slides: []
  },
  "Java 8 & Modern Features": {
    icon: "🚀",
    description: "Java 8+, Streams, Lambdas, CompletableFuture, Optional, Functional Programming",
    slides: [
      {
        key: 'completableFutureSlides',
        title: 'CompletableFuture in Java',
        description: 'Async programming with CompletableFuture'
      },
      {
        key: 'optionalSlides',
        title: 'Optional in Java',
        description: 'Null-safe programming with Optional'
      }
    ]
  },
  "Frontend & UI Technologies": {
    icon: "🎨",
    description: "React, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript",
    slides: []
  }
};