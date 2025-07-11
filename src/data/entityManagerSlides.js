export const entityManagerSlides = [
  {
    title: "What is EntityManager?",
    points: [
      "✔️ Core JPA interface for database operations",
      "Manages entity lifecycle and persistence context",
      "Bridge between Java objects and database",
      "🔥 Lower-level API compared to Spring Data JPA"
    ],
    note: "🧠 EntityManager = JPA's primary interface for CRUD operations"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    title: "Best Practices",
    points: [
      "✅ Always use @Transactional for data modifications",
      "✅ Use flush() and clear() for large batch operations",
      "✅ Prefer JPQL over native SQL when possible",
      "✅ Handle NoResultException for getSingleResult()",
      "✅ Use pagination for large result sets",
      "❌ Don't perform operations on detached entities",
      "❌ Don't ignore transaction boundaries",
      "❌ Don't keep EntityManager open too long"
    ],
    note: "🧠 Interview tip: EntityManager provides fine-grained control over persistence operations"
  }
];