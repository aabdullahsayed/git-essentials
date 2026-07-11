# git reset

## Purpose
Moves the current branch pointer (HEAD) to a different commit, with three modes controlling what happens to the staging area and working directory.

## Syntax
```bash
git reset [--soft|--mixed|--hard] <commit>
```

## The Three Modes

### 1. `--soft`
Moves HEAD (and the branch pointer) to the target commit. **Staging area and working directory are untouched** — all changes from the "undone" commits appear as staged changes.
```bash
git reset --soft HEAD~1
```
Use case: "Undo my last commit, but keep everything staged so I can re-commit differently."

### 2. `--mixed` (default)
Moves HEAD, **and also resets the staging area** to match the target commit. Working directory files are untouched — changes appear as unstaged.
```bash
git reset HEAD~1
# or explicitly:
git reset --mixed HEAD~1
```
Use case: "Undo my last commit AND unstage everything, but keep my file edits."

### 3. `--hard`
Moves HEAD, resets the staging area, **AND overwrites the working directory** to match the target commit. ⚠️ **All uncommitted changes are permanently lost.**
```bash
git reset --hard HEAD~1
```
Use case: "Completely discard my last commit and all related changes — go back in time."

## Visual Comparison

| Mode | HEAD/Branch | Staging Area | Working Directory |
|---|---|---|---|
| `--soft` | Moved | Unchanged (old changes staged) | Unchanged |
| `--mixed` (default) | Moved | Reset to match target | Unchanged (old changes unstaged) |
| `--hard` | Moved | Reset to match target | Reset to match target (⚠️ data loss) |

## Common Examples

**Undo the last commit but keep changes staged:**
```bash
git reset --soft HEAD~1
```

**Unstage a file (keep changes in working directory):**
```bash
git reset HEAD file.txt
# modern equivalent:
git restore --staged file.txt
```

**Completely discard the last 2 commits and all changes:**
```bash
git reset --hard HEAD~2
```

**Reset to match a specific commit hash:**
```bash
git reset --hard a1b2c3d
```

## ⚠️ Danger of `--hard`
`git reset --hard` **permanently deletes uncommitted work** in the working directory. Always double check with `git status` and `git diff` before running it. If you accidentally reset committed work, `git reflog` can often help you recover (see `git-reflog.md`).

## `git reset` vs `git revert`
| | `git reset` | `git revert` |
|---|---|---|
| History | Rewrites history (removes commits) | Preserves history (adds a new "undo" commit) |
| Safe for shared/pushed branches? | No | Yes |
| Use case | Local cleanup before pushing | Undoing changes already shared with others |

## Summary
`git reset` moves your branch pointer backward (or to any commit), with three modes (`--soft`, `--mixed`, `--hard`) controlling how much of your staging area and working directory get rewound along with it.
