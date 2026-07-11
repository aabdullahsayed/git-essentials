# Forking

## What Is a Fork?
A **fork** is your own personal copy of someone else's GitHub repository, hosted under your own account. Unlike cloning (which just copies files locally), forking creates a **new, independent repository on GitHub** that remains linked to the original ("upstream") for easy syncing and contribution.

## Why Fork a Repository?
- Contribute to open-source projects you don't have write access to.
- Experiment freely with someone else's code without affecting the original.
- Maintain your own customized version of a project.

## How to Fork (via GitHub UI)
1. Navigate to the repository on GitHub.
2. Click the **Fork** button (top right).
3. GitHub creates a copy under your account: `github.com/your-username/repo-name`.

## Setting Up Your Fork Locally
```bash
git clone git@github.com:your-username/repo-name.git
cd repo-name
git remote add upstream git@github.com:original-owner/repo-name.git
```

Now you have two remotes:
```bash
git remote -v
# origin    git@github.com:your-username/repo-name.git (your fork)
# upstream  git@github.com:original-owner/repo-name.git (the original)
```

## Keeping Your Fork in Sync
The original repository keeps evolving after you fork it — you need to periodically pull in those changes:
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Typical Open-Source Contribution Workflow
```bash
# 1. Fork the repo on GitHub (via UI)
# 2. Clone your fork
git clone git@github.com:your-username/repo.git
cd repo
git remote add upstream git@github.com:original-owner/repo.git

# 3. Create a feature branch
git checkout -b fix/typo-in-readme

# 4. Make changes, commit
git add README.md
git commit -m "Fix typo in installation instructions"

# 5. Push to YOUR fork
git push origin fix/typo-in-readme

# 6. Open a Pull Request on GitHub: your-fork:fix/typo-in-readme → original:main
```

## Fork vs Clone

| | Fork | Clone |
|---|---|---|
| Creates | A new repo on GitHub under your account | A local copy on your machine |
| Requires write access to original? | No | No (but can't push back without permission) |
| Typical use | Contributing to projects you don't own | Working on any repo (including your own) |

## Summary
Forking creates your own independent, linked copy of a repository on GitHub — the standard mechanism for contributing to open-source projects via Pull Requests without needing direct write access to the original repo.
