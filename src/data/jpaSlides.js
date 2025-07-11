export const jpaSlides = [
  {
    title: "What is JPA?",
    points: [
      "✔️ Java Persistence API - ORM specification",
      "Maps Java objects to database tables",
      "Standard API for database operations",
      "🔥 Hibernate is most popular JPA implementation"
    ],
    note: "🧠 JPA = Specification, Hibernate = Implementation"
  },
  {
    title: "JPA vs JDBC",
    points: [
      "```table",
      "Aspect | JDBC | JPA",
      "Code | SQL queries | Object operations",
      "Mapping | Manual | Automatic",
      "Boilerplate | High | Low",
      "Database specific | Yes | No",
      "Learning curve | Low | Medium",
      "```"
    ]
  },
  {
    title: "JPA Setup in Spring Boot",
    points: [
      "```xml",
      "<dependency>",
      "    <groupId>org.springframework.boot</groupId>",
      "    <artifactId>spring-boot-starter-data-jpa</artifactId>",
      "</dependency>",
      "<dependency>",
      "    <groupId>com.h2database</groupId>",
      "    <artifactId>h2</artifactId>",
      "    <scope>runtime</scope>",
      "</dependency>",
      "```",
      "🔥 Includes Hibernate, Spring Data JPA, and connection pooling"
    ]
  },
  {
    title: "JPA Entity",
    points: [
      "```java",
      "@Entity",
      "@Table(name = \"users\")",
      "public class User {",
      "    @Id",
      "    @GeneratedValue(strategy = GenerationType.IDENTITY)",
      "    private Long id;",
      "    ",
      "    @Column(name = \"username\", nullable = false, unique = true)",
      "    private String username;",
      "    ",
      "    @Column(name = \"email\")",
      "    private String email;",
      "    ",
      "    // constructors, getters, setters",
      "}",
      "```"
    ]
  },
  {
    title: "JPA Annotations",
    points: [
      "```table",
      "Annotation | Purpose | Example",
      "@Entity | Mark as JPA entity | @Entity",
      "@Table | Specify table name | @Table(name=\"users\")",
      "@Id | Primary key | @Id",
      "@GeneratedValue | Auto-generate ID | @GeneratedValue",
      "@Column | Column mapping | @Column(name=\"email\")",
      "@Temporal | Date/Time mapping | @Temporal(DATE)",
      "```"
    ]
  },
  {
    title: "JPA Repository",
    points: [
      "```java",
      "@Repository",
      "public interface UserRepository extends JpaRepository<User, Long> {",
      "    ",
      "    // Derived query methods",
      "    List<User> findByUsername(String username);",
      "    List<User> findByEmailContaining(String email);",
      "    ",
      "    // Custom query",
      "    @Query(\"SELECT u FROM User u WHERE u.email = ?1\")",
      "    Optional<User> findByEmail(String email);",
      "}",
      "```",
      "🔥 No implementation needed - Spring generates it"
    ]
  },
  {
    title: "Entity Relationships",
    points: [
      "```java",
      "@Entity",
      "public class User {",
      "    @OneToMany(mappedBy = \"user\", cascade = CascadeType.ALL)",
      "    private List<Order> orders;",
      "}",
      "",
      "@Entity",
      "public class Order {",
      "    @ManyToOne",
      "    @JoinColumn(name = \"user_id\")",
      "    private User user;",
      "}",
      "```"
    ]
  },
  {
    title: "JPA Configuration",
    points: [
      "```yaml",
      "spring:",
      "  datasource:",
      "    url: jdbc:h2:mem:testdb",
      "    username: sa",
      "    password:",
      "  jpa:",
      "    hibernate:",
      "      ddl-auto: create-drop",
      "    show-sql: true",
      "    properties:",
      "      hibernate:",
      "        format_sql: true",
      "```"
    ]
  },
  {
    title: "Entity Manager",
    points: [
      "```java",
      "@Service",
      "@Transactional",
      "public class UserService {",
      "    ",
      "    @PersistenceContext",
      "    private EntityManager entityManager;",
      "    ",
      "    public User saveUser(User user) {",
      "        entityManager.persist(user);",
      "        return user;",
      "    }",
      "    ",
      "    public User findUser(Long id) {",
      "        return entityManager.find(User.class, id);",
      "    }",
      "}",
      "```"
    ]
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use @Transactional for data modifications",
      "✅ Implement equals() and hashCode() for entities",
      "✅ Use lazy loading for collections",
      "✅ Optimize queries with @Query",
      "✅ Use connection pooling",
      "❌ Don't use entities as DTOs",
      "❌ Don't ignore N+1 query problem",
      "❌ Don't fetch unnecessary data"
    ],
    note: "🧠 Interview tip: JPA simplifies database operations but requires understanding of ORM concepts"
  }
];