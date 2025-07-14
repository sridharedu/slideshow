export const session19 = [
  {
    title: "Spring Boot Runners: Overview",
    points: [
      "Spring Boot provides `ApplicationRunner` and `CommandLineRunner` interfaces to execute specific code after the Spring application context has been loaded.",
      "These interfaces are useful for running initialization tasks, data setup, or any code that needs to execute once the application is ready.",
      "They are executed before the application starts accepting requests (e.g., before a web server starts)."
    ],
    keepInMind: "Runners are ideal for one-time setup tasks that depend on a fully initialized Spring context."
  },
  {
    title: "Use Cases for Spring Boot Runners",
    points: [
      "**Testing Objects (Created or not?)**: Verify that certain beans are correctly initialized and available in the context.",
      "**Loading Database Scripts**: Populate a database with initial data or run schema migrations.",
      "**Start Batch Processing**: Initiate a batch job, such as processing a CSV/Excel file and loading data into a database.",
      "**Root User Creation/Roles Setup**: Create default administrative users or set up initial security roles."
    ],
    keepInMind: "Runners provide a structured way to perform actions that are critical for application startup and functionality."
  },
  {
    title: "Code Explanation: Implementing a Runner",
    points: [
      "**`MyStartupRunner.java`**:",
      "```java",
      "@Component",
      "public class MyStartupRunner implements CommandLineRunner {\n\n    @Override\n    public void run(String... args) throws Exception {\n        System.out.println(\"Application started with arguments: \" + Arrays.toString(args));\n        // Perform startup tasks here\n    }\n}",
      "```",
      "The `run` method is executed once the application context is loaded."
    ],
    keepInMind: "`CommandLineRunner` provides access to command-line arguments, useful for configurable startup tasks."
  },
  {
    title: "Execution Order of Runners",
    points: [
      "If you have multiple `ApplicationRunner` or `CommandLineRunner` beans, you can control their execution order.",
      "Implement the `org.springframework.core.Ordered` interface or use the `@Order` annotation.",
      "Lower `order` values indicate higher priority (executed earlier).",
      "```java",
      "@Component",
      "@Order(1)",
      "public class FirstRunner implements CommandLineRunner { /* ... */ }",
      "@Component",
      "@Order(2)",
      "public class SecondRunner implements CommandLineRunner { /* ... */ }",
      "```"
    ],
    keepInMind: "Controlling runner execution order is important when tasks have dependencies on each other."
  },
  {
    title: "Spring Annotations: Review",
    points: [
      "**`@Component`**: Generic stereotype for Spring-managed components.",
      "**`@Value`**: Injects values from properties or SpEL.",
      "**`@ComponentScan`**: Configures component scanning.",
      "**`@Autowired`**: Performs automatic dependency injection.",
      "**`@Scope`**: Defines bean lifecycle and visibility.",
      "**`@Configuration`**: Marks a class as a source of bean definitions.",
      "**`@Bean`**: Indicates a method produces a bean.",
      "**`@PropertySource`**: Loads properties from a specific file."
    ],
    keepInMind: "A solid understanding of these core annotations is fundamental for Spring Boot development."
  },
  {
    title: "@ConfigurationProperties: Overview",
    points: [
      "`@ConfigurationProperties` provides a way to bind external configuration properties to Java objects.",
      "This allows for type-safe configuration, where properties are mapped directly to fields in a POJO.",
      "It simplifies accessing complex or hierarchical configuration data."
    ],
    keepInMind: "`@ConfigurationProperties` is ideal for structuring and validating application-specific settings."
  },
  {
    title: "Code Explanation: @ConfigurationProperties",
    points: [
      "**`application.properties`**:",
      "```properties",
      "app.settings.name=MyApp",
      "app.settings.version=1.0",
      "```",
      "**`AppSettings.java` (POJO)**:",
      "```java",
      "@Component",
      "@ConfigurationProperties(prefix = \"app.settings\")",
      "public class AppSettings {\n    private String name;\n    private String version;\n    // getters and setters\n}",
      "```",
      "Spring automatically binds properties with the `app.settings` prefix to the `AppSettings` object."
    ],
    keepInMind: "The `prefix` attribute in `@ConfigurationProperties` is crucial for mapping properties to the correct object."
  },
  {
    title: "TASK: EmailConfig (class)",
    points: [
      "**Task**: Create a Java class `EmailConfig` that uses `@ConfigurationProperties` to bind email-related settings from `application.properties`.",
      "**Properties to bind**:",
      "  - `mail.host` (String)",
      "  - `mail.port` (int)",
      "  - `mail.username` (String)",
      "  - `mail.password` (String)",
      "Ensure proper getters and setters are in place."
    ],
    keepInMind: "This exercise reinforces the practical application of `@ConfigurationProperties` for managing application settings."
  }
];