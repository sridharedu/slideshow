import React, { useState, useEffect } from "react";

const slides = [
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
    }
];

const SlideWrapper = () => {
    const [current, setCurrent] = useState(0);
    const slide = slides[current];

    // keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (
                e.key === "ArrowRight" ||
                e.key === " " ||
                e.key === "d"
            ) {
                setCurrent((c) => Math.min(c + 1, slides.length - 1));
            } else if (
                e.key === "ArrowLeft" ||
                e.key === "a"
            ) {
                setCurrent((c) => Math.max(c - 1, 0));
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const isCode = (line) => line.trim().startsWith("```");

    const renderSlideContent = (points) => {
        let output = [];
        let buffer = [];
        let inCode = false;

        for (let i = 0; i < points.length; i++) {
            const line = points[i];
            if (isCode(line)) {
                if (!inCode) {
                    inCode = true;
                    buffer = [];
                } else {
                    output.push(
                        <pre
                            key={`code-${i}`}
                            style={{
                                background: "#f4f4f5",
                                padding: "1.25rem",
                                borderRadius: "8px",
                                fontSize: "0.9rem",
                                overflowX: "auto",
                                fontFamily: "Fira Code, monospace",
                                border: "1px solid #e2e8f0",
                                marginBottom: "1.25rem"
                            }}
                        >
              <code>{buffer.join("\n")}</code>
            </pre>
                    );
                    inCode = false;
                }
            } else if (inCode) {
                buffer.push(line);
            } else {
                output.push(
                    <li
                        key={`text-${i}`}
                        style={{
                            fontSize: "1rem",
                            marginBottom: "0.75rem",
                            lineHeight: "1.65",
                            color: "#374151"
                        }}
                    >
                        {line}
                    </li>
                );
            }
        }

        return (
            <ul style={{ paddingLeft: "1.25rem", marginTop: "1rem", listStyleType: "disc" }}>
                {output}
            </ul>
        );
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #667eea, #764ba2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem"
            }}
        >
            <div
                style={{
                    maxWidth: "960px",
                    width: "100%",
                    background: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    padding: "2.5rem 3rem"
                }}
            >
                <h2
                    style={{
                        fontSize: "1.75rem",
                        fontWeight: "700",
                        marginBottom: "1.5rem",
                        color: "#1f2937"
                    }}
                >
                    {slide.title}
                </h2>

                {renderSlideContent(slide.points)}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "2rem"
                    }}
                >
                    <button
                        onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
                        disabled={current === 0}
                        style={{
                            background: current === 0 ? "#e5e7eb" : "#667eea",
                            color: current === 0 ? "#9ca3af" : "#fff",
                            border: "none",
                            padding: "0.6rem 1.2rem",
                            borderRadius: "999px",
                            cursor: current === 0 ? "not-allowed" : "pointer"
                        }}
                    >
                        ← Prev
                    </button>

                    <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            {current + 1} / {slides.length}
          </span>

                    <button
                        onClick={() => setCurrent((c) => Math.min(c + 1, slides.length - 1))}
                        disabled={current === slides.length - 1}
                        style={{
                            background: current === slides.length - 1 ? "#e5e7eb" : "#667eea",
                            color: current === slides.length - 1 ? "#9ca3af" : "#fff",
                            border: "none",
                            padding: "0.6rem 1.2rem",
                            borderRadius: "999px",
                            cursor: current === slides.length - 1 ? "not-allowed" : "pointer"
                        }}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlideWrapper;
