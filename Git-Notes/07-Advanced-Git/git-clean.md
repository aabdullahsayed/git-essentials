# git clean

## Purpose
Removes **untracked files** (files not added to Git) from the working directory — useful for cleaning up build artifacts, temp files, or stray files not covered by `.gitignore`.

## Syntax
```bash
git clean [options]
```

## ⚠️ Important Safety Note
`git clean` **permanently deletes files** — there's no undo (they're not committed, so Git has no record of them). Always run with `-n` (dry run) first!

## Common Usage

**Dry run — preview what WOULD be deleted (does nothing yet):**
```bash
git clean -n
# or
git clean --dry-run
```

**Remove untracked files (excludes directories):**
```bash
git clean -f
```
(`-f` / `--force` is required — Git refuses to run `clean` otherwise, as a safety measure, unless `clean.requireForce` is set to `false`.)

**Remove untracked files AND directories:**
```bash
git clean -fd
```

**Also remove files ignored by `.gitignore`:**
```bash
git clean -fx
```

**Remove ONLY ignored files (keep other untracked files):**
```bash
git clean -fX
```
(Note: uppercase `-X` targets *only* ignored files; lowercase `-x` includes them alongside regular untracked files.)

**Interactive mode (choose what to delete):**
```bash
git clean -i
```

## Example Workflow
```bash
git status
# Untracked files:
#   temp.log
#   build/
#   notes.txt

git clean -n
# Would remove temp.log
# Would remove notes.txt
# (build/ not shown — need -d flag for directories)

git clean -fd
# Removing temp.log
# Removing notes.txt
# Removing build/
```

## `git clean` vs `.gitignore`
- `.gitignore` **prevents** files from being tracked/shown in `git status` in the first place.
- `git clean` **deletes** untracked files that currently exist in your working directory (whether ignored or not, depending on flags).

## Common Use Case: Fully Resetting a Repo to a Clean State
```bash
git reset --hard HEAD    # Discard tracked file changes
git clean -fd            # Remove untracked files/directories
```
This combination gives you an exactly-matches-the-last-commit working directory — useful before running CI-like checks locally.

## Summary
`git clean` removes untracked files from your working directory — a powerful but irreversible operation, so always dry-run (`-n`) first before using `-f` to actually delete anything.
