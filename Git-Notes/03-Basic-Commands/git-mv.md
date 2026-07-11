# git mv

## Purpose
Renames or moves a file (or directory) and stages the change in one step.

## Syntax
```bash
git mv <old-path> <new-path>
```

## Examples

**Rename a file:**
```bash
git mv old-name.txt new-name.txt
```

**Move a file to a different directory:**
```bash
git mv file.txt src/file.txt
```

**Force overwrite of an existing destination:**
```bash
git mv -f file.txt existing-file.txt
```

## `git mv` vs Manual Rename
Using the OS to rename a file (`mv old.txt new.txt`) achieves the same *result*, but requires two Git steps:
```bash
mv old.txt new.txt
git add new.txt
git rm old.txt
```
`git mv` does all of this in a **single command**:
```bash
git mv old.txt new.txt
```

## What Git Actually Tracks
Git doesn't explicitly store "rename" operations. Instead, it detects renames **heuristically** by comparing file content similarity between commits. `git mv` simply performs the rename/stage steps for you — the end result in history is the same either way.

## Verifying the Rename
```bash
git status
# renamed:    old-name.txt -> new-name.txt
```

## Viewing Rename History
```bash
git log --follow -- new-name.txt
```
`--follow` tracks a file's history across renames.

## Summary
`git mv` is a convenience command that renames/moves a file and stages the change in a single step — equivalent to `mv` + `git add` + `git rm`, but faster and less error-prone.
