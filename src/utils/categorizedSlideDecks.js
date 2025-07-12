export const categorizedSlideDecks = {
  "Core Java & Language Features": {
    icon: "☕",
    description: "Core Java fundamentals, Collections, Multithreading, OOP concepts",
    slides: [
      {
        key: 'objectsInJavaSlides',
        title: 'Objects in Java',
        description: 'Object creation and lifecycle'
      },
      {
        key: 'hashCodeSlides',
        title: 'hashCode() in Java',
        description: 'Understanding hashCode and equals contract'
      },
      {
        key: 'aggregationCompositionSlides',
        title: 'Aggregation vs Composition',
        description: 'Object relationships and lifecycle management'
      },
      {
        key: 'javaMemorySlides',
        title: 'Java Memory Management',
        description: 'JVM memory areas and garbage collection'
      },
      {
        key: 'javaTimelineSlides',
        title: 'Java Evolution Timeline',
        description: 'Java versions from 1.0 to 21 with key features'
      },
      {
        key: 'javaJ2EESlides',
        title: 'Java J2EE Enterprise',
        description: 'Enterprise Java platform and technologies'
      },
      {
        key: 'j2eeVsSpringSlides',
        title: 'J2EE vs Spring Framework',
        description: 'Comparison of enterprise Java approaches'
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
        description: 'Object-Relational Mapping with JPA'
      },
      {
        key: 'entityRelationshipsSlides',
        title: 'JPA Entity Relationships',
        description: 'Mapping database relationships in JPA'
      },
      {
        key: 'entityManagerSlides',
        title: 'JPA EntityManager',
        description: 'Core JPA interface for database operations'
      },
      {
        key: 'springDataJpaSlides',
        title: 'Spring Data JPA',
        description: 'High-level data access with Spring Data'
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