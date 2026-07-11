# Writing Good Commit Messages

## Why It Matters
Commit messages are permanent documentation of *why* a change was made. Good messages make `git log`, `git blame`, and code archaeology dramatically easier — bad messages ("fix", "update", "asdf") make history nearly useless.

## The Seven Rules of a Great Commit Message
(Adapted from Chris Beams' widely-cited guide)

1. Separate subject from body with a blank line.
2. Limit the subject line to ~50 characters.
3. Capitalize the subject line.
4. Do not end the subject line with a period.
5. Use the **imperative mood** in the subject line ("Add feature" not "Added feature" or "Adds feature").
6. Wrap the body at ~72 characters.
7. Use the body to explain **what and why**, not how (the diff already shows "how").

## Structure
```
<type>: <short summary>

<optional longer description — why this change was made,
what problem it solves, any side effects or context>

<optional footer — issue references, breaking changes>
```

## Conventional Commits Format (Popular Convention)
```
<type>(<optional scope>): <description>
```

| Type | Use For |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation-only changes |
| `style` | Formatting, missing semicolons, etc. (no code change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test` | Adding or correcting tests |
| `chore` | Build process, tooling, dependency updates |
| `perf` | Performance improvements |

## Examples

**Good:**
```
feat(auth): add password strength validation

Enforces a minimum of 8 characters, one number, and one
special character. Prevents common weak passwords using
a blocklist check.

Closes #128
```

**Good (simple fix):**
```
fix: prevent crash when cart is empty at checkout
```

**Bad:**
```
fixed stuff
```
```
updates
```
```
asdfasdf
```
```
WIP
```

## Imperative Mood — Why?
A commit message should complete the sentence: *"If applied, this commit will \_\_\_\_."*
- ✅ "Add login validation" → "If applied, this commit will **add login validation**."
- ❌ "Added login validation" → doesn't fit the pattern.
- ❌ "Adding login validation" → doesn't fit the pattern.

## Referencing Issues
```
fix: correct off-by-one error in pagination

Fixes #45
```
GitHub automatically links and (if using `Fixes`/`Closes`) auto-closes the referenced issue when merged into the default branch.

## Atomic Commits
Each commit should represent **one logical change**. Avoid bundling unrelated changes (e.g., a bug fix + an unrelated refactor + a typo fix) into a single commit — it makes review, reverting, and history-reading much harder.

## Summary
Well-written commit messages — concise imperative subject lines, clear explanations of *why*, and atomic scope — turn your project's history into a valuable, readable record instead of a confusing mess.
