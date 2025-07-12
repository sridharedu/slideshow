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
    title: "WebClient.Builder for Configuration",
    points: [
      "✔️ Recommended way to create and configure WebClient instances.",
      "Allows setting base URL, default headers, codecs, and filters.",
      "Can be injected as a bean and customized.",
      "```java",
      "@Configuration",
      "public class WebClientConfig {\n    @Bean\n    public WebClient myApiClient(WebClient.Builder builder) {\n        return builder.baseUrl(\"http://api.myservice.com\")\n            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)\n            .build();\n    }\n}",
      "🔥 Centralize WebClient configuration for consistency."
    ],
    keepInMind: "Injecting and customizing `WebClient.Builder` is crucial for managing multiple external API integrations."
  },
  {
    title: "ExchangeFilterFunction (Interceptors)",
    points: [
      "✔️ Intercepts requests and responses for cross-cutting concerns.",
      "Similar to `ClientHttpRequestInterceptor` in `RestTemplate`.",
      "Use cases: logging, authentication, error handling, metrics.",
      "```java",
      "WebClient client = WebClient.builder()\n    .filter((req, next) => {\n        System.out.println(\"Request: \" + req.url());\n        return next.exchange(req);\n    })\n    .build();",
      "🔥 Powerful for adding custom logic to the request/response flow."
    ],
    keepInMind: "`ExchangeFilterFunction` is the reactive equivalent of interceptors, allowing you to modify requests or responses."
  },
  {
    title: "Error Handling",
    points: [
      "```java",
      "client.get().uri(\"/fail\")",
      "    .retrieve()",
      "    .onStatus(HttpStatus::is4xxClientError, res => res.bodyToMono(String.class))",
      "    .bodyToMono(String.class);",
      "```",
      "Use `.onStatus()` to customize error mapping.",
      "🔥 Interview Tip: Mention error handling for retries, fallbacks, logs."
    ],
    keepInMind: "Proper error handling is crucial for building resilient applications with WebClient."
  },
  {
    title: "Timeout Configuration",
    points: [
      "✔️ Configure connection and read timeouts to prevent hanging requests.",
      "Can be set on the underlying HTTP client (e.g., Reactor Netty).",
      "```java",
      "HttpClient httpClient = HttpClient.create()\n    .responseTimeout(Duration.ofSeconds(5));\nWebClient client = WebClient.builder()\n    .clientConnector(new ReactorClientHttpConnector(httpClient))\n    .build();",
      "🔥 Essential for preventing resource exhaustion and improving responsiveness."
    ],
    keepInMind: "Always configure timeouts to avoid indefinite waits for unresponsive services."
  },
  {
    title: "Testing WebClient Calls",
    points: [
      "✔️ Use `MockWebServer` (from Square's OkHttp) for integration tests.",
      "Allows you to mock HTTP responses and verify requests.",
      "```java",
      "MockWebServer server = new MockWebServer();\nserver.enqueue(new MockResponse().setBody(\"Hello\"));\nWebClient client = WebClient.create(server.url(\"/\").toString());\nString result = client.get().retrieve().bodyToMono(String.class).block();\nserver.shutdown();",
      "🔥 Provides a realistic HTTP environment without hitting actual services."
    ],
    keepInMind: "`MockWebServer` is invaluable for writing fast and reliable integration tests for WebClient."
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
  },
  {
    title: "WebClient Best Practices",
    points: [
      "✅ Use `WebClient.Builder` for consistent configuration.",
      "✅ Leverage `ExchangeFilterFunction` for cross-cutting concerns.",
      "✅ Implement robust error handling with `onStatus` and `onErrorResume`.",
      "✅ Configure appropriate timeouts to prevent resource exhaustion.",
      "✅ Use `Mono` and `Flux` for non-blocking, reactive flows.",
      "✅ Test with `MockWebServer` for reliable integration tests.",
      "❌ Avoid `.block()` in reactive pipelines.",
      "❌ Don't create a new `WebClient` instance for every request."
    ],
    keepInMind: "Adhering to these best practices will lead to more performant, resilient, and maintainable code."
  }
];