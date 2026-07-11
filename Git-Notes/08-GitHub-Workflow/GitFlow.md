# GitFlow

## What Is GitFlow?
**GitFlow** is a branching model introduced by Vincent Driessen in 2010, designed for projects with **scheduled release cycles**. It defines a strict branching structure with dedicated branch types for features, releases, and hotfixes.

## Branch Types

| Branch | Purpose | Branches From | Merges Into |
|---|---|---|---|
| `main` (or `master`) | Always reflects production-ready code | — | — |
| `develop` | Integration branch for ongoing development | `main` | `main` (via release) |
| `feature/*` | Individual features | `develop` | `develop` |
| `release/*` | Prepares a new production release (bug fixes, version bumps) | `develop` | `main` AND `develop` |
| `hotfix/*` | Urgent production fixes | `main` | `main` AND `develop` |

## Visual Overview
```
main:      ---------o--------------o---------
                      \            / \
release:               o----o----o    (v1.1)
                      /            \
develop:  --o---o----o----o----o----o---------
             \  /          \  /
feature:      o o           o o
```

## Typical Workflow

**Starting a feature:**
```bash
git checkout develop
git checkout -b feature/user-profile
# ... work, commit ...
git checkout develop
git merge --no-ff feature/user-profile
git branch -d feature/user-profile
```

**Starting a release:**
```bash
git checkout develop
git checkout -b release/1.2.0
# ... final bug fixes, version bump ...
git checkout main
git merge --no-ff release/1.2.0
git tag -a v1.2.0
git checkout develop
git merge --no-ff release/1.2.0
git branch -d release/1.2.0
```

**Hotfixing production:**
```bash
git checkout main
git checkout -b hotfix/critical-bug
# ... fix ...
git checkout main
git merge --no-ff hotfix/critical-bug
git tag -a v1.2.1
git checkout develop
git merge --no-ff hotfix/critical-bug
git branch -d hotfix/critical-bug
```

## Pros
- Clear structure — well-defined roles for each branch type.
- Well-suited to projects with **versioned, scheduled releases** (e.g., desktop software, mobile apps).
- Isolates in-progress work (`develop`) from production-ready code (`main`).

## Cons
- Complex — many branch types and rules to remember.
- Slower for teams practicing **continuous deployment** (frequent, small releases).
- Long-lived branches (`develop`, `release`) can drift and cause painful merges.

## When to Use GitFlow
Best suited for:
- Software with **versioned releases** (e.g., v1.0, v1.1, v2.0).
- Products where multiple versions must be maintained simultaneously (e.g., supporting v1.x while developing v2.0).
- Teams comfortable with a more structured, ceremony-heavy process.

**Not ideal for**: Web apps or services deployed continuously (many times a day) — see `GitHub-Flow.md` or `Trunk-Based-Development.md` for lighter-weight alternatives.

## Summary
GitFlow is a robust but heavyweight branching model built around `main`, `develop`, `feature`, `release`, and `hotfix` branches — well-suited for scheduled, versioned software releases but often overkill for fast-moving continuous deployment teams.
