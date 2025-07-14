export const session6 = [
  {
    title: "Stereotype Annotations in Spring",
    points: [
      "Spring provides several stereotype annotations to mark classes as components managed by the Spring IoC container.",
      "These annotations are specializations of `@Component` and convey a specific role or responsibility.",
      "They enhance readability and enable Spring to apply specific behaviors or configurations."
    ],
    keepInMind: "Stereotype annotations are more than just markers; they carry semantic meaning and enable Spring's auto-detection."
  },
  {
    title: "@Component",
    points: [
      "A generic stereotype for any Spring-managed component.",
      "Used to indicate that a class is a 'component' and should be detected by Spring's component scanning.",
      "```java",
      "@Component",
      "public class MyUtilityClass { /* ... */ }",
      "```",
      "It's the base annotation for other stereotype annotations."
    ],
    keepInMind: "`@Component` is the most general-purpose annotation for Spring beans."
  },
  {
    title: "@Repository",
    points: [
      "Indicates that a class provides the mechanism for storage, retrieval, update, delete (CRUD) operations on objects.",
      "Typically used for DAO (Data Access Object) classes.",
      "Enables automatic exception translation from persistence-specific exceptions to Spring's `DataAccessException` hierarchy.",
      "```java",
      "@Repository",
      "public class UserRepository { /* ... */ }",
      "```"
    ],
    keepInMind: "`@Repository` is specifically for data access layer components and provides valuable exception handling."
  },
  {
    title: "@Service",
    points: [
      "Indicates that a class holds business logic.",
      "Typically used for service layer classes that encapsulate business rules and orchestrate operations.",
      "```java",
      "@Service",
      "public class OrderService { /* ... */ }",
      "```",
      "No special behavior beyond `@Component` but improves semantic clarity."
    ],
    keepInMind: "`@Service` clearly defines the business logic layer, improving application structure."
  },
  {
    title: "@Controller",
    points: [
      "Indicates that a class serves as a controller in Spring MVC applications.",
      "Responsible for handling incoming web requests and returning a view name or model data.",
      "```java",
      "@Controller",
      "public class HomeController { /* ... */ }",
      "```",
      "Often used in conjunction with `@RequestMapping`."
    ],
    keepInMind: "`@Controller` is the entry point for web requests in traditional Spring MVC."
  },
  {
    title: "@RestController",
    points: [
      "A convenience annotation that combines `@Controller` and `@ResponseBody`.",
      "Used for building RESTful web services, where methods return data directly (e.g., JSON, XML) rather than view names.",
      "```java",
      "@RestController",
      "public class ProductRestController { /* ... */ }",
      "```",
      "Eliminates the need to add `@ResponseBody` to every method."
    ],
    keepInMind: "`@RestController` is the go-to annotation for creating REST APIs in Spring Boot."
  },
  {
    title: "XSD vs. XML",
    points: [
      "**XML (eXtensible Markup Language)**: A markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",
      "**XSD (XML Schema Definition)**: A language for describing the structure and constraining the contents of XML documents.",
      "XSD acts like a blueprint or grammar for XML files, ensuring their validity and consistency."
    ],
    keepInMind: "XML defines the data, while XSD defines the rules for that data."
  },
  {
    title: "Code Explanation: Spring Beans (XML Config)",
    points: [
      "**Spring Beans (Example)**:",
      "```java",
      "public class MyBean {\n    private String message;\n    public void setMessage(String message) { this.message = message; }\n    public String getMessage() { return message; }\n}",
      "```",
      "**config.xml**:",
      "```xml",
      "<bean id=\"myBean\" class=\"com.example.MyBean\">\n    <property name=\"message\" value=\"Hello Stereotypes!\"/>\n</bean>",
      "```",
      "This demonstrates how a simple Java class is configured as a Spring Bean using XML, with a property injected."
    ],
    keepInMind: "XML configuration explicitly defines each bean and its dependencies, offering clear visibility."
  }
];