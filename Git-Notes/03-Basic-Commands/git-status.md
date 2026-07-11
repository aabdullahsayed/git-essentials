# git status

## Purpose
Shows the current state of the working directory and staging area — which files are modified, staged, or untracked.

## Syntax
```bash
git status
```

## Example Output
```
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   index.html

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   style.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        notes.txt
```

## Understanding the Output

| Section | Meaning |
|---|---|
| Changes to be committed | Staged changes — will be included in the next commit |
| Changes not staged for commit | Tracked files with modifications not yet staged |
| Untracked files | New files Git doesn't know about yet |

## Short Format
For a more compact view:
```bash
git status -s
# or
git status --short
```
Output symbols:
```
 M  modified, not staged
M   modified, staged
A   new file, staged
??  untracked
D   deleted
UU  merge conflict
```

## Show Branch Info Too
```bash
git status -sb
```

## Common Use
Run `git status` frequently — before and after `git add`, before committing, and after pulling — to stay aware of your repo's state.

## Summary
`git status` is the most commonly run Git command. It tells you exactly what will be included in your next commit and what still needs attention.
