# git clone

## Purpose
Creates a local copy of an existing remote repository, including its **entire history** and all branches.

## Syntax
```bash
git clone <repository-url> [directory-name]
```

## Examples

**Clone via HTTPS:**
```bash
git clone https://github.com/username/repo.git
```

**Clone via SSH:**
```bash
git clone git@github.com:username/repo.git
```

**Clone into a custom folder name:**
```bash
git clone https://github.com/username/repo.git my-folder
```

**Clone a specific branch only:**
```bash
git clone -b develop https://github.com/username/repo.git
```

**Shallow clone (limited history — faster for large repos):**
```bash
git clone --depth 1 https://github.com/username/repo.git
```

## What Happens
- Downloads the full `.git` database (all commits, branches, tags).
- Checks out the default branch (usually `main` or `master`) into your working directory.
- Automatically sets up a remote named `origin` pointing to the source URL.

## Verify the Remote
```bash
git remote -v
# origin  https://github.com/username/repo.git (fetch)
# origin  https://github.com/username/repo.git (push)
```

## `git clone` vs `git init`
| | `git clone` | `git init` |
|---|---|---|
| Use case | Copying an existing remote repo | Starting a brand-new repo |
| Remote configured? | Yes, automatically (`origin`) | No, must add manually |
| History | Full history downloaded | Empty — starts fresh |

## Common Errors
- `Repository not found`: check the URL, or your access permissions (private repo).
- `Permission denied (publickey)`: SSH key not set up correctly (see `SSH-Keys.md`).

## Summary
`git clone` is how you get a working copy of someone else's (or your own) remote repository, ready to branch, commit, and push changes.
