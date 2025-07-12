export const aggregationCompositionSlides = [
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
    title: "Memory Management",
    points: [
      "Aggregation → references to existing objects",
      "Composition → creates and owns child objects",
      "Aggregation → careful with null checks",
      "Composition → parent controls child lifecycle"
    ],
    keepInMind: "Composition can lead to cascading deletes, which is powerful but requires careful memory management."
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
    title: "UML Representation",
    points: [
      "Aggregation → empty diamond ◇",
      "Composition → filled diamond ◆",
      "Arrow points from parent to child",
      "🔥 Visual way to show relationship strength"
    ],
    keepInMind: "UML provides a standardized visual language to communicate these design choices clearly."
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
    title: "Common Mistakes",
    points: [
      "❌ Confusing aggregation with composition",
      "❌ Not considering object lifecycle",
      "❌ Creating unnecessary tight coupling",
      "✔️ Think: \"Can child exist without parent?\""
    ],
    note: "🧠 Interview tip: Always explain with real-world examples",
    keepInMind: "The most common error is creating tight coupling with composition when a more flexible aggregation model would be better."
  }
];