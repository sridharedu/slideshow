export const springComparisonSlides = [
    {
        title: "Spring Framework Overview",
        points: [
            "**Spring Framework** - Develop web-based apps",
            "• Replacement for Servlets/JSP/JDBC",
            "• Framework = Technologies + Design Patterns",
            "",
            "**Pros:**",
            "• **RAD** (Rapid Application Development)",
            "• **Less boilerplate** - 20K LOC → 10K LOC",
            "• **Flexible config** - XML / Java / Annotations"
        ],
        note: "Spring revolutionized Java development by reducing complexity and boilerplate code"
    },
    {
        title: "Spring Boot - Ready-made Setup",
        points: [
            "**Spring Boot** = Spring + Opinionated Defaults + Auto Setup",
            "",
            "**Key Features:**",
            "• **AutoConfiguration** - Automatic bean setup",
            "• **Embedded Server** - Tomcat/Jetty built-in",
            "• **Starter JARs** - Pre-configured dependencies",
            "• **Less Config** - Minimal XML configuration",
            "• **Build Tools** - Maven/Gradle parent projects"
        ],
        note: "Spring Boot eliminates most configuration overhead while maintaining Spring's flexibility"
    },
    {
        title: "Spring Cloud - Microservices Toolkit",
        points: [
            "**Spring Cloud** = Toolkit on top of Spring Boot",
            "",
            "**Core Components:**",
            "• **Service Registry** - Eureka discovery",
            "• **Config Server** - Centralized configuration",
            "• **Gateway** - API routing and filtering",
            "• **Load Balancing** - Ribbon client-side LB",
            "• **Circuit Breaker** - Resilience4j fault tolerance"
        ],
        note: "Spring Cloud provides production-ready microservices patterns and tools"
    },
    {
        title: "Monolith vs Microservices",
        points: [
            "```table",
            "Aspect | Monolith | Microservices",
            "Structure | All modules in 1 WAR/JAR | Each module = separate service",
            "Coupling | Tightly coupled | Loosely coupled",
            "Deployment | Redeploy entire app | Independent deployment",
            "Failure Impact | One module fail = app risk | Isolated failures",
            "Team Structure | Single team | Multiple teams per service",
            "```"
        ],
        note: "Choose architecture based on team size, complexity, and scalability requirements"
    },
    {
        title: "Monolith Architecture",
        points: [
            "**Single Deployable Unit**",
            "• Login + Cart + Payment + User → 1 big WAR/JAR",
            "",
            "**Challenges:**",
            "✘ **Tightly coupled** modules",
            "✘ **Full redeploy** for single fix",
            "✘ **Single point of failure**",
            "✘ **Technology lock-in**",
            "✘ **Scaling limitations**"
        ],
        note: "Monoliths work well for small teams and simple applications but become problematic at scale"
    },
    {
        title: "Microservices Architecture",
        points: [
            "**Independent Services**",
            "• Login Service + Order Service + Payment Service",
            "",
            "**Benefits:**",
            "✔️ **Independent deploy, scale, monitor**",
            "✔️ **Parallel development** - Team A (cart), Team B (user)",
            "✔️ **Technology diversity** - Different stacks per service",
            "✔️ **Built with** Spring Boot + Spring Cloud",
            "✔️ **Cloud-native** - AWS, Azure containers"
        ],
        note: "Microservices enable organizational scaling but introduce distributed system complexity"
    },
    {
        title: "Development Evolution",
        points: [
            "**Traditional Java Web**",
            "```java",
            "Servlets + JSP + JDBC = 20,000 LOC",
            "// Lots of boilerplate, XML config",
            "```",
            "",
            "**Spring Framework**",
            "```java",
            "Spring MVC + IoC = 10,000 LOC",
            "// Reduced boilerplate, better structure",
            "```",
            "",
            "**Spring Boot**",
            "```java",
            "@SpringBootApplication = 5,000 LOC",
            "// Auto-config, embedded server",
            "```"
        ],
        note: "Each evolution reduced complexity while maintaining functionality and flexibility"
    },
    {
        title: "Spring Boot Starter Example",
        points: [
            "**Maven Dependencies**",
            "```xml",
            "<parent>",
            "    <groupId>org.springframework.boot</groupId>",
            "    <artifactId>spring-boot-starter-parent</artifactId>",
            "</parent>",
            "<dependencies>",
            "    <dependency>",
            "        <groupId>org.springframework.boot</groupId>",
            "        <artifactId>spring-boot-starter-web</artifactId>",
            "    </dependency>",
            "</dependencies>",
            "```"
        ],
        note: "Starter dependencies automatically include all required libraries and configurations"
    },
    {
        title: "Microservices Communication",
        points: [
            "**Service-to-Service Communication**",
            "```java",
            "// REST API calls",
            "@FeignClient(\"user-service\")",
            "public interface UserClient {",
            "    @GetMapping(\"/users/{id}\")",
            "    User getUser(@PathVariable Long id);",
            "}",
            "```",
            "",
            "**Message Queues** - Kafka, RabbitMQ",
            "**Service Mesh** - Istio, Linkerd"
        ],
        note: "Choose synchronous (REST) or asynchronous (messaging) communication based on use case"
    },
    {
        title: "Technology Comparison",
        points: [
            "```table",
            "Concept | Type | Implementation",
            "OOP | Programming Paradigm | Java, .NET, PHP",
            "Microservices | Architecture Pattern | Spring Boot + Cloud",
            "AWS | Cloud Platform | Infrastructure hosting",
            "Spring | Framework | Java development",
            "Docker | Containerization | Service packaging",
            "```"
        ],
        note: "Each technology serves a different layer in the application stack"
    },
    {
        title: "When to Use What",
        points: [
            "**Use Monolith When:**",
            "• Small team (< 10 developers)",
            "• Simple application requirements",
            "• Rapid prototyping needed",
            "",
            "**Use Microservices When:**",
            "• Large team (> 20 developers)",
            "• Complex domain requirements",
            "• Independent scaling needed",
            "• Multiple technology stacks required"
        ],
        note: "Start with monolith, evolve to microservices when complexity and team size justify it"
    },
    {
        title: "Spring Ecosystem Summary",
        points: [
            "**Spring Framework** → Foundation",
            "• IoC, AOP, MVC, Security",
            "",
            "**Spring Boot** → Rapid Development",
            "• Auto-config, Starters, Embedded servers",
            "",
            "**Spring Cloud** → Microservices",
            "• Service discovery, Config, Gateway, Circuit breaker",
            "",
            "**Deployment** → Cloud Platforms",
            "• AWS, Azure, GCP with containers"
        ],
        note: "The Spring ecosystem provides a complete solution from development to production deployment"
    }
];