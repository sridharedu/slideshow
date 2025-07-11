import React, { useState } from "react";

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

const ForEachSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const isCodeBlock = (line) => line.trim().startsWith("```");

  const renderPoints = (points) => {
    let blocks = [];
    let codeBuffer = [];
    let isInCode = false;

    for (let i = 0; i < points.length; i++) {
      const line = points[i];
      if (isCodeBlock(line)) {
        if (!isInCode) {
          isInCode = true;
          codeBuffer = [];
        } else {
          blocks.push(
            <pre key={`code-${i}`} style={{
              background: "#f5f5f5",
              padding: "1rem",
              borderRadius: "8px",
              margin: "1rem 0",
              fontSize: "0.875rem",
              overflow: "auto"
            }}>
              <code>{codeBuffer.join("\n")}</code>
            </pre>
          );
          isInCode = false;
        }
      } else if (isInCode) {
        codeBuffer.push(line);
      } else {
        blocks.push(
          <li key={i} style={{ marginBottom: "0.5rem", color: "#374151" }}>
            {line}
          </li>
        );
      }
    }

    return <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>{blocks}</ul>;
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9fafb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2.5rem 1rem"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "80rem",
        minHeight: "400px"
      }}>
        <div style={{
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          padding: "2rem"
        }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "1.5rem"
          }}>
            {slide.title || "📝 Untitled Slide"}
          </h2>
          {renderPoints(slide.points)}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1.5rem"
          }}>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                background: currentSlide === 0 ? "#f9fafb" : "white",
                color: currentSlide === 0 ? "#9ca3af" : "#374151",
                cursor: currentSlide === 0 ? "not-allowed" : "pointer"
              }}
            >
              ← Prev
            </button>
            <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #3b82f6",
                borderRadius: "6px",
                background: currentSlide === slides.length - 1 ? "#f9fafb" : "#3b82f6",
                color: currentSlide === slides.length - 1 ? "#9ca3af" : "white",
                cursor: currentSlide === slides.length - 1 ? "not-allowed" : "pointer"
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForEachSlides;