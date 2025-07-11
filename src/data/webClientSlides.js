export const webClientSlides = [
  {
    title: "What is WebClient?",
    points: [
      "`WebClient` is Spring's non-blocking HTTP client introduced in Spring 5.",
      "Part of the `spring-webflux` module, but usable in any Spring Boot app.",
      "Replaces legacy `RestTemplate` for async & reactive flows.",
      "🔥 Interview Tip: Say you used WebClient for non-blocking external API calls (e.g., auth, billing)."
    ]
  },
  {
    title: "Basic Usage",
    points: [
      "```java",
      "WebClient client = WebClient.create();",
      "String result = client.get()",
      "    .uri(\"https://api.example.com/data\")",
      "    .retrieve()",
      "    .bodyToMono(String.class)",
      "    .block();",
      "```",
      "`block()` turns async into sync — useful in imperative code. Avoid in reactive chains."
    ]
  },
  {
    title: "Non-blocking Usage (Reactive)",
    points: [
      "```java",
      "client.get()",
      "    .uri(\"/user/{id}\", 101)",
      "    .retrieve()",
      "    .bodyToMono(User.class)",
      "    .subscribe(user -> handle(user));",
      "```",
      "`Mono` and `Flux` are reactive types — return without blocking the thread.",
      "Useful in reactive pipelines (e.g., WebFlux controllers)."
    ]
  },
  {
    title: "Post Request with Body",
    points: [
      "```java",
      "client.post()",
      "    .uri(\"/users\")",
      "    .bodyValue(new User(\"abc\"))",
      "    .retrieve()",
      "    .bodyToMono(Void.class)",
      "    .block();",
      "```",
      "You can also use `.body(Mono<T>, Class<T>)` for full control."
    ]
  },
  {
    title: "Handling Headers & Tokens",
    points: [
      "```java",
      "WebClient client = WebClient.builder()",
      "    .baseUrl(\"https://api.example.com\")",
      "    .defaultHeader(\"Authorization\", \"Bearer xyz\")",
      "    .build();",
      "```",
      "Add per-request headers using `.header(\"key\", \"val\")` on the request chain."
    ]
  },
  {
    title: "Error Handling",
    points: [
      "```java",
      "client.get().uri(\"/fail\")",
      "    .retrieve()",
      "    .onStatus(HttpStatus::is4xxClientError, res -> res.bodyToMono(String.class))",
      "    .bodyToMono(String.class);",
      "```",
      "Use `.onStatus()` to customize error mapping.",
      "🔥 Interview Tip: Mention error handling for retries, fallbacks, logs."
    ]
  },
  {
    title: "WebClient vs RestTemplate",
    points: [
      "| Feature       | RestTemplate | WebClient      |",
      "|---------------|--------------|----------------|",
      "| Blocking      | ✅ Yes       | ❌ No          |",
      "| Async support | ❌ No        | ✅ Yes (Mono)  |",
      "| Deprecated    | ✅ Soon      | ❌ No          |",
      "| Use case      | Simple apps  | Reactive/microservices",
      "Use `WebClient` in modern microservices for async HTTP calls.",
      "`RestTemplate` is deprecated as of Spring 6."
    ]
  },
  {
    title: "Real Project Use Case",
    points: [
      "Used `WebClient` to call external User Profile API in a non-blocking way.",
      "Wrapped result in `Mono<User>` and enriched the service response with fallback if API failed.",
      "Handled auth token via interceptor and retried on 401.",
      "🔥 Mention this when asked about external integrations + reactive chains."
    ]
  }
];