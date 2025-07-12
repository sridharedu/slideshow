export const javaComponentsSlides = [
  {
    title: "What are Java Components?",
    points: [
      "✔️ Reusable building blocks in Java applications",
      "Encapsulate data and behavior",
      "Promote modularity and maintainability",
      "🔥 Foundation for larger software systems"
    ],
    keepInMind: "Components aim to reduce complexity by breaking down systems into manageable, independent units."
  },
  {
    title: "JavaBeans - The Original Component Model",
    points: [
      "✔️ Introduced in Java 1.1 (1997)",
      "Reusable software components for visual builders",
      "Follow specific naming conventions (getters/setters, no-arg constructor)",
      "🔥 Designed for GUI development (e.g., AWT, Swing)"
    ],
    keepInMind: "JavaBeans were a precursor to modern component models, emphasizing introspection and reusability."
  },
  {
    title: "JavaBeans Properties",
    points: [
      "Defined by getter and setter methods",
      "`getPropertyName()` for read-only property `propertyName`",
      "`setPropertyName(value)` for write-only property `propertyName`",
      "`isPropertyName()` for boolean properties",
      "```java",
      "public class Person {",
      "    private String name;",
      "    public String getName() { return name; }",
      "    public void setName(String name) { this.name = name; }",
      "}",
      "```"
    ],
    keepInMind: "The strict naming conventions allowed IDEs to automatically discover and manipulate bean properties."
  },
  {
    title: "JavaBeans Events",
    points: [
      "Support event handling through listener interfaces",
      "`addPropertyChangeListener(listener)`",
      "`removePropertyChangeListener(listener)`",
      "Used for communication between components",
      "🔥 Enables observer pattern within components"
    ],
    keepInMind: "Event handling in JavaBeans was a way to build interactive UIs with decoupled components."
  },
  {
    title: "POJOs - Simplicity and Flexibility",
    points: [
      "✔️ Plain Old Java Objects - simple Java classes",
      "No framework-specific interfaces or annotations required",
      "Focus on business logic, not infrastructure concerns",
      "🔥 Promotes loose coupling and testability"
    ],
    keepInMind: "POJOs emerged as a reaction to the complexity of early J2EE specifications like EJB 2.x."
  },
  {
    title: "Why POJOs?",
    points: [
      "**Reduced Complexity**: Easier to understand and maintain.",
      "**Improved Testability**: Can be tested without a container.",
      "**Increased Flexibility**: Not tied to a specific framework.",
      "**Better Readability**: Code focuses on domain logic.",
      "🔥 The 'Plain Old' emphasizes their lack of special requirements."
    ],
    keepInMind: "POJOs are the foundation of modern lightweight frameworks like Spring and Hibernate."
  },
  {
    title: "Spring Beans - Managed POJOs",
    points: [
      "✔️ Objects instantiated, assembled, and managed by Spring IoC container",
      "Configured via XML, annotations, or Java code",
      "Dependency Injection (DI) is a core concept",
      "🔥 Spring brings enterprise features to POJOs"
    ],
    keepInMind: "Spring Beans are essentially POJOs that are managed by the Spring container, enabling powerful features like DI and AOP."
  },
  {
    title: "Spring Bean Scopes",
    points: [
      "```table",
      "Scope | Description | Lifecycle",
      "Singleton | Single instance per container (default) | Entire application lifecycle",
      "Prototype | New instance every time | Short-lived, caller manages",
      "Request | One instance per HTTP request | HTTP request lifecycle",
      "Session | One instance per HTTP session | HTTP session lifecycle",
      "Application | One instance per ServletContext | Web application lifecycle",
      "```"
    ],
    keepInMind: "Choosing the right bean scope is crucial for managing state and optimizing performance."
  },
  {
    title: "Spring Bean Lifecycle",
    points: [
      "1. **Instantiation**: Bean created.",
      "2. **Populate Properties**: Dependencies injected.",
      "3. **Initialization**: `afterPropertiesSet()` or `@PostConstruct` called.",
      "4. **Ready for Use**: Bean is active.",
      "5. **Destruction**: `destroy()` or `@PreDestroy` called.",
      "🔥 Spring manages the entire lifecycle of its beans."
    ],
    keepInMind: "Understanding the lifecycle allows you to hook into specific phases for custom logic."
  },
  {
    title: "@Component and Stereotypes",
    points: [
      "`@Component`: Generic stereotype for any Spring-managed component.",
      "`@Service`: Business logic layer.",
      "`@Repository`: Data access layer (enables persistence exception translation).",
      "`@Controller`: Web layer (MVC controllers).",
      "`@RestController`: RESTful web services (combines `@Controller` and `@ResponseBody`).",
      "🔥 These annotations enable component scanning and auto-detection."
    ],
    keepInMind: "Stereotype annotations improve readability and provide semantic meaning to your components."
  },
  {
    title: "Component Evolution Summary",
    points: [
      "**JavaBeans**: Early component model, focused on visual tools, strict conventions.",
      "**POJOs**: Reaction to complexity, simple Java objects, no framework ties.",
      "**Spring Beans**: POJOs managed by Spring, leveraging DI and AOP, lightweight.",
      "✔️ Trend towards simplicity, testability, and framework-agnostic design.",
      "🔥 Modern Java development heavily relies on Spring Beans and POJOs."
    ],
    keepInMind: "The evolution reflects a shift from heavy, intrusive frameworks to lightweight, flexible approaches."
  }
];