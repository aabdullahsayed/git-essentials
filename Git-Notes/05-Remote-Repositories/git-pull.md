# git pull

## Purpose
Downloads changes from a remote repository **and immediately merges** (or rebases) them into your current branch. Effectively `git fetch` + `git merge` (or `git rebase`) in one step.

## Syntax
```bash
git pull [remote] [branch]
```

## Common Usage

**Pull from the tracked remote branch:**
```bash
git pull
```

**Pull from a specific remote/branch:**
```bash
git pull origin main
```

**Pull using rebase instead of merge (keeps history linear):**
```bash
git pull --rebase
```

**Set rebase as the default pull strategy globally:**
```bash
git config --global pull.rebase true
```

## What Happens Internally
```bash
git pull
# is equivalent to:
git fetch origin
git merge origin/main
```

## `git pull` vs `git pull --rebase`

| | `git pull` (merge) | `git pull --rebase` |
|---|---|---|
| History | Creates a merge commit if diverged | Replays your commits on top of the remote's — linear history |
| Safety | Safer for shared branches | Avoid rebasing commits already pushed/shared |
| Common use | Default behavior | Preferred by teams wanting clean, linear history |

## Handling Pull Conflicts
If your local branch has diverged from the remote, `git pull` may result in a merge conflict:
```bash
git pull
# CONFLICT (content): Merge conflict in app.js
```
Resolve it just like a regular merge conflict (see `04-Branching/Merge-Conflict.md`), then:
```bash
git add app.js
git commit
```

## Best Practices
- **Commit or stash local changes** before pulling to avoid conflicts with uncommitted work.
- Prefer `git pull --rebase` for a cleaner, linear project history — especially on feature branches.
- Always `git pull` before starting new work to stay in sync with teammates.

## Common Error: "fatal: Not possible to fast-forward"
This happens when both local and remote branches have diverged and Git can't fast-forward. Either allow a merge commit (default) or rebase:
```bash
git pull --rebase
```

## Summary
`git pull` combines fetching and merging (or rebasing) into a single command — the most common way developers stay up to date with a shared remote branch.
