export const j2eeVsSpringSlides = [
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
    title: "Dependency Injection",
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
    title: "Data Access Layer",
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
    title: "Transaction Management",
    points: [
      "**J2EE**:",
      "```java",
      "@TransactionAttribute(TransactionAttributeType.REQUIRED)",
      "public void processOrder(Order order) {",
      "    // Container-managed transactions",
      "}",
      "```",
      "**Spring**:",
      "```java",
      "@Transactional",
      "public void processOrder(Order order) {",
      "    // Spring-managed transactions",
      "}",
      "```"
    ],
    keepInMind: "Spring's `@Transactional` annotation is one of its most popular and powerful features."
  },
  {
    title: "Web Layer",
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
    title: "Testing Support",
    points: [
      "**J2EE**:",
      "```java",
      "// Requires Arquillian for integration testing",
      "@RunWith(Arquillian.class)",
      "public class OrderServiceTest {",
      "    @Deployment",
      "    public static WebArchive createDeployment() {",
      "        // Complex setup",
      "    }",
      "}",
      "```",
      "**Spring**:",
      "```java",
      "@SpringBootTest",
      "public class OrderServiceTest {",
      "    @Autowired",
      "    private OrderService orderService;",
      "    // Simple testing",
      "}",
      "```"
    ],
    keepInMind: "Spring's testing support is first-class, making it much easier to write and run both unit and integration tests."
  },
  {
    title: "Development Experience",
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
    title: "J2EE vs Spring Summary",
    points: [
      "**Architecture** - J2EE: Heavy app servers vs Spring: Lightweight containers",
      "**Dependency Injection** - CDI (@Inject) vs Spring (@Autowired)",
      "**Data Access** - JPA/EntityManager vs Spring Data JPA repositories",
      "**Transaction Management** - Container-managed vs Spring-managed",
      "**Web Layer** - JSF/Servlets vs Spring MVC/WebFlux",
      "**Testing** - Arquillian complexity vs Spring Boot simplicity",
      "**Development Experience** - Steep learning vs moderate complexity",
      "**Decision Factors** - Enterprise compliance vs rapid development",
      "🔥 Both approaches solve enterprise challenges with different philosophies"
    ],
    note: "🧠 Choose based on project requirements, team expertise, and infrastructure",
    keepInMind: "Spring won the framework war because it focused on developer productivity and simplicity."
  }
];