# git rm

## Purpose
Removes files from both the **working directory** and **Git's tracking** (staging them for deletion in the next commit).

## Syntax
```bash
git rm <file>
```

## Examples

**Remove a file (from disk and from Git):**
```bash
git rm old-file.txt
git commit -m "Remove old-file.txt"
```

**Remove a file from Git tracking but keep it on disk:**
```bash
git rm --cached secrets.env
```
Useful when you accidentally committed a file that should have been in `.gitignore`.

**Remove a directory recursively:**
```bash
git rm -r old-folder/
```

**Force removal (even with uncommitted changes):**
```bash
git rm -f config.local.js
```

## Difference: `git rm` vs plain `rm`
| | `rm file.txt` | `git rm file.txt` |
|---|---|---|
| Deletes from disk | Yes | Yes |
| Stages the deletion | No (must `git add` after) | Yes, automatically |

If you use the OS `rm` command directly, you still need to run `git add <file>` (or `git rm` won't be needed, but you must stage the deletion) before committing.

## Undoing a `git rm`
If not yet committed:
```bash
git restore --staged <file>
git restore <file>
```

If already committed, you can restore the file from history:
```bash
git checkout <commit>^ -- <file>
```

## Common Use Case: Removing a Secret File from Tracking
```bash
git rm --cached .env
echo ".env" >> .gitignore
git commit -m "Stop tracking .env file"
```
⚠️ Note: this doesn't remove the file from **past commits/history** — for that, tools like `git filter-repo` or BFG Repo-Cleaner are needed.

## Summary
`git rm` safely removes files from both your working directory and Git's tracking, staging the deletion for the next commit. Use `--cached` to untrack a file while keeping it locally.
