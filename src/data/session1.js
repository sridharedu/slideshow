export const session1 = [
  {
    title: "What is the Spring Container?",
    points: [
      "Bean Management - Creates and manages Spring beans",
      "Dependency Injection (DI) - Injects dependencies automatically",
      "Bean Configuration - Configures beans using XML, Java, or annotations",
      "Bean Scopes - Manages singleton, prototype, and other scopes",
      "AOP Support - Provides aspect-oriented programming features",
      "Container Extensions - Allows custom extensions and plugins"
    ],
    note: "The Spring Container is the core of the Spring Framework that manages the complete lifecycle of beans."
  },
  {
    title: "How the Spring Container Works",
    points: [
      "1. Find/Scan classes (Spring Bean)",
      "   - Scans classpath for annotated classes",
      "   - Identifies components using @Component, @Service, etc.",
      "2. Create object (DbConnection)",
      "   - Instantiates beans using constructors",
      "3. Link Objects (Inject/HAS-A)",
      "   - Performs dependency injection",
      "4. Destroy the objects (even Container)",
      "   - Cleanup when application shuts down"
    ],
    note: "The container follows a predictable lifecycle for all managed beans."
  },
  {
    title: "Inputs to the Spring Container",
    points: [
      "Spring Bean - Classes marked with Spring annotations",
      "Spring Configuration File:",
      "  • XML Configuration - Traditional XML-based config",
      "  • Java Configuration - @Configuration classes",
      "  • Annotation Configuration - @Component scanning"
    ],
    note: "The container needs both beans and configuration to function properly."
  },
  {
    title: "Types of Spring Containers",
    points: [
      "BeanFactory (Interface)",
      "  - Basic container with lazy initialization",
      "  - Minimal memory footprint",
      "ApplicationContext (Interface)",
      "  - Advanced container with eager initialization",
      "  - Extends BeanFactory with additional features",
      "  - Event handling, internationalization support"
    ],
    note: "ApplicationContext is preferred for most applications due to its rich feature set."
  },
  {
    title: "ApplicationContext Implementations",
    points: [
      "ClassPathXmlApplicationContext",
      "  - Loads XML config from classpath",
      "  ```java",
      "  ApplicationContext ctx = new ClassPathXmlApplicationContext(\"config.xml\");",
      "  ```",
      "FileSystemXmlApplicationContext",
      "  - Loads XML config from file system",
      "AnnotationConfigApplicationContext",
      "  - Loads Java-based configuration"
    ],
    note: "Choose the implementation based on your configuration approach."
  },
  {
    title: "Dependency Injection (DI) Fundamentals",
    points: [
      "What is Dependency Injection?",
      "  - Design pattern for achieving Inversion of Control",
      "  - Container provides dependencies to objects",
      "Benefits:",
      "  • Loose coupling between components",
      "  • Easier testing with mock objects",
      "  • Better code maintainability",
      "  • Centralized configuration management"
    ],
    note: "DI is the foundation that makes Spring applications flexible and testable."
  },
  {
    title: "Inversion of Control (IoC)",
    points: [
      "Traditional Approach:",
      "  - Objects create their own dependencies",
      "  - Tight coupling between classes",
      "IoC Approach:",
      "  - Container creates and injects dependencies",
      "  - Objects declare what they need",
      "  - Framework handles object creation and wiring",
      "Result: Inverted control flow"
    ],
    note: "IoC inverts the traditional control flow - instead of objects controlling their dependencies, the container controls them."
  },
  {
    title: "Bean Lifecycle in Spring Container",
    points: [
      "1. Bean Definition Loading",
      "2. Bean Instantiation",
      "3. Dependency Injection",
      "4. Bean Post-Processing (Before Init)",
      "5. Initialization (@PostConstruct, init-method)",
      "6. Bean Post-Processing (After Init)",
      "7. Bean Ready for Use",
      "8. Destruction (@PreDestroy, destroy-method)"
    ],
    note: "Understanding the lifecycle helps in implementing custom initialization and cleanup logic."
  },
  {
    title: "Container Configuration Methods",
    points: [
      "XML Configuration:",
      "  ```xml",
      "  <bean id=\"userService\" class=\"com.example.UserService\"/>",
      "  ```",
      "Java Configuration:",
      "  ```java",
      "  @Configuration",
      "  public class AppConfig {",
      "    @Bean",
      "    public UserService userService() { return new UserService(); }",
      "  }",
      "  ```",
      "Annotation Configuration:",
      "  ```java",
      "  @Component",
      "  public class UserService { }",
      "  ```"
    ],
    note: "Modern Spring applications typically use Java configuration or annotations over XML."
  },
  {
    title: "Spring Container Best Practices",
    points: [
      "Configuration:",
      "  • Prefer Java config over XML for new projects",
      "  • Use @ComponentScan for automatic bean discovery",
      "  • Keep configuration classes focused and modular",
      "Bean Management:",
      "  • Use appropriate scopes (singleton vs prototype)",
      "  • Implement proper initialization and cleanup",
      "  • Avoid circular dependencies",
      "Testing:",
      "  • Use @TestConfiguration for test-specific beans",
      "  • Leverage Spring's testing support"
    ],
    note: "Following best practices ensures maintainable and efficient Spring applications."
  }
];

export default session1;