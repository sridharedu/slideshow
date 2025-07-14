export const session12 = [
  {
    title: "Spring Bean Scopes in Detail",
    points: [
      "Spring bean scopes define the lifecycle and visibility of a bean instance within the Spring IoC container.",
      "Understanding scopes is crucial for managing state, concurrency, and resource utilization in your application.",
      "Each scope dictates how many instances of a bean are created and how they are shared across the application."
    ],
    keepInMind: "Choosing the right scope is a fundamental design decision that impacts application behavior and performance."
  },
  {
    title: "Singleton Scope",
    points: [
      "**Definition**: Only one instance of the bean is created per Spring IoC container.",
      "**Characteristics**: All requests for the bean return the same instance. It's the default scope.",
      "**Use Cases**: Stateless services, utility classes, data access objects (DAOs) where sharing a single instance is efficient and safe.",
      "**Example**: A `UserService` bean that handles user-related business logic."
    ],
    keepInMind: "Singleton beans are highly efficient as they are initialized once and reused, but they must be thread-safe."
  },
  {
    title: "Prototype Scope",
    points: [
      "**Definition**: A new instance of the bean is created every time it is requested.",
      "**Characteristics**: Each request for a prototype bean results in a new object. Spring manages creation but not the full lifecycle (destruction callbacks are not guaranteed).",
      "**Use Cases**: Stateful beans, objects that need to be unique per operation, or when a fresh instance is always required.",
      "**Example**: A `ShoppingCart` bean where each user needs their own distinct cart."
    ],
    keepInMind: "Prototype beans are useful for stateful components, but remember that Spring doesn't manage their destruction."
  },
  {
    title: "Request Scope (Spring Web)",
    points: [
      "**Definition**: A new instance of the bean is created for each HTTP request.",
      "**Characteristics**: The bean lives for the duration of a single web request and is destroyed when the request completes.",
      "**Use Cases**: Storing request-specific data, such as user input or temporary state related to a single HTTP interaction.",
      "**Example**: A `UserPreferences` bean that holds preferences for the current request."
    ],
    keepInMind: "Request scope is essential for isolating data across different web requests, preventing data leakage."
  },
  {
    title: "Session Scope (Spring Web)",
    points: [
      "**Definition**: A new instance of the bean is created for each HTTP session.",
      "**Characteristics**: The bean lives for the duration of a user's session and is destroyed when the session ends.",
      "**Use Cases**: Storing user-specific data that needs to persist across multiple requests within the same session, like login information.",
      "**Example**: A `LoginSession` bean holding details of the logged-in user."
    ],
    keepInMind: "Session scope is vital for maintaining user state across multiple interactions in a web application."
  },
  {
    title: "XML Example: Spring Bean Scope",
    points: [
      "**Defining a prototype bean in XML**:",
      "```xml",
      "<bean id=\"myPrototypeBean\" class=\"com.example.MyPrototypeBean\" scope=\"prototype\"/>",
      "```",
      "**Defining a request-scoped bean in XML**:",
      "```xml",
      "<bean id=\"myRequestBean\" class=\"com.example.MyRequestBean\" scope=\"request\"/>",
      "```"
    ],
    keepInMind: "XML configuration explicitly declares the scope using the `scope` attribute."
  },
  {
    title: "Spring Bean Scope: Annotation Config",
    points: [
      "**Defining a prototype bean with annotations**:",
      "```java",
      "@Component",
      "@Scope(\"prototype\")",
      "public class MyPrototypeBean { /* ... */ }",
      "```",
      "**Defining a session-scoped bean with annotations**:",
      "```java",
      "@Component",
      "@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)",
      "public class MySessionBean { /* ... */ }",
      "```"
    ],
    keepInMind: "The `@Scope` annotation is the modern and preferred way to define bean scopes in Spring."
  },
  {
    title: "Spring Bean: Java Config Example",
    points: [
      "**Defining a prototype bean in Java config**:",
      "```java",
      "@Configuration",
      "public class AppConfig {\n    @Bean\n    @Scope(\"prototype\")\n    public MyPrototypeBean myPrototypeBean() {\n        return new MyPrototypeBean();\n    }\n}",
      "```",
      "This demonstrates how to programmatically define a bean's scope within a `@Configuration` class."
    ],
    keepInMind: "Java configuration provides type safety and refactorability for defining bean scopes."
  },
  {
    title: "FAQs on Spring Scopes",
    points: [
      "**Q: What happens if a singleton bean depends on a prototype bean?**",
      "**A:** By default, the prototype bean is instantiated only once when the singleton bean is created. To get a new prototype instance each time, you need to use method injection (LookUp Method Injection) or `ObjectFactory`.",
      "**Q: When should `proxyMode` be used with web-aware scopes?**",
      "**A:** `proxyMode` is used when a bean with a shorter lifespan (e.g., request or session) is injected into a bean with a longer lifespan (e.g., singleton). It creates a proxy that resolves the actual bean instance at runtime."
    ],
    keepInMind: "Understanding these advanced scenarios is crucial for avoiding unexpected behavior in complex applications."
  }
];