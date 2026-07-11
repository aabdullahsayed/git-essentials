# Code Review

## What Is Code Review?
Code review is the practice of having one or more team members examine proposed code changes (usually via a Pull Request) before they're merged into the main codebase — catching bugs, improving quality, and sharing knowledge.

## Why Code Review Matters
- **Catches bugs early**, before they reach production.
- **Improves code quality** — readability, maintainability, consistency with conventions.
- **Knowledge sharing** — spreads understanding of the codebase across the team.
- **Mentorship** — helps less experienced developers learn from feedback.
- **Accountability** — a second pair of eyes reduces risk of oversight.

## The Review Process (Typical Flow)
1. Author opens a Pull Request with a clear description.
2. Reviewer(s) are assigned (manually or automatically via CODEOWNERS).
3. Reviewer reads the diff, tests the change if needed, and leaves comments.
4. Reviewer either:
   - **Approves** ✅ — ready to merge.
   - **Requests changes** 🔄 — issues must be addressed before merging.
   - **Comments** 💬 — feedback/questions without blocking.
5. Author addresses feedback, pushes updates.
6. Once approved (and CI passes), the PR is merged.

## What Reviewers Should Look For
- **Correctness**: Does the code do what it's supposed to?
- **Readability**: Is it clear and easy to understand?
- **Tests**: Are there adequate tests for the change?
- **Style/Consistency**: Does it follow project conventions?
- **Security**: Any obvious vulnerabilities (e.g., SQL injection, hardcoded secrets)?
- **Performance**: Any obvious inefficiencies?
- **Scope**: Is the PR focused, or does it bundle unrelated changes?

## Giving Good Feedback
- Be specific and actionable: *"This loop could be O(n) instead of O(n²) by using a Set"* rather than *"This is slow."*
- Distinguish between **blocking issues** (must fix) and **suggestions** (nice-to-have, optional).
- Praise good solutions, not just criticize problems.
- Ask questions rather than making demands: *"What was the reasoning behind this approach?"*
- Keep feedback about the **code**, not the person.

## Receiving Feedback Gracefully
- Assume good intent — reviewers want the code (and you) to succeed.
- Ask for clarification if feedback is unclear.
- It's OK to push back with reasoning if you disagree — but stay open to being wrong.

## GitHub Review Features
- **Inline comments**: Comment on specific lines of the diff.
- **Suggested changes**: Reviewers can propose exact code edits the author can accept with one click.
- **Review status**: Approve / Request changes / Comment.
- **CODEOWNERS file**: Automatically requests review from designated owners of specific paths.

## Best Practices for Smooth Reviews
- Keep PRs small (ideally < 400 lines changed) — large PRs are harder to review thoroughly.
- Write a clear PR description explaining the "why," not just the "what."
- Respond to review comments promptly.
- Use draft PRs for early feedback on work-in-progress.
- Automate what can be automated (linters, formatters, tests) so reviewers focus on logic and design, not style nitpicks.

## Summary
Code review is a core practice for maintaining code quality and team knowledge — done well, it catches bugs early, improves the codebase, and helps the whole team grow.
