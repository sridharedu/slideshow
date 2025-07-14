export const session16 = [
  {
    title: "Spring Scheduling: Overview",
    points: [
      "Spring Framework provides robust support for scheduling tasks within your applications.",
      "This allows you to execute specific methods at predefined times or intervals.",
      "Common use cases include generating reports, cleaning up old data, sending periodic notifications, or synchronizing data."
    ],
    keepInMind: "Spring's scheduling capabilities simplify the implementation of time-based tasks without external schedulers."
  },
  {
    title: "Scheduling: Period of Time",
    points: [
      "Execute a task repeatedly after a fixed delay or at a fixed rate.",
      "**`fixedDelay`**: Executes the task after a fixed delay from the completion of the last execution. Ensures a delay between executions.",
      "**`fixedRate`**: Executes the task at a fixed rate, regardless of the completion time of the previous execution. Can lead to overlapping executions if the task takes longer than the rate.",
      "Achieved using `@Scheduled` annotation with `fixedDelay` or `fixedRate` attributes."
    ],
    keepInMind: "Choose `fixedDelay` for tasks that must not overlap, and `fixedRate` for tasks that need to run at precise intervals."
  },
  {
    title: "Scheduling: Point of Time (Cron Expressions)",
    points: [
      "Execute a task at specific points in time using cron expressions.",
      "A cron expression is a string consisting of six (or sometimes seven) fields separated by white space, representing a set of times.",
      "Fields: `second minute hour day-of-month month day-of-week [year]`.",
      "Achieved using `@Scheduled(cron = \"...\")`."
    ],
    keepInMind: "Cron expressions offer fine-grained control over scheduling, allowing for complex recurring patterns."
  },
  {
    title: "How to Implement Scheduling in Spring",
    points: [
      "**1. Enable Scheduling**: Add `@EnableScheduling` annotation to one of your `@Configuration` classes.",
      "**2. Create a Scheduled Method**: Annotate a method with `@Scheduled` in a Spring-managed component.",
      "**3. Configure the Schedule**: Use `fixedRate`, `fixedDelay`, or `cron` attributes within `@Scheduled`.",
      "```java",
      "@Configuration",
      "@EnableScheduling",
      "public class SchedulingConfig {\n    @Scheduled(fixedRate = 5000) // runs every 5 seconds\n    public void doSomething() {\n        // task logic\n    }\n}",
      "```"
    ],
    keepInMind: "Enabling scheduling and annotating methods are the two primary steps for implementing scheduled tasks."
  },
  {
    title: "Code Explanation: Simple Fixed-Rate Scheduling",
    points: [
      "**`MyScheduledTask.java`**:",
      "```java",
      "@Component",
      "public class MyScheduledTask {\n    private static final Logger log = LoggerFactory.getLogger(MyScheduledTask.class);\n\n    @Scheduled(fixedRate = 2000)\n    public void reportCurrentTime() {\n        log.info(\"The time is now {}\", new Date());\n    }\n}",
      "```",
      "This task will execute every 2 seconds, regardless of how long the previous execution took."
    ],
    keepInMind: "The `@Scheduled` annotation makes it incredibly easy to turn any method into a scheduled task."
  },
  {
    title: "`fixedDelay` vs. `fixedRate`",
    points: [
      "**`fixedDelay`**: The interval is measured from the completion time of the previous task execution.",
      "  - Ensures that there is always a `delay` period between the end of one execution and the start of the next.",
      "**`fixedRate`**: The interval is measured from the start time of the previous task execution.",
      "  - The task will be executed at the specified rate, even if the previous execution is still running (unless configured otherwise).",
      "**Example**: If `fixedRate = 5000` and task takes 3 seconds, next task starts 2 seconds after previous started."
    ],
    keepInMind: "The key difference lies in when the timer for the next execution starts: after completion (`fixedDelay`) or after start (`fixedRate`)."
  },
  {
    title: "Scheduling with Cron Expressions: Usage",
    points: [
      "Cron expressions are powerful for defining complex schedules.",
      "`@Scheduled(cron = \"0 0 12 * * ?\")` - Runs every day at 12:00 PM (noon).",
      "`@Scheduled(cron = \"0 15 10 ? * MON-FRI\")` - Runs every weekday at 10:15 AM.",
      "**Advantages**: Highly flexible, industry-standard for complex schedules.",
      "**Disadvantages**: Can be difficult to read and write, especially for beginners."
    ],
    keepInMind: "Mastering cron expressions is essential for advanced scheduling requirements."
  },
  {
    title: "Cron Expressions: Fields and Examples",
    points: [
      "**Fields**: `second minute hour day-of-month month day-of-week [year]`",
      "**`*`**: Any value.",
      "**`?`**: No specific value (used for day-of-month or day-of-week).",
      "**`/`**: Increments (e.g., `0/15` in minutes means every 15 minutes starting from 0).",
      "**`,`**: List of values (e.g., `MON,WED,FRI`).",
      "**`-`**: Range of values (e.g., `9-17` for hours 9 AM to 5 PM)."
    ],
    keepInMind: "Each field in a cron expression has a specific range and meaning, allowing for precise scheduling."
  },
  {
    title: "New in Spring 5.3: Improved Cron Expressions",
    points: [
      "Spring 5.3 introduced more readable cron expressions using common macros.",
      "**`@hourly`**: `0 0 * * * *` (every hour).",
      "**`@daily`**: `0 0 0 * * *` (every day at midnight).",
      "**`@weekly`**: `0 0 0 * * MON` (every Monday at midnight).",
      "**`@monthly`**: `0 0 0 1 * *` (first day of every month at midnight).",
      "**`@yearly`**: `0 0 0 1 1 *` (January 1st at midnight)."
    ],
    keepInMind: "These macros simplify common scheduling patterns, making cron expressions more approachable."
  }
];