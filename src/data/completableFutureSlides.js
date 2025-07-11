export const completableFutureSlides = [
    {
        title: "What is CompletableFuture?",
        points: [
            "✔️ Java 8+ async programming API",
            "Represents a future result of async computation",
            "Implements `Future` + `CompletionStage` interfaces",
            "🔥 Non-blocking alternative to traditional `Future.get()`"
        ],
        note: "🧠 CompletableFuture = Future + callback chaining + composition"
    },
    {
        title: "Creating CompletableFuture",
        points: [
            "`CompletableFuture.supplyAsync(() -> getValue())` → with return value",
            "`CompletableFuture.runAsync(() -> doWork())` → no return value",
            "`CompletableFuture.completedFuture(value)` → already completed",
            "🔥 supplyAsync for data, runAsync for side effects"
        ]
    },
    {
        title: "Basic Example",
        points: [
            "```java",
            "CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {",
            "    // Simulate API call",
            "    Thread.sleep(1000);",
            "    return \"Hello World\";",
            "});",
            "",
            "// Non-blocking - continues immediately",
            "System.out.println(\"Task started...\");",
            "",
            "// Get result (blocks here)",
            "String result = future.get();",
            "```"
        ]
    },
    {
        title: "Chaining with thenApply",
        points: [
            "`thenApply()` → transform result when complete",
            "```java",
            "CompletableFuture<Integer> future = CompletableFuture",
            "    .supplyAsync(() -> \"42\")",
            "    .thenApply(Integer::parseInt)",
            "    .thenApply(x -> x * 2);",
            "```",
            "🔥 Chain multiple transformations without blocking"
        ]
    },
    {
        title: "Combining Futures",
        points: [
            "`thenCombine()` → combine two independent futures",
            "```java",
            "CompletableFuture<String> name = getNameAsync();",
            "CompletableFuture<Integer> age = getAgeAsync();",
            "",
            "CompletableFuture<String> result = name.thenCombine(age,",
            "    (n, a) -> n + \" is \" + a + \" years old\");",
            "```",
            "✔️ Both futures run in parallel"
        ]
    },
    {
        title: "Chaining Dependent Calls",
        points: [
            "`thenCompose()` → chain dependent async operations",
            "```java",
            "CompletableFuture<Order> orderFuture = getUserId()",
            "    .thenCompose(id -> getUser(id))",
            "    .thenCompose(user -> getOrder(user.getId()));",
            "```",
            "🔥 Avoids nested Future<Future<T>> problem"
        ]
    },
    {
        title: "Error Handling",
        points: [
            "`exceptionally()` → handle exceptions",
            "`handle()` → handle both success and failure",
            "```java",
            "CompletableFuture<String> future = CompletableFuture",
            "    .supplyAsync(() -> riskyOperation())",
            "    .exceptionally(ex -> \"Default value\")",
            "    .handle((result, ex) -> {",
            "        return ex != null ? \"Error\" : result;",
            "    });",
            "```"
        ]
    },
    {
        title: "Waiting for Multiple Futures",
        points: [
            "`allOf()` → wait for all to complete",
            "`anyOf()` → wait for first to complete",
            "```java",
            "CompletableFuture<Void> all = CompletableFuture.allOf(",
            "    future1, future2, future3",
            ");",
            "",
            "CompletableFuture<Object> first = CompletableFuture.anyOf(",
            "    future1, future2, future3",
            ");",
            "```"
        ]
    },
    {
        title: "Custom Thread Pools",
        points: [
            "Default: uses `ForkJoinPool.commonPool()`",
            "Custom executor for better control:",
            "```java",
            "ExecutorService executor = Executors.newFixedThreadPool(4);",
            "",
            "CompletableFuture<String> future = CompletableFuture",
            "    .supplyAsync(() -> doWork(), executor);",
            "",
            "executor.shutdown(); // Don't forget!",
            "```",
            "🔥 Always shutdown custom executors"
        ]
    },
    {
        title: "Best Practices",
        points: [
            "✅ Use for I/O-bound operations (DB, API calls)",
            "✅ Chain operations instead of blocking with get()",
            "✅ Handle exceptions with exceptionally()",
            "❌ Don't use for CPU-intensive tasks",
            "❌ Don't forget to shutdown custom executors",
            "❌ Avoid get() in production code"
        ],
        note: "🧠 Interview tip: CompletableFuture enables reactive, non-blocking programming"
    }
];