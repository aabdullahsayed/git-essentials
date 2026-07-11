# Git Interview Q&A

## Basics

**Q1. What is Git?**
Git is a free, open-source, distributed version control system that tracks changes to files over time, enabling collaboration among multiple developers.

**Q2. What is the difference between Git and GitHub?**
Git is the version control *software* itself, run locally. GitHub is a cloud-based *hosting platform* for Git repositories, adding collaboration features (PRs, Issues, Actions) on top of Git.

**Q3. What is a repository?**
A repository ("repo") is a storage location containing all files, folders, and the complete history (commits, branches, tags) of a project.

**Q4. What's the difference between `git init` and `git clone`?**
`git init` creates a brand-new, empty local repository. `git clone` copies an existing remote repository (including its full history) to your local machine.

**Q5. What is the staging area?**
The staging area (index) is an intermediate area where changes are placed (via `git add`) before being permanently recorded with `git commit`. It lets you control exactly what goes into each commit.

## Branching & Merging

**Q6. What is a branch in Git?**
A branch is a lightweight, movable pointer to a commit — allowing isolated development without affecting other branches.

**Q7. What's the difference between merge and rebase?**
`merge` combines two branches by creating a new merge commit (preserving both histories). `rebase` replays commits from one branch onto another, creating a linear history but rewriting commit hashes.

**Q8. What is a fast-forward merge?**
A merge where the target branch has no new commits since the source branch diverged — Git simply moves the branch pointer forward without creating a merge commit.

**Q9. How do you resolve a merge conflict?**
Open the conflicted file(s), manually edit the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) to choose the correct content, then `git add` the resolved file(s) and `git commit` (or `git merge --continue`).

**Q10. What is the "Golden Rule" of rebasing?**
Never rebase commits that have already been pushed to a shared/public branch — it rewrites commit hashes, causing divergent histories for collaborators.

## Remotes

**Q11. What is `origin` in Git?**
`origin` is the conventional default name for the remote repository a local repo was cloned from — not a special keyword, just a naming convention.

**Q12. What's the difference between `git fetch` and `git pull`?**
`git fetch` downloads changes from the remote without merging them into your current branch. `git pull` does `fetch` + `merge` (or `rebase`) automatically.

**Q13. How do you undo a `git push`?**
Use `git revert <commit>` to create a new commit undoing the changes (safe), then push. Avoid `git reset --hard` + force push on shared branches unless absolutely necessary and coordinated with the team.

## History & Recovery

**Q14. What's the difference between `git reset` and `git revert`?**
`git reset` moves the branch pointer backward, rewriting history (unsafe for shared branches). `git revert` creates a new commit that undoes prior changes, preserving history (safe for shared branches).

**Q15. What are the three modes of `git reset`?**
`--soft` (moves HEAD only, keeps staged changes), `--mixed` (default; moves HEAD and unstages changes, keeps working directory), `--hard` (moves HEAD and discards all changes, including working directory — data loss risk).

**Q16. What is `git reflog` used for?**
It shows a history of everywhere HEAD has pointed, including "lost" commits after a reset or rebase — used to recover seemingly lost work.

**Q17. How do you undo the last commit but keep the changes?**
```bash
git reset --soft HEAD~1
```

## Advanced

**Q18. What is `git cherry-pick`?**
It applies the changes from a specific commit (from any branch) onto your current branch, without merging the entire source branch.

**Q19. What is `git bisect` used for?**
It performs a binary search through commit history to efficiently find the exact commit that introduced a bug.

**Q20. What is a detached HEAD state?**
When HEAD points directly to a commit instead of a branch (e.g., after `git checkout <commit-hash>`). New commits made here aren't attached to any branch and can be lost unless you create a branch to save them.

**Q21. What is `git stash` used for?**
It temporarily saves uncommitted changes so you can switch branches or context without committing incomplete work, then reapply them later with `git stash pop` or `git stash apply`.

**Q22. What's the difference between `git stash apply` and `git stash pop`?**
`apply` reapplies the stash but keeps it in the stash list. `pop` reapplies AND removes it from the list.

**Q23. What are Git submodules?**
A way to embed one Git repository inside another as a subdirectory, keeping its history separate and pinned to a specific commit — useful for shared dependencies.

**Q24. How does Git store data internally?**
As a content-addressable object database with four object types: blobs (file content), trees (directory structure), commits (snapshots + metadata), and tags (named pointers to commits) — each identified by a SHA-1 hash.

## Workflow & Best Practices

**Q25. What is the difference between GitFlow and GitHub Flow?**
GitFlow uses multiple long-lived branch types (`main`, `develop`, `feature`, `release`, `hotfix`) suited for scheduled, versioned releases. GitHub Flow is simpler — just `main` + short-lived feature branches — suited for continuous deployment.

**Q26. What is a Pull Request?**
A proposal to merge changes from one branch (or fork) into another, enabling code review, discussion, and automated checks before merging.

**Q27. Why shouldn't you commit directly to `main`?**
It bypasses code review and automated checks, risking broken or unreviewed code reaching production. Best practice is to use feature branches and Pull Requests.

**Q28. What should always go in `.gitignore`?**
Dependencies (`node_modules/`), build output (`dist/`), secrets (`.env`), logs, OS files (`.DS_Store`), and IDE-specific files (`.vscode/`).

## Summary
These questions cover the most commonly asked Git topics in technical interviews — from fundamentals (init/clone/add/commit) through branching/merging, remotes, history recovery, and workflow best practices.
