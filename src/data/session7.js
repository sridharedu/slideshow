export const session7 = [
  {
    title: "@Value Annotation: Overview",
    points: [
      "The `@Value` annotation is used to inject values into fields, methods, and constructor parameters.",
      "It's a core Spring annotation for externalizing configuration and injecting simple values.",
      "Values can come from properties files, environment variables, system properties, or Spring Expression Language (SpEL)."
    ],
    keepInMind: "`@Value` is your go-to for injecting configuration data directly into your beans."
  },
  {
    title: "Injecting Hardcoded Variables/Dependencies",
    points: [
      "You can directly inject literal values using `@Value`.",
      "```java",
      "@Value(\"Hello World\")",
      "private String greeting;",
      "```",
      "This is useful for simple, unchanging values within your application."
    ],
    keepInMind: "While convenient for literals, prefer externalizing configuration for values that might change."
  },
  {
    title: "Reading Data from Resources",
    points: [
      "`@Value` can read values from property files (e.g., `application.properties`).",
      "Syntax: `@Value(\"${property.key}\")`",
      "```properties",
      "app.name=MyApplication",
      "app.version=1.0.0",
      "```",
      "```java",
      "@Value(\"${app.name}\")",
      "private String appName;",
      "```",
      "Requires a `PropertySource` or Spring Boot's auto-configuration."
    ],
    keepInMind: "Externalizing properties makes your application more flexible and easier to configure across environments."
  },
  {
    title: "Providing Spring Expression Language (SpEL)",
    points: [
      "SpEL is a powerful expression language that supports querying and manipulating an object graph at runtime.",
      "Syntax: `@Value(\"#{expression}\")`",
      "```java",
      "@Value(\"#{1 + 1}\")",
      "private int two;",
      "@Value(\"#{systemProperties['java.home']}\")",
      "private String javaHome;",
      "```",
      "Enables dynamic value resolution and complex expressions."
    ],
    keepInMind: "SpEL offers immense power for dynamic configuration, but use it judiciously to maintain readability."
  },
  {
    title: "@Value: Annotation vs. XML Configuration",
    points: [
      "**Annotation Configuration (`@Value`)**: Concise, type-safe, and co-located with the code it configures. Preferred in modern Spring.",
      "**XML Configuration (`<property>`, `<value>`)**: Declarative, separates configuration from code. Can be verbose for many properties.",
      "Both achieve similar results, but annotations are generally more convenient for simple value injection."
    ],
    keepInMind: "Choose the configuration style that best fits your project's conventions and complexity."
  },
  {
    title: "Code Example: @Value with Properties",
    points: [
      "**`application.properties`**:",
      "```properties",
      "my.message=Hello from properties!",
      "```",
      "**Spring Bean**:",
      "```java",
      "@Component",
      "public class MyBean {\n    @Value(\"${my.message}\")\n    private String message;\n\n    public String getMessage() {\n        return message;\n    }\n}",
      "```",
      "**Test Class**:",
      "```java",
      "public class Test {\n    public static void main(String[] args) {\n        ApplicationContext context = new AnnotationConfigApplicationContext(MyBean.class);\n        MyBean bean = context.getBean(MyBean.class);\n        System.out.println(bean.getMessage()); // Output: Hello from properties!\n    }\n}",
      "```"
    ],
    keepInMind: "This example demonstrates the straightforward process of injecting external properties using `@Value`."
  },
  {
    title: "Important Concept: @ComponentScan",
    points: [
      "`@ComponentScan` is used to automatically detect and register Spring beans in the application context.",
      "It scans specified packages for classes annotated with `@Component`, `@Service`, `@Repository`, `@Controller`, etc.",
      "By default, it scans the package of the class where it's declared and its sub-packages.",
      "You can specify base packages using `basePackages` or `basePackageClasses` attributes."
    ],
    keepInMind: "`@ComponentScan` is vital for Spring's auto-detection capabilities, reducing the need for explicit bean definitions."
  },
  {
    title: "Common Interview Questions",
    points: [
      "**Q1) What is varargs and how is it different from an array?**",
      "**Q2) What is casting (upcasting and downcasting)?**",
      "**Q3) What is overloading? What are all the rules we need to follow?**",
      "**Q4) What is dynamic polymorphism?**",
      "**Q5) What is method overriding?**"
    ],
    keepInMind: "These fundamental Java concepts are often tested alongside Spring knowledge."
  }
];