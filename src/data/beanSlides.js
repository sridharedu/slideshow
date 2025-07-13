export const beanSlides = [
  {
    title: "What is a Spring Bean?",
    points: [
      "✔️ A bean = any object managed by Spring IoC container",
      "Beans are created, configured, and injected by the container",
      "Marked via annotations (`@Component`, `@Service`, etc.) or XML/Java config",
      "🔥 Interview Tip: Every dependency you `@Autowired` is a Spring bean"
    ],
    note: "🧠 A bean is not special by type — only by how it's created (by Spring container)",
    keepInMind: "A bean = object created + managed by Spring — lifecycle, dependencies, and scope included"
  },
  {
    title: "How to Define a Bean (3 Ways)",
    points: [
      "1️⃣ Using annotations (recommended):",
      "```java",
      "@Component",
      "public class MyService {}",
      "```",
      "2️⃣ Java config:",
      "```java",
      "@Configuration",
      "public class AppConfig {",
      "  @Bean",
      "  public MyService myService() { return new MyService(); }",
      "}",
      "```",
      "3️⃣ XML (legacy style):",
      "`<bean id=\"myService\" class=\"com.xyz.MyService\" />`"
    ],
    keepInMind: "Java-based and annotation-based configs are preferred — XML is legacy"
  },
  {
    title: "Bean Naming",
    points: [
      "✔️ Default: bean name = class name with lowercase first letter",
      "You can customize name with:",
      "`@Component(\"customName\")`",
      "`@Bean(name = \"xyz\")`",
      "Name must be unique within container"
    ],
    keepInMind: "Bean name is the lookup key — duplicate names cause exceptions"
  },
  {
    title: "Bean Autowiring",
    points: [
      "Inject beans using:",
      "✔️ `@Autowired` (field, setter, or constructor)",
      "✔️ `@Inject` (JSR-330) — equivalent to Autowired",
      "✔️ Constructor injection (preferred for immutability & testing)",
      "Autowired by type → fallback to name (if multiple matches)"
    ],
    keepInMind: "Constructor injection is preferred — makes beans immutable and testable"
  },
  {
    title: "Bean Scope",
    points: [
      "✔️ `singleton` → one bean per container (default)",
      "✔️ `prototype` → new bean every time it's requested",
      "✔️ `request` / `session` / `application` → web scopes",
      "Set using `@Scope(\"prototype\")` or in XML config"
    ],
    keepInMind: "Don't mix singleton and prototype injection casually — prototype bean is injected only once"
  },
  {
    title: "Bean Lifecycle Methods",
    points: [
      "Hooks provided by Spring:",
      "✔️ `@PostConstruct` → after dependencies injected",
      "✔️ `@PreDestroy` → before bean removed",
      "✔️ Implements `InitializingBean`, `DisposableBean` for custom logic",
      "Used in resource setup/cleanup, connection init, etc."
    ],
    keepInMind: "`@PostConstruct` is a clean way to run setup logic after wiring is complete"
  },
  {
    title: "Customizing Bean Behavior",
    points: [
      "Use `@Primary` to resolve conflicts when multiple beans of same type",
      "Use `@Qualifier(\"beanName\")` to select specific bean",
      "Profiles: conditionally activate beans using `@Profile(\"dev\")`",
      "Use `@Lazy` for lazy-init beans"
    ],
    keepInMind: "Use `@Qualifier` to resolve ambiguity when multiple beans exist of same type"
  }
];