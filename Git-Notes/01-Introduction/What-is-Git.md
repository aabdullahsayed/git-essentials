# What is Git?

## Definition
**Git** is a free, open-source **distributed version control system (DVCS)** created by **Linus Torvalds in 2005** (originally to manage the Linux kernel source code). It tracks changes to files over time, allowing multiple people to collaborate on a project without overwriting each other's work.

## Key Characteristics

- **Distributed**: Every developer has a full copy of the repository (including its entire history) on their local machine — not just the latest snapshot.
- **Version Control**: Tracks every change made to files, allowing you to view, compare, and revert to any previous state.
- **Fast & Efficient**: Most operations (commit, diff, log, branch) are local, so they're extremely fast — no network round-trip needed.
- **Data Integrity**: Every file and commit is checksummed using **SHA-1** (moving toward SHA-256), making it nearly impossible to change history without Git noticing.
- **Branching Model**: Git branches are lightweight and cheap to create, encouraging frequent branching and experimentation.

## What Git Does

| Capability | Description |
|---|---|
| Track changes | Records every modification to files in a project |
| Collaborate | Allows multiple developers to work on the same codebase simultaneously |
| Revert | Roll back to any previous version of the code |
| Branch & Merge | Work on features independently, then combine the work |
| Audit | See who changed what, when, and why (via commit history) |

## Simple Example

```bash
git init                       # Start tracking a project with Git
echo "Hello Git" > file.txt
git add file.txt                # Stage the file
git commit -m "Add file.txt"    # Save a snapshot
```

## Git vs a Simple Backup Tool
Unlike copying folders as backups (`project-v1`, `project-final`, `project-final2`), Git:
- Stores only the **differences** (efficient storage).
- Lets you **branch** and experiment without affecting the main codebase.
- Provides a complete, searchable **history** with authorship and timestamps.
- Enables **collaboration** without manually merging files.

## Summary
Git is the industry-standard tool for tracking source code history and enabling collaborative software development. It underpins platforms like GitHub, GitLab, and Bitbucket.
