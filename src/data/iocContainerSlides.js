export const iocContainerSlides = [
  {
    title: "What is IoC (Inversion of Control)?",
    points: [
      "✔️ Design principle where control over object creation is inverted",
      "Traditional: you instantiate objects manually → IoC: container handles it",
      "Spring implements IoC via Dependency Injection (DI)",
      "🔥 Interview Tip: Say Spring IoC reduced tight coupling and improved testability"
    ],
    note: "🧠 Think: IoC = I don't create dependencies, I declare them",
    keepInMind: "IoC delegates object lifecycle to a container — promotes loose coupling"
  },
  {
    title: "IoC Container Overview",
    points: [
      "Spring IoC container manages object creation, wiring, scope, and lifecycle",
      "Reads metadata (XML, annotations, Java config) to know what to create",
      "Creates & injects dependencies automatically",
      "Central to Spring's lightweight DI model"
    ],
    keepInMind: "Spring container wires your dependencies at runtime based on configuration"
  },
  {
    title: "Types of IoC Containers in Spring",
    points: [
      "✔️ `BeanFactory` — basic container, lazy-loading, suitable for lightweight apps",
      "✔️ `ApplicationContext` — full-featured container with AOP, events, i18n, etc.",
      "Use `AnnotationConfigApplicationContext` for Java-based config",
      "Most real-world Spring apps use `ApplicationContext`"
    ],
    keepInMind: "`ApplicationContext` is a superset of `BeanFactory` — use it unless constrained"
  },
  {
    title: "How Beans Are Managed",
    points: [
      "Beans = objects managed by the container",
      "Created via annotations: `@Component`, `@Service`, `@Repository`, `@Controller`",
      "Wired via `@Autowired`, `@Inject`, or constructor injection",
      "Container resolves dependencies recursively"
    ],
    keepInMind: "All bean definitions and their dependencies are resolved before first use (eager by default)"
  },
  {
    title: "Bean Scopes",
    points: [
      "✔️ `singleton` (default) → one instance per container",
      "✔️ `prototype` → new bean for every request",
      "✔️ `request` / `session` / `application` → web-specific scopes",
      "Set via `@Scope(\"prototype\")` or XML config"
    ],
    keepInMind: "Most beans are singletons — use prototype only when needed (e.g., stateful logic)"
  },
  {
    title: "Lifecycle of a Spring Bean",
    points: [
      "1. Instantiate → Constructor",
      "2. Populate → Dependency injection",
      "3. Initialize → `@PostConstruct`, `afterPropertiesSet()`",
      "4. Destroy → `@PreDestroy`, `DisposableBean`",
      "Container handles full lifecycle"
    ],
    keepInMind: "Spring gives you hooks like `@PostConstruct` and `@PreDestroy` to customize bean setup/teardown"
  },
  {
    title: "Real Use Case (Interview Friendly)",
    points: [
      "Used `@Autowired` to inject a service into REST controller",
      "Defined a custom bean using `@Bean` in config class",
      "Created prototype-scoped bean for file processing per request",
      "🔥 Say IoC made it easy to write unit tests by mocking dependencies"
    ],
    keepInMind: "Mention DI testing benefit — constructor-injected beans can be mocked easily in JUnit"
  }
];