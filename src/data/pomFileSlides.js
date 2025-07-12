export const pomFileSlides = [
  {
    title: "What is POM?",
    points: [
      "✔️ Project Object Model - Maven's core configuration file",
      "XML file that defines project structure and dependencies",
      "Contains metadata about the project",
      "🔥 Heart of every Maven project"
    ],
    note: "🧠 POM = Project blueprint + dependency manager + build instructions",
    keepInMind: "The `pom.xml` is the single source of truth for a Maven project's configuration."
  },
  {
    title: "Basic POM Structure",
    points: [
      "```xml",
      "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
      "<project xmlns=\"http://maven.apache.org/POM/4.0.0\">",
      "  <modelVersion>4.0.0</modelVersion>",
      "  <groupId>com.example</groupId>",
      "  <artifactId>my-app</artifactId>",
      "  <version>1.0.0</version>",
      "  <packaging>jar</packaging>",
      "</project>",
      "```"
    ],
    keepInMind: "These coordinates uniquely identify your project in the Maven ecosystem."
  },
  {
    title: "Essential POM Elements",
    points: [
      "```table",
      "Element | Purpose | Example",
      "groupId | Organization/company | com.example",
      "artifactId | Project name | my-spring-app",
      "version | Project version | 1.0.0-SNAPSHOT",
      "packaging | Output type | jar, war, pom",
      "```"
    ],
    keepInMind: "Getting these right is the first step to a well-structured Maven project."
  },
  {
    title: "Adding Dependencies",
    points: [
      "```xml",
      "<dependencies>",
      "  <dependency>",
      "    <groupId>org.springframework.boot</groupId>",
      "    <artifactId>spring-boot-starter-web</artifactId>",
      "    <version>3.2.0</version>",
      "  </dependency>",
      "</dependencies>",
      "```",
      "🔥 Use Maven Central Repository to find dependencies"
    ],
    keepInMind: "Maven will automatically download this dependency and any of its transitive dependencies."
  },
  {
    title: "Dependency Scopes",
    points: [
      "```table",
      "Scope | When Used | Example",
      "compile | Default, runtime + compile | Spring Boot",
      "test | Only for testing | JUnit, Mockito",
      "provided | Runtime provided by container | Servlet API",
      "runtime | Only at runtime | MySQL driver",
      "```"
    ],
    keepInMind: "Understanding scopes is crucial for managing your classpath and avoiding unnecessary dependencies."
  },
  {
    title: "Spring Boot POM Example",
    points: [
      "```xml",
      "<parent>",
      "  <groupId>org.springframework.boot</groupId>",
      "  <artifactId>spring-boot-starter-parent</artifactId>",
      "  <version>3.2.0</version>",
      "</parent>",
      "",
      "<dependencies>",
      "  <dependency>",
      "    <groupId>org.springframework.boot</groupId>",
      "    <artifactId>spring-boot-starter-web</artifactId>",
      "  </dependency>",
      "</dependencies>",
      "```"
    ],
    keepInMind: "The Spring Boot starter parent provides sensible defaults and manages dependency versions for you."
  },
  {
    title: "Build Configuration",
    points: [
      "```xml",
      "<build>",
      "  <plugins>",
      "    <plugin>",
      "      <groupId>org.springframework.boot</groupId>",
      "      <artifactId>spring-boot-maven-plugin</artifactId>",
      "    </plugin>",
      "  </plugins>",
      "</build>",
      "```",
      "🔥 Plugins extend Maven's capabilities"
    ],
    keepInMind: "The `spring-boot-maven-plugin` is essential for creating executable JARs."
  },
  {
    title: "Properties Section",
    points: [
      "```xml",
      "<properties>",
      "  <maven.compiler.source>17</maven.compiler.source>",
      "  <maven.compiler.target>17</maven.compiler.target>",
      "  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>",
      "  <spring.version>6.1.0</spring.version>",
      "</properties>",
      "```",
      "🔥 Use properties with property.name syntax"
    ],
    keepInMind: "Using properties makes it easy to manage versions and other configuration in one place."
  },
  {
    title: "Common Maven Commands",
    points: [
      "```bash",
      "# Clean and compile",
      "mvn clean compile",
      "",
      "# Run tests",
      "mvn test",
      "",
      "# Package JAR/WAR",
      "mvn clean package",
      "",
      "# Install to local repository",
      "mvn install",
      "```"
    ],
    keepInMind: "These commands cover the most common phases of the Maven build lifecycle."
  },
  {
    title: "Best Practices",
    points: [
      "✅ Use Spring Boot parent for version management",
      "✅ Define properties for repeated versions",
      "✅ Use specific dependency versions",
      "✅ Keep dependencies minimal and necessary",
      "✅ Use dependency management for multi-module projects",
      "❌ Don't mix different Spring versions",
      "❌ Don't use SNAPSHOT versions in production"
    ],
    note: "🧠 Interview tip: Explain dependency resolution and transitive dependencies",
    keepInMind: "A clean and well-organized `pom.xml` is a sign of a professional developer."
  },
  {
    title: "POM File Summary",
    points: [
      "**What is POM** - Project Object Model, Maven's core configuration",
      "**Basic Structure** - groupId, artifactId, version, packaging elements",
      "**Dependencies** - External libraries with scope management",
      "**Spring Boot Integration** - Parent POM and starter dependencies",
      "**Build Configuration** - Plugins for extended Maven capabilities",
      "**Properties** - Centralized version and configuration management",
      "**Maven Commands** - clean, compile, test, package, install",
      "🔥 POM file is the blueprint for Maven project structure and dependencies"
    ],
    note: "🧠 Understanding POM structure is essential for Java project management",
    keepInMind: "Mastering the `pom.xml` is a key skill for any Java developer using Maven."
  }
];