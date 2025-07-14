export const session5 = [
  {
    title: "What is a Spring Bean?",
    points: [
      "A Spring Bean is an object that is instantiated, assembled, and managed by the Spring IoC container.",
      "It forms the backbone of a Spring application, representing the core components.",
      "The container handles its lifecycle, from creation to destruction."
    ],
    keepInMind: "Think of a Spring Bean as a regular Java object that the Spring container takes special care of."
  },
  {
    title: "Spring Bean Lifecycle Management",
    points: [
      "The Spring container manages the complete lifecycle of a bean.",
      "This includes instantiation, population of properties, initialization, use, and destruction.",
      "Lifecycle callbacks (e.g., `init-method`, `destroy-method`, `@PostConstruct`, `@PreDestroy`) allow custom logic at specific stages."
    ],
    keepInMind: "Automated lifecycle management simplifies development and ensures proper resource handling."
  },
  {
    title: "Rules for a Class to Become a Spring Bean",
    points: [
      "**Public Class**: The class must be public.",
      "**Class in a Package**: It should reside within a package (not the default package).",
      "**Default Constructor**: Typically requires a public no-argument constructor (unless using constructor injection).",
      "**Accessor Methods**: For property injection (setters and getters).",
      "**Annotations**: Often marked with stereotype annotations like `@Component`, `@Service`, `@Repository`, `@Controller`."
    ],
    keepInMind: "Adhering to these conventions allows Spring to discover and manage your classes as beans."
  },
  {
    title: "Spring Bean Scopes",
    points: [
      "**Singleton (Default)**: Only one instance of the bean is created per Spring IoC container.",
      "**Prototype**: A new instance of the bean is created every time it is requested.",
      "**Request**: A new instance per HTTP request (web-aware context).",
      "**Session**: A new instance per HTTP session (web-aware context).",
      "**Application**: A single instance per `ServletContext` (web-aware context)."
    ],
    keepInMind: "Choosing the right scope is crucial for managing state and resource consumption in your application."
  },
  {
    title: "Dependency Injection and Bean Wiring",
    points: [
      "Spring uses Dependency Injection to provide beans with their collaborators.",
      "**Bean Wiring**: The process of connecting beans together within the container.",
      "Can be done via XML configuration, Java configuration (`@Bean`), or annotation-based configuration (`@Autowired`)."
    ],
    keepInMind: "DI is the mechanism, and bean wiring is the result of connecting components."
  },
  {
    title: "Spring Bean: Example (XML Configuration)",
    points: [
      "**Java Class (OracleCon.java)**:",
      "```java",
      "public class OracleCon { /* ... */ }",
      "```",
      "**XML Configuration (config.xml)**:",
      "```xml",
      "<bean id=\"oracleConnection\" class=\"com.example.OracleCon\"/>",
      "```",
      "This registers `OracleCon` as a bean named `oracleConnection`."
    ],
    keepInMind: "XML configuration provides a declarative way to define your beans and their dependencies."
  },
  {
    title: "Spring Bean: Example (Test Class)",
    points: [
      "**Test Class (Test.java)**:",
      "```java",
      "public class Test {\n    public static void main(String[] args) {\n        ApplicationContext context = new ClassPathXmlApplicationContext(\"config.xml\");\n        OracleCon con = context.getBean(\"oracleConnection\", OracleCon.class);\n        // Use the bean\n    }\n}",
      "```",
      "The `ApplicationContext` is the Spring IoC container, used to retrieve beans."
    ],
    keepInMind: "The `ApplicationContext` is your gateway to accessing and managing beans within the Spring container."
  },
  {
    title: "Contract between equals() and hashCode()",
    points: [
      "If two objects are equal according to the `equals(Object)` method, then calling the `hashCode()` method on each of the two objects must produce the same integer result.",
      "If two objects have the same `hashCode()`, they are not necessarily equal.",
      "Crucial for correct behavior in collections like `HashMap` and `HashSet`."
    ],
    keepInMind: "Always override both `equals()` and `hashCode()` together to maintain consistency and avoid unexpected behavior in collections."
  }
];