export const j2eeVsSpringSlides = [
  {
    title: "J2EE vs Spring Framework",
    points: [
      "✔️ Two major approaches to enterprise Java development",
      "J2EE: Official Java enterprise specification",
      "Spring: Third-party framework with simpler approach",
      "🔥 Both solve enterprise application challenges differently"
    ],
    note: "🧠 Understanding both helps choose the right approach for your project"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    note: "🧠 Interview tip: Many companies are migrating from J2EE to Spring for agility and cloud readiness"
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
    note: "🧠 Choose based on project requirements, team expertise, and infrastructure"
  }
];