export const javaJ2EESlides = [
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
    title: "Servlet Lifecycle",
    points: [
      "```java",
      "@WebServlet(\"/hello\")",
      "public class HelloServlet extends HttpServlet {",
      "    public void init() throws ServletException {",
      "        // Initialization code",
      "    }",
      "    ",
      "    protected void doGet(HttpServletRequest request,",
      "                        HttpServletResponse response) {",
      "        response.getWriter().println(\"Hello World\");",
      "    }",
      "    ",
      "    public void destroy() {",
      "        // Cleanup code",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Understanding the servlet lifecycle is fundamental to web development in Java."
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
    title: "JPA Entity Mapping",
    points: [
      "```java",
      "@Entity",
      "@Table(name = \"orders\")",
      "public class Order {",
      "    @Id",
      "    @GeneratedValue(strategy = GenerationType.IDENTITY)",
      "    private Long id;",
      "    ",
      "    @Column(nullable = false)",
      "    private String customerName;",
      "    ",
      "    @OneToMany(mappedBy = \"order\", cascade = CascadeType.ALL)",
      "    private List<OrderItem> items;",
      "    ",
      "    // Getters and setters",
      "}",
      "```"
    ],
    keepInMind: "JPA provides a standard way to map your Java objects to a relational database, abstracting away the SQL."
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
  {
    title: "Java Message Service (JMS)",
    points: [
      "```java",
      "@MessageDriven(activationConfig = {",
      "    @ActivationConfigProperty(propertyName = \"destination\",",
      "                             propertyValue = \"orderQueue\")",
      "})",
      "public class OrderProcessor implements MessageListener {",
      "    ",
      "    @Override",
      "    public void onMessage(Message message) {",
      "        try {",
      "            TextMessage textMessage = (TextMessage) message;",
      "            String orderData = textMessage.getText();",
      "            processOrder(orderData);",
      "        } catch (JMSException e) {",
      "            // Handle exception",
      "        }",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "JMS is a powerful tool for building decoupled, asynchronous systems."
  },
  {
    title: "J2EE Deployment",
    points: [
      "**WAR (Web Application Archive)**: For web modules (Servlets, JSPs, JSF).",
      "**EJB-JAR (Enterprise JavaBean Archive)**: For EJB modules.",
      "**EAR (Enterprise Archive)**: Combines WARs, EJB-JARs, and other modules into a single deployable unit.",
      "Deployed to a J2EE Application Server (e.g., WildFly, GlassFish, WebLogic, WebSphere).",
      "🔥 Application servers provide the runtime environment and services for J2EE components."
    ],
    keepInMind: "EAR files are used for complex, multi-module enterprise applications."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use stateless session beans for scalability",
      "✅ Implement proper transaction management",
      "✅ Use connection pooling for database access",
      "✅ Apply security at multiple layers",
      "✅ Use CDI for dependency injection",
      "✅ Implement proper exception handling",
      "❌ Don't use entity beans (deprecated)",
      "❌ Don't ignore transaction boundaries"
    ],
    note: "🧠 Interview tip: Explain the difference between J2EE and Spring Framework approaches",
    keepInMind: "Many of these best practices are still relevant today, even in modern Spring applications."
  },
  {
    title: "Java J2EE Summary",
    points: [
      "**What is J2EE** - Enterprise Java platform for scalable applications",
      "**Architecture Tiers** - Client, Web, Business, Data layers",
      "**Core Technologies** - Servlets, JSP, EJB, JPA, JMS, JNDI",
      "**EJB Types** - Session beans, Message-driven beans for enterprise logic",
      "**JPA Entity Mapping** - Object-relational mapping for data persistence",
      "**CDI** - Dependency injection for enterprise components",
      "**JMS** - Asynchronous messaging for distributed systems",
      "**Deployment** - WAR, EJB-JAR, and EAR files deployed to application servers.",
      "🔥 Foundation for enterprise Java development with comprehensive APIs"
    ],
    note: "🧠 J2EE provides enterprise-grade solutions for complex distributed applications",
    keepInMind: "While Spring has become more popular, understanding J2EE provides valuable context for the evolution of enterprise Java."
  }
];