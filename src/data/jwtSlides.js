export const jwtSlides = [
  {
    title: "What is JWT?",
    points: [
      "✔️ JSON Web Token - compact, URL-safe token format",
      "Self-contained authentication/authorization mechanism",
      "Stateless - no server-side session storage needed",
      "🔥 Industry standard for modern web APIs"
    ],
    note: "🧠 JWT = Header + Payload + Signature (all Base64 encoded)",
    keepInMind: "JWTs are a way to securely transmit information between parties as a JSON object."
  },
  {
    title: "JWT Structure",
    points: [
      "Three parts separated by dots:",
      "```",
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huIn0.signature",
      "    HEADER       PAYLOAD      SIGNATURE",
      "```",
      "```table",
      "Part | Contains | Purpose",
      "Header | Algorithm + Type | How to verify",
      "Payload | Claims/Data | User info + metadata",
      "Signature | Verification | Ensures integrity",
      "```"
    ],
    keepInMind: "The signature is the most critical part for security, as it verifies the token hasn't been tampered with."
  },
  {
    title: "JWT Header",
    points: [
      "Contains metadata about the token:",
      "```json",
      "{",
      "  \"alg\": \"HS256\",",
      "  \"typ\": \"JWT\"",
      "}",
      "```",
      "Common algorithms:",
      "• HS256 (HMAC SHA-256) - symmetric",
      "• RS256 (RSA SHA-256) - asymmetric",
      "🔥 Algorithm determines how signature is created"
    ],
    keepInMind: "HS256 is simpler but requires sharing a secret key; RS256 is more secure for distributed systems."
  },
  {
    title: "JWT Payload (Claims)",
    points: [
      "Contains the actual data:",
      "```json",
      "{",
      "  \"sub\": \"user123\",",
      "  \"name\": \"John Doe\",",
      "  \"role\": \"admin\",",
      "  \"iat\": 1516239022,",
      "  \"exp\": 1516242622",
      "}",
      "```",
      "Standard claims: `sub`, `iat`, `exp`, `iss`, `aud`",
      "Custom claims: any application-specific data"
    ],
    keepInMind: "The payload is readable by anyone, so never store sensitive information in it."
  },
  {
    title: "JWT in Spring Boot",
    points: [
      "Add dependency:",
      "```xml",
      "<dependency>",
      "    <groupId>io.jsonwebtoken</groupId>",
      "    <artifactId>jjwt-api</artifactId>",
      "    <version>0.11.5</version>",
      "</dependency>",
      "```",
      "🔥 Also need jjwt-impl and jjwt-jackson for runtime"
    ],
    keepInMind: "The `jjwt` library is the most popular choice for working with JWTs in Java."
  },
  {
    title: "Creating JWT Token",
    points: [
      "```java",
      "@Service",
      "public class JwtService {",
      "    private String secretKey = \"mySecretKey\";",
      "    ",
      "    public String generateToken(String username) {",
      "        return Jwts.builder()",
      "            .setSubject(username)",
      "            .setIssuedAt(new Date())",
      "            .setExpiration(new Date(System.currentTimeMillis() + 86400000))",
      "            .signWith(SignatureAlgorithm.HS256, secretKey)",
      "            .compact();",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "The secret key should be stored securely and not hardcoded in your application."
  },
  {
    title: "Validating JWT Token",
    points: [
      "```java",
      "public boolean validateToken(String token) {",
      "    try {",
      "        Jwts.parser()",
      "            .setSigningKey(secretKey)",
      "            .parseClaimsJws(token);",
      "        return true;",
      "    } catch (JwtException e) {",
      "        return false;",
      "    }",
      "}",
      "",
      "public String getUsernameFromToken(String token) {",
      "    return Jwts.parser()",
      "        .setSigningKey(secretKey)",
      "        .parseClaimsJws(token)",
      "        .getBody().getSubject();",
      "}",
      "```"
    ],
    keepInMind: "Token validation must handle various exceptions, such as expired tokens or signature errors."
  },
  {
    title: "JWT Authentication Flow",
    points: [
      "1. User sends credentials to `/login`",
      "2. Server validates credentials",
      "3. Server generates JWT token",
      "4. Client stores token (localStorage/cookie)",
      "5. Client sends token in `Authorization: Bearer <token>`",
      "6. Server validates token on each request",
      "🔥 No server-side session storage needed"
    ],
    keepInMind: "This stateless flow is what makes JWTs so scalable and well-suited for microservices."
  },
  {
    title: "JWT Security Filter",
    points: [
      "```java",
      "@Component",
      "public class JwtAuthenticationFilter extends OncePerRequestFilter {",
      "    ",
      "    @Override",
      "    protected void doFilterInternal(HttpServletRequest request, ",
      "            HttpServletResponse response, FilterChain chain) {",
      "        String token = getTokenFromRequest(request);",
      "        ",
      "        if (token != null && jwtService.validateToken(token)) {",
      "            String username = jwtService.getUsernameFromToken(token);",
      "            // Set authentication in SecurityContext",
      "        }",
      "        chain.doFilter(request, response);",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "This filter intercepts every request to validate the JWT and set up the Spring Security context."
  },
  {
    title: "JWT Best Practices",
    points: [
      "✅ Use strong secret keys (256+ bits)",
      "✅ Set appropriate expiration times",
      "✅ Use HTTPS only",
      "✅ Store securely on client (httpOnly cookies)",
      "✅ Implement token refresh mechanism",
      "❌ Don't store sensitive data in payload",
      "❌ Don't use for long-lived sessions",
      "❌ Don't trust client-side validation only"
    ],
    note: "🧠 Interview tip: JWT is stateless but requires careful security implementation",
    keepInMind: "JWTs are powerful, but they come with their own set of security considerations that must be addressed."
  }
];