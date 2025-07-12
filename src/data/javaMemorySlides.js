export const javaMemorySlides = [
  {
    title: "Java Memory Structure",
    points: [
      "✔️ JVM divides memory into different areas",
      "Each area serves specific purpose",
      "Understanding memory = better performance + debugging",
      "🔥 Critical for production applications"
    ],
    note: "🧠 Memory management is automatic but understanding helps optimization",
    keepInMind: "While the JVM manages memory automatically, a good developer knows what's happening under the hood."
  },
  {
    title: "Memory Areas Overview",
    points: [
      "```table",
      "Area | Purpose | Shared | GC",
      "Heap | Objects storage | Yes | Yes",
      "Stack | Method calls | No | No",
      "Method Area | Class metadata | Yes | Partial",
      "PC Register | Current instruction | No | No",
      "Native Stack | Native method calls | No | No",
      "```"
    ],
    keepInMind: "The distinction between heap (shared) and stack (thread-local) is the most important concept to grasp."
  },
  {
    title: "Heap Memory",
    points: [
      "✔️ Where all objects are stored",
      "Shared among all threads",
      "Divided into generations:",
      "• Young Generation (Eden + Survivor spaces)",
      "• Old Generation (Tenured space)",
      "🔥 Most GC activity happens here"
    ],
    keepInMind: "All `new` objects are allocated on the heap."
  },
  {
    title: "Heap Generations",
    points: [
      "```table",
      "Generation | Purpose | GC Frequency",
      "Eden | New objects | Very frequent",
      "Survivor S0/S1 | Objects that survived 1+ GC | Frequent",
      "Old/Tenured | Long-lived objects | Less frequent",
      "Metaspace | Class metadata (Java 8+) | Rare",
      "```"
    ],
    keepInMind: "The generational hypothesis states that most objects die young, which is why the heap is structured this way."
  },
  {
    title: "Stack Memory",
    points: [
      "✔️ Each thread has its own stack",
      "Stores method call frames",
      "Contains local variables and partial results",
      "```java",
      "public void method() {",
      "    int x = 10;        // stored in stack",
      "    String s = \"hi\";   // reference in stack, object in heap",
      "    method2();         // new frame pushed",
      "}",
      "```",
      "🔥 StackOverflowError when stack is full"
    ],
    keepInMind: "Primitive types and object references live on the stack; the objects themselves live on the heap."
  },
  {
    title: "Method Area/Metaspace",
    points: [
      "Stores class-level information:",
      "• Class bytecode",
      "• Method information",
      "• Static variables",
      "• Runtime constant pool",
      "Java 8+: Metaspace (native memory)",
      "Java 7-: PermGen (heap memory)",
      "🔥 OutOfMemoryError: Metaspace when full"
    ],
    keepInMind: "The move from PermGen to Metaspace in Java 8 was a significant change to reduce `OutOfMemoryError` issues."
  },
  {
    title: "Memory Allocation Example",
    points: [
      "```java",
      "public class MemoryExample {",
      "    static int staticVar = 100;     // Method Area",
      "    ",
      "    public void createObjects() {",
      "        int localVar = 50;          // Stack",
      "        String str = new String(\"Hello\"); // ref in Stack, object in Heap",
      "        List<String> list = new ArrayList<>(); // both in Heap",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Tracing where different variables and objects are stored is a common interview question."
  },
  {
    title: "Garbage Collection",
    points: [
      "Automatic memory management",
      "Removes unreferenced objects from heap",
      "Types of GC:",
      "• Minor GC (Young generation)",
      "• Major GC (Old generation)",
      "• Full GC (Entire heap)",
      "🔥 GC pauses can affect application performance"
    ],
    keepInMind: "The goal of GC is to reclaim memory, but it comes at the cost of application pauses."
  },
  {
    title: "Garbage Collection Algorithms",
    points: [
      "**Serial GC**: Single-threaded, stop-the-world. Best for small applications.",
      "**Parallel GC**: Multi-threaded young generation GC. Good for throughput.",
      "**CMS (Concurrent Mark-Sweep) GC**: Reduces pause times by doing most work concurrently. Deprecated.",
      "**G1 (Garbage-First) GC**: Region-based, aims for predictable pause times. Default in modern JDKs.",
      "**ZGC / Shenandoah GC**: Low-latency, highly concurrent GCs for very large heaps.",
      "🔥 Choosing the right GC depends on application requirements (throughput vs. latency)."
    ],
    keepInMind: "Modern GCs like G1, ZGC, and Shenandoah are designed to minimize stop-the-world pauses."
  },
  {
    title: "Memory Leaks in Java",
    points: [
      "✔️ Objects are no longer needed but are still referenced, preventing GC.",
      "**Common causes**: Static collections, unclosed resources (streams, connections), event listeners, inner classes.",
      "**Symptoms**: Gradual increase in memory usage, `OutOfMemoryError` over time, slow performance.",
      "🔥 Not a memory leak in the C/C++ sense, but still a critical issue."
    ],
    keepInMind: "A memory leak in Java is typically a 'logical' leak, where reachable objects are unintentionally retained."
  },
  {
    title: "Memory Tuning Parameters",
    points: [
      "```bash",
      "# Heap size",
      "-Xms512m -Xmx2g",
      "",
      "# Young generation",
      "-XX:NewRatio=3",
      "",
      "# Metaspace",
      "-XX:MetaspaceSize=256m",
      "",
      "# GC logging",
      "-XX:+PrintGC -XX:+PrintGCDetails",
      "```"
    ],
    keepInMind: "JVM tuning is a complex but essential skill for high-performance applications."
  },
  {
    title: "Profiling Tools",
    points: [
      "**JVisualVM**: Built-in JDK tool for monitoring, profiling, and analyzing heap dumps.",
      "**JProfiler / YourKit**: Commercial, powerful profilers with advanced features.",
      "**Eclipse Memory Analyzer (MAT)**: Analyzes heap dumps to find memory leaks.",
      "**Flight Recorder (JFR) & Mission Control (JMC)**: Low-overhead profiling and monitoring (JDK 11+).",
      "🔥 Essential for diagnosing memory issues and performance bottlenecks."
    ],
    keepInMind: "Profiling tools are your best friends when hunting down memory leaks or performance regressions."
  },
  {
    title: "Memory Issues & Solutions",
    points: [
      "**OutOfMemoryError: Java heap space**",
      "→ Increase heap size or fix memory leaks",
      "",
      "**OutOfMemoryError: Metaspace**",
      "→ Increase metaspace or reduce classes",
      "",
      "**StackOverflowError**",
      "→ Fix infinite recursion or increase stack size",
      "",
      "🔥 Use profilers like JVisualVM, JProfiler"
    ],
    note: "🧠 Interview tip: Explain heap vs stack, GC types, and common memory issues",
    keepInMind: "Memory leaks are a common problem in Java, often caused by long-lived objects holding references to short-lived ones."
  }
];