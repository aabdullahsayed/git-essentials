# git blame

## Purpose
Shows, line by line, **who last modified each line** of a file, along with the commit hash and timestamp — useful for tracing the origin and reasoning behind specific code changes.

## Syntax
```bash
git blame <file>
```

## Example Output
```bash
git blame app.js
```
```
a1b2c3d (Jane Doe  2026-06-01 10:15:32 +0600  1) function greet() {
e4f5g6h (John Smith 2026-06-15 14:22:10 +0600  2)   console.log("Hello!");
a1b2c3d (Jane Doe  2026-06-01 10:15:32 +0600  3) }
```
Each line shows: commit hash, author, date, line number, and content.

## Common Usage

**Blame a specific line range:**
```bash
git blame -L 10,20 app.js
```

**Show email instead of name:**
```bash
git blame -e app.js
```

**Ignore whitespace-only changes:**
```bash
git blame -w app.js
```

**Detect line movement/copying within the same commit:**
```bash
git blame -M app.js
```

**Detect lines copied from other files:**
```bash
git blame -C app.js
```

**Blame as of a specific commit (not just current HEAD):**
```bash
git blame a1b2c3d -- app.js
```

**Show blame in a more compact/porcelain format (for scripting):**
```bash
git blame --porcelain app.js
```

## Common Use Cases
- **Debugging**: Find out who introduced a bug and when, to understand the original intent.
- **Code Review**: Understand the history/reasoning behind a confusing piece of code.
- **Accountability**: Trace ownership of specific logic before making changes.

## Ignoring "Noise" Commits (e.g., mass reformatting)
If a large reformatting commit makes `blame` less useful (every line points to the reformat, not the actual logic change), use:
```bash
git blame --ignore-rev <reformat-commit-hash> app.js
```
Or maintain a `.git-blame-ignore-revs` file and configure:
```bash
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

## GUI/Editor Integration
Most editors (VS Code, JetBrains IDEs) have built-in "blame" annotations shown inline or via a sidebar — often more convenient than the CLI for quick checks.

## Summary
`git blame` reveals the authorship history of every line in a file — an essential tool for understanding *why* code looks the way it does and for tracking down when bugs were introduced.
