export const spyBeansSlides = [
  {
    title: "What is @SpyBean?",
    points: [
      "✔️ Spring Boot Test annotation",
      "Creates a Mockito spy of existing Spring bean",
      "Partial mocking → spy real object, mock specific methods",
      "🔥 Real bean behavior + selective stubbing"
    ],
    note: "🧠 @SpyBean = real bean + ability to mock specific methods",
    keepInMind: "`@SpyBean` allows you to test the integration of a bean with its collaborators while still controlling specific interactions."
  },
  {
    title: "@SpyBean vs @MockBean",
    points: [
      "```table",
      "Aspect | @MockBean | @SpyBean",
      "Bean type | Completely fake | Real bean wrapped",
      "Default behavior | No behavior | Real implementation",
      "Use case | Full isolation | Partial mocking",
      "Performance | Faster | Slower (real calls)",
      "```"
    ],
    keepInMind: "Choose `@MockBean` for isolation and `@SpyBean` for integration with partial control."
  },
  {
    title: "When to Use @SpyBean",
    points: [
      "✅ Need real bean behavior for most methods",
      "✅ Want to stub/verify only specific methods",
      "✅ Testing integration with partial mocking",
      "❌ Don't use for full isolation testing",
      "❌ Avoid if performance is critical"
    ],
    keepInMind: "`@SpyBean` is a powerful tool, but it's often a sign that your test has a large scope."
  },
  {
    title: "Basic @SpyBean Example",
    points: [
      "```java",
      "@SpringBootTest",
      "class UserServiceTest {",
      "    ",
      "    @SpyBean",
      "    private EmailService emailService;",
      "    ",
      "    @Test",
      "    void testUserRegistration() {",
      "        // Real emailService behavior + stubbing",
      "        doNothing().when(emailService).sendEmail(any());",
      "        ",
      "        // Test continues...",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "This test uses the real `UserService` but prevents the `EmailService` from sending actual emails."
  },
  {
    title: "Stubbing Spy Methods",
    points: [
      "`doReturn().when(spy).method()` → stub return value",
      "`doNothing().when(spy).method()` → stub void method",
      "`doThrow().when(spy).method()` → stub exception",
      "```java",
      "doReturn(\"mocked\").when(spyService).getData();",
      "doNothing().when(spyService).sendNotification();",
      "doThrow(new RuntimeException()).when(spyService).riskyMethod();",
      "```",
      "🔥 Use doXxx() syntax to avoid calling real method"
    ],
    keepInMind: "The `do...when` syntax is crucial for stubbing spies to avoid calling the real method."
  },
  {
    title: "Verifying Spy Interactions",
    points: [
      "`verify(spy).method()` → verify method was called",
      "`verify(spy, times(n)).method()` → verify call count",
      "```java",
      "@Test",
      "void testEmailSent() {",
      "    userService.registerUser(user);",
      "    ",
      "    verify(emailService).sendWelcomeEmail(user.getEmail());",
      "    verify(emailService, times(1)).logEmailSent();",
      "}",
      "```"
    ],
    keepInMind: "You can verify both stubbed and real method calls on a spy."
  },
  {
    title: "Real vs Stubbed Behavior",
    points: [
      "```java",
      "@SpyBean",
      "private UserRepository userRepo;",
      "",
      "@Test",
      "void mixedBehavior() {",
      "    // Real method call",
      "    User user = userRepo.findById(1L); // Hits real DB",
      "    ",
      "    // Stubbed method call",
      "    doReturn(false).when(userRepo).existsByEmail(any());",
      "    boolean exists = userRepo.existsByEmail(\"test@test.com\"); // Returns false",
      "}",
      "```"
    ],
    keepInMind: "This demonstrates the power of `@SpyBean`: mixing real and stubbed behavior in the same test."
  },
  {
    title: "Common Pitfalls",
    points: [
      "❌ Using `when().thenReturn()` → calls real method first",
      "✅ Use `doReturn().when()` → avoids real method call",
      "❌ Spying on final classes/methods → won't work",
      "❌ Over-spying → makes tests complex and slow"
    ],
    note: "🧠 Always use doXxx() syntax with spies to avoid unwanted real calls",
    keepInMind: "The `when(...).thenReturn(...)` syntax can lead to unexpected side effects with spies."
  },
  {
    title: "Integration Test Example",
    points: [
      "```java",
      "@SpringBootTest",
      "class OrderServiceIntegrationTest {",
      "    ",
      "    @SpyBean",
      "    private PaymentService paymentService;",
      "    ",
      "    @Test",
      "    void testOrderProcessing() {",
      "        // Real order processing logic",
      "        // But mock payment to avoid real charges",
      "        doReturn(true).when(paymentService).processPayment(any());",
      "        ",
      "        Order result = orderService.processOrder(order);",
      "        ",
      "        verify(paymentService).processPayment(order.getAmount());",
      "    }",
      "}",
      "```"
    ],
    keepInMind: "This is a classic use case for `@SpyBean`: testing a complex workflow while mocking out a single external dependency."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use sparingly → prefer @MockBean for full isolation",
      "✅ Always use doXxx() syntax for stubbing",
      "✅ Clear test intent → document why spy is needed",
      "✅ Reset spies between tests if needed",
      "❌ Don't spy everything → defeats purpose of unit testing"
    ],
    note: "🧠 Interview tip: @SpyBean is for integration tests with selective mocking",
    keepInMind: "If you find yourself using `@SpyBean` frequently, it might be a sign that your classes are too tightly coupled."
  }
];