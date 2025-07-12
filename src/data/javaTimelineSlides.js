export const javaTimelineSlides = [
  {
    title: "Java Evolution Timeline",
    points: [
      "✔️ Java's journey from 1995 to 2023",
      "Major releases with groundbreaking features",
      "From enterprise monoliths to cloud-native microservices",
      "🔥 28+ years of continuous innovation"
    ],
    note: "🧠 Understanding Java's evolution helps appreciate modern features",
    keepInMind: "Java's longevity is a testament to its adaptability and the strength of its ecosystem."
  },
  {
    title: "Early Java Era (1995-2004)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 1.0 | 1996 | Initial release, AWT, Applets",
      "Java 1.1 | 1997 | Inner classes, JavaBeans, JDBC",
      "Java 1.2 | 1998 | Swing, Collections Framework",
      "Java 1.3 | 2000 | HotSpot JVM, JNDI",
      "Java 1.4 | 2002 | Assertions, NIO, Logging API",
      "```"
    ],
    keepInMind: "This era laid the fundamental groundwork for the Java we know today."
  },
  {
    title: "Enterprise Java Era (2004-2011)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 5 | 2004 | Generics, Annotations, Enums, Autoboxing",
      "Java 6 | 2006 | Scripting API, Compiler API, JDBC 4.0",
      "Java 7 | 2011 | Try-with-resources, Diamond operator",
      "```",
      "🔥 Java 5 was revolutionary with generics and annotations"
    ],
    keepInMind: "Java 5 was a massive leap forward, introducing features that are now considered essential."
  },
  {
    title: "Java 5 - The Game Changer",
    points: [
      "**Generics**:",
      "```java",
      "List<String> list = new ArrayList<String>();",
      "```",
      "**Annotations**:",
      "```java",
      "@Override",
      "public String toString() { return \"Hello\"; }",
      "```",
      "**Enhanced For Loop**:",
      "```java",
      "for (String item : list) {",
      "    System.out.println(item);",
      "}",
      "```"
    ],
    keepInMind: "These features made Java code safer, more readable, and less verbose."
  },
  {
    title: "Modern Java Era (2014-2018)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 8 | 2014 | Lambda expressions, Streams, Optional",
      "Java 9 | 2017 | Modules (Jigsaw), JShell",
      "Java 10 | 2018 | Local variable type inference (var)",
      "Java 11 | 2018 | HTTP Client, String methods, LTS",
      "```",
      "🔥 Java 8 brought functional programming to Java"
    ],
    keepInMind: "Java 8 is arguably the most significant release since Java 5, and it's still widely used."
  },
  {
    title: "Java 8 - Functional Revolution",
    points: [
      "**Lambda Expressions**:",
      "```java",
      "list.stream()",
      "    .filter(s -> s.length() > 3)",
      "    .map(String::toUpperCase)",
      "    .collect(Collectors.toList());",
      "```",
      "**Optional**:",
      "```java",
      "Optional<String> optional = Optional.ofNullable(getValue());",
      "optional.ifPresent(System.out::println);",
      "```"
    ],
    keepInMind: "Streams and Lambdas fundamentally changed how Java developers write code for processing data."
  },
  {
    title: "Rapid Release Era (2018-2021)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 12 | 2019 | Switch expressions (preview)",
      "Java 13 | 2019 | Text blocks (preview)",
      "Java 14 | 2020 | Records (preview), Pattern matching",
      "Java 15 | 2020 | Sealed classes (preview)",
      "Java 16 | 2021 | Records (final), Pattern matching",
      "```"
    ],
    keepInMind: "The six-month release cadence allows for faster delivery of new features, often in preview form first."
  },
  {
    title: "Java 14 - Records Preview",
    points: [
      "**Before Records**:",
      "```java",
      "public class Person {",
      "    private final String name;",
      "    private final int age;",
      "    // Constructor, getters, equals, hashCode, toString",
      "}",
      "```",
      "**With Records**:",
      "```java",
      "public record Person(String name, int age) {}",
      "```"
    ],
    keepInMind: "Records are a huge win for reducing boilerplate code for simple data carrier classes."
  },
  {
    title: "Latest Java Era (2021-2023)",
    points: [
      "```table",
      "Version | Year | Key Features",
      "Java 17 | 2021 | Sealed classes, Pattern matching (LTS)",
      "Java 18 | 2022 | UTF-8 by default, Simple web server",
      "Java 19 | 2022 | Virtual threads (preview), Pattern matching",
      "Java 20 | 2023 | Scoped values (preview)",
      "Java 21 | 2023 | Virtual threads, Pattern matching (LTS)",
      "```",
      "🔥 Java 17 and 21 are Long Term Support (LTS) versions"
    ],
    keepInMind: "Virtual threads (Project Loom) are a game-changer for concurrent programming in Java."
  },
  {
    title: "Java 21 - Modern Features",
    points: [
      "**Virtual Threads**:",
      "```java",
      "try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {",
      "    executor.submit(() -> {",
      "        // Lightweight thread",
      "        Thread.sleep(1000);",
      "        return \"Hello from virtual thread\";",
      "    });",
      "}",
      "```",
      "**Pattern Matching for Switch**:",
      "```java",
      "String result = switch (obj) {",
      "    case String s -> \"String: \" + s;",
      "    case Integer i -> \"Integer: \" + i;",
      "    default -> \"Unknown\";",
      "};",
      "```"
    ],
    keepInMind: "These features make Java more expressive and efficient for modern application development."
  },
  {
    title: "LTS Versions & Adoption",
    points: [
      "```table",
      "LTS Version | Release Year | Support Until",
      "Java 8 | 2014 | 2030 (Extended)",
      "Java 11 | 2018 | 2026",
      "Java 17 | 2021 | 2029",
      "Java 21 | 2023 | 2031",
      "```",
      "🔥 Most enterprises use LTS versions for stability"
    ],
    note: "🧠 Interview tip: Know the major features of Java 8, 11, 17, and 21 - these are the most commonly used versions",
    keepInMind: "While new versions are released every six months, most companies stick to LTS releases for production systems."
  },
  {
    title: "Java Evolution Summary",
    points: [
      "**Early Era (1995-2004)** - Foundation years with AWT, Swing, Collections",
      "**Enterprise Era (2004-2011)** - Java 5-7 with generics, annotations",
      "**Modern Era (2014-2018)** - Java 8-11 with lambdas, streams, modules",
      "**Rapid Release Era (2018-2021)** - Java 12-16 with records, pattern matching",
      "**Latest Era (2021-2023)** - Java 17-21 with virtual threads",
      "🔥 Key LTS versions: Java 8, 11, 17, 21",
      "✔️ From enterprise monoliths to cloud-native microservices",
      "🚀 28+ years of continuous innovation and evolution"
    ],
    note: "🧠 Java continues to evolve with 6-month release cycles and LTS every 3 years",
    keepInMind: "Java is not standing still; it's continuously evolving to meet the demands of modern software development."
  }
];