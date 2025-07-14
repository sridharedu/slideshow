export const session18 = [
  {
    title: "Spring Boot Annotations: Overview",
    points: [
      "Spring Boot heavily relies on annotations to simplify configuration and development.",
      "These annotations provide metadata to the Spring container, guiding it on how to manage components, inject dependencies, and handle various aspects of the application.",
      "They reduce the need for XML configuration and promote a more concise and readable codebase."
    ],
    keepInMind: "Annotations are the backbone of modern Spring Boot development, enabling convention over configuration."
  },
  {
    title: "Common Spring Annotations",
    points: [
      "**`@Component`**: A generic stereotype for any Spring-managed component.",
      "**`@Value`**: Injects values from properties files, environment variables, or SpEL.",
      "**`@ComponentScan`**: Configures component scanning to automatically detect and register beans.",
      "**`@Autowired`**: Performs automatic dependency injection by type.",
      "**`@Scope`**: Defines the lifecycle and visibility of a bean instance.",
      "**`@Configuration`**: Marks a class as a source of bean definitions.",
      "**`@Bean`**: Indicates that a method produces a bean to be managed by the Spring container.",
      "**`@PropertySource`**: Loads properties from a specific source file."
    ],
    keepInMind: "These annotations cover fundamental aspects of Spring bean management and configuration."
  },
  {
    title: "Spring Boot: Key Features",
    points: [
      "**Auto-Configuration**: Automatically configures your Spring application based on the JARs on your classpath.",
      "**No XML Configuration**: Minimizes or eliminates the need for XML configuration, favoring annotations and convention.",
      "**Embedded Servers**: Includes embedded Tomcat, Jetty, or Undertow, simplifying deployment.",
      "**Embedded Databases**: Supports in-memory databases like H2 for easy development and testing.",
      "**Parent Project (`spring-boot-starter-parent`)**: Provides sensible defaults for Maven/Gradle builds and manages dependency versions.",
      "**Starter POMs**: Curated sets of dependencies for common functionalities (e.g., `spring-boot-starter-web`, `spring-boot-starter-data-jpa`)."
    ],
    keepInMind: "Spring Boot's features are designed to accelerate development and simplify deployment."
  },
  {
    title: "Spring Boot Application Files: Structure",
    points: [
      "**Starter Class**: The main class annotated with `@SpringBootApplication`, which serves as the entry point for the application.",
      "**Input Files**: Configuration files like `application.properties` or `application.yml` for externalizing settings.",
      "**Build File**: `pom.xml` (Maven) or `build.gradle` (Gradle) for managing dependencies, building, and packaging the application."
    ],
    keepInMind: "A typical Spring Boot project has a well-defined structure that promotes consistency and ease of development."
  },
  {
    title: "Creating a New Spring Boot Application in STS",
    points: [
      "**1. Launch STS**: Open Spring Tool Suite IDE.",
      "**2. New Spring Starter Project**: Go to `File -> New -> Spring Starter Project`.",
      "**3. Project Details**: Provide project metadata (Group, Artifact, Name, Package).",
      "**4. Select Dependencies**: Choose necessary starters (e.g., Spring Web, Spring Data JPA, H2 Database) from the wizard.",
      "**5. Finish**: STS generates a basic Spring Boot project with the selected dependencies and a main application class."
    ],
    keepInMind: "STS provides a streamlined experience for bootstrapping Spring Boot projects, saving time on initial setup."
  },
  {
    title: "Frontend and Backend Integration",
    points: [
      "Spring Boot can serve as the backend for various frontend frameworks (e.g., Angular, ReactJS, Thymeleaf).",
      "It provides RESTful API capabilities (`@RestController`) to communicate with frontend applications.",
      "Can also serve static content directly from the `src/main/resources/static` directory."
    ],
    keepInMind: "Spring Boot is highly versatile and can be used in both monolithic and microservices architectures, supporting various frontend technologies."
  },
  {
    title: "Spring Cloud and AWS Cloud Integration",
    points: [
      "**Spring Cloud**: Provides a set of tools for building common patterns in distributed systems (e.g., service discovery, circuit breakers, distributed configuration).",
      "**AWS Cloud**: Spring Boot applications can be easily deployed to AWS services like EC2, Elastic Beanstalk, or Lambda.",
      "Spring Cloud AWS provides integration with AWS services, simplifying development on the AWS platform."
    ],
    keepInMind: "Spring Boot and Spring Cloud offer a powerful combination for building cloud-native applications."
  },
  {
    title: "MVC Support and Tools",
    points: [
      "Spring Boot provides full support for Spring MVC, allowing you to build traditional web applications with server-side rendering (e.g., using Thymeleaf or JSP).",
      "It integrates well with development tools like Spring DevTools for fast restarts and live reloading.",
      "Supports various build tools like Maven and Gradle for project management and automation."
    ],
    keepInMind: "Spring Boot offers a comprehensive ecosystem for both web development and integration with popular development tools."
  }
];