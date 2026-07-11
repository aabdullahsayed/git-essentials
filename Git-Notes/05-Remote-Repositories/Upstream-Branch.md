# Upstream Branch (Tracking Branches)

## What Is an Upstream Branch?
An **upstream branch** is the remote branch that a local branch is linked to for the purposes of `git push` and `git pull`. When set, you can run `git push` / `git pull` without specifying the remote and branch name every time.

## Setting Upstream When Pushing a New Branch
```bash
git push -u origin feature/login
# or
git push --set-upstream origin feature/login
```
This links your local `feature/login` branch to `origin/feature/login`.

## Setting Upstream for an Existing Branch (Without Pushing)
```bash
git branch --set-upstream-to=origin/main main
# shorthand:
git branch -u origin/main main
```

## Viewing Tracking Relationships
```bash
git branch -vv
```
```
* main            a1b2c3d [origin/main] Latest commit
  feature/login   e4f5g6h [origin/feature/login: ahead 2] Add validation
```
- `[origin/main]` — tracking relationship.
- `ahead 2` — your local branch has 2 commits not yet pushed.
- `behind 3` (if shown) — the remote has 3 commits you haven't pulled.

## Why Upstream Tracking Matters
Without it, Git doesn't know where to push/pull, and you'd need to always specify:
```bash
git push origin feature/login
git pull origin feature/login
```
With tracking set up, you simply run:
```bash
git push
git pull
```

## Cloning Sets Upstream Automatically
When you `git clone`, the default branch (e.g., `main`) is automatically set to track `origin/main`.

## Checking Out a Remote Branch Automatically Sets Upstream
```bash
git checkout feature/payments
# Branch 'feature/payments' set up to track 'origin/feature/payments'.
```
(This works if a local branch with that name doesn't already exist and a matching remote branch does.)

## Upstream vs `origin` vs `upstream` (naming confusion)
- **"Upstream branch"** (the tracking concept) — any remote branch a local branch tracks.
- **`upstream`** (as a remote name) — a *convention* used in fork-based workflows to refer to the original repository (distinct from `origin`, your fork). These are different meanings of the word "upstream" — don't confuse them.

```bash
git remote add upstream https://github.com/original-owner/repo.git
git fetch upstream
git merge upstream/main
```

## Summary
Upstream (tracking) branches link your local branches to remote counterparts, enabling simple `git push`/`git pull` without repeatedly specifying remote and branch names.
