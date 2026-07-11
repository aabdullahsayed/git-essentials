# git cherry-pick

## Purpose
Applies the changes from a **specific commit** (from any branch) onto your current branch — without merging the entire branch.

## Syntax
```bash
git cherry-pick <commit-hash>
```

## Basic Example
```
main:      C1 → C2 → C3
hotfix:    C1 → C4 (critical bug fix)

git checkout main
git cherry-pick C4

Result:
main:      C1 → C2 → C3 → C4' (same changes, new commit)
```

## Common Usage

**Cherry-pick a single commit:**
```bash
git cherry-pick a1b2c3d
```

**Cherry-pick multiple commits:**
```bash
git cherry-pick a1b2c3d e4f5g6h
```

**Cherry-pick a range of commits:**
```bash
git cherry-pick a1b2c3d..h7i8j9k
```
(Note: the starting commit `a1b2c3d` is **excluded**; use `^` to include it: `a1b2c3d^..h7i8j9k`.)

**Cherry-pick without auto-committing (review/edit first):**
```bash
git cherry-pick --no-commit a1b2c3d
git commit -m "Custom message"
```

**Continue after resolving a cherry-pick conflict:**
```bash
git cherry-pick --continue
```

**Abort a cherry-pick in progress:**
```bash
git cherry-pick --abort
```

## When to Use Cherry-Pick

1. **Hotfixes**: Apply a critical bug fix from a `hotfix` branch directly to `main` and `release` branches without merging unrelated work.
2. **Selective feature backporting**: Bring a specific improvement from a development branch into an older release branch.
3. **Recovering a single commit**: Pull one useful commit from an otherwise abandoned/experimental branch.

## Cherry-Pick vs Merge vs Rebase

| | Cherry-pick | Merge | Rebase |
|---|---|---|---|
| Scope | One (or a few) specific commits | Entire branch | Entire branch |
| History | New commit, same changes | Preserves full branch history | Rewrites commit history |
| Use case | Selective changes | Combine full branches | Linearize history |

## Handling Conflicts
Cherry-picking can cause conflicts if the target branch has diverged significantly:
```bash
git cherry-pick a1b2c3d
# CONFLICT (content): Merge conflict in app.js
```
Resolve as usual, then:
```bash
git add app.js
git cherry-pick --continue
```

## Summary
`git cherry-pick` lets you selectively apply individual commits from one branch to another — ideal for hotfixes and backporting specific changes without merging unrelated history.
