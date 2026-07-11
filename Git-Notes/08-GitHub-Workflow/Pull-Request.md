# Pull Requests (PRs)

## What Is a Pull Request?
A **Pull Request (PR)** is a proposal to merge changes from one branch (or fork) into another. It's the primary mechanism for **code review and collaboration** on GitHub (and similar platforms like GitLab, where it's called a "Merge Request").

## Why Use Pull Requests?
- Enables **code review** before changes reach the main branch.
- Provides a discussion thread for feedback, questions, and suggestions.
- Runs automated checks (CI/CD, tests, linters) before merging.
- Creates a clear historical record of what changed and why.

## Creating a Pull Request — Typical Workflow

**1. Create a feature branch:**
```bash
git checkout -b feature/add-search
```

**2. Make changes and commit:**
```bash
git add .
git commit -m "feat: add search functionality"
```

**3. Push the branch:**
```bash
git push -u origin feature/add-search
```

**4. Open a PR on GitHub:**
- Navigate to the repository → **Pull Requests** → **New Pull Request**.
- Select the base branch (e.g., `main`) and compare branch (`feature/add-search`).
- Add a clear title and description (what changed, why, how to test).
- Click **Create Pull Request**.

## Anatomy of a Good PR Description
```markdown
## What
Adds a search bar to the product listing page.

## Why
Users requested a faster way to find products (see issue #42).

## How to Test
1. Run `npm start`
2. Navigate to /products
3. Type a product name in the search bar

## Screenshots
[attach before/after images if UI changes]
```

## Review Process
- Reviewers leave comments, request changes, or approve.
- Address feedback by pushing new commits to the same branch — the PR updates automatically.
- Once approved (and checks pass), the PR can be merged.

## Merge Strategies (on GitHub)
| Strategy | Effect |
|---|---|
| **Merge commit** | Preserves full history; creates a merge commit |
| **Squash and merge** | Combines all PR commits into one clean commit on the base branch |
| **Rebase and merge** | Replays PR commits individually onto the base branch (linear history, no merge commit) |

## Draft Pull Requests
Mark a PR as **Draft** to signal it's still a work in progress and not ready for review/merge.

## Linking Issues to PRs
Use keywords in the PR description to auto-close issues on merge:
```
Closes #42
Fixes #17
Resolves #8
```

## Best Practices
- Keep PRs small and focused — easier and faster to review.
- Write descriptive titles and descriptions.
- Respond promptly to review feedback.
- Ensure CI checks pass before requesting review.
- Rebase or update your branch if it falls behind the base branch.

## Summary
Pull Requests are the standard collaborative mechanism for proposing, reviewing, discussing, and merging code changes — central to modern team and open-source workflows on GitHub.
