# Git Interview Cheat Sheet

A rapid-fire reference for last-minute interview prep.

## Core Concepts
| Term | One-Line Definition |
|---|---|
| Repository | A project tracked by Git, with full history |
| Working Directory | Your actual files on disk |
| Staging Area | Changes marked for the next commit |
| Commit | A permanent snapshot of staged changes |
| Branch | A movable pointer to a commit |
| HEAD | Pointer to your currently checked-out branch/commit |
| Remote | A version of the repo hosted elsewhere (e.g., GitHub) |
| Merge | Combines two branches, may create a merge commit |
| Rebase | Replays commits onto a new base, rewriting history |
| Fork | Your own copy of someone else's repo on GitHub |

## Command Quick Reference
| Goal | Command |
|---|---|
| Start a repo | `git init` |
| Copy a repo | `git clone <url>` |
| Check state | `git status` |
| Stage changes | `git add <file>` / `git add .` |
| Save a snapshot | `git commit -m "message"` |
| View history | `git log --oneline --graph` |
| See changes | `git diff` |
| Create + switch branch | `git switch -c <name>` |
| Switch branch | `git switch <name>` |
| Merge a branch | `git merge <branch>` |
| Rebase onto another branch | `git rebase <branch>` |
| Download without merging | `git fetch` |
| Download + merge | `git pull` |
| Upload commits | `git push` |
| Undo last commit, keep changes | `git reset --soft HEAD~1` |
| Undo last commit, discard changes | `git reset --hard HEAD~1` |
| Safely undo a pushed commit | `git revert <commit>` |
| Temporarily shelve changes | `git stash` / `git stash pop` |
| Apply one commit from elsewhere | `git cherry-pick <commit>` |
| Find a bug via binary search | `git bisect start/good/bad` |
| See who wrote each line | `git blame <file>` |
| Recover "lost" commits | `git reflog` |
| Tag a release | `git tag -a v1.0.0 -m "message"` |
| Remove untracked files | `git clean -fd` |

## Merge vs Rebase (memorize this)
- **Merge**: preserves history, creates merge commit, safe for shared branches.
- **Rebase**: linear history, rewrites commits, **never** on shared/pushed branches.

## Reset Modes (memorize this)
- `--soft`: move HEAD only → changes staged.
- `--mixed` (default): move HEAD + unstage → changes in working directory.
- `--hard`: move HEAD + discard everything → ⚠️ data loss.

## Reset vs Revert (memorize this)
- `reset`: rewrites history (local cleanup, unsafe if shared).
- `revert`: adds a new "undo" commit (safe, preserves history).

## Fetch vs Pull (memorize this)
- `fetch`: download only, no merge.
- `pull` = `fetch` + `merge` (or `rebase` with `--rebase`).

## Branching Strategies (one-liners)
- **GitFlow**: `main` + `develop` + `feature`/`release`/`hotfix` branches — for scheduled releases.
- **GitHub Flow**: `main` + short feature branches + PRs — for continuous deployment.
- **Trunk-Based**: everyone commits to `main` frequently, via tiny branches or directly, using feature flags — for high-velocity CI/CD.

## Golden Rules
1. Never rebase or force-push shared/public branches.
2. Always `git status`/`git diff` before destructive commands (`reset --hard`, `clean -f`).
3. Write clear, imperative-mood commit messages.
4. Keep commits atomic and PRs small and focused.
5. Never commit secrets — use `.gitignore` proactively.
6. `git reflog` is your safety net for "lost" commits.

## Object Types in Git's Internal Model
- **Blob** — file content.
- **Tree** — directory structure (maps names to blobs/trees).
- **Commit** — snapshot + metadata + parent pointer(s).
- **Tag** — named pointer to a commit.

## Summary
Review this page right before an interview — it condenses the entire Git-Notes repository into quick-reference tables and memorable one-liners.
