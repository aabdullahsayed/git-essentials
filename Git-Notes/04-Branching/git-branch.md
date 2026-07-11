# git branch

## Purpose
Lists, creates, renames, or deletes branches.

## Syntax
```bash
git branch [options] [branch-name]
```

## Common Usage

**List local branches (current branch marked with `*`):**
```bash
git branch
```

**List all branches, including remote-tracking:**
```bash
git branch -a
```

**List remote branches only:**
```bash
git branch -r
```

**Create a new branch (does NOT switch to it):**
```bash
git branch feature/login
```

**Rename the current branch:**
```bash
git branch -m new-branch-name
```

**Rename a specific branch:**
```bash
git branch -m old-name new-name
```

**Delete a branch (safe — refuses if unmerged changes exist):**
```bash
git branch -d feature/login
```

**Force delete a branch (even if unmerged):**
```bash
git branch -D feature/login
```

**Show the last commit on each branch:**
```bash
git branch -v
```

**Show branches merged into current branch:**
```bash
git branch --merged
```

**Show branches NOT yet merged:**
```bash
git branch --no-merged
```

## Important Note
`git branch <name>` only **creates** the branch — it does not switch your working directory to it. To create and switch in one step, use:
```bash
git checkout -b <name>
# or (modern)
git switch -c <name>
```

## Deleting a Remote Branch
```bash
git push origin --delete feature/login
```

## Summary
`git branch` is the primary command for managing (listing, creating, renaming, deleting) branches — the core building block of Git's parallel-development model.
