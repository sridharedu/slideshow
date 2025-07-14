export const session11Slides = [
  {
    title: "@Autowired: Revisited",
    points: [
      "`@Autowired` is Spring's primary mechanism for automatic dependency injection.",
      "It can be applied to constructors, setter methods, or fields to let Spring resolve and inject collaborating beans.",
      "Spring attempts to find a matching bean by type in the application context."
    ],
    keepInMind: "`@Autowired` simplifies bean wiring, but understanding its nuances is crucial for robust applications."
  },
  {
    title: "@Autowired: Injection Types",
    points: [
      "**Constructor Injection**: Dependencies are provided as constructor arguments. Recommended for mandatory dependencies, ensuring immutability and valid object state.",
      "**Setter Injection**: Dependencies are provided via public setter methods. Suitable for optional dependencies or when mutability is desired.",
      "**Field Injection**: Dependencies are injected directly into fields. Most concise, but generally discouraged as it hides dependencies and makes testing harder."
    ],
    keepInMind: "Prioritize constructor injection for core dependencies, and use setter injection for optional ones."
  },
  {
    title: "Java Bean vs. @Bean",
    points: [
      "**Java Bean**: A plain old Java object (POJO) that follows certain conventions (no-arg constructor, getters/setters for properties). It's a general Java concept.",
      "**`@Bean`**: A Spring annotation used within a `@Configuration` class to explicitly declare a single bean. The method annotated with `@Bean` returns the object that Spring should manage.",
      "All Spring `@Bean`s are Java Beans, but not all Java Beans are Spring `@Bean`s."
    ],
    keepInMind: "`@Bean` gives you explicit control over how a bean is created and configured within the Spring container."
  },
  {
    title: "Spring Bean Scope: Overview",
    points: [
      "Bean scope defines the lifecycle and visibility of a bean instance within the Spring container.",
      "It determines how many instances of a bean are created and how they are shared.",
      "Spring provides several built-in scopes, and you can also define custom ones."
    ],
    keepInMind: "Choosing the correct bean scope is vital for managing resources, state, and concurrency in your application."
  },
  {
    title: "Spring Bean Scopes: Standard",
    points: [
      "**Singleton (Default)**: A single instance of the bean is created and shared across the entire application context. All requests for the bean return the same instance.",
      "**Prototype**: A new instance of the bean is created every time it is requested. Each request gets its own unique object."
    ],
    keepInMind: "Singleton is the most common scope, suitable for stateless services. Prototype is for stateful objects that need to be unique per use."
  },
  {
    title: "Spring Bean Scopes: Web-Aware",
    points: [
      "**Request**: A new instance of the bean is created for each HTTP request. Valid only within the scope of a single web request.",
      "**Session**: A new instance of the bean is created for each HTTP session. Valid for the lifetime of a user's session.",
      "**Application**: A single instance of the bean is created per `ServletContext`. Similar to a singleton but specific to web applications."
    ],
    keepInMind: "Web-aware scopes are crucial for managing state in web applications, ensuring data isolation per request or session."
  },
  {
    title: "Singleton Scope vs. Singleton Class",
    points: [
      "**Q) Are singleton scope and singleton class the same?**",
      "**A:** No. A **singleton class** (GoF pattern) ensures only one instance of a class exists within a JVM, and the class itself controls its instantiation.",
      "A **singleton scope** in Spring means the Spring container manages a single instance of a bean. Spring handles the creation and management, not the class itself."
    ],
    keepInMind: "Spring's singleton scope is a container-managed singleton, offering more flexibility than a traditional GoF singleton."
  },
  {
    title: "Default Scope in Spring Framework",
    points: [
      "**Q) Which one is the default scope in the Spring framework?**",
      "**A:** The **singleton** scope is the default for all beans in the Spring Framework.",
      "This means if you don't explicitly specify a scope for a bean, Spring will create and manage a single shared instance of that bean."
    ],
    keepInMind: "Always be aware of the default singleton scope to avoid unexpected shared state issues."
  },
  {
    title: "Code Samples: Demonstrating Scopes",
    points: [
      "**XML Config**:",
      "```xml",
      "<bean id=\"myBean\" class=\"com.example.MyBean\" scope=\"prototype\"/>",
      "```",
      "**Java Config**:",
      "```java",
      "@Bean",
      "@Scope(\"prototype\")",
      "public MyBean myBean() { return new MyBean(); }",
      "```",
      "**Annotation Config**:",
      "```java",
      "@Component",
      "@Scope(\"prototype\")",
      "public class MyBean { /* ... */ }",
      "```"
    ],
    keepInMind: "The `@Scope` annotation is the most common way to define a bean's scope in modern Spring applications."
  }
];