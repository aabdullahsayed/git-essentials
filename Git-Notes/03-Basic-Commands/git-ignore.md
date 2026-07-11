# .gitignore

## Purpose
The `.gitignore` file tells Git which files or directories to **never track** — useful for build artifacts, dependencies, secrets, and OS/editor-specific files.

## Creating a `.gitignore`
```bash
touch .gitignore
```
Place it in the root of your repository (you can also have nested `.gitignore` files in subdirectories).

## Syntax Rules

| Pattern | Meaning |
|---|---|
| `file.txt` | Ignore this exact file (anywhere in the repo) |
| `*.log` | Ignore all files with `.log` extension |
| `build/` | Ignore the entire `build` directory |
| `/config.local` | Ignore `config.local` only in the root directory |
| `!important.log` | Exception — don't ignore this file even if a broader rule matches |
| `**/temp/` | Ignore `temp` folders at any depth |
| `# comment` | Comment line |

## Example `.gitignore` (Node.js project)
```gitignore
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables
.env
.env.local

# Logs
*.log
npm-debug.log*

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

## Using Templates
GitHub maintains a collection of language/framework-specific `.gitignore` templates:
👉 [github.com/github/gitignore](https://github.com/github/gitignore)

You can also generate one at [gitignore.io](https://www.toptal.com/developers/gitignore).

## Ignoring a File That's Already Tracked
Adding a file to `.gitignore` **doesn't** untrack it if it was already committed. You must remove it from tracking manually:
```bash
git rm --cached path/to/file
git commit -m "Stop tracking file"
```

## Checking Why a File Is Ignored
```bash
git check-ignore -v path/to/file
```

## Global .gitignore (applies to all your repos)
```bash
git config --global core.excludesfile ~/.gitignore_global
```
Useful for personal/editor files (e.g., `.DS_Store`, `*.swp`) that shouldn't clutter every project's `.gitignore`.

## Summary
`.gitignore` keeps your repository clean by preventing unwanted files (secrets, build output, dependencies, OS clutter) from ever being tracked or committed.
