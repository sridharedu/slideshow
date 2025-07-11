export const objectsInJavaSlides = [
    {
        title: "Object Creation in Java",
        points: [
            "Objects are instances of classes created using the `new` keyword",
            "```java",
            "Person person = new Person();",
            "String name = new String(\"John\");",
            "ArrayList<String> list = new ArrayList<>();",
            "```",
            "💡 Each object has its own memory space in the heap",
            "🔥 Pro tip: Use object pooling for expensive objects"
        ]
    },
    {
        title: "Object Lifecycle",
        points: [
            "1. **Creation** - Object instantiated with `new`",
            "2. **Usage** - Methods called, fields accessed",
            "3. **Garbage Collection** - Automatic memory cleanup",
            "",
            "```java",
            "public class Student {",
            "    private String name;",
            "    ",
            "    public Student(String name) {",
            "        this.name = name; // Constructor",
            "    }",
            "    ",
            "    @Override",
            "    protected void finalize() {",
            "        // Called before GC (rarely used)",
            "    }",
            "}",
            "```"
        ]
    }
];