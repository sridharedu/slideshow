export const javaMemorySlides = [
  {
    title: "Java Memory Structure",
    points: [
      "✔️ JVM divides memory into different areas",
      "Each area serves specific purpose",
      "Understanding memory = better performance + debugging",
      "🔥 Critical for production applications"
    ],
    note: "🧠 Memory management is automatic but understanding helps optimization"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    note: "🧠 Interview tip: Explain heap vs stack, GC types, and common memory issues"
  }
];