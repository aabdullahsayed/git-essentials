# git diff

## Purpose
Shows the differences between various states of your repository — working directory, staging area, and commits.

## Syntax
```bash
git diff [options] [commit1] [commit2]
```

## Common Use Cases

**Working directory vs staging area (unstaged changes):**
```bash
git diff
```

**Staging area vs last commit (staged changes):**
```bash
git diff --staged
# or
git diff --cached
```

**Working directory vs last commit (all changes, staged + unstaged):**
```bash
git diff HEAD
```

**Compare two branches:**
```bash
git diff main feature
```

**Compare two specific commits:**
```bash
git diff a1b2c3d e4f5g6h
```

**Diff a specific file:**
```bash
git diff -- path/to/file.js
```

**Summary of changes only (files + line counts, no content):**
```bash
git diff --stat
```

## Reading Diff Output
```diff
diff --git a/app.js b/app.js
index 83db48f..bf269c5 100644
--- a/app.js
+++ b/app.js
@@ -1,4 +1,5 @@
 function greet() {
-  console.log("Hi");
+  console.log("Hello");
+  console.log("Welcome!");
 }
```
- `-` lines: removed
- `+` lines: added
- `@@ -1,4 +1,5 @@`: line number context (old file, new file)

## Word-Level Diff (useful for prose/docs)
```bash
git diff --word-diff
```

## Comparing Against a Remote Branch
```bash
git diff main origin/main
```

## Summary
`git diff` shows exactly *what* changed at the line level between any two states — essential for reviewing your work before staging or committing, and for code review.
