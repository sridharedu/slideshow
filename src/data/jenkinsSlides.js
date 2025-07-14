export const jenkinsSlides = [
    {
        title: "Jenkins CI/CD Overview",
        points: [
            "**Jenkins** - Open-source automation server for CI/CD",
            "**Pipeline as Code** - Define workflows in Jenkinsfile",
            "**Plugin Ecosystem** - 1800+ plugins for integration",
            "**Distributed Builds** - Master-agent architecture",
            "**Multi-branch Support** - Automatic pipeline creation"
        ],
        note: "Jenkins is the most widely adopted CI/CD tool with over 300,000 installations worldwide"
    },
    {
        title: "Jenkins Architecture",
        points: [
            "```table",
            "Component | Role | Purpose",
            "Master Node | Controller | Schedules builds, manages plugins",
            "Agent Nodes | Executors | Run actual build jobs",
            "Workspace | Storage | Temporary files during builds",
            "Build Queue | Scheduler | Manages job execution order",
            "```"
        ],
        note: "Master handles orchestration while agents provide scalable execution capacity"
    },
    {
        title: "Pipeline Types",
        points: [
            "**Declarative Pipeline**",
            "```groovy",
            "pipeline {",
            "    agent any",
            "    stages {",
            "        stage('Build') { steps { sh 'mvn clean compile' } }",
            "    }",
            "}",
            "```",
            "**Scripted Pipeline** - More flexible, Groovy-based"
        ],
        note: "Declarative is recommended for most use cases due to better syntax validation and error handling"
    },
    {
        title: "Jenkinsfile Structure",
        points: [
            "```groovy",
            "pipeline {",
            "    agent { label 'linux' }",
            "    environment { JAVA_HOME = '/usr/lib/jvm/java-11' }",
            "    stages {",
            "        stage('Checkout') { steps { git 'repo-url' } }",
            "        stage('Test') { steps { sh 'mvn test' } }",
            "        stage('Deploy') { steps { sh 'kubectl apply -f k8s/' } }",
            "    }",
            "    post { always { cleanWs() } }",
            "}",
            "```"
        ],
        note: "Store Jenkinsfile in repository root for version control and pipeline as code approach"
    },
    {
        title: "Agent Configuration",
        points: [
            "**Static Agents** - Permanently connected nodes",
            "```groovy",
            "agent { label 'docker && linux' }",
            "agent { node { label 'windows' customWorkspace 'C:\\\\builds' } }",
            "```",
            "**Dynamic Agents** - Docker/Kubernetes containers",
            "```groovy",
            "agent { docker { image 'maven:3.8-openjdk-11' } }",
            "```"
        ],
        note: "Use labels to target specific agent capabilities (OS, tools, resources)"
    },
    {
        title: "Environment Management",
        points: [
            "**Global Environment Variables**",
            "```groovy",
            "environment {",
            "    MAVEN_OPTS = '-Xmx1024m'",
            "    DATABASE_URL = credentials('db-url')",
            "}",
            "```",
            "**Stage-specific Variables**",
            "```groovy",
            "stage('Deploy') {",
            "    environment { DEPLOY_ENV = 'production' }",
            "}",
            "```"
        ],
        note: "Use Jenkins credentials store for sensitive data like API keys and passwords"
    },
    {
        title: "Build Triggers",
        points: [
            "**SCM Polling** - `H/5 * * * *` (every 5 minutes)",
            "**Webhooks** - Git push triggers immediate build",
            "**Scheduled Builds** - `H 2 * * 1-5` (weekdays at 2 AM)",
            "**Upstream Dependencies** - Trigger after other jobs",
            "**Manual Triggers** - Build with parameters"
        ],
        note: "Webhooks are preferred over polling for better performance and immediate feedback"
    },
    {
        title: "Parallel Execution",
        points: [
            "```groovy",
            "stage('Parallel Tests') {",
            "    parallel {",
            "        stage('Unit Tests') {",
            "            steps { sh 'mvn test' }",
            "        }",
            "        stage('Integration Tests') {",
            "            steps { sh 'mvn integration-test' }",
            "        }",
            "        stage('Security Scan') {",
            "            steps { sh 'sonar-scanner' }",
            "        }",
            "    }",
            "}",
            "```"
        ],
        note: "Parallel execution reduces build time but requires sufficient agent resources"
    },
    {
        title: "Artifact Management",
        points: [
            "**Archive Artifacts**",
            "```groovy",
            "post {",
            "    success {",
            "        archiveArtifacts artifacts: 'target/*.jar'",
            "        publishTestResults 'target/test-reports/*.xml'",
            "    }",
            "}",
            "```",
            "**External Repositories** - Nexus, Artifactory integration",
            "**Docker Registry** - Push/pull container images"
        ],
        note: "Implement artifact retention policies to manage storage costs and compliance"
    },
    {
        title: "Quality Gates",
        points: [
            "**SonarQube Integration**",
            "```groovy",
            "stage('Quality Gate') {",
            "    steps {",
            "        withSonarQubeEnv('SonarQube') {",
            "            sh 'sonar-scanner'",
            "        }",
            "        waitForQualityGate abortPipeline: true",
            "    }",
            "}",
            "```",
            "**Test Coverage Thresholds**",
            "**Security Vulnerability Scans**"
        ],
        note: "Quality gates prevent deployment of code that doesn't meet defined standards"
    },
    {
        title: "Deployment Strategies",
        points: [
            "**Blue-Green Deployment**",
            "```groovy",
            "stage('Deploy Blue') {",
            "    steps { sh 'kubectl apply -f blue-deployment.yaml' }",
            "}",
            "stage('Switch Traffic') {",
            "    input message: 'Switch to blue environment?'",
            "    steps { sh 'kubectl patch service app --patch blue-patch.yaml' }",
            "}",
            "```",
            "**Rolling Updates** - Gradual replacement",
            "**Canary Releases** - Limited user exposure"
        ],
        note: "Choose deployment strategy based on application requirements and risk tolerance"
    },
    {
        title: "Multi-Environment Pipeline",
        points: [
            "```groovy",
            "stage('Deploy to Environments') {",
            "    parallel {",
            "        stage('Dev Deploy') {",
            "            steps { deployToEnvironment('dev') }",
            "        }",
            "        stage('Staging Deploy') {",
            "            when { branch 'main' }",
            "            steps { deployToEnvironment('staging') }",
            "        }",
            "        stage('Production Deploy') {",
            "            when { tag 'release-*' }",
            "            steps { deployToEnvironment('prod') }",
            "        }",
            "    }",
            "}",
            "```"
        ],
        note: "Use conditional deployment based on branch patterns and manual approvals for production"
    },
    {
        title: "Pipeline Monitoring",
        points: [
            "**Build Metrics** - Success rate, duration trends",
            "**Blue Ocean UI** - Visual pipeline representation",
            "**Email/Slack Notifications**",
            "```groovy",
            "post {",
            "    failure {",
            "        slackSend channel: '#devops',",
            "                 message: 'Build failed: ${env.BUILD_URL}'",
            "    }",
            "}",
            "```",
            "**Dashboard Plugins** - Build radiator views"
        ],
        note: "Set up monitoring dashboards to track pipeline health and team productivity metrics"
    },
    {
        title: "Security Best Practices",
        points: [
            "**Credentials Management** - Use Jenkins credential store",
            "**Role-Based Access** - Matrix-based security",
            "**Script Approval** - Sandbox untrusted scripts",
            "**Agent Security** - Isolate build environments",
            "**Audit Logging** - Track configuration changes",
            "**Regular Updates** - Keep Jenkins and plugins current"
        ],
        note: "Security should be built into CI/CD from the start, not added as an afterthought"
    },
    {
        title: "Performance Optimization",
        points: [
            "**Build Caching** - Maven/Gradle dependency cache",
            "**Workspace Cleanup** - `cleanWs()` after builds",
            "**Agent Pool Management** - Right-size executor counts",
            "**Pipeline Optimization** - Minimize checkout operations",
            "**Resource Monitoring** - CPU, memory, disk usage",
            "**Build Parallelization** - Split long-running tasks"
        ],
        note: "Monitor build queue length and agent utilization to identify bottlenecks"
    },
    {
        title: "Troubleshooting Common Issues",
        points: [
            "**Build Failures** - Check console logs and workspace",
            "**Agent Connectivity** - Network and firewall issues",
            "**Plugin Conflicts** - Version compatibility problems",
            "**Resource Exhaustion** - Disk space, memory limits",
            "**Permission Errors** - File system and credential access",
            "**Pipeline Syntax** - Use Pipeline Syntax generator"
        ],
        note: "Enable debug logging and use Jenkins CLI for advanced troubleshooting scenarios"
    },
    {
        title: "Backup and Disaster Recovery",
        points: [
            "**Configuration Backup** - `JENKINS_HOME` directory",
            "**Job Definitions** - Export/import job configurations",
            "**Plugin Management** - Document installed plugins",
            "**Database Backup** - If using external database",
            "**Automated Backups** - Schedule regular snapshots",
            "**Recovery Testing** - Validate backup procedures"
        ],
        note: "Test disaster recovery procedures regularly to ensure business continuity"
    },
    {
        title: "Jenkins Administration",
        points: [
            "**System Configuration** - Global tool installations",
            "**Plugin Management** - Install, update, remove plugins",
            "**User Management** - Authentication and authorization",
            "**Node Management** - Add/remove build agents",
            "**System Monitoring** - Health checks and metrics",
            "**Maintenance Windows** - Planned downtime procedures"
        ],
        note: "Establish change management processes for Jenkins configuration modifications"
    },
    {
        title: "Integration Ecosystem",
        points: [
            "**Version Control** - Git, SVN, Mercurial",
            "**Build Tools** - Maven, Gradle, Ant, npm",
            "**Testing Frameworks** - JUnit, TestNG, Selenium",
            "**Quality Tools** - SonarQube, Checkstyle, PMD",
            "**Deployment Targets** - Kubernetes, AWS, Azure",
            "**Notification Systems** - Slack, Teams, email"
        ],
        note: "Jenkins' strength lies in its extensive plugin ecosystem enabling integration with virtually any tool"
    },
    {
        title: "Advanced Pipeline Patterns",
        points: [
            "**Shared Libraries** - Reusable pipeline code",
            "```groovy",
            "@Library('my-shared-library') _",
            "pipeline {",
            "    stages {",
            "        stage('Deploy') {",
            "            steps { deployApplication(env: 'prod') }",
            "        }",
            "    }",
            "}",
            "```",
            "**Matrix Builds** - Test across multiple configurations",
            "**Pipeline Templates** - Standardize team workflows"
        ],
        note: "Shared libraries promote code reuse and standardization across development teams"
    }
];