export const objectsInJavaSlides = [
        {
            title: "What is an Object in Java?",
            points: [
                "✔️ Real-world entity → instance of a class",
                "`new ClassName()` → creates object",
                "Object has: state (fields) + behavior (methods)",
                "`Student s = new Student();` → s is object ref"
            ],
            note: "🧠 Interview: object is runtime entity, holds heap memory"
        },
        {
            title: "Object vs Class",
            points: [
                "Class → blueprint/template",
                "Object → actual instance",
                "`Car` is class, `new Car()` is object",
                "🔥 No object → class methods still callable if static"
            ]
        },
        {
            title: "Creating Objects",
            points: [
                "`Student s = new Student();` → constructor called",
                "`new` allocates memory in heap",
                "🔥 Constructors set initial values"
            ]
        },
        {
            title: "Object Memory Layout",
            points: [
                "Fields stored in heap",
                "Reference lives in stack",
                "Methods not duplicated per object → in method area",
                "🔥 Only data is unique per object"
            ]
        },
        {
            title: "Accessing Object Data",
            points: [
                "`obj.field`, `obj.method()`",
                "✔️ dot operator → access members",
                "Null ref → `NullPointerException` ❌"
            ]
        },
        {
            title: "Object Lifecycle",
            points: [
                "Created with `new` → constructor runs",
                "Used via reference",
                "Garbage collected when no references remain",
                "🔥 finalize() is deprecated → use try-with-resources"
            ]
        },
        {
            title: "toString(), equals(), hashCode()",
            points: [
                "`toString()` → string repr",
                "`equals()` → custom equality (default: ==)",
                "`hashCode()` → must match equals() logic",
                "Override all 3 for good object behavior"
            ]
        },
        {
            title: "== vs equals()",
            points: [
                "`==` → compares ref (location)",
                "`equals()` → compares values (if overridden)",
                "`s1 == s2` → false, even if content same",
                "`s1.equals(s2)` → true, if values match"
            ]
        },
        {
            title: "Object class",
            points: [
                "`java.lang.Object` → super of all classes",
                "Methods: `equals()`, `toString()`, `hashCode()`, `clone()`, `getClass()`",
                "All custom classes inherit Object"
            ]
        },
        {
            title: "Best Practices",
            points: [
                "Always override `toString()` for logging",
                "Override `equals()` + `hashCode()` if storing in Set/Map",
                "Use constructor to validate input",
                "Don't expose mutable fields directly"
            ]
        }
    ];