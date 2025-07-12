export const springDataJpaSlides = [
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
    note: "🧠 Interview tip: Spring Data JPA reduces boilerplate but understand underlying JPA",
    keepInMind: "The key is to choose the right tool for the job: derived queries, `@Query`, or Specifications."
  }
]