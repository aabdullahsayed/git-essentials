# Common Git Mistakes (and How to Avoid Them)

## 1. Committing Directly to `main`
**Problem**: Bypasses code review, risks breaking production-ready code.
**Fix**: Always work in feature branches; protect `main` with branch protection rules (require PR reviews, passing CI) on GitHub.

## 2. Vague Commit Messages
```
git commit -m "fix"
git commit -m "updates"
```
**Problem**: Makes history useless for debugging or understanding project evolution.
**Fix**: Follow conventions from `Commit-Messages.md` — clear, imperative, descriptive messages.

## 3. Giant, Unfocused Commits
**Problem**: A single commit that changes 50 files across unrelated features is hard to review, hard to revert, and hard to understand later.
**Fix**: Make **atomic commits** — one logical change per commit. Use `git add -p` to stage changes selectively.

## 4. Committing Secrets or Credentials
```
git add .env
git commit -m "add config"
```
**Problem**: Secrets become permanently embedded in history, even if deleted later.
**Fix**: Add secrets to `.gitignore` *before* committing. If already committed, rotate the credential immediately and purge history with `git filter-repo`/BFG.

## 5. Force-Pushing to Shared Branches
```bash
git push --force origin main
```
**Problem**: Overwrites collaborators' work, causing lost commits and broken local repos for the whole team.
**Fix**: Never force-push to shared branches. Use `--force-with-lease` on your own branches only, and enable branch protection to prevent force-pushes to `main`.

## 6. Not Pulling Before Pushing
**Problem**: Leads to unnecessary merge conflicts and rejected pushes.
**Fix**: Run `git pull` (or `git pull --rebase`) before starting work and before pushing.

## 7. Ignoring Merge Conflicts Instead of Resolving Carefully
**Problem**: Blindly accepting "theirs" or "ours" without understanding the conflict can silently discard important changes.
**Fix**: Read both sides of every conflict carefully; test after resolving.

## 8. Rebasing Public/Shared Branches
**Problem**: Rewrites commit hashes others already have, causing painful divergent histories.
**Fix**: Only rebase local, unpushed, or exclusively-yours branches. Follow the Golden Rule of Rebasing (see `07-Advanced-Git/git-rebase.md`).

## 9. Not Using `.gitignore` Properly
**Problem**: Committing `node_modules/`, build artifacts, or OS files bloats the repo and causes unnecessary conflicts.
**Fix**: Set up a proper `.gitignore` from the start (see `.gitignore-Best-Practices.md`).

## 10. Deleting a Branch Without Merging
```bash
git branch -D feature/important
```
**Problem**: `-D` force-deletes even unmerged branches — losing unmerged work.
**Fix**: Use `-d` (lowercase) which refuses to delete unmerged branches, prompting you to double-check first. Recover via `git reflog` if needed.

## 11. Not Understanding `reset --hard`
**Problem**: Permanently discards uncommitted changes without warning.
**Fix**: Always run `git status`/`git diff` first; consider `git stash` instead if you might want the changes later.

## 12. Working for Days Without Committing
**Problem**: Large, risky changes with no checkpoints — if something breaks, there's no way to isolate what caused it.
**Fix**: Commit early, commit often, even to a local WIP branch. Squash before merging if you want a cleaner final history.

## 13. Confusing `git fetch` and `git pull`
**Problem**: Assuming `fetch` updates your working branch (it doesn't) or being surprised by conflicts from `pull`.
**Fix**: Understand the difference (see `05-Remote-Repositories/git-fetch.md` and `git-pull.md`).

## 14. Not Using Branch Protection Rules
**Problem**: Anyone can push directly to `main`, force-push, or merge without review.
**Fix**: On GitHub, configure branch protection: require PR reviews, require passing CI checks, disallow force-pushes to `main`.

## Summary
Most Git mistakes stem from rushing (skipping `git status`/`git diff` checks), poor communication (vague commits, unfocused PRs), or misunderstanding history-rewriting commands (`reset --hard`, `rebase`, `push --force`). Slow down, check before you act, and follow team conventions.
