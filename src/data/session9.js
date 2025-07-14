export const session9 = [
  {
    title: "@Autowired Annotation: Recap",
    points: [
      "`@Autowired` is Spring's mechanism for automatic dependency injection.",
      "It can be applied to constructors, setter methods, or fields.",
      "Spring attempts to satisfy the dependency by type matching in the application context."
    ],
    keepInMind: "`@Autowired` simplifies dependency management, but proper usage is key to maintainable code."
  },
  {
    title: "@ComponentScan: Default Package Name",
    points: [
      "**Q: Is there a default package name provided for the `basePackage` attribute in the `ComponentScan` annotation?**",
      "**A:** If `basePackages` or `basePackageClasses` are not specified, `@ComponentScan` defaults to scanning the package of the class that declares it, plus all its sub-packages.",
      "This convention-over-configuration approach is common in Spring Boot applications."
    ],
    keepInMind: "Understanding the default behavior of `@ComponentScan` helps in structuring your Spring Boot projects effectively."
  },
  {
    title: "Spring Bean Lifecycle Methods: Overview",
    points: [
      "Spring beans go through a lifecycle from instantiation to destruction.",
      "Developers can hook into specific phases of this lifecycle to perform custom logic, such as resource initialization or cleanup.",
      "Key lifecycle phases include initialization (`init()`) and destruction (`destroy()`)."
    ],
    keepInMind: "Lifecycle methods are essential for managing resources and ensuring proper application shutdown."
  },
  {
    title: "Ways to Configure Lifecycle Methods: XML",
    points: [
      "You can specify `init-method` and `destroy-method` attributes in XML bean definitions.",
      "```xml",
      "<bean id=\"myBean\" class=\"com.example.MyBean\" init-method=\"customInit\" destroy-method=\"customDestroy\"/>",
      "```",
      "The specified methods will be called by the Spring container at the appropriate lifecycle stages."
    ],
    keepInMind: "XML configuration provides a clear, declarative way to define lifecycle callbacks."
  },
  {
    title: "Ways to Configure Lifecycle Methods: Interfaces",
    points: [
      "Implement Spring's `InitializingBean` and `DisposableBean` interfaces.",
      "`afterPropertiesSet()` method is called after properties are set.",
      "`destroy()` method is called before the bean is destroyed.",
      "```java",
      "public class MyBean implements InitializingBean, DisposableBean {\n    @Override\n    public void afterPropertiesSet() throws Exception { /* init logic */ }\n\n    @Override\n    public void destroy() throws Exception { /* cleanup logic */ }\n}",
      "```"
    ],
    keepInMind: "These interfaces provide a programmatic way to manage bean lifecycle, but are Spring-specific."
  },
  {
    title: "Ways to Configure Lifecycle Methods: JSR Annotations",
    points: [
      "Use JSR-250 annotations: `@PostConstruct` and `@PreDestroy`.",
      "`@PostConstruct`: Executed after dependency injection is done to perform any initialization.",
      "`@PreDestroy`: Executed before the bean is removed from the container.",
      "```java",
      "public class MyBean {\n    @PostConstruct\n    public void init() { /* init logic */ }\n\n    @PreDestroy\n    public void cleanup() { /* cleanup logic */ }\n}",
      "```",
      "These are standard Java annotations, making your code less coupled to Spring."
    ],
    keepInMind: "`@PostConstruct` and `@PreDestroy` are the recommended approach for lifecycle callbacks in modern Spring applications."
  },
  {
    title: "Lifecycle Methods Supported by Spring Framework",
    points: [
      "**Instantiation**: Bean is created.",
      "**Populate Properties**: Dependencies are injected.",
      "**`BeanPostProcessor.postProcessBeforeInitialization()`**: Custom pre-initialization logic.",
      "**`@PostConstruct`**: Initialization callback.",
      "**`InitializingBean.afterPropertiesSet()`**: Initialization callback.",
      "**Custom `init-method`**: Initialization callback.",
      "**`BeanPostProcessor.postProcessAfterInitialization()`**: Custom post-initialization logic.",
      "**Bean in Use**: Application uses the bean.",
      "**`@PreDestroy`**: Destruction callback.",
      "**`DisposableBean.destroy()`**: Destruction callback.",
      "**Custom `destroy-method`**: Destruction callback."
    ],
    keepInMind: "Spring provides a rich set of hooks to control bean behavior throughout its existence."
  },
  {
    title: "Important FAQs on Lifecycle Methods",
    points: [
      "**Q: What is the order of execution for multiple initialization methods?**",
      "**A:** `@PostConstruct` -> `InitializingBean.afterPropertiesSet()` -> custom `init-method`.",
      "**Q: Can a `static` method be a lifecycle callback?**",
      "**A:** No, lifecycle methods must be non-static.",
      "**Q: What happens if an exception occurs during initialization?**",
      "**A:** The bean will not be fully initialized, and the container might fail to start."
    ],
    keepInMind: "Understanding the execution order and potential issues is crucial for debugging and robust application design."
  }
];