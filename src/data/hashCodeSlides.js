export const hashCodeSlides = [
  {
    title: "What is hashCode()?",
    points: [
      "✔️ Method from `java.lang.Object`",
      "`int hashCode()` → returns hash val of object",
      "Used in hash-based collections: HashMap, HashSet",
      "🔥 It's NOT a memory address!"
    ],


    note: "🧠 hashCode helps locate bucket in hashmap → fast access"
  },
  {
    title: "hashCode + equals = contract",
    points: [
      "If `a.equals(b)` → then `a.hashCode() == b.hashCode()` ✅",
      "If hashCodes diff → equals() *may* still return false",
      "But same hashCode doesn't mean equals() is true",
      "🔥 Always override both together!"
    ]
  },
  {
    title: "When to override hashCode()",
    points: [
      "You override equals() → MUST override hashCode() ❗",
      "Custom objects used in HashMap, HashSet, etc.",
      "Failing to override → unexpected behavior (e.g., can't find element)"
    ]
  },
  {
    title: "Example: Bad vs Good",
    points: [
      "`Person p1 = new Person(\"Alex\")`",
      "`Person p2 = new Person(\"Alex\")`",
      "equals() says true → but if hashCode diff → breaks HashSet",
      "✔️ Fix: hashCode returns hash of name"
    ]
  },
  {
    title: "How to write hashCode()",
    points: [
      "✅ Use `Objects.hash(field1, field2, ...)` (Java 7+)",
      "✔️ Avoid writing manual logic unless needed",
      "`@Override public int hashCode() { return Objects.hash(name, age); }`"
    ]
  },
  {
    title: "hashCode collision?",
    points: [
      "Yes! Different objects can have same hashCode",
      "HashMap handles via chaining (bucket → linked list)",
      "But more collisions = slower lookup",
      "🔥 Good hashCode → reduces collisions"
    ]
  },
  {
    title: "Common mistakes",
    points: [
      "❌ Only override equals(), not hashCode",
      "❌ Use random values in hashCode()",
      "❌ Mutable fields in hashCode logic → breaks Map/Set"
    ]
  },
  {
    title: "In practice: HashMap lookup",
    points: [
      "→ Call hashCode() → find bucket",
      "→ Call equals() on elements in bucket",
      "✔️ Both needed for correctness"
    ]
  },
  {
    title: "hashCode default impl",
    points: [
      "In Object → gives diff int for each instance",
      "i.e., `new Obj().hashCode()` ≠ another one",
      "✔️ Works for identity, not for logical equality"
    ]
  },
  {
    title: "Tools & Annotations",
    points: [
      "Use IDE: auto-generate hashCode + equals",
      "Or Lombok: `@EqualsAndHashCode`",
      "🔥 Reduces boilerplate and bugs"
    ]
  }
];