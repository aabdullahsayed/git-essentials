# git restore

## Purpose
Introduced in Git 2.23 to provide a dedicated, clearer command for **restoring files** — separating this responsibility from the overloaded `git checkout`.

## Syntax
```bash
git restore [options] <file>
```

## Common Usage

**Discard unstaged changes in the working directory (restore file to last commit):**
```bash
git restore file.txt
```

**Unstage a file (move it from staged back to unstaged, keep the actual edits):**
```bash
git restore --staged file.txt
```

**Both unstage AND discard changes (fully revert a file to last commit):**
```bash
git restore --staged --worktree file.txt
```

**Restore a file from a specific commit:**
```bash
git restore --source=a1b2c3d file.txt
```

**Restore all files in the current directory:**
```bash
git restore .
```

**Restore a file from a specific branch:**
```bash
git restore --source=feature-branch file.txt
```

## `git restore` vs `git checkout` vs `git reset`

| Task | Old way (`checkout`/`reset`) | New way (`restore`) |
|---|---|---|
| Discard working directory changes | `git checkout -- file.txt` | `git restore file.txt` |
| Unstage a file | `git reset HEAD file.txt` | `git restore --staged file.txt` |

## Example Workflow
```bash
echo "oops" >> app.js
git status
# modified: app.js (not staged)

git restore app.js       # Discard the "oops" change
git status
# nothing to commit, working tree clean
```

**Unstaging example:**
```bash
git add app.js
git status
# Changes to be committed: app.js

git restore --staged app.js
git status
# Changes not staged for commit: app.js
```

## ⚠️ Important Warning
`git restore <file>` (without `--staged`) **permanently discards** unsaved changes in your working directory for that file — there's no undo unless the content exists elsewhere (e.g., in your editor's undo history or a stash).

## Summary
`git restore` is the modern, purpose-built command for undoing changes to files — whether unstaging them or discarding edits entirely — offering clearer semantics than the older, overloaded `git checkout`.
