export const session15 = [
  {
    title: "SpEL (Spring Expression Language): Overview",
    points: [
      "SpEL is a powerful expression language that supports querying and manipulating an object graph at runtime.",
      "It can be used with annotations (like `@Value`), XML, or directly in Java code.",
      "SpEL provides a rich set of features, including arithmetic, relational, logical operators, and more."
    ],
    keepInMind: "SpEL offers dynamic capabilities for configuration and data manipulation within Spring applications."
  },
  {
    title: "SpEL: Arithmetic Operators",
    points: [
      "SpEL supports standard arithmetic operations.",
      "`+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulo), `^` (power).",
      "```java",
      "@Value(\"#{10 + 5}\") // 15",
      "private int sum;",
      "@Value(\"#{2 * 3}\") // 6",
      "private int product;",
      "```"
    ],
    keepInMind: "Arithmetic operators in SpEL allow for simple calculations directly within your expressions."
  },
  {
    title: "SpEL: Relational Operators",
    points: [
      "SpEL supports common relational operators for comparisons.",
      "`==` (equal), `!=` (not equal), `<` (less than), `<=` (less than or equal), `>` (greater than), `>=` (greater than or equal).",
      "Also supports `lt`, `le`, `gt`, `ge` as text alternatives.",
      "```java",
      "@Value(\"#{10 > 5}\") // true",
      "private boolean isGreater;",
      "@Value(\"#{'hello' == 'world'}\") // false",
      "private boolean isEqual;",
      "```"
    ],
    keepInMind: "Relational operators are useful for conditional logic and comparisons within SpEL expressions."
  },
  {
    title: "SpEL: Logical Operators",
    points: [
      "SpEL supports logical operators for boolean operations.",
      "`and` (logical AND), `or` (logical OR), `not` (logical NOT).",
      "```java",
      "@Value(\"#{true and false}\") // false",
      "private boolean andResult;",
      "@Value(\"#{not true}\") // false",
      "private boolean notResult;",
      "```"
    ],
    keepInMind: "Logical operators enable complex conditional evaluations within your SpEL expressions."
  },
  {
    title: "SpEL: Conditional Operator",
    points: [
      "SpEL supports the ternary conditional operator (`condition ? true_value : false_value`).",
      "```java",
      "@Value(\"#{'dev' == 'dev' ? 'Development Profile' : 'Production Profile'}\")",
      "private String profileName;",
      "```"
    ],
    keepInMind: "The conditional operator provides a concise way to express if-else logic within SpEL."
  },
  {
    title: "@Value Annotation with SpEL",
    points: [
      "The `@Value` annotation is frequently used in conjunction with SpEL to inject dynamic values.",
      "This allows for highly flexible and configurable applications where values can be computed or retrieved from various sources at runtime.",
      "```java",
      "@Value(\"#{systemProperties['user.name']}\")",
      "private String userName;",
      "```"
    ],
    keepInMind: "Combining `@Value` with SpEL unlocks powerful dynamic configuration capabilities."
  },
  {
    title: "Circular Dependency: The Problem",
    points: [
      "A circular dependency occurs when two or more beans depend on each other, forming a cycle.",
      "Example: Bean A depends on Bean B, and Bean B depends on Bean A.",
      "Spring's IoC container needs to fully initialize a bean before it can inject it as a dependency, leading to a chicken-and-egg problem.",
      "This can result in `BeanCurrentlyInCreationException` or `StackOverflowError`."
    ],
    keepInMind: "Circular dependencies are a common issue in complex applications and can lead to runtime errors."
  },
  {
    title: "Circular Dependency: Solutions",
    points: [
      "**Constructor Injection**: Spring 4.3+ can resolve simple circular dependencies with constructor injection if one of the beans is lazily initialized or uses a setter.",
      "**Setter Injection**: Often used to break circular dependencies, as dependencies are injected after construction.",
      "**`@Lazy` Annotation**: Marks a bean for lazy initialization, meaning it's created only when first accessed, which can break the cycle.",
      "**Refactor Design**: The best solution is often to redesign your application to eliminate circular dependencies, promoting better modularity."
    ],
    keepInMind: "While Spring offers mechanisms to handle circular dependencies, refactoring your design to avoid them is generally the best practice."
  }
];