# git reflog

## Purpose
Shows a log of everywhere **HEAD** (and branch pointers) have pointed to over time — including commits that are no longer reachable from any branch (e.g., after a `reset --hard` or a rebase). This makes it Git's **safety net** for recovering "lost" work.

## Syntax
```bash
git reflog
```

## Example Output
```
a1b2c3d (HEAD -> main) HEAD@{0}: commit: Fix login bug
e4f5g6h HEAD@{1}: reset: moving to HEAD~1
h7i8j9k HEAD@{2}: commit: Add broken feature
h7i8j9k HEAD@{3}: commit: Initial commit
```
Each entry shows what action moved HEAD (commit, reset, checkout, rebase, merge, etc.) and when.

## Why Reflog Exists
Unlike `git log` (which only shows commits reachable from the current branch), `git reflog` tracks **every movement of HEAD**, including commits that were "removed" via `reset --hard` or `rebase`. These commits aren't immediately deleted — they remain in Git's object database until garbage collected (typically after 30-90 days by default).

## Common Recovery Scenario: Undoing a Bad `reset --hard`
```bash
git reset --hard HEAD~3    # Oops! Lost 3 commits
git reflog
# a1b2c3d HEAD@{0}: reset: moving to HEAD~3
# e4f5g6h HEAD@{1}: commit: Important work  <-- what we want back!

git reset --hard e4f5g6h   # Restore to that commit
```

## Common Recovery Scenario: Recovering a Deleted Branch
```bash
git branch -D feature/important
# Oops!

git reflog
# Find the last commit hash from that branch's history

git branch feature/important <commit-hash>
# Branch recreated
```

## Reflog Is Local Only
⚠️ The reflog exists **only on your local machine** — it's not pushed to remotes and not shared with collaborators. It also has an expiration (Git garbage collects unreachable commits eventually, default ~90 days for reachable-from-reflog entries, 30 days for unreachable ones).

## Viewing Reflog for a Specific Branch
```bash
git reflog show feature-branch
```

## Summary
`git reflog` is Git's built-in undo history for HEAD movements — an essential recovery tool when commits seem "lost" due to reset, rebase, or branch deletion. Always check `git reflog` before assuming work is gone forever.
