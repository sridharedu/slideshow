export const optionalSlides = [
  {
    title: "Why Optional?",
    points: [
      "✔️ Avoid `NullPointerException` — main reason Optional was added",
      "`Optional<T>` → container for possibly-null values",
      "Helps express: value is optional/absent/present clearly",
      "🔥 Cleaner than null checks everywhere"
    ],
    note: "🧠 Mention this in interviews — Optional promotes *semantic clarity* in APIs"
  },
  {
    title: "Creating Optional",
    points: [
      "`Optional.of(val)` → throws if val is null ❌",
      "`Optional.ofNullable(val)` → safe (null → empty)",
      "`Optional.empty()` → empty Optional instance",
      "🔥 Always prefer `ofNullable` if input might be null"
    ]
  },
  {
    title: "Checking value",
    points: [
      "`isPresent()` → true/false (but verbose)",
      "`ifPresent(val -> {...})` → cleaner, executes only if value exists",
      "`ifPresentOrElse(...)` from Java 9",
      "🔥 Avoid `get()` unless 100% sure it's present"
    ]
  },
  {
    title: "Default values",
    points: [
      "`orElse(default)` → returns default if empty",
      "`orElseGet(() -> ...)` → lazy version",
      "`orElseThrow()` → throws NoSuchElementException",
      "`orElseThrow(() -> new CustomException())` → custom exception"
    ]
  },
  {
    title: "Map and FlatMap",
    points: [
      "`map(f)` → transform the value if present",
      "`flatMap(f)` → when f returns Optional again",
      "`opt.map(String::length).orElse(0)` → safe transform",
      "🔥 Use flatMap to chain calls returning Optional"
    ]
  },
  {
    title: "Filter values",
    points: [
      "`filter(pred)` → keeps value if predicate is true",
      "`Optional.of(10).filter(x -> x > 5)` → present(10)",
      "`Optional.of(3).filter(x -> x > 5)` → empty"
    ]
  },
  {
    title: "Common mistakes",
    points: [
      "❌ Never use `Optional.get()` without `isPresent()`",
      "❌ Don't use Optional in fields / setters / serialization",
      "❌ Avoid wrapping collections inside Optional → use empty list"
    ],
    note: "🧠 Interview tip: Optional is for return values, NOT parameters or fields"
  },
  {
    title: "Use Case: Service Response",
    points: [
      "`public Optional<User> findUserById(String id)`",
      "→ if user not found → return Optional.empty()",
      "→ caller decides what to do (default / throw / skip)",
      "🔥 Avoids null return, caller always forced to think"
    ]
  },
  {
    title: "Chaining Optionals",
    points: [
      "`repo.findUser().flatMap(User::getAddress).map(Address::getCity)`",
      "🔥 Clean & readable null-safe navigation",
      "No need for nested `if` null checks"
    ]
  },
  {
    title: "When NOT to use Optional",
    points: [
      "In class fields (adds overhead)",
      "For method parameters → just accept null",
      "For collections → prefer empty list/set/map",
      "❌ Don't overuse → only when absence is valid scenario"
    ]
  }
];