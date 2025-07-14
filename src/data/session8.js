export const session8 = [
  {
    title: "@ComponentScan: Overview",
    points: [
      "`@ComponentScan` is a powerful annotation in Spring that enables automatic detection and registration of Spring-managed components.",
      "It scans specified packages for classes annotated with stereotype annotations like `@Component`, `@Service`, `@Repository`, and `@Controller`.",
      "By default, if not specified, `@ComponentScan` scans the package of the class where it's declared and all its sub-packages."
    ],
    keepInMind: "`@ComponentScan` is crucial for Spring's convention-over-configuration approach, reducing explicit bean definitions."
  },
  {
    title: "Why Use .properties / .xml / .yml Files?",
    points: [
      "**Separation of Configuration**: Keeps configuration separate from code, making applications more flexible.",
      "**Externalization of Values**: Allows changing application behavior without recompiling code.",
      "**Ease of Modification**: Simple text files are easy to edit and manage.",
      "**Security and Confidentiality**: Sensitive information can be stored securely outside the codebase.",
      "**Compatibility with Different Formats**: Supports various formats like key-value pairs (.properties), structured XML, or human-readable YAML."
    ],
    keepInMind: "Externalizing configuration is a best practice for building adaptable and maintainable applications."
  },
  {
    title: ".properties Files and @Value Injection",
    points: [
      "`.properties` files store configuration as key-value pairs.",
      "Spring Boot automatically loads `application.properties` (or `application.yml`).",
      "Values can be injected into Spring Beans using the `@Value` annotation.",
      "```properties",
      "db.url=jdbc:mysql://localhost:3306/mydb",
      "db.username=user",
      "```",
      "```java",
      "@Value(\"${db.url}\")",
      "private String dbUrl;",
      "```"
    ],
    keepInMind: "`@Value` combined with `.properties` files provides a simple yet effective way to manage application settings."
  },
  {
    title: "Code Example: .properties and @Value",
    points: [
      "**`myapp.properties`**:",
      "```properties",
      "app.name=MySpringBootApp",
      "app.version=1.0",
      "```",
      "**`MyAppConfig.java` (Spring Config)**:",
      "```java",
      "@Configuration",
      "@PropertySource(\"classpath:myapp.properties\")",
      "public class MyAppConfig { /* ... */ }",
      "```",
      "**`DatabaseConnection.java` (Spring Bean)**:",
      "```java",
      "@Component",
      "public class DatabaseConnection {\n    @Value(\"${app.name}\")\n    private String appName;\n    // ...\n}",
      "```"
    ],
    keepInMind: "`@PropertySource` is used to explicitly load properties files that are not automatically picked up by Spring Boot."
  },
  {
    title: "Inheritance (IS-A) and Association (HAS-A)",
    points: [
      "**Inheritance (IS-A)**: Represents a generalization-specialization relationship (e.g., `Car IS-A Vehicle`). Achieved using `extends` keyword.",
      "**Association (HAS-A)**: Represents a whole-part relationship or a usage relationship (e.g., `Car HAS-A Engine`). Achieved by having an instance of one class as a member of another.",
      "Understanding these relationships is fundamental for object-oriented design and dependency injection."
    ],
    keepInMind: "DI primarily deals with HAS-A relationships, where one object needs another to perform its function."
  },
  {
    title: "@Autowired in Spring: Overview",
    points: [
      "`@Autowired` is used for automatic dependency injection in Spring.",
      "It tells Spring to automatically provide the required dependencies for a bean.",
      "Spring performs autowiring by type by default.",
      "Can be applied to fields, setter methods, and constructors."
    ],
    keepInMind: "`@Autowired` significantly reduces the boilerplate code needed for dependency injection."
  },
  {
    title: "@Autowired: Field Injection",
    points: [
      "The most concise way to use `@Autowired`.",
      "Spring injects the dependency directly into the field.",
      "```java",
      "@Component",
      "public class MyService {\n    @Autowired\n    private MyRepository repository;\n    // ...\n}",
      "```",
      "**Pros**: Simple, less code. **Cons**: Makes testing harder, hides dependencies, violates immutability."
    ],
    keepInMind: "While convenient, field injection is generally discouraged for production code due to its drawbacks."
  },
  {
    title: "@Autowired: Setter Method Injection",
    points: [
      "Dependencies are injected via public setter methods.",
      "```java",
      "@Component",
      "public class MyService {\n    private MyRepository repository;\n\n    @Autowired\n    public void setRepository(MyRepository repository) {\n        this.repository = repository;\n    }\n    // ...\n}",
      "```",
      "**Pros**: Allows optional dependencies, mutable. **Cons**: Can lead to partially initialized objects if not all setters are called."
    ],
    keepInMind: "Setter injection is suitable for optional dependencies or when you need to change dependencies at runtime."
  },
  {
    title: "@Autowired: Constructor Injection",
    points: [
      "Dependencies are injected via the constructor.",
      "**Recommended approach for mandatory dependencies.**",
      "```java",
      "@Component",
      "public class MyService {\n    private final MyRepository repository;\n\n    @Autowired\n    public MyService(MyRepository repository) {\n        this.repository = repository;\n    }\n    // ...\n}",
      "```",
      "**Pros**: Ensures immutability, guarantees all dependencies are present, easier testing."
    ],
    keepInMind: "Constructor injection promotes robust, testable, and maintainable code by enforcing dependency requirements."
  }
];