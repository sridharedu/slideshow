export const swaggerSlides = [
  {
    title: "What is Swagger?",
    points: [
      "✔️ API documentation and testing framework",
      "OpenAPI Specification (formerly Swagger Spec)",
      "Interactive API documentation with UI",
      "🔥 Industry standard for REST API documentation"
    ],
    note: "🧠 Swagger = API docs + interactive testing + code generation",
    keepInMind: "Swagger provides a contract for your API that both humans and machines can understand."
  },
  {
    title: "Swagger vs OpenAPI",
    points: [
      "```table",
      "Term | Description | Current Status",
      "Swagger | Original toolset | Now refers to tools",
      "OpenAPI | Specification standard | Current spec version 3.x",
      "Swagger UI | Web interface | Still called Swagger UI",
      "Swagger Codegen | Code generator | Now OpenAPI Generator",
      "```"
    ],
    keepInMind: "OpenAPI is the specification; Swagger is the set of tools that implement the specification."
  },
  {
    title: "Adding Swagger to Spring Boot",
    points: [
      "SpringDoc OpenAPI dependency:",
      "```xml",
      "<dependency>",
      "    <groupId>org.springdoc</groupId>",
      "    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>",
      "    <version>2.2.0</version>",
      "</dependency>",
      "```",
      "🔥 SpringDoc is the modern replacement for SpringFox"
    ],
    keepInMind: "The `springdoc-openapi` library makes integrating OpenAPI 3 with Spring Boot seamless."
  },
  {
    title: "Basic Configuration",
    points: [
      "```java",
      "@Configuration",
      "public class OpenApiConfig {",
      "    ",
      "    @Bean",
      "    public OpenAPI customOpenAPI() {",
      "        return new OpenAPI()",
      "            .info(new Info()",
      "                .title(\"My API\")",
      "                .version(\"1.0\")",
      "                .description(\"API documentation\"));",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "This configuration provides the basic metadata for your API documentation."
  },
  {
    title: "Documenting Controllers",
    points: [
      "```java",
      "@RestController",
      "@Tag(name = \"Users\", description = \"User management APIs\")",
      "public class UserController {",
      "    ",
      "    @GetMapping(\"/users/{id}\")",
      "    @Operation(summary = \"Get user by ID\")",
      "    @ApiResponse(responseCode = \"200\", description = \"User found\")",
      "    @ApiResponse(responseCode = \"404\", description = \"User not found\")",
      "    public User getUser(@PathVariable Long id) {",
      "        return userService.findById(id);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "These annotations are the key to generating rich, descriptive API documentation from your code."
  },
  {
    title: "Documenting Request/Response",
    points: [
      "```java",
      "@Schema(description = \"User entity\")",
      "public class User {",
      "    ",
      "    @Schema(description = \"User ID\", example = \"1\")",
      "    private Long id;",
      "    ",
      "    @Schema(description = \"User name\", example = \"John Doe\")",
      "    private String name;",
      "    ",
      "    @Schema(description = \"Email address\", example = \"john@example.com\")",
      "    private String email;",
      "}",
      "```"
    ],
    keepInMind: "`@Schema` allows you to provide detailed information about your data models."
  },
  {
    title: "Accessing Swagger UI",
    points: [
      "Default URLs after adding dependency:",
      "• Swagger UI: `http://localhost:8080/swagger-ui.html`",
      "• OpenAPI JSON: `http://localhost:8080/v3/api-docs`",
      "• OpenAPI YAML: `http://localhost:8080/v3/api-docs.yaml`",
      "🔥 Interactive testing directly from browser"
    ],
    keepInMind: "The Swagger UI is a powerful tool for exploring and testing your API without writing any code."
  },
  {
    title: "Customizing Swagger UI",
    points: [
      "Configuration in `application.yml`:",
      "```yaml",
      "springdoc:",
      "  swagger-ui:",
      "    path: /api-docs",
      "    operationsSorter: method",
      "    tagsSorter: alpha",
      "  api-docs:",
      "    path: /v3/api-docs",
      "```"
    ],
    keepInMind: "You can customize the look and feel of the Swagger UI to match your project's branding."
  },
  {
    title: "Security Documentation",
    points: [
      "Document JWT authentication:",
      "```java",
      "@SecurityScheme(",
      "    name = \"bearerAuth\",",
      "    type = SecuritySchemeType.HTTP,",
      "    bearerFormat = \"JWT\",",
      "    scheme = \"bearer\"",
      ")",
      "@OpenAPIDefinition(info = @Info(title = \"API\"))",
      "public class OpenApiConfig {",
      "}",
      "```",
      "Use in controllers:",
      "```java",
      "@SecurityRequirement(name = \"bearerAuth\")",
      "```"
    ],
    keepInMind: "Properly documenting your security scheme is essential for making your API usable by others."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use meaningful operation summaries and descriptions",
      "✅ Provide example values in @Schema",
      "✅ Document all response codes",
      "✅ Group related endpoints with @Tag",
      "✅ Secure Swagger UI in production",
      "❌ Don't expose sensitive endpoints in docs",
      "❌ Don't forget to update docs when API changes"
    ],
    note: "🧠 Interview tip: Swagger improves API usability and developer experience",
    keepInMind: "Good API documentation is a sign of a well-designed and professional API."
  }
];