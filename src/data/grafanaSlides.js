export const grafanaSlides = [
  {
    title: "What is Grafana?",
    points: [
      "✔️ Open-source analytics and monitoring platform",
      "Visualizes metrics from multiple data sources",
      "Creates interactive dashboards and alerts",
      "🔥 De facto standard for observability visualization"
    ],
    note: "🧠 Grafana = Data visualization + Dashboards + Alerting",
    keepInMind: "Grafana is purely a visualization layer — it doesn’t store or scrape data."
  },
  {
    title: "Grafana Architecture",
    points: [
      "**Grafana Server**: Web application and API",
      "**Data Sources**: Prometheus, InfluxDB, MySQL, etc.",
      "**Dashboards**: Collections of panels and visualizations",
      "**Panels**: Individual charts, graphs, tables",
      "**Alerting**: Rule-based notifications",
      "**Users & Teams**: Access control and permissions"
    ],
    keepInMind: "Grafana acts as the frontend for metrics, logs, and traces — actual data lives elsewhere."
  },
  {
    title: "Supported Data Sources",
    points: [
      "```table",
      "Category | Data Sources                    | Use Case",
      "Metrics  | Prometheus, InfluxDB, CloudWatch | Time-series monitoring",
      "Logs     | Loki, Elasticsearch, Splunk     | Log analysis",
      "Tracing  | Jaeger, Zipkin, Tempo           | Distributed tracing",
      "DBs      | MySQL, PostgreSQL, MongoDB      | Business dashboards",
      "Cloud    | AWS, Azure, GCP                 | Cloud resource metrics",
      "```"
    ],
    keepInMind: "Grafana’s power lies in merging multiple data sources into one unified view."
  },
  {
    title: "Installing Grafana",
    points: [
      "**Docker (quickest)**:",
      "```bash",
      "docker run -d -p 3000:3000 grafana/grafana",
      "```",
      "**Ubuntu/Debian**:",
      "```bash",
      "sudo apt-get install -y software-properties-common",
      "sudo add-apt-repository \"deb https://packages.grafana.com/oss/deb stable main\"",
      "sudo apt-get update && sudo apt-get install grafana",
      "```",
      "Default login → `admin/admin`, access via `http://localhost:3000`"
    ],
    keepInMind: "Change the default admin password immediately after setup for security."
  },
  {
    title: "Adding Prometheus Data Source",
    points: [
      "Go to **Configuration > Data Sources**",
      "Click **Add data source** → choose **Prometheus**",
      "Set config:",
      "```yaml",
      "URL: http://localhost:9090",
      "Access: Server",
      "```",
      "Click **Save & Test** → success = connected to Prometheus"
    ],
    keepInMind: "If using Docker, ensure Grafana and Prometheus are in the same network for access."
  },
  {
    title: "Creating Dashboards",
    points: [
      "Click **+ > Dashboard > Add new panel**",
      "Choose data source → e.g., Prometheus",
      "Enter query:",
      "```promql",
      "rate(http_requests_total[5m])",
      "```",
      "Pick visualization: Time series, Stat, Gauge, etc.",
      "Set title → click **Apply**"
    ],
    keepInMind: "Start with small, focused queries — complex dashboards evolve iteratively."
  },
  {
    title: "Common Panel Types",
    points: [
      "```table",
      "Panel      | Best For           | Example Use",
      "TimeSeries | Trends over time   | CPU %, request rate",
      "Stat       | Single value       | Active users now",
      "Gauge      | Threshold tracking | Memory/disk usage",
      "Table      | Tabular data       | List of services, errors",
      "Bar Chart  | Comparisons        | Errors per endpoint",
      "Heatmap    | Distribution       | Response times",
      "```"
    ],
    keepInMind: "Each panel type solves a different problem — don’t misuse stat/gauge for trending data."
  },
  {
    title: "Dashboard Variables",
    points: [
      "Dynamic dashboards → define **variables**",
      "**Query Variable Example**:",
      "```promql",
      "label_values(up, instance)",
      "```",
      "**Custom Variable**:",
      "```text",
      "dev, staging, prod",
      "```",
      "Use in query: `up{instance=\"$instance\"}`"
    ],
    keepInMind: "Variables enable environment-specific dashboards without duplication."
  },
  {
    title: "Alerting in Grafana",
    points: [
      "**Alert Rule** example:",
      "```yaml",
      "Query: avg(cpu_usage) > 80",
      "Condition: IS ABOVE 80",
      "For: 5m every 1m",
      "```",
      "Notify via: Slack, Email, Webhook, PagerDuty",
      "Alert states: OK, Pending, Alerting"
    ],
    keepInMind: "Alerts should trigger only on sustained breaches, not momentary spikes."
  },
  {
    title: "Grafana + Spring Boot (Micrometer)",
    points: [
      "Expose Prometheus metrics from Spring Boot:",
      "```yaml",
      "management.endpoints.web.exposure.include: prometheus",
      "```",
      "Common PromQL queries:",
      "```promql",
      "jvm_memory_used_bytes / jvm_memory_max_bytes",
      "rate(http_server_requests_seconds_count[5m])",
      "hikaricp_connections_active",
      "```"
    ],
    keepInMind: "Micrometer bridges Spring Boot to Prometheus — no extra code needed."
  },
  {
    title: "Dashboard Best Practices",
    points: [
      "✅ Consistent time range across panels",
      "✅ Group metrics by service/domain",
      "✅ Add descriptions, legends, units",
      "✅ Use color thresholds sparingly",
      "❌ Don’t cram too many panels into one dashboard",
      "🔥 Pro Tip: Use rows to collapse less relevant metrics"
    ],
    keepInMind: "A dashboard is a story — organize top-down: overview → alert → deep dive."
  },
  {
    title: "Grafana Summary",
    points: [
      "🎯 Observability UI for metrics/logs/traces",
      "🔌 Connects to Prometheus, Loki, DBs, Cloud APIs",
      "📊 Dashboards = multiple panels + filters + alerts",
      "🔔 Alerts via rules & channels (Slack, Email, etc.)",
      "🧵 Integrated with Spring Boot, Micrometer, Tempo"
    ],
    note: "🧠 Grafana + Prometheus + Loki = complete OSS observability stack",
    keepInMind: "Grafana shines when paired with Prometheus for metrics, Loki for logs, and Tempo for tracing."
  }
];
