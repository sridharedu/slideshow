export const webClientSlides = [
  {
    title: "What is WebClient?",
    points: [
      "`WebClient` is Spring's non-blocking HTTP client introduced in Spring 5.",
      "Part of the `spring-webflux` module, but usable in any Spring Boot app.",
      "Replaces legacy `RestTemplate` for async & reactive flows.",
      "🔥 Interview Tip: Say you used WebClient for non-blocking external API calls (e.g., auth, billing)."
    ],
    keepInMind: "WebClient is the modern, reactive way to make HTTP requests in Spring."
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
    ],
    keepInMind: ".block() is a bridge between the reactive and imperative worlds, but use it with caution."
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
    ],
    keepInMind: "Reactive calls begin only when subscribed."
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
    ],
    keepInMind: "`bodyValue` is a convenient shortcut for sending a simple object as the request body."
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
    ],
    keepInMind: "Use the `WebClient.Builder` to configure a shared, pre-configured `WebClient` instance."
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
    ],
    keepInMind: "Proper error handling is crucial for building resilient applications with WebClient."
  },
  {
    title: "WebClient vs RestTemplate",
    points: [
      "```table",
      "Feature        | RestTemplate      | WebClient",
      "Blocking       | ✅ Yes            | ❌ No",
      "Async support  | ❌ No             | ✅ Yes (Mono)",
      "Deprecated     | ✅ Soon           | ❌ No",
      "Use case       | Simple apps       | Reactive/microservices",
      "```",
      "👉 Use `WebClient` for async microservice calls.",
      "`RestTemplate` is deprecated from Spring 6."
    ],
    keepInMind: "For new Spring projects, you should always choose WebClient over RestTemplate."
  },
  {
    title: "Real Project Use Case",
    points: [
      "Used `WebClient` to call external User Profile API in a non-blocking way.",
      "Wrapped result in `Mono<User>` and enriched the service response with fallback if API failed.",
      "Handled auth token via interceptor and retried on 401.",
      "🔥 Mention this when asked about external integrations + reactive chains."
    ],
    keepInMind: "This is a great example of how to use WebClient in a real-world, production scenario."
  }
];
