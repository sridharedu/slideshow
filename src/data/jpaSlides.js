export const jpaSlides = [
  // JPA Fundamentals Section
  {
    title: "Java Persistence API (JPA)",
    points: [
      "✔️ Java Persistence API - ORM specification",
      "Maps Java objects to database tables",
      "Standard API for database operations",
      "🔥 Hibernate is most popular JPA implementation",
      "Complete data access solution for enterprise applications"
    ],
    note: "🧠 JPA = Specification, Hibernate = Implementation",
    keepInMind: "JPA provides the 'what' (the API), and Hibernate provides the 'how' (the implementation)."
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
    ],
    keepInMind: "JPA trades some control for a massive reduction in boilerplate code and improved portability."
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
    ],
    keepInMind: "The `spring-boot-starter-data-jpa` is your one-stop shop for persistence in a Spring Boot application."
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
    ],
    keepInMind: "An entity is a simple POJO (Plain Old Java Object) annotated to map to a database table."
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
    ],
    keepInMind: "These annotations are the bridge between your object-oriented code and the relational database."
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
    ],
    keepInMind: "`ddl-auto: create-drop` is great for development but should never be used in production."
  },

  // Entity Relationships Section
  {
    title: "JPA Entity Relationships",
    points: [
      "✔️ Map database relationships to Java objects",
      "Four main relationship types in JPA",
      "Bidirectional vs Unidirectional mappings",
      "🔥 Critical for proper database design"
    ],
    note: "🧠 Relationships define how entities connect and interact",
    keepInMind: "Correctly mapping relationships is the cornerstone of a well-designed data layer."
  },
  {
    title: "Relationship Types",
    points: [
      "```table",
      "Type | Description | Example",
      "@OneToOne | 1:1 relationship | User ↔ Profile",
      "@OneToMany | 1:N relationship | User → Orders",
      "@ManyToOne | N:1 relationship | Orders → User",
      "@ManyToMany | N:N relationship | Students ↔ Courses",
      "```"
    ],
    keepInMind: "The choice of relationship type directly impacts your database schema and query performance."
  },
  {
    title: "@OneToOne Relationship",
    points: [
      "```java",
      "@Entity",
      "public class User {",
      "    @Id",
      "    @GeneratedValue",
      "    private Long id;",
      "    ",
      "    @OneToOne(cascade = CascadeType.ALL)",
      "    @JoinColumn(name = \"profile_id\")",
      "    private UserProfile profile;",
      "}",
      "",
      "@Entity",
      "public class UserProfile {",
      "    @Id",
      "    @GeneratedValue",
      "    private Long id;",
      "    ",
      "    @OneToOne(mappedBy = \"profile\")",
      "    private User user;",
      "}",
      "```"
    ],
    keepInMind: "In a bidirectional OneToOne, one side must be the owner (with `@JoinColumn`) and the other the inverse side (with `mappedBy`)."
  },
  {
    title: "@OneToMany Relationship",
    points: [
      "```java",
      "@Entity",
      "public class User {",
      "    @OneToMany(mappedBy = \"user\", cascade = CascadeType.ALL)",
      "    private List<Order> orders = new ArrayList<>();",
      "}",
      "",
      "@Entity",
      "public class Order {",
      "    @ManyToOne",
      "    @JoinColumn(name = \"user_id\")",
      "    private User user;",
      "}",
      "```",
      "🔥 mappedBy indicates the owning side"
    ],
    keepInMind: "The `@ManyToOne` side is almost always the owning side in a OneToMany relationship."
  },
  {
    title: "@ManyToMany Relationship",
    points: [
      "```java",
      "@Entity",
      "public class Student {",
      "    @ManyToMany",
      "    @JoinTable(",
      "        name = \"student_course\",",
      "        joinColumns = @JoinColumn(name = \"student_id\"),",
      "        inverseJoinColumns = @JoinColumn(name = \"course_id\")",
      "    )",
      "    private Set<Course> courses = new HashSet<>();",
      "}",
      "",
      "@Entity",
      "public class Course {",
      "    @ManyToMany(mappedBy = \"courses\")",
      "    private Set<Student> students = new HashSet<>();",
      "}",
      "```"
    ],
    keepInMind: "ManyToMany relationships require a join table to store the associations."
  },
  {
    title: "Cascade Types",
    points: [
      "```table",
      "Type | Description | Use Case",
      "PERSIST | Save related entities | Create with children",
      "MERGE | Update related entities | Update with children",
      "REMOVE | Delete related entities | Delete with children",
      "REFRESH | Reload related entities | Sync from database",
      "ALL | All cascade operations | Full lifecycle management",
      "```"
    ],
    keepInMind: "Use cascade operations with caution, as they can have unintended side effects on related data."
  },
  {
    title: "Fetch Types",
    points: [
      "```java",
      "// Lazy loading (default for collections)",
      "@OneToMany(fetch = FetchType.LAZY)",
      "private List<Order> orders;",
      "",
      "// Eager loading (default for single entities)",
      "@ManyToOne(fetch = FetchType.EAGER)",
      "private User user;",
      "```",
      "✔️ LAZY = Load when accessed",
      "✔️ EAGER = Load immediately",
      "🔥 Use LAZY to avoid N+1 query problem"
    ],
    keepInMind: "`FetchType.LAZY` is your best defense against the dreaded N+1 query problem."
  },
  {
    title: "Bidirectional Helper Methods",
    points: [
      "```java",
      "@Entity",
      "public class User {",
      "    @OneToMany(mappedBy = \"user\")",
      "    private List<Order> orders = new ArrayList<>();",
      "    ",
      "    public void addOrder(Order order) {",
      "        orders.add(order);",
      "        order.setUser(this);",
      "    }",
      "    ",
      "    public void removeOrder(Order order) {",
      "        orders.remove(order);",
      "        order.setUser(null);",
      "    }",
      "}",
      "```",
      "🔥 Keeps both sides of relationship in sync"
    ],
    keepInMind: "Helper methods are essential for maintaining data integrity in bidirectional relationships."
  },
  {
    title: "Join Strategies",
    points: [
      "```java",
      "// Foreign Key (default)",
      "@JoinColumn(name = \"user_id\")",
      "",
      "// Join Table",
      "@JoinTable(",
      "    name = \"user_order\",",
      "    joinColumns = @JoinColumn(name = \"user_id\"),",
      "    inverseJoinColumns = @JoinColumn(name = \"order_id\")",
      ")",
      "",
      "// Shared Primary Key",
      "@PrimaryKeyJoinColumn",
      "```"
    ],
    keepInMind: "While `@JoinColumn` is the most common, knowing other join strategies can be useful for specific schema designs."
  },

  // EntityManager Section
  {
    title: "What is EntityManager?",
    points: [
      "✔️ Core JPA interface for database operations",
      "Manages entity lifecycle and persistence context",
      "Bridge between Java objects and database",
      "🔥 Lower-level API compared to Spring Data JPA"
    ],
    note: "🧠 EntityManager = JPA's primary interface for CRUD operations",
    keepInMind: "The EntityManager is your direct line to the persistence context, where all entity state changes are tracked."
  },
  {
    title: "EntityManager vs Repository",
    points: [
      "```table",
      "Aspect | EntityManager | Spring Data JPA",
      "Level | Low-level JPA API | High-level abstraction",
      "Code | More verbose | Less boilerplate",
      "Flexibility | Full control | Convention-based",
      "Queries | JPQL/Native SQL | Derived queries",
      "Learning curve | Steeper | Easier",
      "```"
    ],
    keepInMind: "Use Spring Data JPA for standard CRUD; drop down to EntityManager for complex or custom logic."
  },
  {
    title: "Injecting EntityManager",
    points: [
      "```java",
      "@Service",
      "@Transactional",
      "public class UserService {",
      "    ",
      "    @PersistenceContext",
      "    private EntityManager entityManager;",
      "    ",
      "    // Alternative injection",
      "    // @Autowired",
      "    // private EntityManager entityManager;",
      "}",
      "```",
      "🔥 @PersistenceContext is JPA standard, @Autowired is Spring-specific"
    ],
    keepInMind: "`@PersistenceContext` is the idiomatic way to inject an EntityManager in a JPA environment."
  },
  {
    title: "Basic CRUD Operations",
    points: [
      "```java",
      "// Create",
      "public User saveUser(User user) {",
      "    entityManager.persist(user);",
      "    return user;",
      "}",
      "",
      "// Read",
      "public User findUser(Long id) {",
      "    return entityManager.find(User.class, id);",
      "}",
      "",
      "// Update",
      "public User updateUser(User user) {",
      "    return entityManager.merge(user);",
      "}",
      "",
      "// Delete",
      "public void deleteUser(Long id) {",
      "    User user = entityManager.find(User.class, id);",
      "    entityManager.remove(user);",
      "}",
      "```"
    ],
    keepInMind: "`persist` is for new entities, while `merge` is for updating existing, detached entities."
  },
  {
    title: "Entity States",
    points: [
      "```table",
      "State | Description | Database",
      "New/Transient | Just created, not managed | Not synced",
      "Managed | Tracked by EntityManager | Auto-synced",
      "Detached | Was managed, now not | Not synced",
      "Removed | Marked for deletion | Will be deleted",
      "```",
      "🔥 Only managed entities are automatically synchronized"
    ],
    keepInMind: "Understanding entity states is crucial for debugging and managing data consistency."
  },
  {
    title: "JPQL Queries",
    points: [
      "```java",
      "// Simple query",
      "public List<User> findByUsername(String username) {",
      "    return entityManager.createQuery(",
      "        \"SELECT u FROM User u WHERE u.username = :username\", User.class)",
      "        .setParameter(\"username\", username)",
      "        .getResultList();",
      "}",
      "",
      "// Named query",
      "@NamedQuery(name = \"User.findByEmail\", ",
      "           query = \"SELECT u FROM User u WHERE u.email = :email\")",
      "public User findByEmail(String email) {",
      "    return entityManager.createNamedQuery(\"User.findByEmail\", User.class)",
      "        .setParameter(\"email\", email)",
      "        .getSingleResult();",
      "}",
      "```"
    ],
    keepInMind: "JPQL is object-oriented and portable across different database vendors."
  },
  {
    title: "Native SQL Queries",
    points: [
      "```java",
      "// Native SQL",
      "public List<User> findActiveUsers() {",
      "    return entityManager.createNativeQuery(",
      "        \"SELECT * FROM users WHERE active = true\", User.class)",
      "        .getResultList();",
      "}",
      "",
      "// Scalar results",
      "public Long countUsers() {",
      "    return (Long) entityManager.createNativeQuery(",
      "        \"SELECT COUNT(*) FROM users\")",
      "        .getSingleResult();",
      "}",
      "```"
    ],
    keepInMind: "Use native queries for database-specific features, but be aware that you lose portability."
  },
  {
    title: "Persistence Context Management",
    points: [
      "```java",
      "// Flush changes to database",
      "entityManager.flush();",
      "",
      "// Clear persistence context",
      "entityManager.clear();",
      "",
      "// Detach specific entity",
      "entityManager.detach(user);",
      "",
      "// Refresh entity from database",
      "entityManager.refresh(user);",
      "",
      "// Check if entity is managed",
      "boolean isManaged = entityManager.contains(user);",
      "```"
    ],
    keepInMind: "Explicitly managing the persistence context is an advanced technique for performance tuning."
  },
  {
    title: "Batch Operations",
    points: [
      "```java",
      "// Bulk update",
      "public int updateUserStatus(String status) {",
      "    return entityManager.createQuery(",
      "        \"UPDATE User u SET u.status = :status\")",
      "        .setParameter(\"status\", status)",
      "        .executeUpdate();",
      "}",
      "",
      "// Bulk delete",
      "public int deleteInactiveUsers() {",
      "    return entityManager.createQuery(",
      "        \"DELETE FROM User u WHERE u.active = false\")",
      "        .executeUpdate();",
      "}",
      "```",
      "🔥 Bulk operations bypass entity lifecycle callbacks"
    ],
    keepInMind: "Bulk operations are much more performant than iterating and updating entities one by one."
  },

  // Spring Data JPA Section
  {
    title: "What is Spring Data JPA?",
    points: [
      "✔️ High-level abstraction over JPA",
      "Reduces boilerplate code for data access",
      "Auto-generates repository implementations",
      "🔥 Part of Spring Data family"
    ],
    note: "🧠 Spring Data JPA = JPA + Spring magic + less code",
    keepInMind: "Spring Data JPA is all about making data access easier and more efficient for developers."
  },
  {
    title: "Repository Hierarchy",
    points: [
      "```table",
      "Interface | Methods | Purpose",
      "Repository | Marker interface | Base interface",
      "CrudRepository | Basic CRUD | save, findById, delete",
      "PagingAndSortingRepository | + Pagination | findAll with Pageable",
      "JpaRepository | + JPA specific | flush, saveAndFlush",
      "```"
    ],
    keepInMind: "For most applications, extending `JpaRepository` is the best choice."
  },
  {
    title: "Basic Repository",
    points: [
      "```java",
      "@Repository",
      "public interface UserRepository extends JpaRepository<User, Long> {",
      "    // No implementation needed!",
      "    // Spring generates all methods automatically",
      "}",
      "```",
      "Built-in methods:",
      "• `save(entity)`, `saveAll(entities)`",
      "• `findById(id)`, `findAll()`",
      "• `deleteById(id)`, `delete(entity)`",
      "• `count()`, `existsById(id)`"
    ],
    keepInMind: "This is the magic of Spring Data JPA: a fully implemented DAO layer with zero implementation code."
  },
  {
    title: "Derived Query Methods",
    points: [
      "```java",
      "public interface UserRepository extends JpaRepository<User, Long> {",
      "    ",
      "    // Find by single property",
      "    List<User> findByUsername(String username);",
      "    ",
      "    // Find by multiple properties",
      "    List<User> findByUsernameAndEmail(String username, String email);",
      "    ",
      "    // Find with conditions",
      "    List<User> findByAgeGreaterThan(int age);",
      "    List<User> findByUsernameContaining(String username);",
      "    ",
      "    // Count and exists",
      "    long countByActive(boolean active);",
      "    boolean existsByEmail(String email);",
      "}",
      "```"
    ],
    keepInMind: "Spring Data JPA parses the method name and creates the corresponding query for you."
  },
  {
    title: "Query Keywords",
    points: [
      "```table",
      "Keyword | Example | SQL",
      "And | findByNameAndAge | WHERE name = ? AND age = ?",
      "Or | findByNameOrAge | WHERE name = ? OR age = ?",
      "Between | findByAgeBetween | WHERE age BETWEEN ? AND ?",
      "LessThan | findByAgeLessThan | WHERE age < ?",
      "GreaterThan | findByAgeGreaterThan | WHERE age > ?",
      "Like | findByNameLike | WHERE name LIKE ?",
      "In | findByAgeIn | WHERE age IN (?)",
      "```"
    ],
    keepInMind: "There is a rich set of keywords available for creating derived queries."
  },
  {
    title: "Custom Queries with @Query",
    points: [
      "```java",
      "public interface UserRepository extends JpaRepository<User, Long> {",
      "    ",
      "    // JPQL query",
      "    @Query(\"SELECT u FROM User u WHERE u.email = ?1\")",
      "    Optional<User> findByEmail(String email);",
      "    ",
      "    // Named parameters",
      "    @Query(\"SELECT u FROM User u WHERE u.age > :age\")",
      "    List<User> findUsersOlderThan(@Param(\"age\") int age);",
      "    ",
      "    // Native SQL",
      "    @Query(value = \"SELECT * FROM users WHERE active = true\", nativeQuery = true)",
      "    List<User> findActiveUsersNative();",
      "}",
      "```"
    ],
    keepInMind: "When derived queries aren't enough, `@Query` gives you full control over the query."
  },
  {
    title: "Pagination and Sorting",
    points: [
      "```java",
      "// In Repository",
      "Page<User> findByActive(boolean active, Pageable pageable);",
      "List<User> findByActive(boolean active, Sort sort);",
      "",
      "// In Service",
      "@Service",
      "public class UserService {",
      "    ",
      "    public Page<User> getUsers(int page, int size) {",
      "        Pageable pageable = PageRequest.of(page, size, ",
      "            Sort.by(\"username\").ascending());",
      "        return userRepository.findAll(pageable);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Pagination is essential for performance when dealing with large datasets."
  },
  {
    title: "Modifying Queries",
    points: [
      "```java",
      "public interface UserRepository extends JpaRepository<User, Long> {",
      "    ",
      "    @Modifying",
      "    @Query(\"UPDATE User u SET u.active = :active WHERE u.id = :id\")",
      "    int updateUserStatus(@Param(\"id\") Long id, @Param(\"active\") boolean active);",
      "    ",
      "    @Modifying",
      "    @Query(\"DELETE FROM User u WHERE u.active = false\")",
      "    int deleteInactiveUsers();",
      "}",
      "```",
      "🔥 @Modifying required for UPDATE/DELETE queries"
    ],
    keepInMind: "`@Modifying` queries are executed directly against the database and bypass the persistence context."
  },
  {
    title: "Specifications (Criteria API)",
    points: [
      "```java",
      "public interface UserRepository extends JpaRepository<User, Long>, ",
      "                                        JpaSpecificationExecutor<User> {",
      "}",
      "",
      "// Dynamic queries",
      "public class UserSpecifications {",
      "    public static Specification<User> hasUsername(String username) {",
      "        return (root, query, cb) => ",
      "            cb.equal(root.get(\"username\"), username);",
      "    }",
      "    ",
      "    public static Specification<User> isActive() {",
      "        return (root, query, cb) => ",
      "            cb.isTrue(root.get(\"active\"));",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Specifications are the most powerful way to build dynamic, type-safe queries."
  },
  {
    title: "JPA Best Practices",
    points: [
      "✅ Use @Transactional for data modifications",
      "✅ Implement equals() and hashCode() for entities",
      "✅ Use lazy loading for collections",
      "✅ Use derived queries for simple operations",
      "✅ Use @Query for complex queries",
      "✅ Implement pagination for large datasets",
      "✅ Use Specifications for dynamic queries",
      "✅ Return Optional for single results",
      "❌ Don't use entities as DTOs",
      "❌ Don't ignore N+1 query problem",
      "❌ Don't fetch unnecessary data",
      "❌ Don't create too many derived query methods"
    ],
    note: "🧠 Interview tip: JPA simplifies database operations but requires understanding of ORM concepts",
    keepInMind: "The key is to choose the right tool for the job: derived queries, `@Query`, Specifications, or EntityManager."
  }
];