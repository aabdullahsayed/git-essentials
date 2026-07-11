# Fast-Forward vs Three-Way Merge

Git uses two different strategies to merge branches, depending on how the branch histories have diverged.

## Fast-Forward Merge

**When it happens**: The target branch (e.g., `main`) has **not diverged** — it has no new commits since the feature branch was created. The feature branch is simply "ahead."

```
Before:
main:     C1 → C2
                 \
feature:          C3 → C4

After `git merge feature` (fast-forward):
main:     C1 → C2 → C3 → C4
```

Git just moves the `main` pointer forward to `C4` — **no new commit is created**.

```bash
git checkout main
git merge feature
# Fast-forward
```

**Characteristics:**
- Clean, linear history.
- No merge commit — can make it harder to see that a feature was developed separately.
- Can be disabled with `--no-ff` if you want to always preserve a merge commit for record-keeping.

## Three-Way Merge

**When it happens**: Both branches have diverged — each has new commits since their common ancestor.

```
Before:
main:     C1 → C2 → C5
                 \
feature:          C3 → C4

After `git merge feature` (three-way merge):
main:     C1 → C2 → C5 → C6 (merge commit)
                 \        /
feature:          C3 → C4
```

Git uses **three** snapshots to compute the merge:
1. The common ancestor (`C2`)
2. The tip of the current branch (`C5`)
3. The tip of the branch being merged (`C4`)

It creates a new **merge commit (`C6`)** with **two parent commits**.

```bash
git checkout main
git merge feature
# Merge made by the 'ort' strategy.
```

## Key Differences

| | Fast-Forward | Three-Way |
|---|---|---|
| Divergence | None (linear) | Yes (both branches have new commits) |
| New commit created? | No | Yes (merge commit, 2 parents) |
| History shape | Linear | Shows branch/merge structure |
| Conflict risk | None | Possible, if same lines changed |

## Forcing Behavior

**Force a merge commit even when fast-forward is possible:**
```bash
git merge --no-ff feature
```

**Force fast-forward only (fail if not possible):**
```bash
git merge --ff-only feature
```

## Why It Matters
Some teams prefer `--no-ff` merges for feature branches to keep a clear historical record of when features were merged, even if a fast-forward was technically possible. Others prefer clean, linear history via rebasing before merging.

## Summary
A fast-forward merge simply moves a pointer forward (no divergence). A three-way merge creates a new commit that combines two divergent histories using their common ancestor as a reference point.
