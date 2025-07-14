export const session3 = [
  {
    title: "Dependency Injection (DI) vs. Inversion of Control (IoC)",
    points: [
      "**Inversion of Control (IoC)**: A design principle where the control of object creation and lifecycle is transferred from the developer to a container (e.g., Spring IoC Container).",
      "**Dependency Injection (DI)**: A specific implementation of IoC where dependencies are provided to an object by an external entity (the container) rather than the object creating them itself.",
      "IoC is the broader concept, and DI is a common pattern to achieve IoC."
    ],
    keepInMind: "IoC is 'don't call us, we'll call you', and DI is how that 'call' happens by injecting dependencies."
  },
  {
    title: "Types of Dependencies",
    points: [
      "**Primitive Type Dependency (PTD)**: Dependencies that are primitive data types (e.g., `int`, `String`, `boolean`).",
      "**Collection Type Dependency (CTD)**: Dependencies that are collections (e.g., `List`, `Set`, `Map`).",
      "**Reference Type Dependency (RTD)**: Dependencies that are references to other objects (e.g., an `Employee` object having a `Department` object)."
    ],
    keepInMind: "Understanding dependency types helps in choosing the appropriate injection mechanism."
  },
  {
    title: "Injection Mechanisms",
    points: [
      "**Setter Injection (SI)**: Dependencies are injected via public setter methods. Requires a default constructor.",
      "**Constructor Injection (CI)**: Dependencies are injected via the constructor. Ensures immutability and all required dependencies are present at object creation.",
      "**LookUp Method Injection (LMI)**: A less common form of injection used to inject a new instance of a prototype bean into a singleton bean.",
      "**Interface Injection (II)**: Dependencies are injected through an interface. Rarely used in modern Spring."
    ],
    keepInMind: "Constructor Injection is generally preferred for mandatory dependencies, while Setter Injection is suitable for optional ones."
  },
  {
    title: "Dependency Injection in Spring Boot",
    points: [
      "Spring Boot simplifies DI through auto-configuration and annotations.",
      "Common annotations: `@Autowired`, `@Value`.",
      "The Spring IoC Container manages the lifecycle of beans and injects their dependencies.",
      "Example: A `Service` class depending on a `Repository` class."
    ],
    keepInMind: "Spring Boot's convention-over-configuration approach makes DI almost seamless."
  },
  {
    title: "Example: Setter Injection",
    points: [
      "```java",
      "public class Employee {",
      "    private String name;",
      "    public void setName(String name) {",
      "        this.name = name;",
      "    }",
      "    // ... other methods",
      "}",
      "```",
      "Spring XML Configuration (or Java Config):",
      "```xml",
      "<bean id=\"employee\" class=\"com.example.Employee\">",
      "    <property name=\"name\" value=\"John Doe\"/>",
      "</bean>",
      "```"
    ],
    keepInMind: "Setter injection is flexible as it allows changing dependencies after object creation."
  },
  {
    title: "Example: Constructor Injection",
    points: [
      "```java",
      "public class Employee {",
      "    private String name;",
      "    public Employee(String name) {",
      "        this.name = name;",
      "    }",
      "    // ... other methods",
      "}",
      "```",
      "Spring XML Configuration (or Java Config):",
      "```xml",
      "<bean id=\"employee\" class=\"com.example.Employee\">",
      "    <constructor-arg value=\"Jane Doe\"/>",
      "</bean>",
      "```"
    ],
    keepInMind: "Constructor injection promotes immutability and ensures that an object is always in a valid state."
  },
  {
    title: "The @Autowired Annotation",
    points: [
      "Used for automatic dependency injection by type.",
      "Can be applied to constructors, setter methods, or fields.",
      "```java",
      "@Component",
      "public class MyService {",
      "    @Autowired",
      "    private MyRepository repository;",
      "    // ...",
      "}",
      "```",
      "Spring will find a bean of type `MyRepository` and inject it."
    ],
    keepInMind: "`@Autowired` simplifies dependency resolution, but be mindful of potential `NoUniqueBeanDefinitionException` if multiple beans of the same type exist."
  },
  {
    title: "The @Value Annotation",
    points: [
      "Used to inject values from properties files, environment variables, or Spring Expression Language (SpEL).",
      "```java",
      "@Component",
      "public class AppConfig {",
      "    @Value(\"${app.name}\")",
      "    private String appName;",
      "    // ...",
      "}",
      "```",
      "Requires a property source (e.g., `application.properties` or `@PropertySource`)."
    ],
    keepInMind: "`@Value` is essential for externalizing configuration and making applications more flexible."
  },
  {
    title: "Benefits of DI/IoC",
    points: [
      "**Loose Coupling**: Components are less dependent on each other, making the system more modular.",
      "**Easier Testing**: Dependencies can be easily mocked or stubbed for unit testing.",
      "**Increased Reusability**: Components can be reused in different contexts.",
      "**Simplified Configuration**: Spring container handles object creation and wiring.",
      "**Improved Maintainability**: Changes in one component have less impact on others."
    ],
    keepInMind: "The core benefit is building highly maintainable, testable, and scalable applications."
  }
];