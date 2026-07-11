# Remote Repositories — Overview

## What Is a Remote?
A **remote** is a version of your repository hosted somewhere else — typically on a server like GitHub, GitLab, or Bitbucket. Remotes enable collaboration by giving your team a shared place to push and pull changes.

## Local vs Remote Repository
| | Local Repository | Remote Repository |
|---|---|---|
| Location | Your machine | A server (e.g., GitHub) |
| Access | Only you | Shared with collaborators |
| Sync commands | N/A | `push`, `pull`, `fetch` |

## The Default Remote: `origin`
When you clone a repository, Git automatically creates a remote named `origin` pointing to the source URL. `origin` is just a **convention** (an alias) — you could name it anything.

```bash
git clone https://github.com/username/repo.git
git remote -v
# origin  https://github.com/username/repo.git (fetch)
# origin  https://github.com/username/repo.git (push)
```

## Common Remote Workflow
```
Local Repo  --git push-->   Remote Repo (GitHub)
Local Repo  <--git pull--   Remote Repo (GitHub)
Local Repo  <--git fetch--  Remote Repo (GitHub)  (download only, no merge)
```

## Multiple Remotes
A repository can have more than one remote — common in **fork-based workflows**, where you track both your fork (`origin`) and the original project (`upstream`):
```bash
git remote add upstream https://github.com/original-owner/repo.git
```

## Remote-Tracking Branches
When you clone or fetch, Git creates **remote-tracking branches** like `origin/main` — these represent the state of the remote branch **as of your last fetch**. They update only when you `fetch` or `pull`.

```bash
git branch -r
# origin/main
# origin/develop
```

## Key Commands (covered in detail in this section)
| Command | Purpose |
|---|---|
| `git remote` | Manage remote connections |
| `git fetch` | Download changes without merging |
| `git pull` | Download AND merge changes |
| `git push` | Upload local commits to remote |

## Summary
Remotes are how Git enables distributed collaboration — they're simply named references to other copies of your repository, most commonly hosted on platforms like GitHub.
