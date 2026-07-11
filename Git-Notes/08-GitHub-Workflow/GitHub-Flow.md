# GitHub Flow

## What Is GitHub Flow?
**GitHub Flow** is a lightweight, simplified branching model designed for teams that **deploy continuously** (multiple times a day/week). It has far fewer rules and branch types than GitFlow, making it ideal for web applications and SaaS products.

## Core Principles
1. **`main` is always deployable.** Every commit on `main` should be production-ready.
2. Create a **descriptively named branch** off `main` for any new work (feature, fix, experiment).
3. Commit changes to that branch regularly, pushing to the remote often.
4. Open a **Pull Request** early — even before work is complete — to enable discussion.
5. Once the PR is reviewed and approved (and CI passes), **merge into `main`**.
6. **Deploy immediately** after merging to `main`.

## Visual Overview
```
main:  ---o---o-------------------o---o------
              \                  /   \
feature/x:     o---o---o---o----      (merged & deployed)
                                  \
feature/y:                        o---o---... (in progress)
```
Unlike GitFlow, there's **no `develop` branch** — feature branches merge directly into `main`.

## Typical Workflow
```bash
git checkout main
git pull
git checkout -b feature/add-dark-mode

# ... work, commit regularly ...
git push -u origin feature/add-dark-mode

# Open a Pull Request on GitHub → request review

# After approval & passing CI:
# Merge via GitHub UI (or locally)
git checkout main
git pull
git branch -d feature/add-dark-mode
```

## Key Differences from GitFlow

| | GitFlow | GitHub Flow |
|---|---|---|
| Branches | `main`, `develop`, `feature`, `release`, `hotfix` | Just `main` + short-lived feature branches |
| Release cycle | Scheduled, versioned releases | Continuous deployment |
| Complexity | High | Low |
| Best for | Versioned software (desktop apps, libraries) | Web apps, SaaS, continuously deployed services |

## Best Practices
- Keep feature branches **short-lived** (days, not weeks) to minimize merge conflicts.
- Use **feature flags** to merge incomplete features into `main` safely without exposing them to users.
- Rely heavily on **automated testing and CI/CD** since `main` must always be deployable.
- Open PRs early for visibility and discussion, even if work isn't finished (mark as Draft).

## Why Teams Choose GitHub Flow
- Simplicity — easy to teach and follow.
- Matches modern **continuous integration/continuous deployment (CI/CD)** practices.
- Reduces the overhead of maintaining multiple long-lived branches.

## Summary
GitHub Flow is a simple, `main`-centric branching model built for teams practicing continuous deployment — create a branch, open a PR, review, merge to `main`, deploy. Minimal ceremony, maximum speed.
