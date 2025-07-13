export const springJpaSlides = [
  {
    title: "Transaction Management and Caching",
    points: [
      "🔒 **ACID Properties**: Atomicity, Consistency, Isolation, Durability",
      "🎯 **Cascading & Lazy Loading**: Efficient data loading strategies",
      "🚀 **Multi-level Caching**: L1, L2, and query result caching",
      "🌐 **Distributed Transactions**: Cross-system ACID compliance",
      "🔐 **Isolation & Locking**: Optimistic vs Pessimistic strategies",
      "🔥 **28 slides** covering enterprise data access patterns"
    ],
    note: "🧠 Complete guide to building robust, high-performance data access layers in Spring Boot",
    keepInMind: "Master these concepts to build enterprise-grade applications that scale and perform."
  },
  {
    title: "What are ACID Properties?",
    points: [
      "🔒 **Atomicity**: All or nothing - transaction succeeds completely or fails completely",
      "🎯 **Consistency**: Database remains in valid state before and after transaction",
      "🔐 **Isolation**: Concurrent transactions don't interfere with each other",
      "💾 **Durability**: Committed changes survive system failures",
      "",
      "🏦 **Example**: Bank transfer must debit one account and credit another atomically"
    ],
    note: "🧠 ACID properties ensure database transactions are reliable and maintain data integrity",
    keepInMind: "ACID is the foundation of reliable database systems - understand each property deeply."
  },
  {
    title: "Atomicity in Practice",
    points: [
      "**All operations succeed or all fail**:",
      "```java",
      "@Transactional",
      "public void transferMoney(Long fromId, Long toId, BigDecimal amount) {",
      "    Account from = accountRepo.findById(fromId);",
      "    Account to = accountRepo.findById(toId);",
      "    ",
      "    from.debit(amount);  // Step 1",
      "    to.credit(amount);   // Step 2",
      "    ",
      "    // If ANY step fails, ALL changes are rolled back",
      "}",
      "```",
      "**RuntimeException** → automatic rollback"
    ],
    note: "⚡ Spring's @Transactional ensures atomicity by wrapping operations in database transaction",
    keepInMind: "Atomicity prevents partial updates - either complete success or complete failure."
  },
  {
    title: "Consistency Explained",
    points: [
      "**Database constraints must be satisfied**:",
      "• Foreign key constraints",
      "• Check constraints",
      "• Unique constraints",
      "• Business rules validation",
      "",
      "```java",
      "@Entity",
      "public class Account {",
      "    @Column(nullable = false)",
      "    @Min(0) // Balance cannot be negative",
      "    private BigDecimal balance;",
      "}",
      "```",
      "**Validation** happens before commit"
    ],
    note: "🎯 Consistency ensures database never enters an invalid state",
    keepInMind: "Use database constraints AND application validation for robust consistency."
  },
  {
    title: "Isolation Levels Deep Dive",
    points: [
      "**Prevents concurrent transaction interference**:",
      "```java",
      "// Transaction 1",
      "@Transactional(isolation = Isolation.REPEATABLE_READ)",
      "public void readAccountBalance(Long accountId) {",
      "    BigDecimal balance1 = accountRepo.getBalance(accountId);",
      "    // ... some processing ...",
      "    BigDecimal balance2 = accountRepo.getBalance(accountId);",
      "    // balance1 == balance2 (guaranteed)",
      "}",
      "```",
      "**Higher isolation** = more consistency, less concurrency"
    ],
    note: "🔐 Isolation prevents dirty reads, phantom reads, and non-repeatable reads",
    keepInMind: "Choose isolation level based on consistency needs vs performance requirements."
  },
  {
    title: "Durability Guarantees",
    points: [
      "**Committed data survives system crashes**:",
      "• Write-Ahead Logging (WAL)",
      "• Transaction logs written to disk before commit",
      "• Database recovery uses logs after crash",
      "",
      "```java",
      "@Transactional",
      "public void createOrder(Order order) {",
      "    orderRepo.save(order);",
      "    // Once method completes successfully,",
      "    // order is guaranteed to be persistent",
      "    // even if system crashes immediately after",
      "}",
      "```"
    ],
    note: "💾 Durability is handled by database engine - application doesn't need to worry about it",
    keepInMind: "Trust the database for durability, but ensure proper backup and recovery strategies."
  },
  {
    title: "ACID in Spring Boot",
    points: [
      "**Spring manages ACID automatically**:",
      "```java",
      "@Service",
      "@Transactional // Ensures ACID properties",
      "public class OrderService {",
      "    ",
      "    public void processOrder(OrderRequest request) {",
      "        // A: All operations atomic",
      "        Order order = createOrder(request);",
      "        updateInventory(request.getItems());",
      "        sendNotification(order);",
      "        ",
      "        // C: Constraints validated",
      "        // I: Isolated from other transactions  ",
      "        // D: Changes persisted permanently",
      "    }",
      "}",
      "```"
    ],
    note: "🌱 Spring's @Transactional annotation provides ACID guarantees out of the box",
    keepInMind: "@Transactional gives you ACID for free - use it for all business operations."
  },
  {
    title: "JPA Cascading Operations",
    points: [
      "**CascadeType.PERSIST**: Save parent → save children",
      "**CascadeType.MERGE**: Update parent → update children", 
      "**CascadeType.REMOVE**: Delete parent → delete children",
      "**CascadeType.REFRESH**: Reload parent → reload children",
      "**CascadeType.DETACH**: Detach parent → detach children",
      "**CascadeType.ALL**: All above operations"
    ],
    note: "⚠️ Use CASCADE carefully - especially REMOVE can cause unintended data deletion",
    keepInMind: "CASCADE.REMOVE is dangerous - always verify business logic before using it."
  },
  {
    title: "Cascading Example",
    points: [
      "```java",
      "@Entity",
      "public class Order {",
      "    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)",
      "    private List<OrderItem> items;",
      "}",
      "",
      "// Saving order automatically saves all items",
      "Order order = new Order();",
      "order.addItem(new OrderItem(\"Product A\"));",
      "orderRepository.save(order); // Items saved too",
      "```"
    ],
    note: "🔥 CASCADE.ALL means save/update/delete operations propagate to child entities",
    keepInMind: "Cascading reduces boilerplate but increases coupling - use judiciously."
  },
  {
    title: "Lazy vs Eager Loading",
    points: [
      "**FetchType.LAZY** (default for collections):",
      "• Data loaded only when accessed",
      "• Prevents N+1 queries initially",
      "• Requires active session",
      "",
      "**FetchType.EAGER**:",
      "• Data loaded immediately with parent",
      "• Can cause performance issues",
      "• Works outside session scope"
    ],
    note: "⚡ Lazy loading is generally preferred - load data when you actually need it",
    keepInMind: "LAZY = better performance, EAGER = simpler code but potential memory issues."
  },
  {
    title: "Lazy Loading Example",
    points: [
      "```java",
      "@Entity",
      "public class User {",
      "    @OneToMany(fetch = FetchType.LAZY)",
      "    private List<Order> orders; // Not loaded initially",
      "}",
      "",
      "User user = userRepository.findById(1L);",
      "// orders not loaded yet",
      "",
      "user.getOrders().size(); // NOW orders are loaded",
      "```"
    ],
    note: "🚨 LazyInitializationException occurs if session is closed before accessing lazy data",
    keepInMind: "Lazy loading requires active Hibernate session - plan your transaction boundaries."
  },
  {
    title: "Solving Lazy Loading Issues",
    points: [
      "**@Transactional**: Keep session open",
      "```java",
      "@Transactional",
      "public void processUser(Long userId) {",
      "    User user = userRepository.findById(userId);",
      "    user.getOrders().forEach(order -> process(order));",
      "}",
      "```",
      "",
      "**JOIN FETCH**: Load eagerly in query",
      "```java",
      "@Query(\"SELECT u FROM User u JOIN FETCH u.orders WHERE u.id = :id\")",
      "User findUserWithOrders(@Param(\"id\") Long id);",
      "```"
    ],
    note: "🎯 Choose the right strategy based on your use case - don't always default to @Transactional",
    keepInMind: "JOIN FETCH for specific queries, @Transactional for service methods."
  },
  {
    title: "JPA Caching Levels",
    points: [
      "**Level 1 Cache (Session/EntityManager)**:",
      "• Per transaction/session scope",
      "• Automatic, always enabled",
      "• Prevents duplicate queries in same session",
      "",
      "**Level 2 Cache (SessionFactory)**:",
      "• Application-wide cache",
      "• Optional, needs configuration",
      "• Shared across sessions"
    ],
    note: "🧠 Level 1 is automatic, Level 2 requires explicit setup and strategy",
    keepInMind: "L1 cache is per-session, L2 cache is application-wide - understand the scope."
  },
  {
    title: "First Level Cache Example",
    points: [
      "```java",
      "@Transactional",
      "public void demonstrateL1Cache() {",
      "    User user1 = userRepository.findById(1L); // DB query",
      "    User user2 = userRepository.findById(1L); // No DB query!",
      "    ",
      "    System.out.println(user1 == user2); // true - same object",
      "}",
      "```",
      "✅ Same transaction = same object instance",
      "❌ Different transactions = separate objects"
    ],
    note: "🔥 First level cache prevents redundant queries within the same transaction",
    keepInMind: "Same transaction = same object reference, different transactions = different objects."
  },
  {
    title: "Second Level Cache Setup",
    points: [
      "**Enable in application.properties**:",
      "```properties",
      "spring.jpa.properties.hibernate.cache.use_second_level_cache=true",
      "spring.jpa.properties.hibernate.cache.region.factory_class=org.hibernate.cache.ehcache.EhCacheRegionFactory",
      "```",
      "",
      "**Mark entities as cacheable**:",
      "```java",
      "@Entity",
      "@Cacheable",
      "@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)",
      "public class Product { }",
      "```"
    ],
    note: "⚙️ Popular cache providers: EhCache, Hazelcast, Infinispan",
    keepInMind: "Second level cache requires careful configuration - test thoroughly in production-like environment."
  },
  {
    title: "Cache Concurrency Strategies",
    points: [
      "**READ_ONLY**: Immutable data, best performance",
      "**READ_WRITE**: Most common, handles updates",
      "**NONSTRICT_READ_WRITE**: Eventual consistency",
      "**TRANSACTIONAL**: Full ACID compliance",
      "",
      "```java",
      "@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)",
      "public class Category {",
      "    // Frequently read, occasionally updated",
      "}",
      "```"
    ],
    note: "🎯 Choose strategy based on read/write patterns and consistency requirements",
    keepInMind: "READ_ONLY for reference data, READ_WRITE for business entities."
  },
  {
    title: "Query Result Caching",
    points: [
      "**Enable query cache**:",
      "```properties",
      "spring.jpa.properties.hibernate.cache.use_query_cache=true",
      "```",
      "",
      "**Cache specific queries**:",
      "```java",
      "@Query(\"SELECT p FROM Product p WHERE p.category = :cat\")",
      "@QueryHints(@QueryHint(name = \"org.hibernate.cacheable\", value = \"true\"))",
      "List<Product> findByCategory(@Param(\"cat\") String category);",
      "```"
    ],
    note: "📊 Query cache stores query results, not just entities - useful for expensive queries",
    keepInMind: "Query cache is separate from entity cache - enable both for maximum benefit."
  },
  {
    title: "Cache Performance Monitoring",
    points: [
      "**Enable statistics**:",
      "```properties",
      "spring.jpa.properties.hibernate.generate_statistics=true",
      "spring.jpa.properties.hibernate.cache.use_structured_entries=true",
      "```",
      "",
      "**Monitor cache hits**:",
      "```java",
      "Statistics stats = sessionFactory.getStatistics();",
      "long hitCount = stats.getSecondLevelCacheHitCount();",
      "long missCount = stats.getSecondLevelCacheMissCount();",
      "double hitRatio = (double) hitCount / (hitCount + missCount);",
      "```"
    ],
    note: "📈 Monitor cache hit ratios to validate caching effectiveness",
    keepInMind: "Aim for 80%+ cache hit ratio - lower ratios indicate cache tuning needed."
  },
  {
    title: "N+1 Query Problem",
    points: [
      "**The Problem**:",
      "```java",
      "List<User> users = userRepository.findAll(); // 1 query",
      "users.forEach(user -> {",
      "    user.getOrders().size(); // N queries (one per user)",
      "});",
      "```",
      "",
      "**Solutions**:",
      "• JOIN FETCH in JPQL",
      "• @EntityGraph annotation",
      "• Batch fetching",
      "• Proper caching strategy"
    ],
    note: "🚨 N+1 is the most common JPA performance killer - always watch for it",
    keepInMind: "Enable SQL logging in development to catch N+1 queries early."
  },
  {
    title: "Solving N+1 with @EntityGraph",
    points: [
      "```java",
      "@Entity",
      "@NamedEntityGraph(",
      "    name = \"User.orders\",",
      "    attributeNodes = @NamedAttributeNode(\"orders\")",
      ")",
      "public class User { }",
      "",
      "@EntityGraph(\"User.orders\")",
      "List<User> findAll();",
      "",
      "// Or inline:",
      "@EntityGraph(attributePaths = {\"orders\", \"orders.items\"})",
      "List<User> findAllWithOrdersAndItems();",
      "```"
    ],
    note: "🎯 @EntityGraph provides declarative control over what gets loaded eagerly",
    keepInMind: "@EntityGraph is cleaner than JOIN FETCH for complex object graphs."
  },
  {
    title: "Best Practices Summary",
    points: [
      "✅ **Use LAZY loading by default**",
      "✅ **Enable second-level cache for read-heavy entities**",
      "✅ **Monitor cache hit ratios and query counts**",
      "✅ **Use @EntityGraph or JOIN FETCH to avoid N+1**",
      "✅ **Be careful with CASCADE operations**",
      "❌ **Don't use EAGER loading everywhere**",
      "❌ **Don't ignore LazyInitializationException**"
    ],
    note: "🧠 Performance optimization is about finding the right balance for your specific use case",
    keepInMind: "Profile first, optimize second - measure the impact of each change."
  },
  {
    title: "Spring JPA Caching & Loading Summary",
    points: [
      "🔄 **Cascading**: Automate related entity operations",
      "⚡ **Lazy Loading**: Load data on-demand with session management",
      "🏆 **L1 Cache**: Automatic per-session optimization",
      "🚀 **L2 Cache**: Application-wide performance boost",
      "📊 **Query Cache**: Cache expensive query results",
      "🎯 **@EntityGraph**: Solve N+1 problems declaratively"
    ],
    note: "🔥 Master these concepts to build high-performance Spring JPA applications",
    keepInMind: "JPA performance = right loading strategy + proper caching + N+1 prevention."
  },
  {
    title: "What are Distributed Transactions?",
    points: [
      "🌐 **Distributed Transaction**: Spans multiple databases/resources",
      "**Two-Phase Commit (2PC)**: Prepare → Commit phases",
      "**XA Protocol**: Standard for distributed transactions",
      "**Transaction Manager**: Coordinates across resources",
      "**Resource Managers**: Individual databases/JMS queues",
      "⚠️ Performance overhead and complexity"
    ],
    note: "🧠 Distributed transactions ensure ACID across multiple systems but come with significant complexity",
    keepInMind: "Avoid distributed transactions when possible - consider eventual consistency patterns instead."
  },
  {
    title: "Distributed Transactions in Spring",
    points: [
      "**JTA (Java Transaction API)** support:",
      "```java",
      "@Transactional",
      "public void transferMoney(Long fromAccount, Long toAccount) {",
      "    // Updates database 1",
      "    accountService.debit(fromAccount, amount);",
      "    // Updates database 2  ",
      "    accountService.credit(toAccount, amount);",
      "    // Sends JMS message",
      "    notificationService.sendTransferAlert();",
      "}",
      "```",
      "**Atomikos**, **Bitronix** as JTA providers"
    ],
    note: "🚨 All operations succeed together or all fail - but with significant performance cost",
    keepInMind: "Use @Transactional with JTA only when true ACID across systems is mandatory."
  },
  {
    title: "Transaction Isolation Levels",
    points: [
      "**READ_UNCOMMITTED**: Dirty reads possible",
      "**READ_COMMITTED**: No dirty reads, non-repeatable reads possible",
      "**REPEATABLE_READ**: No dirty/non-repeatable reads, phantom reads possible",
      "**SERIALIZABLE**: Highest isolation, no concurrency issues",
      "",
      "```java",
      "@Transactional(isolation = Isolation.READ_COMMITTED)",
      "public User findUser(Long id) { ... }",
      "```"
    ],
    note: "📊 Higher isolation = better consistency but lower performance",
    keepInMind: "READ_COMMITTED is the sweet spot for most applications - balance consistency and performance."
  },
  {
    title: "Isolation Level Problems",
    points: [
      "```table",
      "Problem          | Description                    | Prevented By",
      "Dirty Read       | Read uncommitted changes       | READ_COMMITTED+",
      "Non-Repeatable   | Same query, different results  | REPEATABLE_READ+",
      "Phantom Read     | New rows appear in range query | SERIALIZABLE",
      "Lost Update      | Concurrent updates overwrite   | Locking strategies",
      "```",
      "",
      "**Example**: Two users updating same account balance simultaneously"
    ],
    note: "🎯 Each isolation level solves specific concurrency problems",
    keepInMind: "Understand your data consistency requirements before choosing isolation level."
  },
  {
    title: "Optimistic vs Pessimistic Locking",
    points: [
      "**Optimistic Locking**:",
      "• Assumes conflicts are rare",
      "• Uses version field or timestamp",
      "• Detects conflicts at commit time",
      "• Better performance, handles conflicts via retry",
      "",
      "**Pessimistic Locking**:",
      "• Assumes conflicts are common",
      "• Locks data immediately when read",
      "• Prevents conflicts upfront",
      "• Lower performance, no retry needed"
    ],
    note: "⚖️ Optimistic = better throughput, Pessimistic = guaranteed consistency",
    keepInMind: "Use optimistic for low-conflict scenarios, pessimistic for high-conflict critical data."
  },
  {
    title: "Implementing Locking Strategies",
    points: [
      "**Optimistic Locking**:",
      "```java",
      "@Entity",
      "public class Account {",
      "    @Version",
      "    private Long version;",
      "    private BigDecimal balance;",
      "}",
      "// OptimisticLockException thrown on conflict",
      "```",
      "",
      "**Pessimistic Locking**:",
      "```java",
      "@Lock(LockModeType.PESSIMISTIC_WRITE)",
      "@Query(\"SELECT a FROM Account a WHERE a.id = :id\")",
      "Account findByIdWithLock(@Param(\"id\") Long id);",
      "```"
    ],
    note: "🔒 Version field automatically managed by JPA for optimistic locking",
    keepInMind: "Always handle OptimisticLockException with retry logic in your service layer."
  }
];