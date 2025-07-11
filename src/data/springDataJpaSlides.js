export const springDataJpaSlides = [
  {
    title: "What is Spring Data JPA?",
    points: [
      "✔️ High-level abstraction over JPA",
      "Reduces boilerplate code for data access",
      "Auto-generates repository implementations",
      "🔥 Part of Spring Data family"
    ],
    note: "🧠 Spring Data JPA = JPA + Spring magic + less code"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      "        return (root, query, cb) -> ",
      "            cb.equal(root.get(\"username\"), username);",
      "    }",
      "    ",
      "    public static Specification<User> isActive() {",
      "        return (root, query, cb) -> ",
      "            cb.isTrue(root.get(\"active\"));",
      "    }",
      "}",
      "```"
    ]
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use derived queries for simple operations",
      "✅ Use @Query for complex queries",
      "✅ Implement pagination for large datasets",
      "✅ Use Specifications for dynamic queries",
      "✅ Return Optional for single results",
      "❌ Don't create too many derived query methods",
      "❌ Don't ignore N+1 query problems",
      "❌ Don't fetch unnecessary data"
    ],
    note: "🧠 Interview tip: Spring Data JPA reduces boilerplate but understand underlying JPA"
  }
];