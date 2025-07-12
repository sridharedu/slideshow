export const prometheusSlides = [
  {
    title: "What is Prometheus?",
    points: [
      "✔️ Open-source monitoring and alerting toolkit",
      "Time-series database with powerful query language (PromQL)",
      "Pull-based metrics collection from HTTP endpoints",
      "🔥 De facto standard for cloud-native monitoring"
    ],
    note: "🧠 Prometheus = Metrics collection + Time-series storage + Alerting",
    keepInMind: "Prometheus is the foundation of modern observability stacks, especially in Kubernetes environments"
  },
  {
    title: "Prometheus Architecture",
    points: [
      "**Prometheus Server**: Scrapes and stores metrics",
      "**Targets**: Applications exposing `/metrics` endpoint",
      "**Pushgateway**: For short-lived jobs",
      "**Alertmanager**: Handles alerts and notifications",
      "**Grafana**: Visualization layer (separate tool)",
      "🔥 Pull-based model vs push-based (like StatsD)"
    ],
    keepInMind: "The pull model makes Prometheus **self-healing** - if a target is down, Prometheus knows immediately"
  },
  {
    title: "Metric Types",
    points: [
      "```table",
      "Type | Purpose | Example",
      "Counter | Always increasing values | HTTP requests count",
      "Gauge | Current value that can go up/down | Memory usage, CPU %",
      "Histogram | Distribution of values | Request duration buckets",
      "Summary | Similar to histogram with quantiles | Response time percentiles",
      "```"
    ],
    keepInMind: "**Counter** for rates, **Gauge** for current state, **Histogram** for distributions - choose wisely!"
  },
  {
    title: "Spring Boot Integration",
    points: [
      "Add Micrometer dependency:",
      "```xml",
      "<dependency>",
      "    <groupId>io.micrometer</groupId>",
      "    <artifactId>micrometer-registry-prometheus</artifactId>",
      "</dependency>",
      "```",
      "Enable endpoint:",
      "```yaml",
      "management:",
      "  endpoints:",
      "    web:",
      "      exposure:",
      "        include: prometheus",
      "```"
    ],
    keepInMind: "Micrometer is the **bridge** between Spring Boot and Prometheus - it handles metric formatting automatically"
  },
  {
    title: "Custom Metrics in Spring Boot",
    points: [
      "```java",
      "@RestController",
      "public class OrderController {",
      "    private final Counter orderCounter;",
      "    private final Timer orderTimer;",
      "    ",
      "    public OrderController(MeterRegistry registry) {",
      "        this.orderCounter = Counter.builder(\"orders_total\")",
      "            .description(\"Total orders processed\")",
      "            .register(registry);",
      "        this.orderTimer = Timer.builder(\"order_duration\")",
      "            .register(registry);",
      "    }",
      "    ",
      "    @PostMapping(\"/orders\")",
      "    public ResponseEntity<Order> createOrder() {",
      "        return orderTimer.recordCallable(() -> {",
      "            orderCounter.increment();",
      "            return processOrder();",
      "        });",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "Use **meaningful metric names** and **consistent labels** - they become your query foundation"
  },
  {
    title: "PromQL Basics",
    points: [
      "**Instant queries**:",
      "```promql",
      "# Current HTTP request rate",
      "rate(http_requests_total[5m])",
      "",
      "# Memory usage above 80%",
      "jvm_memory_used_bytes / jvm_memory_max_bytes > 0.8",
      "```",
      "**Range queries**:",
      "```promql",
      "# CPU usage over time",
      "rate(cpu_usage_seconds_total[1h])",
      "```"
    ],
    keepInMind: "**rate()** for counters, **avg_over_time()** for gauges - PromQL functions are your power tools"
  },
  {
    title: "Common PromQL Functions",
    points: [
      "```table",
      "Function | Purpose | Example",
      "rate() | Per-second rate of counter | rate(http_requests[5m])",
      "sum() | Sum values across labels | sum(memory_usage) by (instance)",
      "avg() | Average values | avg(cpu_usage) by (job)",
      "max() | Maximum value | max(response_time)",
      "histogram_quantile() | Calculate percentiles | histogram_quantile(0.95, request_duration)",
      "```"
    ],
    keepInMind: "Master **rate()**, **sum()**, and **histogram_quantile()** - they solve 80% of monitoring queries"
  },
  {
    title: "Alerting Rules",
    points: [
      "Define in `prometheus.yml`:",
      "```yaml",
      "rule_files:",
      "  - \"alert_rules.yml\"",
      "```",
      "Alert rules example:",
      "```yaml",
      "groups:",
      "- name: application_alerts",
      "  rules:",
      "  - alert: HighErrorRate",
      "    expr: rate(http_requests_total{status=~\"5..\"}[5m]) > 0.1",
      "    for: 2m",
      "    labels:",
      "      severity: critical",
      "    annotations:",
      "      summary: \"High error rate detected\"",
      "```"
    ],
    keepInMind: "Use **for** clause to avoid alert flapping - don't alert on temporary spikes"
  },
  {
    title: "Prometheus Configuration",
    points: [
      "Basic `prometheus.yml`:",
      "```yaml",
      "global:",
      "  scrape_interval: 15s",
      "",
      "scrape_configs:",
      "  - job_name: 'spring-boot-app'",
      "    static_configs:",
      "      - targets: ['localhost:8080']",
      "    metrics_path: '/actuator/prometheus'",
      "    scrape_interval: 10s",
      "```"
    ],
    keepInMind: "**scrape_interval** balance: too frequent = resource waste, too slow = missed issues"
  },
  {
    title: "Service Discovery",
    points: [
      "**Kubernetes SD**:",
      "```yaml",
      "scrape_configs:",
      "  - job_name: 'kubernetes-pods'",
      "    kubernetes_sd_configs:",
      "      - role: pod",
      "    relabel_configs:",
      "      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]",
      "        action: keep",
      "        regex: true",
      "```",
      "**Consul SD**, **EC2 SD**, **File SD** also available"
    ],
    keepInMind: "Service discovery makes Prometheus **dynamic** - no manual target management in cloud environments"
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use consistent metric naming conventions",
      "✅ Add meaningful labels but avoid high cardinality",
      "✅ Set appropriate scrape intervals (10-60s)",
      "✅ Use recording rules for expensive queries",
      "✅ Monitor Prometheus itself",
      "❌ Don't use timestamps as labels",
      "❌ Don't create metrics for every user ID",
      "❌ Don't ignore storage retention settings"
    ],
    keepInMind: "**High cardinality kills Prometheus** - be careful with dynamic labels like user IDs or request IDs"
  },
  {
    title: "Prometheus Summary",
    points: [
      "**What is Prometheus** - Open-source monitoring with time-series database",
      "**Architecture** - Pull-based metrics collection from HTTP endpoints",
      "**Metric Types** - Counter, Gauge, Histogram, Summary for different use cases",
      "**Spring Integration** - Micrometer provides seamless Prometheus metrics",
      "**Custom Metrics** - Counter and Timer for business-specific monitoring",
      "**PromQL** - Powerful query language with rate(), sum(), histogram_quantile()",
      "**Alerting** - Rule-based alerting with Alertmanager integration",
      "**Service Discovery** - Dynamic target discovery for cloud environments",
      "🔥 Foundation of modern observability with Grafana visualization"
    ],
    note: "🧠 Prometheus + Grafana + Alertmanager = Complete monitoring solution",
    keepInMind: "Prometheus excels at **metrics** - combine with logging (ELK) and tracing (Jaeger/Zipkin) for full observability"
  }
];