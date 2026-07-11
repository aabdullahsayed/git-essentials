# git fetch

## Purpose
Downloads commits, branches, and tags from a remote repository **without** merging them into your local working branches.

## Syntax
```bash
git fetch [remote]
```

## Common Usage

**Fetch from the default remote (`origin`):**
```bash
git fetch
```

**Fetch from a specific remote:**
```bash
git fetch upstream
```

**Fetch a specific branch:**
```bash
git fetch origin develop
```

**Fetch all remotes:**
```bash
git fetch --all
```

**Fetch and remove references to branches deleted on the remote:**
```bash
git fetch --prune
```

## What `git fetch` Does (and Doesn't Do)
- ✅ Downloads new commits/branches/tags from the remote.
- ✅ Updates remote-tracking branches (e.g., `origin/main`).
- ❌ Does **NOT** modify your local working branches.
- ❌ Does **NOT** merge anything into your current branch.

```
Before fetch:
main         → C1 → C2
origin/main  → C1 → C2   (stale)

Remote has moved on: origin/main is now at C1→C2→C3→C4

After `git fetch`:
main         → C1 → C2          (unchanged)
origin/main  → C1 → C2 → C3 → C4  (updated!)
```

## Why Use `fetch` Instead of `pull`?
`git fetch` is the **safe** way to see what's changed on the remote without immediately altering your working branch. You can review the incoming changes first:
```bash
git fetch origin
git log main..origin/main        # See what's new
git diff main origin/main        # See the actual changes
git merge origin/main            # Merge when ready
```

## `git fetch` vs `git pull`
| | `git fetch` | `git pull` |
|---|---|---|
| Downloads changes | Yes | Yes |
| Merges into current branch | No | Yes (fetch + merge automatically) |
| Risk | Low (just updates tracking refs) | Higher (can cause immediate conflicts) |

## Summary
`git fetch` safely syncs your knowledge of the remote repository's state without touching your working branch — giving you a chance to review changes before merging them in.
