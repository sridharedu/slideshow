export const jvmAndJreSlides = [
  {
    title: "JVM, JRE, and JDK",
    points: [
      "✔️ Understanding the core components of Java's runtime environment",
      "JVM: Java Virtual Machine - the runtime engine",
      "JRE: Java Runtime Environment - JVM + libraries",
      "JDK: Java Development Kit - JRE + development tools",
      "🔥 Essential for Java development and deployment"
    ],
    keepInMind: "JVM is the specification, JRE is its implementation for running Java, and JDK is for developing Java."
  },
  {
    title: "Java Program Execution Flow",
    points: [
      "1️⃣ Write `.java` (source code)",
      "2️⃣ Compile using `javac` → generates `.class` (bytecode)",
      "3️⃣ Run using `java` → starts JVM",
      "4️⃣ JVM loads `.class` → JIT compiles → executes on OS",
      "🔥 Write once, run anywhere (WORA)"
    ],
    keepInMind: "The bytecode (`.class` file) is platform-independent, allowing Java to run on any system with a compatible JVM."
  },
  {
    title: "What is JVM?",
    points: [
      "✔️ Abstract machine that enables computer to run Java programs",
      "Platform-dependent but provides platform-independence for Java code",
      "Responsible for loading, verifying, and executing bytecode",
      "🔥 The heart of the Java runtime system"
    ],
    keepInMind: "JVM is a specification, not an implementation. Different vendors provide their own JVM implementations."
  },
  {
    title: "JVM Architecture",
    points: [
      "```table",
      "Component | Purpose",
      "Classloader Subsystem | Loads, links, and initializes classes",
      "Runtime Data Areas | Memory areas used during program execution",
      "Execution Engine | Executes bytecode (Interpreter, JIT, GC)",
      "Native Method Interface | Interacts with native libraries",
      "Native Method Libraries | Platform-specific libraries",
      "```"
    ],
    keepInMind: "Understanding JVM architecture helps in performance tuning and debugging memory issues."
  },
  {
    title: "Runtime Data Areas (Heap)",
    points: [
      "✔️ Shared memory area for all objects and arrays",
      "Garbage collected (GC) for automatic memory management",
      "Divided into Young Generation (Eden, Survivor) and Old Generation",
      "🔥 `OutOfMemoryError: Java heap space` is a common issue here"
    ],
    keepInMind: "All objects created with `new` keyword reside in the Heap memory."
  },
  {
    title: "Runtime Data Areas (Stack & Others)",
    points: [
      "**Stack**: Per-thread, stores method call frames, local variables, partial results.",
      "**Method Area**: Stores class-level data (bytecode, static variables, metadata).",
      "**PC Registers**: Per-thread, stores address of current instruction.",
      "**Native Method Stack**: Stores native method information.",
      "🔥 StackOverflowError occurs when Stack is full."
    ],
    keepInMind: "Stack memory is temporary and automatically managed, unlike Heap which is GC-managed."
  },
  {
    title: "Execution Engine (Interpreter, JIT, GC)",
    points: [
      "**Interpreter**: Reads and executes bytecode line by line.",
      "**JIT (Just-In-Time) Compiler**: Compiles frequently used bytecode to native code for faster execution.",
      "**Garbage Collector**: Reclaims memory from unused objects.",
      "🔥 JIT compiler is key to Java's high performance."
    ],
    keepInMind: "The JIT compiler dynamically optimizes code during runtime, adapting to application behavior."
  },
  {
    title: "What is JRE?",
    points: [
      "✔️ Java Runtime Environment - a software package",
      "Contains JVM, core classes, and supporting files",
      "Allows you to *run* Java applications",
      "🔥 If you only need to run Java programs, JRE is sufficient."
    ],
    keepInMind: "JRE is a subset of JDK, providing only the necessary components for execution."
  },
  {
    title: "What is JDK?",
    points: [
      "✔️ Java Development Kit - a software development kit",
      "Contains JRE + development tools (javac, javadoc, jdb, etc.)",
      "Allows you to *develop, compile, and run* Java applications",
      "🔥 Essential for Java developers"
    ],
    keepInMind: "JDK is required for compiling Java source code into bytecode."
  },
  {
    title: "Just-In-Time (JIT) Compiler",
    points: [
      "✔️ Part of the JVM's Execution Engine",
      "Compiles bytecode into native machine code at runtime",
      "Optimizes frequently executed code paths (hot spots)",
      "🔥 Improves performance significantly over pure interpretation"
    ],
    keepInMind: "JIT compilation is a dynamic optimization that adapts to the application's actual usage patterns."
  },
  {
    title: "Garbage Collection (GC)",
    points: [
      "✔️ Automatic memory management process",
      "Identifies and reclaims memory occupied by objects no longer in use",
      "Prevents memory leaks and simplifies memory management for developers",
      "🔥 Different GC algorithms (e.g., G1, Parallel, CMS) for various workloads"
    ],
    keepInMind: "While GC is automatic, understanding its principles helps in writing GC-friendly code and tuning performance."
  },
  {
    title: "WORA (Write Once, Run Anywhere)",
    points: [
      "✔️ Java's core promise and strength",
      "Java source code is compiled into platform-independent bytecode",
      "This bytecode can then be executed on any device with a compatible JVM",
      "🔥 Achieved through the JVM's abstraction layer over the underlying OS and hardware"
    ],
    keepInMind: "WORA significantly reduces development and deployment complexities across diverse environments."
  }
];