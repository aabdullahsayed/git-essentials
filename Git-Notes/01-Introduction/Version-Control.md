# Version Control Systems (VCS)

## What is Version Control?
A **Version Control System (VCS)** is a tool that records changes to files over time so you can recall specific versions later. It answers questions like:
- Who changed this line and when?
- What did this file look like last week?
- Can I undo this change safely?

## Types of Version Control Systems

### 1. Local Version Control Systems
- Simplest form — a database on your local machine that tracks file changes.
- Example: RCS (Revision Control System).
- **Limitation**: No collaboration; single point of failure (your machine).

### 2. Centralized Version Control Systems (CVCS)
- A single central server holds all versioned files; clients "check out" files from it.
- Examples: **SVN (Subversion)**, **CVS**, **Perforce**.
- **Advantages**: Easier administration, single source of truth.
- **Limitations**:
  - Single point of failure — if the server goes down, no one can collaborate or see history.
  - Requires network access for most operations.

### 3. Distributed Version Control Systems (DVCS)
- Every client fully **mirrors** the repository, including its complete history.
- Examples: **Git**, **Mercurial**.
- **Advantages**:
  - No single point of failure — any clone can restore the server.
  - Most operations are local and fast.
  - Enables flexible workflows (feature branches, forks).

## Comparison Table

| Type | Example | Central Server Required? | Offline Work? | Speed |
|---|---|---|---|---|
| Local | RCS | No | Yes | Fast |
| Centralized | SVN, CVS | Yes | Limited | Slower (network-dependent) |
| Distributed | Git, Mercurial | No (but often used) | Yes | Fast |

## Why Git (DVCS) Won
- Full local history means you can commit, branch, and view logs without internet.
- Backup is inherent — every clone is a full copy.
- Branching is cheap and fast, encouraging experimentation.
- Better suited to open-source and large-scale collaborative projects (e.g., Linux kernel with thousands of contributors).

## Summary
Version control evolved from local tracking → centralized servers → distributed systems. Git represents the modern, distributed approach, offering speed, resilience, and flexible collaboration.
