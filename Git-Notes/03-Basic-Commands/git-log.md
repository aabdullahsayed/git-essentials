# git log

## Purpose
Displays the commit history of the current branch.

## Syntax
```bash
git log
```

## Common Variations

**Compact, one line per commit:**
```bash
git log --oneline
```

**Show a graph of branches and merges:**
```bash
git log --oneline --graph --all --decorate
```

**Limit to N most recent commits:**
```bash
git log -5
```

**Show changes (diffs) introduced by each commit:**
```bash
git log -p
```

**Show stats (files changed, insertions/deletions):**
```bash
git log --stat
```

**Filter by author:**
```bash
git log --author="Jane"
```

**Filter by date range:**
```bash
git log --since="2 weeks ago" --until="yesterday"
```

**Filter by commit message content:**
```bash
git log --grep="fix"
```

**Show commits that changed a specific file:**
```bash
git log -- path/to/file.js
```

**Show commits between two branches:**
```bash
git log main..feature
```

## Example Output
```
commit 4f3a2b1 (HEAD -> main, origin/main)
Author: Jane Doe <jane@example.com>
Date:   Mon Jul 8 10:15:32 2026 +0600

    feat: add user authentication
```

## Useful Custom Format
```bash
git log --pretty=format:"%h - %an, %ar : %s"
```
Output:
```
4f3a2b1 - Jane Doe, 2 days ago : feat: add user authentication
```

## Creating a Handy Alias
```bash
git config --global alias.lg "log --oneline --graph --all --decorate"
```
Then just run `git lg`.

## Summary
`git log` is your window into project history — essential for understanding what changed, when, and by whom. Mastering its flags (`--oneline`, `--graph`, `--stat`, `--grep`) makes navigating history much faster.
