# Git Branches — Overview

## What is a Branch?
A **branch** in Git is simply a lightweight, movable **pointer to a commit**. The default branch is traditionally called `master` or, more commonly today, `main`.

```
main → C1 → C2 → C3
```
When you create a new branch, Git just creates a new pointer — it does **not** copy the entire codebase. This is why branching in Git is nearly instantaneous, unlike in older VCS tools.

## Why Use Branches?
- Work on new features without affecting the stable `main` branch.
- Experiment freely — delete the branch if the idea doesn't work out.
- Enable multiple developers to work in parallel without conflicts.
- Support structured workflows (feature branches, release branches, hotfixes).

## Visualizing Branches
```
        C4---C5   (feature)
       /
C1---C2---C3       (main)
```
Here, `feature` branched off from `C2` and has its own commits (`C4`, `C5`), while `main` continues independently with `C3`.

## HEAD
**HEAD** is a pointer to the branch you currently have checked out. When you commit, the current branch pointer moves forward to the new commit, and HEAD (pointing to the branch) moves with it.

```
HEAD → main → C3
```

## Common Branch Operations (quick preview)
| Task | Command |
|---|---|
| List branches | `git branch` |
| Create a branch | `git branch <name>` |
| Switch to a branch | `git checkout <name>` / `git switch <name>` |
| Create + switch | `git checkout -b <name>` / `git switch -c <name>` |
| Merge a branch | `git merge <name>` |
| Delete a branch | `git branch -d <name>` |

(See individual command files for details.)

## Branching Strategy Matters
How you name, structure, and manage branches significantly impacts team productivity. Popular strategies include **GitFlow**, **GitHub Flow**, and **Trunk-Based Development** (see `08-GitHub-Workflow/`).

## Summary
Branches are Git's most powerful feature — cheap, fast pointers that let you isolate work, experiment safely, and collaborate without stepping on each other's changes.
