# git stash

## Purpose
Temporarily saves uncommitted changes (staged and/or unstaged) so you can switch context (e.g., branches) without committing incomplete work, then reapply them later.

## Syntax
```bash
git stash [subcommand]
```

## Common Usage

**Stash current changes (tracked files only, staged + unstaged):**
```bash
git stash
# or explicitly
git stash push -m "WIP: refactor auth logic"
```

**Include untracked files in the stash:**
```bash
git stash -u
# or
git stash --include-untracked
```

**Include even ignored files:**
```bash
git stash -a
```

**List all stashes:**
```bash
git stash list
```
```
stash@{0}: On main: WIP: refactor auth logic
stash@{1}: On feature/cart: WIP: cart totals
```

**Apply the most recent stash (keeps it in the stash list):**
```bash
git stash apply
```

**Apply and remove the most recent stash:**
```bash
git stash pop
```

**Apply a specific stash:**
```bash
git stash apply stash@{1}
```

**View the contents of a stash (diff):**
```bash
git stash show -p stash@{0}
```

**Delete a specific stash:**
```bash
git stash drop stash@{0}
```

**Delete ALL stashes:**
```bash
git stash clear
```

**Create a new branch from a stash** (useful if applying would cause conflicts):
```bash
git stash branch new-branch-name stash@{0}
```

## `apply` vs `pop`
| | `git stash apply` | `git stash pop` |
|---|---|---|
| Reapplies changes | Yes | Yes |
| Removes from stash list | No | Yes |
| Use case | Want to apply the same stash to multiple branches | One-time use, done with it after applying |

## Typical Workflow
```bash
# Working on feature/login, urgent bug reported
git stash push -m "WIP: login form"
git switch main
git switch -b hotfix/urgent-bug
# ...fix the bug, commit, push...
git switch feature/login
git stash pop          # Resume where you left off
```

## Handling Stash Conflicts
If reapplying a stash conflicts with current changes, Git will mark conflicts just like a merge — resolve manually, then `git add` the resolved files. (The stash entry is **not** automatically dropped if `pop` results in conflicts — drop it manually once resolved.)

## Summary
`git stash` is a temporary shelf for uncommitted changes — perfect for quickly switching context (e.g., to fix an urgent bug) without committing half-finished work.
