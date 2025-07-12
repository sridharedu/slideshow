export const zipkinSlides = [
  {
    title: "What is Zipkin?",
    points: [
      "✔️ Distributed tracing system for microservices",
      "Helps troubleshoot latency problems in service architectures",
      "Collects timing data to identify bottlenecks",
      "🔥 Essential for debugging microservice interactions"
    ],
    note: "🧠 Zipkin = Request journey tracker across multiple services",
    keepInMind: "Zipkin provides the visibility you lose when moving from a monolith to microservices."
  },
  {
    title: "Why Use Zipkin?",
    points: [
      "```table",
      "Problem | Solution",
      "Slow API responses | Identify which service is slow",
      "Service dependencies | Visualize service call chains",
      "Error propagation | Track where errors originate",
      "Performance bottlenecks | Find slowest operations",
      "```"
    ],
    keepInMind: "It answers the question: 'Where did my request spend its time?'"
  },
  {
    title: "Zipkin Architecture",
    points: [
      "**Tracer**: Instruments application code",
      "**Collector**: Receives trace data from services",
      "**Storage**: Stores traces (Cassandra, Elasticsearch, MySQL)",
      "**Query Service**: Retrieves traces for UI",
      "**Web UI**: Visualizes traces and dependencies",
      "🔥 Lightweight and language-agnostic"
    ],
    keepInMind: "The decoupled architecture makes Zipkin highly scalable and flexible."
  },
  {
    title: "Key Concepts",
    points: [
      "```table",
      "Term | Definition | Example",
      "Trace | Complete request journey | User login flow",
      "Span | Single operation in trace | Database query",
      "Trace ID | Unique identifier for trace | abc123def456",
      "Span ID | Unique identifier for span | span789",
      "```"
    ],
    keepInMind: "A trace is a tree of spans, representing the entire lifecycle of a request."
  },
  {
    title: "Spring Boot Integration",
    points: [
      "Add dependency:",
      "```xml",
      "<dependency>",
      "  <groupId>io.zipkin.brave</groupId>",
      "  <artifactId>brave-spring-boot-starter</artifactId>",
      "</dependency>",
      "```",
      "Configuration:",
      "```properties",
      "spring.zipkin.base-url=http://localhost:9411",
      "spring.sleuth.zipkin.enabled=true",
      "```"
    ],
    keepInMind: "Spring Cloud Sleuth provides the instrumentation, and Zipkin provides the backend."
  },
  {
    title: "Running Zipkin Server",
    points: [
      "Docker (easiest):",
      "```bash",
      "docker run -d -p 9411:9411 openzipkin/zipkin",
      "```",
      "Java JAR:",
      "```bash",
      "curl -sSL https://zipkin.io/quickstart.sh | bash -s",
      "java -jar zipkin.jar",
      "```",
      "Access UI: http://localhost:9411"
    ],
    keepInMind: "Running Zipkin in a Docker container is the quickest way to get started."
  },
  {
    title: "Custom Spans",
    points: [
      "```java",
      "@Autowired",
      "private Tracer tracer;",
      "",
      "public void processOrder() {",
      "    Span span = tracer.nextSpan()",
      "        .name(\"process-order\")",
      "        .tag(\"order.id\", \"12345\")",
      "        .start();",
      "    try {",
      "        // Business logic",
      "    } finally {",
      "        span.end();",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Custom spans allow you to trace specific business logic within your application."
  },
  {
    title: "Sampling Configuration",
    points: [
      "```properties",
      "# Sample 10% of requests",
      "spring.sleuth.sampler.probability=0.1",
      "",
      "# Sample all requests (development)",
      "spring.sleuth.sampler.probability=1.0",
      "",
      "# Custom sampling",
      "spring.sleuth.sampler.rate=100",
      "```",
      "🔥 Lower sampling in production to reduce overhead"
    ],
    keepInMind: "Sampling is a trade-off between visibility and performance overhead."
  },
  {
    title: "Zipkin UI Features",
    points: [
      "**Find Traces**: Search by service, operation, tags",
      "**Trace Timeline**: Visual representation of spans",
      "**Service Dependencies**: Map of service interactions",
      "**Span Details**: Tags, logs, and timing info",
      "**Error Analysis**: Filter traces with errors",
      "🔥 Great for root cause analysis"
    ],
    keepInMind: "The Zipkin UI is a powerful tool for debugging and exploring your microservice architecture."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use meaningful span names and tags",
      "✅ Configure appropriate sampling rates",
      "✅ Monitor Zipkin server performance",
      "✅ Use correlation IDs in logs",
      "✅ Set up alerts for high latency traces",
      "❌ Don't trace every single operation",
      "❌ Don't store sensitive data in tags"
    ],
    note: "🧠 Interview tip: Explain how distributed tracing helps with microservice debugging",
    keepInMind: "Effective tracing is about adding meaningful, contextual data to your spans."
  },
  {
    title: "Zipkin Summary",
    points: [
      "**What is Zipkin** - Distributed tracing system for microservices",
      "**Architecture** - Tracer, Collector, Storage, Query Service, Web UI",
      "**Key Concepts** - Traces, spans, trace IDs for request tracking",
      "**Spring Integration** - Simple dependency and configuration setup",
      "**Custom Spans** - Manual instrumentation for detailed tracing",
      "**Sampling** - Performance optimization through request sampling",
      "**UI Features** - Visual trace analysis and dependency mapping",
      "🔥 Essential tool for microservice debugging and performance analysis"
    ],
    note: "🧠 Zipkin helps identify bottlenecks and troubleshoot distributed systems effectively",
    keepInMind: "Zipkin is a must-have tool for any serious microservice deployment."
  }
];