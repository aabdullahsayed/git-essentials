# git revert

## Purpose
Creates a **new commit** that undoes the changes introduced by a previous commit — without altering existing history. This makes it the **safe** way to undo changes on shared/public branches.

## Syntax
```bash
git revert <commit>
```

## Basic Example
```bash
git revert a1b2c3d
```
This opens an editor with a default message like:
```
Revert "Add broken feature X"

This reverts commit a1b2c3d.
```
A **new commit** is created that applies the inverse of the changes in `a1b2c3d`.

## How It Differs from `git reset`
```
Before:
main: C1 → C2 → C3 (bad commit)

After git revert C3:
main: C1 → C2 → C3 → C4 (undoes C3's changes)

After git reset --hard C2:
main: C1 → C2   (C3 is gone from history)
```
- `revert` **adds** a new commit — history is preserved, safe for shared branches.
- `reset` **removes** commits — rewrites history, dangerous if already pushed/shared.

## Common Usage

**Revert the most recent commit:**
```bash
git revert HEAD
```

**Revert without automatically committing (stage the revert for review first):**
```bash
git revert --no-commit a1b2c3d
git commit -m "Revert broken feature X"
```

**Revert a range of commits:**
```bash
git revert C1..C3
```
(Reverts each commit individually, from newest to oldest, creating multiple revert commits — unless combined with `--no-commit`.)

**Revert a merge commit** (requires specifying the parent to revert to):
```bash
git revert -m 1 <merge-commit-hash>
```
`-m 1` means "keep the changes from parent 1" (usually the branch you merged into).

## When to Use `git revert`
- Undoing a bad commit that's already been **pushed and shared** with others.
- Maintaining a clean audit trail — you can see both the original mistake and its fix in history.
- Safer default choice in team environments where rewriting history is discouraged/forbidden.

## Handling Conflicts During Revert
If the revert can't be applied automatically (e.g., subsequent commits touched the same lines):
```bash
git revert a1b2c3d
# CONFLICT (content): Merge conflict in app.js
```
Resolve like a normal merge conflict, then:
```bash
git add app.js
git revert --continue
```

## Summary
`git revert` is the safe, history-preserving way to undo a commit — ideal for shared branches where rewriting history (`git reset`) would disrupt collaborators.
