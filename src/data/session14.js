export const session14 = [
  {
    title: "Coupling: Overview",
    points: [
      "**Coupling** refers to the degree of interdependence between software modules; how closely connected two modules or components are.",
      "High coupling means modules are highly dependent on each other, leading to a system that is difficult to maintain, test, and reuse.",
      "Low coupling (loose coupling) means modules are relatively independent, making the system more flexible, maintainable, and testable."
    ],
    keepInMind: "Aim for loose coupling in your designs to build robust and adaptable software systems."
  },
  {
    title: "Types of Coupling",
    points: [
      "**Tight Coupling**: Modules are highly dependent on each other. Changes in one module often necessitate changes in another.",
      "  - *Example*: Direct instantiation of a class within another class.",
      "**Loose Coupling**: Modules are largely independent. Changes in one module have minimal impact on others.",
      "  - *Example*: Using interfaces and dependency injection."
    ],
    keepInMind: "Loose coupling is a cornerstone of good software design, promoting modularity and flexibility."
  },
  {
    title: "Why Coupling Matters",
    points: [
      "**Tight Coupling leads to:**",
      "  - Reduced reusability of components.",
      "  - Increased complexity and difficulty in understanding the system.",
      "  - Higher maintenance costs due to ripple effects of changes.",
      "  - Challenges in unit testing, as components cannot be tested in isolation.",
      "**Loose Coupling promotes:**",
      "  - Easier testing and debugging.",
      "  - Greater flexibility and adaptability to changes.",
      "  - Improved reusability of components."
    ],
    keepInMind: "The goal is to minimize coupling to maximize the benefits of modular design."
  },
  {
    title: "@Autowired with Multiple Implementations: The Problem",
    points: [
      "When Spring encounters multiple beans of the same type in the application context, and you use `@Autowired` without further qualification, it throws a `NoUniqueBeanDefinitionException`.",
      "Spring doesn't know which specific implementation to inject when multiple choices exist."
    ],
    keepInMind: "This exception indicates ambiguity in dependency resolution, which Spring cannot resolve automatically."
  },
  {
    title: "Mechanisms to Specify Which Bean to Inject",
    points: [
      "Spring provides several ways to resolve ambiguity when multiple beans of the same type are available for injection:",
      "  - **`@Qualifier`**: Explicitly specifies the name of the bean to be injected.",
      "  - **`@Primary`**: Designates a single bean as the primary candidate when multiple beans of the same type are available.",
      "  - **Name Matching**: If no `@Qualifier` or `@Primary` is used, Spring attempts to match the bean name with the field/parameter name."
    ],
    keepInMind: "These mechanisms give you fine-grained control over dependency resolution in Spring."
  },
  {
    title: "Using @Qualifier",
    points: [
      "`@Qualifier` is used to disambiguate bean injection when multiple beans of the same type exist.",
      "You specify the name of the desired bean as the qualifier value.",
      "```java",
      "@Component(\"smsService\")",
      "public class SmsService implements MessageService { /* ... */ }",
      "@Component(\"emailService\")",
      "public class EmailService implements MessageService { /* ... */ }",
      "// ...",
      "@Autowired",
      "@Qualifier(\"emailService\")",
      "private MessageService messageService;",
      "```"
    ],
    keepInMind: "`@Qualifier` provides explicit control, making your injection choices clear and preventing ambiguity."
  },
  {
    title: "Using @Primary",
    points: [
      "`@Primary` is used to indicate that a particular bean should be given preference when multiple beans of the same type are candidates for autowiring.",
      "Only one bean of a given type can be marked as `@Primary`.",
      "```java",
      "@Component",
      "@Primary",
      "public class DefaultMessageService implements MessageService { /* ... */ }",
      "@Component",
      "public class SpecialMessageService implements MessageService { /* ... */ }",
      "// ...",
      "@Autowired",
      "private MessageService messageService; // Injects DefaultMessageService",
      "```"
    ],
    keepInMind: "`@Primary` is useful when you have a default implementation that should be chosen unless explicitly overridden by `@Qualifier`."
  },
  {
    title: "Name Matching for Autowiring",
    points: [
      "If no `@Qualifier` or `@Primary` is specified, Spring attempts to resolve the dependency by matching the bean name with the field name or parameter name.",
      "```java",
      "@Component(\"myBeanA\")",
      "public class MyBeanA { /* ... */ }",
      "@Component(\"myBeanB\")",
      "public class MyBeanB { /* ... */ }",
      "// ...",
      "@Autowired",
      "private MyBeanA myBeanA; // Injects myBeanA by name",
      "```",
      "This is a fallback mechanism and less explicit than `@Qualifier` or `@Primary`."
    ],
    keepInMind: "Relying solely on name matching can sometimes lead to less clear dependency graphs; explicit annotations are generally preferred."
  }
];