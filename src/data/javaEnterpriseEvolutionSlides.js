export const javaEnterpriseEvolutionSlides = [
  {
    title: "Java Enterprise Evolution",
    points: [
      "📅 **Java Timeline**: 28+ years from 1995 to 2023",
      "🏢 **J2EE Platform**: Enterprise Java specification and technologies",
      "🌱 **Spring Framework**: Lightweight alternative to J2EE complexity",
      "⚖️ **Framework Comparison**: J2EE vs Spring approaches",
      "🔥 **35 slides** covering Java's enterprise journey"
    ],
    note: "🧠 Understanding Java's evolution helps appreciate modern enterprise development",
    keepInMind: "Java's enterprise evolution reflects the industry's shift from heavy frameworks to lightweight, cloud-native solutions."
  },

  // Java Timeline Section
  {
    title: "Early Java Era (1995-2004)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 1.0 | 1996 | Initial release, AWT, Applets",
      "Java 1.1 | 1997 | Inner classes, JavaBeans, JDBC",
      "Java 1.2 | 1998 | Swing, Collections Framework",
      "Java 1.3 | 2000 | HotSpot JVM, JNDI",
      "Java 1.4 | 2002 | Assertions, NIO, Logging API",
      "```"
    ],
    keepInMind: "This era laid the fundamental groundwork for the Java we know today."
  },
  {
    title: "Enterprise Java Era (2004-2011)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 5 | 2004 | Generics, Annotations, Enums, Autoboxing",
      "Java 6 | 2006 | Scripting API, Compiler API, JDBC 4.0",
      "Java 7 | 2011 | Try-with-resources, Diamond operator",
      "```",
      "🔥 Java 5 was revolutionary with generics and annotations"
    ],
    keepInMind: "Java 5 was a massive leap forward, introducing features that are now considered essential."
  },
  {
    title: "Java 5 - The Game Changer",
    points: [
      "**Generics**:",
      "```java",
      "List<String> list = new ArrayList<String>();",
      "```",
      "**Annotations**:",
      "```java",
      "@Override",
      "public String toString() { return \"Hello\"; }",
      "```",
      "**Enhanced For Loop**:",
      "```java",
      "for (String item : list) {",
      "    System.out.println(item);",
      "}",
      "```"
    ],
    keepInMind: "These features made Java code safer, more readable, and less verbose."
  },
  {
    title: "Modern Java Era (2014-2018)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 8 | 2014 | Lambda expressions, Streams, Optional",
      "Java 9 | 2017 | Modules (Jigsaw), JShell",
      "Java 10 | 2018 | Local variable type inference (var)",
      "Java 11 | 2018 | HTTP Client, String methods, LTS",
      "```",
      "🔥 Java 8 brought functional programming to Java"
    ],
    keepInMind: "Java 8 is arguably the most significant release since Java 5, and it's still widely used."
  },
  {
    title: "Java 8 - Functional Revolution",
    points: [
      "**Lambda Expressions**:",
      "```java",
      "list.stream()",
      "    .filter(s -> s.length() > 3)",
      "    .map(String::toUpperCase)",
      "    .collect(Collectors.toList());",
      "```",
      "**Optional**:",
      "```java",
      "Optional<String> optional = Optional.ofNullable(getValue());",
      "optional.ifPresent(System.out::println);",
      "```"
    ],
    keepInMind: "Streams and Lambdas fundamentally changed how Java developers write code for processing data."
  },
  {
    title: "Latest Java Era (2021-2023)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 17 | 2021 | Sealed classes, Pattern matching (LTS)",
      "Java 18 | 2022 | UTF-8 by default, Simple web server",
      "Java 19 | 2022 | Virtual threads (preview), Pattern matching",
      "Java 20 | 2023 | Scoped values (preview)",
      "Java 21 | 2023 | Virtual threads, Pattern matching (LTS)",
      "```",
      "🔥 Java 17 and 21 are Long Term Support (LTS) versions"
    ],
    keepInMind: "Virtual threads (Project Loom) are a game-changer for concurrent programming in Java."
  },
  {
    title: "Java 21 - Modern Features",
    points: [
      "**Virtual Threads**:",
      "```java",
      "try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {",
      "    executor.submit(() -> {",
      "        // Lightweight thread",
      "        Thread.sleep(1000);",
      "        return \"Hello from virtual thread\";",
      "    });",
      "}",
      "```",
      "**Pattern Matching for Switch**:",
      "```java",
      "String result = switch (obj) {",
      "    case String s -> \"String: \" + s;",
      "    case Integer i -> \"Integer: \" + i;",
      "    default -> \"Unknown\";",
      "};",
      "```"
    ],
    keepInMind: "These features make Java more expressive and efficient for modern application development."
  },
  {
    title: "LTS Versions & Adoption",
    points: [
      "```table",
      "LTS Version | Release Year | Support Until",
      "Java 8 | 2014 | 2030 (Extended)",
      "Java 11 | 2018 | 2026",
      "Java 17 | 2021 | 2029",
      "Java 21 | 2023 | 2031",
      "```",
      "🔥 Most enterprises use LTS versions for stability"
    ],
    note: "🧠 Interview tip: Know the major features of Java 8, 11, 17, and 21 - these are the most commonly used versions",
    keepInMind: "While new versions are released every six months, most companies stick to LTS releases for production systems."
  },

  // J2EE Section
  {
    title: "What is J2EE?",
    points: [
      "✔️ Java 2 Platform, Enterprise Edition (now Jakarta EE)",
      "Enterprise-level Java platform for building scalable applications",
      "Provides APIs and runtime environment for enterprise applications",
      "🔥 Foundation for modern enterprise Java development"
    ],
    note: "🧠 J2EE = Enterprise Java + Distributed Computing + Component Architecture",
    keepInMind: "J2EE provides a standard, vendor-neutral specification for building enterprise applications."
  },
  {
    title: "J2EE Architecture Tiers",
    points: [
      "```table",
      "Tier | Components | Purpose",
      "Client Tier | Web browsers, Java apps | User interface",
      "Web Tier | Servlets, JSP, JSF | Web presentation logic",
      "Business Tier | EJB, CDI beans | Business logic",
      "Data Tier | JPA, JDBC | Data persistence",
      "```"
    ],
    keepInMind: "This tiered architecture promotes separation of concerns, a key principle in software design."
  },
  {
    title: "Core J2EE Technologies",
    points: [
      "**Servlets**: Server-side Java components for web requests",
      "**JSP**: Java Server Pages for dynamic web content",
      "**EJB**: Enterprise JavaBeans for business logic",
      "**JPA**: Java Persistence API for database operations",
      "**JMS**: Java Message Service for asynchronous communication",
      "**JNDI**: Java Naming and Directory Interface",
      "🔥 Each technology serves specific enterprise needs"
    ],
    keepInMind: "While some of these technologies are less common now, they laid the groundwork for modern frameworks like Spring."
  },
  {
    title: "Enterprise JavaBeans (EJB)",
    points: [
      "```table",
      "EJB Type | Purpose | Example Use Case",
      "Session Bean | Business logic | User service, Order processing",
      "Message-Driven Bean | Async processing | Email notifications",
      "Entity Bean | Data persistence | Deprecated (use JPA)",
      "```"
    ],
    keepInMind: "EJBs were the original component model for business logic in J2EE, now largely superseded by CDI beans and Spring beans."
  },
  {
    title: "Session Bean Example",
    points: [
      "```java",
      "@Stateless",
      "public class OrderService {",
      "    ",
      "    @PersistenceContext",
      "    private EntityManager em;",
      "    ",
      "    @TransactionAttribute(TransactionAttributeType.REQUIRED)",
      "    public void processOrder(Order order) {",
      "        // Validate order",
      "        validateOrder(order);",
      "        ",
      "        // Save to database",
      "        em.persist(order);",
      "        ",
      "        // Send confirmation",
      "        sendConfirmation(order);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "`@Stateless` beans are pooled by the container, making them efficient for handling concurrent requests."
  },
  {
    title: "Dependency Injection (CDI)",
    points: [
      "```java",
      "@ApplicationScoped",
      "public class PaymentService {",
      "    ",
      "    @Inject",
      "    private EmailService emailService;",
      "    ",
      "    @Inject @Database",
      "    private DataSource dataSource;",
      "    ",
      "    public void processPayment(Payment payment) {",
      "        // Process payment logic",
      "        savePayment(payment);",
      "        emailService.sendReceipt(payment);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "CDI (Contexts and Dependency Injection) is the J2EE standard for dependency injection, similar to Spring's DI."
  },

  // J2EE vs Spring Section
  {
    title: "J2EE vs Spring Framework",
    points: [
      "✔️ Two major approaches to enterprise Java development",
      "J2EE: Official Java enterprise specification",
      "Spring: Third-party framework with simpler approach",
      "🔥 Both solve enterprise application challenges differently"
    ],
    note: "🧠 Understanding both helps choose the right approach for your project",
    keepInMind: "J2EE (now Jakarta EE) is a set of specifications, while Spring is a comprehensive framework that often implements those specifications."
  },
  {
    title: "Architecture Comparison",
    points: [
      "```table",
      "Aspect | J2EE | Spring Framework",
      "Container | Application Server (JBoss, WebLogic) | Lightweight (Tomcat, Jetty)",
      "Deployment | EAR/WAR files | JAR files (Spring Boot)",
      "Configuration | XML + Annotations | Java Config + Annotations",
      "Complexity | Heavy, complex setup | Lightweight, simple setup",
      "```"
    ],
    keepInMind: "Spring Boot's embedded server model has largely replaced the need for traditional, heavy application servers."
  },
  {
    title: "Dependency Injection Comparison",
    points: [
      "**J2EE (CDI)**:",
      "```java",
      "@ApplicationScoped",
      "public class OrderService {",
      "    @Inject",
      "    private PaymentService paymentService;",
      "}",
      "```",
      "**Spring**:",
      "```java",
      "@Service",
      "public class OrderService {",
      "    @Autowired",
      "    private PaymentService paymentService;",
      "}",
      "```"
    ],
    keepInMind: "While syntactically similar, Spring's dependency injection is generally more powerful and flexible than CDI."
  },
  {
    title: "Data Access Layer Comparison",
    points: [
      "**J2EE (JPA)**:",
      "```java",
      "@Stateless",
      "public class UserDAO {",
      "    @PersistenceContext",
      "    private EntityManager em;",
      "    ",
      "    public User findById(Long id) {",
      "        return em.find(User.class, id);",
      "    }",
      "}",
      "```",
      "**Spring (Spring Data JPA)**:",
      "```java",
      "@Repository",
      "public interface UserRepository extends JpaRepository<User, Long> {",
      "    // Methods auto-generated",
      "}",
      "```"
    ],
    keepInMind: "Spring Data JPA is a powerful abstraction over standard JPA, significantly reducing boilerplate code."
  },
  {
    title: "Web Layer Comparison",
    points: [
      "```table",
      "Feature | J2EE | Spring",
      "Web Framework | JSF, Servlets, JSP | Spring MVC, WebFlux",
      "REST API | JAX-RS | Spring REST",
      "View Technology | JSF, JSP | Thymeleaf, JSP, React",
      "Configuration | web.xml | Java Config",
      "```"
    ],
    keepInMind: "Spring MVC has become the de-facto standard for building web applications and REST APIs in the Java ecosystem."
  },
  {
    title: "Development Experience Comparison",
    points: [
      "```table",
      "Aspect | J2EE | Spring",
      "Learning Curve | Steep | Moderate",
      "Setup Time | Long | Quick (Spring Boot)",
      "Hot Reload | Limited | Excellent (DevTools)",
      "IDE Support | Good | Excellent",
      "Documentation | Specification-based | Comprehensive guides",
      "```"
    ],
    keepInMind: "Spring Boot provides a superior developer experience, which is a major reason for its popularity."
  },
  {
    title: "When to Choose Which?",
    points: [
      "**Choose J2EE when**:",
      "✅ Large enterprise with existing J2EE infrastructure",
      "✅ Need vendor support and compliance",
      "✅ Complex distributed transactions required",
      "",
      "**Choose Spring when**:",
      "✅ Rapid development and deployment needed",
      "✅ Microservices architecture",
      "✅ Cloud-native applications",
      "✅ Modern development practices preferred"
    ],
    note: "🧠 Interview tip: Many companies are migrating from J2EE to Spring for agility and cloud readiness",
    keepInMind: "For new projects, Spring is almost always the preferred choice due to its developer-friendliness and modern architecture."
  },
  {
    title: "Community and Ecosystem",
    points: [
      "**J2EE/Jakarta EE**: Driven by a specification process, multiple vendor implementations.",
      "→ Strong for standardization and vendor neutrality.",
      "**Spring Framework**: Driven by Pivotal (now VMware Tanzu), large and active open-source community.",
      "→ Rich ecosystem of projects (Spring Boot, Cloud, Data, Security, etc.).",
      "🔥 Spring's vibrant community and extensive ecosystem are major advantages."
    ],
    keepInMind: "Spring's rapid innovation and broad ecosystem often lead to faster adoption of new technologies."
  },
  {
    title: "Performance & Scalability",
    points: [
      "**J2EE Advantages**:",
      "• Built-in clustering and load balancing",
      "• Enterprise-grade application servers",
      "• Mature transaction management",
      "",
      "**Spring Advantages**:",
      "• Lighter memory footprint",
      "• Faster startup times",
      "• Microservices-friendly architecture",
      "• Cloud-native features"
    ],
    keepInMind: "While both can be highly performant, Spring's architecture is generally better suited for modern, cloud-native deployments."
  },
  {
    title: "Java Enterprise Evolution Summary",
    points: [
      "**Java Timeline** - From Java 1.0 (1996) to Java 21 (2023) with LTS versions",
      "**Key Milestones** - Java 5 (generics), Java 8 (lambdas), Java 21 (virtual threads)",
      "**J2EE Platform** - Enterprise specification with Servlets, EJB, JPA, JMS",
      "**J2EE Architecture** - Multi-tier approach with clear separation of concerns",
      "**Spring Framework** - Lightweight alternative with better developer experience",
      "**Framework Comparison** - J2EE for compliance vs Spring for agility",
      "**Modern Trends** - Shift from heavy app servers to cloud-native microservices",
      "**LTS Strategy** - Enterprise adoption follows 3-year LTS cycle",
      "🔥 Java's evolution reflects industry shift to lightweight, cloud-first development"
    ],
    note: "🧠 Understanding this evolution helps make informed technology choices",
    keepInMind: "Spring won the framework war because it focused on developer productivity and simplicity."
  }
];