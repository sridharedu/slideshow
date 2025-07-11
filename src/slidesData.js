export const slides = [
    {
        title: "Returning a Value with CompletableFuture",
        points: [
            "Think of `CompletableFuture.supplyAsync()` as assigning a task to a background worker, and continuing without waiting.",
            "```java",
            "CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {",
            "    simulateLatency();",
            "    return fetchWelcomeMessage();",
            "});",
            "",
            "// avoid blocking in real apps — shown here just for demo:",
            "String result = future.get();",
            "System.out.println(\"Response: \" + result);",
            "```",
            "`supplyAsync()` is ideal when a result is expected — e.g., fetching data from an external API, DB, or file.",
            "In production, prefer chaining with `.thenApply()` or `.thenCompose()` instead of blocking with `.get()`.",
            "🔥 Interview tip: mention how it frees up threads and avoids wasting CPU cycles while waiting on IO."
        ]
    },
    {
        title: "Why Async Helps: Thread vs CPU Waste",
        points: [
            "In a traditional blocking model:",
            "- A thread makes an IO call (e.g., DB/API)",
            "- It waits (blocked), doing nothing — but still occupies memory and thread stack",
            "",
            "With `CompletableFuture.supplyAsync()`:",
            "- The task runs on a separate thread pool",
            "- The main thread is **freed up** to serve other requests",
            "- Better CPU utilization, higher throughput",
            "",
            "🔥 Pro Tip:",
            "Use async to handle IO-bound workloads (e.g., file, DB, API), not CPU-heavy ones",
            "Combine multiple async calls using `thenCombine()` or `thenCompose()` to build scalable flows"
        ]
    },
    {
        title: "Combining Async Calls in CompletableFuture",
        points: [
            "`thenCompose()` → for chaining dependent tasks (result of one feeds into the next)",
            "`thenCombine()` → for running tasks in parallel and merging results",
            "",
            "```java",
            "CompletableFuture<User> userFuture = getUserAsync();",
            "CompletableFuture<Address> addrFuture = getAddressAsync();",
            "",
            "// Combine unrelated tasks",
            "CompletableFuture<UserProfile> profileFuture = userFuture.thenCombine(addrFuture,",
            "    (user, addr) -> new UserProfile(user, addr));",
            "",
            "// Chain dependent tasks",
            "CompletableFuture<Order> orderFuture = getUserIdAsync()",
            "    .thenCompose(this::getOrderForUser);",
            "```",
            "💡 Use `thenCompose()` to avoid nested futures (`Future<Future<T>>`)",
            "🔥 Interview Tip: Emphasize how this enables high-throughput systems with minimal thread blocking"
        ]
    },
    {
        title: "Thread Leaks in CompletableFuture",
        points: [
            "Using `supplyAsync()` on a custom executor requires you to shut it down!",
            "```java",
            "ExecutorService pool = Executors.newFixedThreadPool(5);",
            "CompletableFuture.runAsync(task, pool);",
            "pool.shutdown(); // ← don't forget",
            "```",
            "🔥 Tip: Forgetting shutdown leads to memory leaks in long-running apps"
        ],
        note: "Mention the incident in our booking microservice where thread leak caused OOM after a week"
    }
];