export const session10 = [
  {
    title: "Java-based Configuration: Introduction",
    points: [
      "Java-based configuration is a modern approach in Spring for defining beans and their dependencies using plain Java classes and annotations.",
      "It offers a type-safe and refactorable alternative to XML-based configuration.",
      "It leverages annotations like `@Configuration` and `@Bean` to achieve the same results as XML."
    ],
    keepInMind: "Java-based configuration is the preferred approach in Spring Boot due to its flexibility and maintainability."
  },
  {
    title: "Limitations of XML and Annotation Configuration",
    points: [
      "**XML Configuration Limitations**:",
      "  - Verbose and can become unwieldy for large projects.",
      "  - Lacks type safety, leading to potential runtime errors.",
      "  - Refactoring class names or methods requires manual updates in XML.",
      "**Annotation Configuration Limitations**:",
      "  - Can scatter configuration across multiple classes.",
      "  - Less centralized view of bean definitions compared to XML or Java config."
    ],
    keepInMind: "Java-based configuration aims to address these limitations by providing a more robust and centralized approach."
  },
  {
    title: "@Configuration and @Bean: Explained",
    points: [
      "**`@Configuration`**: A class-level annotation that indicates that a class declares one or more `@Bean` methods.",
      "  - Configuration classes are processed by the Spring IoC container to generate bean definitions.",
      "**`@Bean`**: A method-level annotation that tells Spring that a method produces a bean to be managed by the Spring container.",
      "  - The method's return type is the bean's type, and the method name is the bean's ID (by default)."
    ],
    keepInMind: "`@Configuration` classes are the blueprints, and `@Bean` methods are the factories for your Spring-managed objects."
  },
  {
    title: "Example: Java Config Code",
    points: [
      "```java",
      "@Configuration",
      "public class AppConfig {\n\n    @Bean\n    public MyService myService() {\n        return new MyService();\n    }\n\n    @Bean\n    public MyRepository myRepository() {\n        return new MyRepository();\n    }\n}",
      "```",
      "In this example, `AppConfig` is a configuration class, and `myService()` and `myRepository()` methods define two beans."
    ],
    keepInMind: "This approach provides a clear and programmatic way to define your application's components."
  },
  {
    title: "Code Explanation: Wiring Dependencies",
    points: [
      "You can wire dependencies between beans defined in the same `@Configuration` class by calling the `@Bean` methods.",
      "```java",
      "@Configuration",
      "public class AppConfig {\n\n    @Bean\n    public MyService myService() {\n        return new MyService(myRepository()); // Calling another @Bean method\n    }\n\n    @Bean\n    public MyRepository myRepository() {\n        return new MyRepository();\n    }\n}",
      "```",
      "Spring ensures that `myRepository()` is called only once (for singleton beans) and the same instance is reused."
    ],
    keepInMind: "Spring handles the proxying of `@Configuration` classes to ensure correct bean lifecycle and dependency resolution."
  },
  {
    title: "Environment: Important Points",
    points: [
      "The Spring `Environment` abstraction provides access to property sources (e.g., properties files, environment variables, command-line arguments).",
      "You can inject the `Environment` object into your beans to programmatically access properties.",
      "```java",
      "@Autowired",
      "private Environment env;",
      "// env.getProperty(\"my.property\");",
      "```",
      "Useful for conditional bean creation or dynamic configuration based on the active environment."
    ],
    keepInMind: "The `Environment` is a powerful tool for building flexible and environment-aware applications."
  },
  {
    title: "Frequently Asked Questions (FAQ)",
    points: [
      "**Q: When should I use Java-based configuration over XML or annotations?**",
      "**A:** Java-based configuration is generally preferred for its type safety, refactorability, and ability to express complex bean wiring logic. It's the default in Spring Boot.",
      "**Q: Can I mix different configuration styles (XML, Java, annotations)?**",
      "**A:** Yes, Spring allows you to mix and match configuration styles. For example, you can import XML configurations into Java configuration classes.",
      "**Q: What is the role of `AnnotationConfigApplicationContext`?**",
      "**A:** It's an `ApplicationContext` implementation that accepts `@Configuration` classes as input, allowing you to bootstrap a Spring container without XML."
    ],
    keepInMind: "Spring's flexibility in configuration allows you to choose the best approach for different parts of your application."
  }
];