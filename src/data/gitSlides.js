export const gitSlides = [
  {
    title: "What is Git?",
    points: [
      "✔️ Distributed version control system",
      "Tracks changes in source code during software development",
      "Enables collaboration among multiple developers",
      "🔥 Most popular version control system worldwide"
    ],
    note: "🧠 Git = Version Control + Collaboration + History Tracking"
  },
  {
    title: "Git vs Other VCS",
    points: [
      "```table",
      "Feature | Git | SVN | CVS",
      "Type | Distributed | Centralized | Centralized",
      "Offline Work | Yes | Limited | No",
      "Branching | Fast & Easy | Slow | Limited",
      "Performance | Fast | Moderate | Slow",
      "```"
    ]
  },
  {
    title: "Git Architecture",
    points: [
      "**Working Directory**: Your local files",
      "**Staging Area**: Files ready to be committed",
      "**Local Repository**: Your local Git database",
      "**Remote Repository**: Shared repository (GitHub, GitLab)",
      "🔥 Three-tree architecture enables powerful workflows"
    ]
  },
  {
    title: "Basic Git Commands",
    points: [
      "```bash",
      "# Initialize repository",
      "git init",
      "",
      "# Clone repository",
      "git clone <url>",
      "",
      "# Check status",
      "git status",
      "",
      "# Add files to staging",
      "git add <file>",
      "git add .",
      "",
      "# Commit changes",
      "git commit -m \"commit message\"",
      "```"
    ]
  },
  {
    title: "Git Workflow",
    points: [
      "```table",
      "Command | Purpose | Example",
      "git add | Stage changes | git add index.html",
      "git commit | Save changes | git commit -m \"Fix bug\"",
      "git push | Upload to remote | git push origin main",
      "git pull | Download from remote | git pull origin main",
      "git fetch | Download without merge | git fetch origin",
      "```"
    ]
  },
  {
    title: "Branching & Merging",
    points: [
      "```bash",
      "# Create and switch to branch",
      "git checkout -b feature-branch",
      "",
      "# Switch branches",
      "git checkout main",
      "",
      "# List branches",
      "git branch",
      "",
      "# Merge branch",
      "git merge feature-branch",
      "",
      "# Delete branch",
      "git branch -d feature-branch",
      "```"
    ]
  },
  {
    title: "Git Log & History",
    points: [
      "```bash",
      "# View commit history",
      "git log",
      "",
      "# One line per commit",
      "git log --oneline",
      "",
      "# Show changes",
      "git show <commit-hash>",
      "",
      "# View file changes",
      "git diff",
      "",
      "# Compare branches",
      "git diff main..feature-branch",
      "```"
    ]
  },
  {
    title: "Undoing Changes",
    points: [
      "```bash",
      "# Unstage file",
      "git reset HEAD <file>",
      "",
      "# Discard working changes",
      "git checkout -- <file>",
      "",
      "# Undo last commit (keep changes)",
      "git reset --soft HEAD~1",
      "",
      "# Undo last commit (discard changes)",
      "git reset --hard HEAD~1",
      "",
      "# Revert commit (safe)",
      "git revert <commit-hash>",
      "```"
    ]
  },
  {
    title: "Remote Repositories",
    points: [
      "```bash",
      "# Add remote",
      "git remote add origin <url>",
      "",
      "# View remotes",
      "git remote -v",
      "",
      "# Push to remote",
      "git push -u origin main",
      "",
      "# Pull from remote",
      "git pull origin main",
      "",
      "# Fetch updates",
      "git fetch --all",
      "```"
    ]
  },
  {
    title: "Git Best Practices",
    points: [
      "✅ Write clear, descriptive commit messages",
      "✅ Commit small, logical changes frequently",
      "✅ Use branches for features and bug fixes",
      "✅ Pull before pushing to avoid conflicts",
      "✅ Use .gitignore for unwanted files",
      "✅ Review changes before committing",
      "❌ Don't commit sensitive information",
      "❌ Don't force push to shared branches"
    ],
    note: "🧠 Interview tip: Explain Git workflow and conflict resolution strategies"
  },
  {
    title: "Git Summary",
    points: [
      "**What is Git** - Distributed version control system for collaboration",
      "**Architecture** - Working directory, staging area, local/remote repositories",
      "**Basic Commands** - init, clone, add, commit, push, pull",
      "**Workflow** - Stage changes, commit with messages, sync with remote",
      "**Branching** - Create feature branches, merge, and manage code versions",
      "**History** - Track changes, view logs, compare differences",
      "**Undoing Changes** - Reset, revert, and recover from mistakes",
      "**Remote Repos** - Collaborate through GitHub, GitLab, etc.",
      "🔥 Essential tool for modern software development and team collaboration"
    ],
    note: "🧠 Git enables distributed development and maintains complete project history"
  }
];