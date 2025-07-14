export const session13 = [
  {
    title: "LookUp Method Injection (LMI): The Problem",
    points: [
      "In Spring, if a singleton bean depends on a prototype bean, the prototype bean is instantiated only once when the singleton bean is created.",
      "Subsequent requests for the prototype bean from the singleton bean will return the *same* instance, violating the prototype contract.",
      "This is because Spring injects dependencies at bean creation time, and for singletons, that happens only once."
    ],
    keepInMind: "LMI addresses the challenge of injecting new instances of a shorter-lived bean (prototype) into a longer-lived bean (singleton)."
  },
  {
    title: "Setter Injection (SI) and Constructor Injection (CI)",
    points: [
      "**Setter Injection (SI)**: Dependencies are injected via public setter methods. While flexible, it doesn't solve the prototype problem directly if the setter is called only once.",
      "**Constructor Injection (CI)**: Dependencies are injected via the constructor. Ensures immutability and all required dependencies are present at object creation, but also doesn't inherently provide new prototype instances on demand."
    ],
    keepInMind: "Both SI and CI are suitable for injecting dependencies, but they don't inherently support dynamic retrieval of new prototype instances from a singleton."
  },
  {
    title: "LookUp Method Injection (LMI): Solution",
    points: [
      "LMI allows a singleton bean to obtain new instances of a prototype bean each time a specific method is called.",
      "Spring dynamically generates a subclass of the singleton bean at runtime, overriding the lookup method to return a new prototype instance.",
      "Achieved using the `@Lookup` annotation on a method that returns the prototype bean."
    ],
    keepInMind: "LMI is a powerful feature for managing scope interactions, especially when a singleton needs to interact with multiple instances of a prototype."
  },
  {
    title: "Code Explanation: LMI Example",
    points: [
      "**Prototype Bean**:",
      "```java",
      "@Component",
      "@Scope(\"prototype\")",
      "public class PrototypeBean {\n    private int value = 0;\n    public int getValue() { return ++value; }\n}",
      "```",
      "**Singleton Bean with Lookup Method**:",
      "```java",
      "@Component",
      "public abstract class SingletonBean {\n    @Lookup\n    public abstract PrototypeBean getPrototypeBean();\n}",
      "```",
      "Notice the `abstract` method and `abstract` class for the singleton bean."
    ],
    keepInMind: "The `abstract` method with `@Lookup` is the key to Spring's dynamic subclass generation for LMI."
  },
  {
    title: "Test Case for LMI",
    points: [
      "```java",
      "public class Test {\n    public static void main(String[] args) {\n        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n        SingletonBean singleton = context.getBean(SingletonBean.class);\n\n        System.out.println(singleton.getPrototypeBean().getValue()); // Output: 1\n        System.out.println(singleton.getPrototypeBean().getValue()); // Output: 1 (new instance, value reset)\n    }\n}",
      "```",
      "Each call to `getPrototypeBean()` on the singleton instance will return a *new* instance of `PrototypeBean`."
    ],
    keepInMind: "The output clearly demonstrates that LMI successfully provides a fresh prototype instance on each method call."
  },
  {
    title: "Important Point Regarding @Autowired",
    points: [
      "While `@Autowired` is generally used for direct dependency injection, it does not inherently solve the prototype-in-singleton problem.",
      "If you `@Autowired` a prototype bean into a singleton, you will get the *same* prototype instance every time, as the injection happens only once during the singleton's creation.",
      "LMI or `ObjectFactory` are the correct solutions for obtaining new prototype instances from a singleton."
    ],
    keepInMind: "Do not confuse `@Autowired` with the ability to dynamically fetch new prototype instances; they serve different purposes."
  }
];