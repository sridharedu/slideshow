export const coreJavaFundamentalsSlides = [
  // Objects in Java Section
  {
    title: "Core Java Fundamentals",
    points: [
      "☕ **Objects & Classes**: Real-world entities and their blueprints",
      "🔗 **Object Relationships**: Aggregation vs Composition patterns",
      "⚖️ **hashCode & equals**: Contract for collections and equality",
      "🏗️ **Object Lifecycle**: Creation, usage, and garbage collection",
      "🔥 **25 slides** covering fundamental OOP concepts"
    ],
    note: "🧠 Master these fundamentals to build robust Java applications",
    keepInMind: "Understanding objects deeply is the foundation of effective Java programming."
  },
  {
    title: "What is an Object in Java?",
    points: [
      "✔️ Real-world entity → instance of a class",
      "`new ClassName()` → creates object",
      "Object has: state (fields) + behavior (methods)",
      "`Student s = new Student();` → s is object ref"
    ],
    note: "🧠 Interview: object is runtime entity, holds heap memory",
    keepInMind: "An object is a concrete manifestation of a class, with its own state and access to behavior."
  },
  {
    title: "Object vs Class",
    points: [
      "Class → blueprint/template",
      "Object → actual instance",
      "`Car` is class, `new Car()` is object",
      "🔥 No object → class methods still callable if static"
    ],
    keepInMind: "A class is a compile-time concept, while an object is a runtime concept."
  },
  {
    title: "Creating Objects",
    points: [
      "`Student s = new Student();` → constructor called",
      "`new` allocates memory in heap",
      "🔥 Constructors set initial values"
    ],
    keepInMind: "The `new` keyword is the primary way to create an instance of a class."
  },
  {
    title: "Object Memory Layout",
    points: [
      "Fields stored in heap",
      "Reference lives in stack",
      "Methods not duplicated per object → in method area",
      "🔥 Only data is unique per object"
    ],
    keepInMind: "This separation of data (heap) and execution (stack) is fundamental to how the JVM works."
  },
  {
    title: "Accessing Object Data",
    points: [
      "`obj.field`, `obj.method()`",
      "✔️ dot operator → access members",
      "Null ref → `NullPointerException` ❌"
    ],
    keepInMind: "Always be mindful of `NullPointerException` when working with object references."
  },
  {
    title: "Object Lifecycle",
    points: [
      "Created with `new` → constructor runs",
      "Used via reference",
      "Garbage collected when no references remain",
      "🔥 finalize() is deprecated → use try-with-resources"
    ],
    keepInMind: "An object is eligible for garbage collection when it is no longer reachable from any live thread."
  },
  {
    title: "Object class",
    points: [
      "`java.lang.Object` → super of all classes",
      "Methods: `equals()`, `toString()`, `hashCode()`, `clone()`, `getClass()`",
      "All custom classes inherit Object"
    ],
    keepInMind: "Every class in Java is a descendant of `java.lang.Object`, making it the root of the class hierarchy."
  },

  // hashCode and equals Section
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
    title: "== vs equals()",
    points: [
      "`==` → compares ref (location)",
      "`equals()` → compares values (if overridden)",
      "`s1 == s2` → false, even if content same",
      "`s1.equals(s2)` → true, if values match"
    ],
    keepInMind: "`==` checks for identity, while `equals()` should be used to check for logical equality."
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

  // Aggregation vs Composition Section
  {
    title: "What is Aggregation?",
    points: [
      "✔️ \"Has-a\" relationship between objects",
      "Weak association → child can exist without parent",
      "Example: `Department` has `Employee`",
      "🔥 Employee can exist even if Department is deleted"
    ],
    note: "🧠 Aggregation = shared ownership, loose coupling",
    keepInMind: "Aggregation models a whole-part relationship where the part can exist independently."
  },
  {
    title: "What is Composition?",
    points: [
      "✔️ Strong \"Has-a\" relationship",
      "Child cannot exist without parent",
      "Example: `House` has `Room`",
      "🔥 Room destroyed when House is destroyed"
    ],
    note: "🧠 Composition = exclusive ownership, tight coupling",
    keepInMind: "Composition implies strong ownership; the lifecycle of the part is managed by the whole."
  },
  {
    title: "Key Differences",
    points: [
      "```table",
      "Aspect | Aggregation | Composition",
      "Relationship | Weak | Strong",
      "Child lifecycle | Independent | Dependent",
      "Ownership | Shared | Exclusive",
      "Example | Car-Driver | Car-Engine",
      "```"
    ],
    keepInMind: "The choice between them impacts your object model's flexibility and lifecycle management."
  },
  {
    title: "Aggregation Example",
    points: [
      "```java",
      "class Department {",
      "    List<Employee> employees;",
      "    // employees created elsewhere",
      "}",
      "",
      "class Employee {",
      "    String name;",
      "    // exists independently",
      "}",
      "```",
      "🔥 Employee objects can be shared across departments"
    ],
    keepInMind: "In aggregation, the parent holds a reference to the child but doesn't control its existence."
  },
  {
    title: "Composition Example",
    points: [
      "```java",
      "class House {",
      "    List<Room> rooms;",
      "    ",
      "    public House() {",
      "        rooms = new ArrayList<>();",
      "        rooms.add(new Room(\"Kitchen\"));",
      "    }",
      "}",
      "```",
      "🔥 Room created inside House, dies with House"
    ],
    keepInMind: "In composition, the parent is responsible for creating and destroying its children."
  },
  {
    title: "Real-world Examples",
    points: [
      "**Aggregation:**",
      "• University → Students (students exist independently)",
      "• Team → Players (players can switch teams)",
      "**Composition:**",
      "• Book → Pages (pages don't exist without book)",
      "• Computer → CPU (CPU is part of computer)"
    ],
    keepInMind: "Relating these concepts to real-world scenarios is the best way to solidify understanding."
  },
  {
    title: "When to Use Which?",
    points: [
      "**Use Aggregation when:**",
      "• Child objects are shared/reusable",
      "• Child has independent lifecycle",
      "**Use Composition when:**",
      "• Child is integral part of parent",
      "• Child has no meaning without parent"
    ],
    keepInMind: "Composition creates a more tightly coupled system, which can be simpler if the relationship is truly exclusive."
  },
  {
    title: "Immutability",
    points: [
      "✔️ Object's state cannot be modified after creation",
      "All fields are `final` and private",
      "No setter methods",
      "Returns new object for any modification",
      "🔥 Enhances thread safety and simplifies reasoning about state"
    ],
    keepInMind: "Immutability is a powerful concept for building robust and concurrent applications."
  },
  {
    title: "Serialization",
    points: [
      "✔️ Process of converting an object into a byte stream",
      "Allows objects to be stored or transmitted across a network",
      "`Serializable` interface (marker interface)",
      "`ObjectOutputStream` for writing, `ObjectInputStream` for reading",
      "🔥 Crucial for persistence and inter-process communication"
    ],
    keepInMind: "Serialization is a fundamental mechanism for persisting and transferring Java objects."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Always override `toString()` for logging",
      "✅ Override `equals()` + `hashCode()` if storing in Set/Map",
      "✅ Use constructor to validate input",
      "✅ Don't expose mutable fields directly",
      "✅ Use Objects.hash() for hashCode implementation",
      "✅ Implement helper methods for bidirectional relationships",
      "❌ Don't use mutable fields in hashCode if they change",
      "❌ Don't create circular references in toString()"
    ],
    note: "🧠 Interview tip: Know Object class methods, equals/hashCode contract, and relationship types",
    keepInMind: "Favoring immutability and encapsulation leads to more robust and maintainable code."
  }
];