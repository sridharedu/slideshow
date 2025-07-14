export const session4 = [
  {
    title: "Spring IoC Container: Overview",
    points: [
      "The Spring IoC (Inversion of Control) Container is the core of the Spring Framework.",
      "It manages the lifecycle of application objects (beans) and their dependencies.",
      "It frees developers from managing object creation and wiring, promoting loose coupling."
    ],
    keepInMind: "The IoC Container is where Spring truly 'inverts' control, taking over object management."
  },
  {
    title: "Steps Performed by the Container",
    points: [
      "**1. Find/Scan Classes**: Identifies classes annotated as Spring Beans (e.g., `@Component`, `@Service`).",
      "**2. Create Objects**: Instantiates these identified classes (beans).",
      "**3. Provide Data and Link Objects**: Injects dependencies (data and other beans) into the created objects.",
      "**4. Destroy Objects/Container**: Manages the destruction of beans when the container shuts down."
    ],
    keepInMind: "This automated process is what makes Spring so powerful for application development."
  },
  {
    title: "Inputs to the Spring Container",
    points: [
      "**Spring Bean**: Any Java object managed by the Spring IoC container.",
      "**Spring Configuration File**: Instructions for the container on how to create and manage beans.",
      "Three main types of configuration:",
      "  - XML Configuration",
      "  - Java Configuration (using `@Configuration` and `@Bean`)",
      "  - Annotation Configuration (using `@Component`, `@Autowired`, etc.)"
    ],
    keepInMind: "Spring offers flexible ways to configure your application, from traditional XML to modern Java and annotations."
  },
  {
    title: "XML Configuration: <bean> Tag",
    points: [
      "The fundamental element for defining a bean in XML.",
      "Specifies the bean's class and a unique ID.",
      "```xml",
      "<bean id=\"myService\" class=\"com.example.MyService\"/>",
      "```",
      "This tells the container to create an instance of `com.example.MyService` and name it `myService`."
    ],
    keepInMind: "While less common in new projects, understanding XML configuration is key to legacy Spring applications."
  },
  {
    title: "XML Configuration: <property> Tag",
    points: [
      "Used for Setter Injection in XML configuration.",
      "Injects values or references into bean properties.",
      "```xml",
      "<bean id=\"myBean\" class=\"com.example.MyBean\">",
      "    <property name=\"message\" value=\"Hello!\"/>",
      "    <property name=\"dependency\" ref=\"anotherBean\"/>",
      "</bean>",
      "```",
      "`value` for primitive/String, `ref` for other bean references."
    ],
    keepInMind: "The `<property>` tag directly maps to setter methods in your Java classes."
  },
  {
    title: "XML Configuration: <constructor-arg> Tag",
    points: [
      "Used for Constructor Injection in XML configuration.",
      "Injects values or references via the bean's constructor.",
      "```xml",
      "<bean id=\"myBean\" class=\"com.example.MyBean\">",
      "    <constructor-arg value=\"123\" type=\"int\"/>",
      "    <constructor-arg ref=\"anotherBean\"/>",
      "</bean>",
      "```",
      "Order of `<constructor-arg>` matters for constructor matching."
    ],
    keepInMind: "Constructor injection is often preferred for mandatory dependencies, ensuring object validity."
  },
  {
    title: "XML Configuration: Collection and Reference Tags",
    points: [
      "**<value>**: Used for injecting simple values (primitives, Strings).",
      "**<list>, <set>, <map>, <props>**: Used for injecting collection types.",
      "**<ref>**: Used to inject references to other beans.",
      "```xml",
      "<bean id=\"myCollectionBean\" class=\"com.example.MyCollectionBean\">",
      "    <property name=\"names\">",
      "        <list><value>Alice</value><value>Bob</value></list>",
      "    </property>",
      "</bean>",
      "```"
    ],
    keepInMind: "These tags provide comprehensive support for injecting various data structures into your beans."
  },
  {
    title: "Creating a Spring Project in STS",
    points: [
      "Spring Tool Suite (STS) provides excellent integration for Spring development.",
      "Use 'Spring Starter Project' wizard to quickly scaffold a new Spring Boot application.",
      "Select dependencies (e.g., Spring Web, Spring Data JPA) during project creation.",
      "STS handles initial project setup, including `pom.xml` and basic application structure."
    ],
    keepInMind: "STS streamlines the initial setup, allowing developers to focus on business logic rather than boilerplate."
  },
  {
    title: "Summary: Spring IoC Container",
    points: [
      "The Spring IoC Container is central to Spring's power, managing bean lifecycles and dependencies.",
      "Configuration can be done via XML, Java, or annotations, offering flexibility.",
      "Understanding the container's operations is crucial for building robust Spring applications."
    ],
    keepInMind: "Mastering the IoC container is a fundamental step in becoming proficient with the Spring Framework."
  }
];