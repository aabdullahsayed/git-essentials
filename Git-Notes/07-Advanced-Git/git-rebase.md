# git rebase

## Purpose
Reapplies commits from one branch onto another base commit, creating a **linear** history instead of a merge commit.

## Syntax
```bash
git rebase <base-branch>
```

## Basic Example
```
Before:
main:     C1 → C2 → C3
                 \
feature:          C4 → C5

git checkout feature
git rebase main

After:
main:     C1 → C2 → C3
                        \
feature:                 C4' → C5'
```
Commits `C4` and `C5` are replayed on top of `C3`, creating **new commits** (`C4'`, `C5'`) with different hashes — the originals are effectively discarded.

## Common Usage

**Rebase current branch onto main:**
```bash
git checkout feature
git rebase main
```

**Interactive rebase (edit, squash, reorder, drop commits):**
```bash
git rebase -i HEAD~5
```
Opens an editor listing the last 5 commits:
```
pick a1b2c3d Add login form
pick e4f5g6h Fix typo
pick h7i8j9k Add validation
```
Available actions:
| Command | Effect |
|---|---|
| `pick` | Keep the commit as-is |
| `reword` | Keep changes, edit the commit message |
| `edit` | Pause to amend the commit |
| `squash` | Combine with the previous commit (keep both messages) |
| `fixup` | Combine with the previous commit (discard this message) |
| `drop` | Remove the commit entirely |

**Continue after resolving conflicts:**
```bash
git rebase --continue
```

**Abort a rebase in progress:**
```bash
git rebase --abort
```

**Skip a problematic commit during rebase:**
```bash
git rebase --skip
```

## Merge vs Rebase

| | Merge | Rebase |
|---|---|---|
| History | Non-linear (preserves branch structure) | Linear (rewrites commit history) |
| New commit | Merge commit (2 parents) | No merge commit; commits are rewritten |
| Commit hashes | Unchanged | Changed (new SHA for each replayed commit) |
| Safety | Safe on shared branches | ⚠️ Dangerous on shared/pushed branches |

## The Golden Rule of Rebasing
> **Never rebase commits that have already been pushed and shared with others.**

Rebasing rewrites commit history (new hashes). If others have already pulled the old commits, this creates diverging histories and painful conflicts for everyone.

✅ Safe: rebasing a local feature branch that only you have.
❌ Unsafe: rebasing `main` or any branch others are actively working from.

## Why Use Rebase?
- Produces a clean, linear, easy-to-read history.
- Avoids unnecessary merge commits cluttering the log.
- Makes `git bisect` and `git log` easier to follow.

## Interactive Rebase Example: Squashing Commits
```bash
git rebase -i HEAD~3
```
```
pick a1b2c3d Add login form
squash e4f5g6h Fix typo
squash h7i8j9k Add validation
```
Result: the 3 commits become **1** clean commit before merging/pushing.

## Summary
`git rebase` rewrites commit history to create a cleaner, linear timeline — powerful for tidying up local work before sharing, but dangerous if used on commits others already depend on.
