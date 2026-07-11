# Git vs GitHub

A very common point of confusion for beginners. They are **related but different things**.

## Git
- A **version control system** (software) installed and run **locally** on your machine.
- Command-line tool (with GUI options available).
- Works completely **offline** — no internet required.
- Tracks history, branches, and changes to your code.
- Created by Linus Torvalds (2005).

## GitHub
- A **cloud-based hosting platform** for Git repositories.
- Adds collaboration features on top of Git: Pull Requests, Issues, Code Review, Actions (CI/CD), Project boards, Wikis.
- Requires **internet access**.
- Owned by **Microsoft** (acquired in 2018).
- Competitors: **GitLab**, **Bitbucket**, **SourceHut**.

## Comparison Table

| Feature | Git | GitHub |
|---|---|---|
| Type | Version control software | Hosting service for Git repos |
| Installation | Installed locally | Web-based (no installation) |
| Internet required | No | Yes |
| Collaboration tools | Basic (via patches/email) | Rich (PRs, Issues, Actions, Reviews) |
| Ownership | Open source, community-maintained | Owned by Microsoft |
| Alternatives | Mercurial, SVN | GitLab, Bitbucket |

## Analogy
Think of Git like **Microsoft Word** (the tool you use to write) and GitHub like **Google Drive** (where you store, share, and collaborate on the document with others).

## Can You Use Git Without GitHub?
Yes! You can use Git entirely locally, or push to any Git server (self-hosted, GitLab, Bitbucket, etc.). GitHub is just one of many places to host Git repositories.

## Can You Use GitHub Without Knowing Git Deeply?
Technically yes (GitHub has a web UI for edits), but to truly collaborate effectively — branching, merging, resolving conflicts — you need working Git knowledge.

## Summary
- **Git** = the version control tool.
- **GitHub** = a website/service that hosts Git repositories and adds collaboration features.
