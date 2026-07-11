# git commit

## Purpose
Saves a permanent snapshot of the staged changes into the repository's history.

## Syntax
```bash
git commit -m "commit message"
```

## Examples

**Basic commit:**
```bash
git commit -m "Add login form validation"
```

**Commit with a longer, multi-line message:**
```bash
git commit -m "Add login validation" -m "Validates email format and password length before submission."
```

**Stage all tracked, modified files and commit in one step (skips `git add` for tracked files only — new files still need `git add`):**
```bash
git commit -am "Fix typo in header"
```

**Amend the last commit (change message or add missed changes):**
```bash
git commit --amend -m "Corrected commit message"
```

**Open the default editor for a detailed message:**
```bash
git commit
```

## Anatomy of a Commit
Each commit stores:
- A unique **SHA-1 hash** (identifier)
- The **snapshot** (tree) of the project at that point
- **Author** and **committer** info (name, email, timestamp)
- A **commit message**
- Pointer(s) to **parent commit(s)**

## Good Commit Message Format
```
<type>: <short summary, 50 chars or less>

<optional longer description explaining WHY, not just WHAT>
```
Example:
```
fix: prevent crash on empty cart checkout

Previously, checking out with an empty cart threw a null
reference exception. Added a guard clause to redirect users
to the shop page with a friendly message instead.
```
(See `09-Best-Practices/Commit-Messages.md` for more detail.)

## Amending Commits
```bash
git commit --amend
```
- Changes the **last** commit only (message and/or content).
- ⚠️ Never amend a commit that has already been **pushed and shared** with others — it rewrites history and can cause conflicts for collaborators.

## Viewing Recent Commits
```bash
git log --oneline -5
```

## Summary
`git commit` permanently records staged changes as a snapshot in your project's history — the fundamental building block of Git's version tracking.
