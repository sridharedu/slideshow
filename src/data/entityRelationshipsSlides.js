export const entityRelationshipsSlides = [
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
  {
    title: "Best Practices",
    points: [
      "✅ Use LAZY loading for collections",
      "✅ Implement helper methods for bidirectional relationships",
      "✅ Use Set instead of List for @ManyToMany",
      "✅ Be careful with cascade operations",
      "✅ Override equals() and hashCode() properly",
      "❌ Don't use EAGER loading unnecessarily",
      "❌ Don't create circular references in toString()",
      "❌ Don't ignore the owning side of relationships"
    ],
    note: "🧠 Interview tip: Understand fetch types, cascade operations, and N+1 query problem",
    keepInMind: "Properly managing relationships involves a combination of mapping, fetching, and lifecycle management."
  }
];