# git push

## Purpose
Uploads your local commits to a remote repository, updating the corresponding remote branch.

## Syntax
```bash
git push [remote] [branch]
```

## Common Usage

**Push current branch to its tracked remote branch:**
```bash
git push
```

**Push to a specific remote and branch:**
```bash
git push origin main
```

**Push a new local branch and set up tracking (`-u` / `--set-upstream`):**
```bash
git push -u origin feature/login
```
After this, plain `git push` / `git pull` will work on this branch without specifying remote/branch again.

**Push all local branches:**
```bash
git push --all origin
```

**Push tags:**
```bash
git push --tags
```

**Delete a remote branch:**
```bash
git push origin --delete feature/old-branch
```

**Force push (⚠️ overwrites remote history):**
```bash
git push --force
# safer alternative:
git push --force-with-lease
```

## Understanding Upstream Tracking
When a local branch is linked to a remote branch (via `-u` or `push.default` config), Git knows where to push/pull by default:
```bash
git branch -vv
# main  a1b2c3d [origin/main] Latest commit message
```

## When Push Is Rejected
```
! [rejected]  main -> main (fetch first)
error: failed to push some refs
```
This means the remote has commits you don't have locally. Fix by pulling first:
```bash
git pull --rebase
git push
```

## Force Push — When and Why
Sometimes necessary after rewriting history (e.g., `git rebase`, `git commit --amend`) on a branch you own:
```bash
git push --force-with-lease origin feature/login
```
`--force-with-lease` is **safer** than `--force` — it fails if someone else has pushed new commits you don't know about, preventing accidental overwrites.

⚠️ **Never force push to shared branches** like `main`/`develop` unless you're absolutely certain no one else has based work on the commits you're rewriting.

## Summary
`git push` sends your local commits to a remote repository, making your work visible and available to collaborators. Use tracking branches for convenience, and force-push carefully.
