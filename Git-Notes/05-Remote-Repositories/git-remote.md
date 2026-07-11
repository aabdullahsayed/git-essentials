# git remote

## Purpose
Manages the set of remote repositories your local repo is connected to.

## Syntax
```bash
git remote [subcommand]
```

## Common Usage

**List remotes:**
```bash
git remote
```

**List remotes with URLs:**
```bash
git remote -v
```
```
origin  https://github.com/username/repo.git (fetch)
origin  https://github.com/username/repo.git (push)
```

**Add a new remote:**
```bash
git remote add origin https://github.com/username/repo.git
```

**Add a second remote (common for forks):**
```bash
git remote add upstream https://github.com/original-owner/repo.git
```

**Rename a remote:**
```bash
git remote rename origin old-origin
```

**Remove a remote:**
```bash
git remote remove upstream
# or
git remote rm upstream
```

**Change a remote's URL** (e.g., switching from HTTPS to SSH):
```bash
git remote set-url origin git@github.com:username/repo.git
```

**Show detailed info about a remote (branches, HEAD, tracking):**
```bash
git remote show origin
```

**Prune stale remote-tracking branches** (branches deleted on the remote but still shown locally):
```bash
git remote prune origin
```

## Typical Setup for a New Local Project
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:username/repo.git
git push -u origin main
```

## Typical Fork Workflow Setup
```bash
git clone git@github.com:your-username/repo.git
cd repo
git remote add upstream git@github.com:original-owner/repo.git
git fetch upstream
```

## Summary
`git remote` manages the named connections between your local repository and remote servers — the foundation for pushing, pulling, and fetching changes.
