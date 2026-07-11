# git merge

## Purpose
Combines the changes from one branch into another, integrating divergent lines of development.

## Syntax
```bash
git checkout main
git merge feature-branch
```
(This merges `feature-branch` **into** the currently checked-out branch, here `main`.)

## Types of Merges

### 1. Fast-Forward Merge
Happens when the current branch has **no new commits** since the feature branch diverged — Git simply moves the branch pointer forward.
```
Before:  main → C1 → C2
                       \
                        feature → C3 → C4

After merge (fast-forward):
main → C1 → C2 → C3 → C4
```
```bash
git merge feature
```

### 2. Three-Way Merge
Happens when **both** branches have new commits since diverging. Git creates a new **merge commit** with two parents.
```
main:    C1 → C2 → C5
                \      \
feature:         C3 → C4 → (merge commit C6)
```
```bash
git merge feature
# Creates a new merge commit combining both histories
```

## Merge Commit Message
Git opens an editor for a default merge commit message (e.g., `Merge branch 'feature' into main`) — you can accept it or customize it.

## Merge Options

**No fast-forward (always create a merge commit, even if fast-forward is possible):**
```bash
git merge --no-ff feature
```
Useful for preserving a clear record that a feature was developed on a separate branch.

**Squash merge (combine all feature commits into a single new commit):**
```bash
git merge --squash feature
git commit -m "Add complete feature X"
```

**Abort a merge in progress (e.g., due to conflicts):**
```bash
git merge --abort
```

## Handling Merge Conflicts
If the same lines were changed differently in both branches, Git can't auto-merge and will mark a **conflict** (see `Merge-Conflict.md` for full details):
```bash
git status                  # Shows conflicted files
# Manually edit files to resolve conflicts
git add <resolved-file>
git commit                  # Completes the merge
```

## Merge vs Rebase
| | Merge | Rebase |
|---|---|---|
| History | Preserves full branch history (non-linear) | Rewrites history (linear) |
| New commit? | Yes (merge commit, unless fast-forward) | No new commit; replays commits |
| Safety on shared branches | Safe | Risky if branch is shared/pushed |

(See `07-Advanced-Git/git-rebase.md` for a deeper comparison.)

## Summary
`git merge` integrates changes from one branch into another, either via a simple fast-forward or by creating a merge commit that preserves both histories.
