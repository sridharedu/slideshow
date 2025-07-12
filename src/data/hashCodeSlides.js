export const hashCodeSlides = [
  {
    title: "What is hashCode()?",
    points: [
      "✔️ Method from `java.lang.Object`",
      "`int hashCode()` → returns hash val of object",
      "Used in hash-based collections: HashMap, HashSet",
      "🔥 It's NOT a memory address!"
    ],
    note: "🧠 hashCode helps locate bucket in hashmap → fast access",
    keepInMind: "hashCode() is the foundation of hash-based collections in Java, enabling O(1) average time complexity for lookups."
  },
  {
    title: "hashCode + equals = contract",
    points: [
      "If `a.equals(b)` → then `a.hashCode() == b.hashCode()` ✅",
      "If hashCodes diff → equals() *may* still return false",
      "But same hashCode doesn't mean equals() is true",
      "🔥 Always override both together!"
    ],
    keepInMind: "Violating this contract will lead to unpredictable behavior in HashMaps and HashSets."
  },
  {
    title: "When to override hashCode()",
    points: [
      "You override equals() → MUST override hashCode() ❗",
      "Custom objects used in HashMap, HashSet, etc.",
      "Failing to override → unexpected behavior (e.g., can't find element)"
    ],
    keepInMind: "If you define what makes two objects equal, you must also define their hash code consistently."
  },
  {
    title: "Example: Bad vs Good",
    points: [
      "`Person p1 = new Person(\"Alex\")`",
      "`Person p2 = new Person(\"Alex\")`",
      "equals() says true → but if hashCode diff → breaks HashSet",
      "✔️ Fix: hashCode returns hash of name"
    ],
    keepInMind: "Without a proper hashCode, a HashSet can't correctly determine if an element is already present."
  },
  {
    title: "How to write hashCode()",
    points: [
      "✅ Use `Objects.hash(field1, field2, ...)` (Java 7+)",
      "✔️ Avoid writing manual logic unless needed",
      "`@Override public int hashCode() { return Objects.hash(name, age); }`"
    ],
    keepInMind: "Objects.hash() is the modern, safe, and recommended way to implement hashCode."
  },
  {
    title: "hashCode collision?",
    points: [
      "Yes! Different objects can have same hashCode",
      "HashMap handles via chaining (bucket → linked list)",
      "But more collisions = slower lookup",
      "🔥 Good hashCode → reduces collisions"
    ],
    keepInMind: "Collisions are inevitable, but a good hashCode implementation distributes keys evenly, minimizing them."
  },
  {
    title: "Impact on HashMap Performance",
    points: [
      "**Good hashCode**: Objects distributed evenly across buckets.",
      "→ Fast `O(1)` average time for `put`, `get`, `remove`.",
      "**Bad hashCode**: Many objects in few buckets (high collision rate).",
      "→ Degrades to `O(n)` in worst case (like a linked list).",
      "🔥 Performance of hash-based collections heavily relies on `hashCode`."
    ],
    keepInMind: "A poorly implemented `hashCode` can turn your `HashMap` into a `LinkedList` in terms of performance."
  },
  {
    title: "In practice: HashMap lookup",
    points: [
      "→ Call hashCode() → find bucket",
      "→ Call equals() on elements in bucket",
      "✔️ Both needed for correctness"
    ],
    keepInMind: "hashCode provides the 'where' (which bucket), and equals provides the 'what' (the exact match)."
  },
  {
    title: "hashCode default impl",
    points: [
      "In Object → gives diff int for each instance",
      "i.e., `new Obj().hashCode()` ≠ another one",
      "✔️ Works for identity, not for logical equality"
    ],
    keepInMind: "The default implementation is based on object identity, not value equality."
  },
  {
    title: "Tools & Annotations",
    points: [
      "Use IDE: auto-generate hashCode + equals",
      "Or Lombok: `@EqualsAndHashCode`",
      "🔥 Reduces boilerplate and bugs"
    ],
    keepInMind: "Let tools handle the boilerplate; it's less error-prone and more maintainable."
  },
  {
    title: "Best Practices for equals() and hashCode()",
    points: [
      "✅ Always override both or neither.",
      "✅ Use the same fields for both methods.",
      "✅ Make `equals()` consistent (if a.equals(b), then b.equals(a)).",
      "✅ Make `equals()` reflexive (a.equals(a) is true).",
      "✅ Make `equals()` transitive (if a.equals(b) and b.equals(c), then a.equals(c)).",
      "✅ Make `equals()` symmetric (if a.equals(b), then b.equals(a)).",
      "✅ Make `equals()` null-safe (a.equals(null) is false).",
      "✅ Ensure `hashCode()` is consistent (multiple calls return same value).",
      "❌ Don't use mutable fields in `hashCode()` if they change after object insertion into a hash collection."
    ],
    keepInMind: "Adhering to the `equals` and `hashCode` contract is paramount for correct behavior of collections."
  },
  {
    title: "Summary of hashCode()",
    points: [
      "**Purpose**: Efficiently store and retrieve objects in hash-based collections.",
      "**Contract**: Must be consistent with `equals()`.",
      "**Implementation**: Use `Objects.hash()` or IDE-generated code.",
      "**Performance**: A good `hashCode()` minimizes collisions and maintains `O(1)` performance.",
      "**Common Pitfalls**: Forgetting to override both, using mutable fields.",
      "🔥 `hashCode()` is a small method with a big impact on Java application performance and correctness."
    ],
    keepInMind: "Think of `hashCode()` as a first-pass filter for `equals()`: if hashes don't match, objects can't be equal."
  }
];