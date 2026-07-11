# git add

## Purpose
Moves changes from the **working directory** into the **staging area (index)**, marking them to be included in the next commit.

## Syntax
```bash
git add <file>
git add <directory>
git add .
```

## Examples

**Stage a single file:**
```bash
git add index.html
```

**Stage multiple specific files:**
```bash
git add index.html style.css
```

**Stage all changes in the current directory (and subdirectories):**
```bash
git add .
```

**Stage all changes in the entire repo (including parent directories):**
```bash
git add -A
```

**Stage only modified/deleted tracked files (not new/untracked):**
```bash
git add -u
```

**Interactively choose changes to stage (patch mode):**
```bash
git add -p
```
This lets you review and stage changes **hunk by hunk** — very useful for splitting one big change into logical commits.

## Why Staging Exists
The staging area lets you build a commit **incrementally**. You don't have to commit every changed file at once — you can select exactly what goes into each commit, enabling clean, focused commit history.

## Undoing a Stage
```bash
git restore --staged <file>
```
(Older syntax: `git reset HEAD <file>`)

## Checking What's Staged
```bash
git status
git diff --staged     # See the actual staged changes
```

## Common Mistakes
- Using `git add .` without reviewing `git status` first — you might stage files you didn't mean to (e.g., secrets, build artifacts). Always check `.gitignore`.
- Forgetting that `git add` doesn't commit — it only stages.

## Summary
`git add` is the bridge between editing files and committing them — it lets you precisely control what goes into your next snapshot.
