# Why Git?

## What is Git?
Git is a **distributed version control system (DVCS)** that helps developers track changes in source code, collaborate with others, and manage different versions of a project.

---

# Why Was Git Built?

Git was created by **:contentReference[oaicite:0]{index=0}** in **2005** to manage the development of the Linux kernel.

Before Git, the Linux community used a version control system called **BitKeeper**. When BitKeeper's free license was withdrawn, a new solution was needed. Linus created Git with the following goals:

- High performance
- Distributed development
- Data integrity
- Efficient branching and merging
- Support for thousands of contributors

---

# Why Do We Use Git?

## 1. Track Changes
- Records every change made to the project.
- View the complete history of the code.

## 2. Version Control
- Restore previous versions if something breaks.
- Compare different versions of files.

## 3. Collaboration
- Multiple developers can work on the same project simultaneously.
- Merge everyone's work safely.

## 4. Branching
- Create separate branches for new features or bug fixes.
- Keep the main branch stable.

## 5. Backup
- Every developer has a complete copy of the repository.
- Reduces the risk of losing code.

## 6. Experiment Safely
- Try new ideas without affecting the main codebase.
- Delete experimental branches if they are not needed.

## 7. Code Review
- Makes reviewing changes easier through pull requests.
- Improves code quality before merging.

---

# Problems Without Git

- No history of changes.
- Difficult to collaborate.
- Easy to overwrite teammates' work.
- Hard to recover deleted or broken code.
- No reliable backup.
- Manual file versioning (e.g., `project_v1`, `project_final`, `project_final2`).

---

# Simple Workflow

```
Working Directory
        │
        ▼
     git add
        │
        ▼
 Staging Area (Index)
        │
        ▼
    git commit
        │
        ▼
 Local Repository
        │
        ▼
 git push / git pull
        │
        ▼
 Remote Repository (GitHub, GitLab, Azure DevOps)
```

---

# Key Takeaways

- Git is a **version control system**.
- Built by **Linus Torvalds** in **2005**.
- Created to manage Linux kernel development efficiently.
- Tracks code changes and preserves history.
- Enables collaboration among developers.
- Supports branching, merging, rollback, and backups.
- Essential for modern software development.