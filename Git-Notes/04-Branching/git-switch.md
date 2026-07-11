# git switch

## Purpose
Introduced in Git 2.23 to provide a clearer, dedicated command for **switching branches** — separating this responsibility from the overloaded `git checkout`.

## Syntax
```bash
git switch <branch-name>
```

## Common Usage

**Switch to an existing branch:**
```bash
git switch main
```

**Create a new branch and switch to it:**
```bash
git switch -c feature/payments
```
(`-c` = create)

**Create a branch from a specific starting point (e.g., a tag or another branch):**
```bash
git switch -c hotfix/urgent v1.2.0
```

**Switch back to the previously checked-out branch:**
```bash
git switch -
```
(Similar to `cd -` in shells.)

**Switch to a remote branch (creates a local tracking branch):**
```bash
git switch feature/payments
```
If `feature/payments` exists on the remote but not locally, Git automatically creates a local branch tracking it.

**Discard local changes and force switch:**
```bash
git switch -f main
# or
git switch --discard-changes main
```

## `git switch` vs `git checkout`

| Task | `git checkout` (old) | `git switch` (new) |
|---|---|---|
| Switch branch | `git checkout main` | `git switch main` |
| Create + switch | `git checkout -b new` | `git switch -c new` |
| Restore a file | `git checkout -- file` | ❌ (use `git restore` instead) |

`git switch` is intentionally **limited to branch operations only** — it cannot restore files, which reduces the risk of accidentally discarding changes.

## Why Use `git switch`?
- Clearer intent — the command name matches what it does.
- Safer — fewer chances of accidentally checking out a commit and ending up in detached HEAD when you meant to switch branches.
- Modern Git tutorials and teams increasingly prefer it over `checkout`.

## Summary
`git switch` is the modern, clearer alternative to `git checkout` for changing branches — recommended for new projects and workflows, though `checkout` remains widely supported for backward compatibility.
