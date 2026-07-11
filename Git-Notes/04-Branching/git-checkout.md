# git checkout

## Purpose
A multi-purpose command used to **switch branches**, **restore files**, or check out specific commits. (Note: Git 2.23+ split much of this functionality into `git switch` and `git restore` for clarity — see `git-switch.md`.)

## Syntax
```bash
git checkout <branch-name>
git checkout -b <new-branch>
git checkout <commit-hash>
git checkout -- <file>
```

## Common Usage

**Switch to an existing branch:**
```bash
git checkout main
```

**Create a new branch and switch to it:**
```bash
git checkout -b feature/cart
```

**Create a branch from a specific starting point:**
```bash
git checkout -b hotfix/urgent main
```

**Check out a specific commit (detached HEAD state):**
```bash
git checkout a1b2c3d
```
⚠️ This puts you in **detached HEAD** — you're not on any branch. Any new commits here can be lost unless you create a branch to save them:
```bash
git checkout -b new-branch-name
```

**Discard changes to a file (restore to last commit):**
```bash
git checkout -- file.txt
```

**Check out a specific file from another branch:**
```bash
git checkout feature/cart -- src/cart.js
```

## Detached HEAD Explained
Normally, HEAD points to a branch, which points to a commit:
```
HEAD → main → C3
```
When you check out a specific commit directly, HEAD points **directly to that commit**:
```
HEAD → C2 (detached)
```
Any commits made here aren't attached to a branch and can be garbage collected if you switch away without saving them.

## `git checkout` vs `git switch` / `git restore`
Because `checkout` does *too many things* (switch branches AND restore files), Git introduced dedicated commands:
- `git switch` — for changing branches.
- `git restore` — for restoring files.

Modern best practice favors these more explicit commands, but `checkout` still works and is widely used in existing scripts/tutorials.

## Summary
`git checkout` is a versatile (if overloaded) command for switching branches, restoring files, and inspecting old commits. For clarity, consider using `git switch` and `git restore` instead in new workflows.
