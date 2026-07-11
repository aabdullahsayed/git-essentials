# git init

## Purpose
Initializes a new, empty Git repository — creates a hidden `.git/` directory that stores all version control metadata.

## Syntax
```bash
git init [directory]
```

## Usage

**Initialize in the current directory:**
```bash
cd my-project
git init
```

**Initialize in a new directory:**
```bash
git init my-project
```

**Initialize with a specific default branch name:**
```bash
git init -b main
```

## What Happens Internally
Git creates a `.git/` folder containing:
```
.git/
├── HEAD
├── config
├── objects/
├── refs/
│   ├── heads/
│   └── tags/
└── ...
```
This folder is where **all** history, branches, and commits are stored. Deleting it removes all Git tracking (but not your files).

## Checking If a Folder Is a Git Repo
```bash
git status
```
If not initialized, you'll see: `fatal: not a git repository`.

## Common Mistakes
- Running `git init` inside an already-initialized repo (creates a nested repo — usually unintended).
- Forgetting to run `git init` before trying `git add`/`git commit`.

## Example Workflow
```bash
mkdir my-app && cd my-app
git init
echo "# My App" > README.md
git add README.md
git commit -m "Initial commit"
```

## Summary
`git init` is the very first command in any new Git project — it turns a regular folder into a Git-tracked repository.
