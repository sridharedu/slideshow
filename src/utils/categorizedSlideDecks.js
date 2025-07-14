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
        key: 'jenkinsSlides',
        title: 'Jenkins CI/CD Workflows',
        description: 'Configuring and overseeing CI/CD workflows with Jenkins'
      },
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
  },
  "Miscellaneous": {
    icon: "📚",
    description: "Additional topics, utilities, and reference materials",
    slides: [
      {
        key: 'springComparisonSlides',
        title: 'Spring vs Spring Boot vs Microservices',
        description: 'Comparison of Spring Framework, Spring Boot, and Microservices architecture'
      }
    ]
  },
  "Timeline": {
    icon: "📅",
    description: "Daily slides and timeline-based content",
    slides: [
      {
        key: 'timeline14_07Slides',
        title: '14-07 Random Slides',
        description: 'Collection of random slides for today'
      }
    ]
  },
  "Sessions 1-10": {
    icon: "🎯",
    description: "Training sessions and structured learning modules",
    slides: [
      {
        key: 'session1',
        title: 'Spring Container Fundamentals',
        description: 'IoC, DI, Bean lifecycle, and container configuration'
      },
      {
        key: 'session2',
        title: 'Spring Boot & Microservices',
        description: 'Spring Boot features, microservices architecture, and Spring Cloud'
      },
      {
        key: 'session3',
        title: 'Session 3',
        description: 'Training session 3'
      },
      {
        key: 'session4',
        title: 'Session 4',
        description: 'Training session 4'
      },
      {
        key: 'session5',
        title: 'Session 5',
        description: 'Training session 5'
      },
      {
        key: 'session6',
        title: 'Session 6',
        description: 'Training session 6'
      },
      {
        key: 'session7',
        title: 'Session 7',
        description: 'Training session 7'
      },
      {
        key: 'session8',
        title: 'Session 8',
        description: 'Training session 8'
      },
      {
        key: 'session9',
        title: 'Session 9',
        description: 'Training session 9'
      },
      {
        key: 'session10',
        title: 'Session 10',
        description: 'Training session 10'
      }
    ]
  },
  "Sessions 11-20": {
    icon: "🎯",
    description: "Advanced training sessions and specialized topics",
    slides: [
      {
        key: 'session11',
        title: 'Session 11',
        description: 'Training session 11'
      },
      {
        key: 'session12',
        title: 'Session 12',
        description: 'Training session 12'
      },
      {
        key: 'session13',
        title: 'Session 13',
        description: 'Training session 13'
      },
      {
        key: 'session14',
        title: 'Session 14',
        description: 'Training session 14'
      },
      {
        key: 'session15',
        title: 'Session 15',
        description: 'Training session 15'
      },
      {
        key: 'session16',
        title: 'Session 16',
        description: 'Training session 16'
      },
      {
        key: 'session17',
        title: 'Session 17',
        description: 'Training session 17'
      },
      {
        key: 'session18',
        title: 'Session 18',
        description: 'Training session 18'
      },
      {
        key: 'session19',
        title: 'Session 19',
        description: 'Training session 19'
      },
      {
        key: 'session20',
        title: 'Session 20',
        description: 'Training session 20'
      }
    ]
  },
  "Sessions 21-30": {
    icon: "🎯",
    description: "Expert-level training sessions and advanced topics",
    slides: [
      {
        key: 'session21',
        title: 'Session 21',
        description: 'Training session 21'
      },
      {
        key: 'session22',
        title: 'Session 22',
        description: 'Training session 22'
      },
      {
        key: 'session23',
        title: 'Session 23',
        description: 'Training session 23'
      },
      {
        key: 'session24',
        title: 'Session 24',
        description: 'Training session 24'
      },
      {
        key: 'session25',
        title: 'Session 25',
        description: 'Training session 25'
      },
      {
        key: 'session26',
        title: 'Session 26',
        description: 'Training session 26'
      },
      {
        key: 'session27',
        title: 'Session 27',
        description: 'Training session 27'
      },
      {
        key: 'session28',
        title: 'Session 28',
        description: 'Training session 28'
      },
      {
        key: 'session29',
        title: 'Session 29',
        description: 'Training session 29'
      },
      {
        key: 'session30',
        title: 'Session 30',
        description: 'Training session 30'
      }
    ]
  },
  "Sessions 31-40": {
    icon: "🎯",
    description: "Master-level training sessions and specialized topics",
    slides: [
      {
        key: 'session31',
        title: 'Session 31',
        description: 'Training session 31'
      },
      {
        key: 'session32',
        title: 'Session 32',
        description: 'Training session 32'
      },
      {
        key: 'session33',
        title: 'Session 33',
        description: 'Training session 33'
      },
      {
        key: 'session34',
        title: 'Session 34',
        description: 'Training session 34'
      },
      {
        key: 'session35',
        title: 'Session 35',
        description: 'Training session 35'
      },
      {
        key: 'session36',
        title: 'Session 36',
        description: 'Training session 36'
      },
      {
        key: 'session37',
        title: 'Session 37',
        description: 'Training session 37'
      },
      {
        key: 'session38',
        title: 'Session 38',
        description: 'Training session 38'
      },
      {
        key: 'session39',
        title: 'Session 39',
        description: 'Training session 39'
      },
      {
        key: 'session40',
        title: 'Session 40',
        description: 'Training session 40'
      }
    ]
  },
  "Sessions 41-50": {
    icon: "🎯",
    description: "Professional-level training sessions and industry practices",
    slides: [
      {
        key: 'session41',
        title: 'Session 41',
        description: 'Training session 41'
      },
      {
        key: 'session42',
        title: 'Session 42',
        description: 'Training session 42'
      },
      {
        key: 'session43',
        title: 'Session 43',
        description: 'Training session 43'
      },
      {
        key: 'session44',
        title: 'Session 44',
        description: 'Training session 44'
      },
      {
        key: 'session45',
        title: 'Session 45',
        description: 'Training session 45'
      },
      {
        key: 'session46',
        title: 'Session 46',
        description: 'Training session 46'
      },
      {
        key: 'session47',
        title: 'Session 47',
        description: 'Training session 47'
      },
      {
        key: 'session48',
        title: 'Session 48',
        description: 'Training session 48'
      },
      {
        key: 'session49',
        title: 'Session 49',
        description: 'Training session 49'
      },
      {
        key: 'session50',
        title: 'Session 50',
        description: 'Training session 50'
      }
    ]
  },
  "Sessions 51-60": {
    icon: "🎯",
    description: "Enterprise-level training sessions and advanced architectures",
    slides: [
      {
        key: 'session51',
        title: 'Session 51',
        description: 'Training session 51'
      },
      {
        key: 'session52',
        title: 'Session 52',
        description: 'Training session 52'
      },
      {
        key: 'session53',
        title: 'Session 53',
        description: 'Training session 53'
      },
      {
        key: 'session54',
        title: 'Session 54',
        description: 'Training session 54'
      },
      {
        key: 'session55',
        title: 'Session 55',
        description: 'Training session 55'
      },
      {
        key: 'session56',
        title: 'Session 56',
        description: 'Training session 56'
      },
      {
        key: 'session57',
        title: 'Session 57',
        description: 'Training session 57'
      },
      {
        key: 'session58',
        title: 'Session 58',
        description: 'Training session 58'
      },
      {
        key: 'session59',
        title: 'Session 59',
        description: 'Training session 59'
      },
      {
        key: 'session60',
        title: 'Session 60',
        description: 'Training session 60'
      }
    ]
  }
};