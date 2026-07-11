# Git Submodules

## What Is a Submodule?
A **submodule** lets you embed one Git repository inside another as a subdirectory, while keeping its history **completely separate**. This is useful when your project depends on another repository (e.g., a shared library) that you want to version independently.

## Why Use Submodules?
- Reuse a library/component across multiple projects while keeping its own commit history.
- Pin a dependency to a **specific commit** (not just a branch/tag), ensuring reproducible builds.
- Keep the dependency's development separate from the main project's history.

## Adding a Submodule
```bash
git submodule add https://github.com/example/shared-library.git libs/shared-library
```
This:
- Clones the repo into `libs/shared-library`.
- Creates a `.gitmodules` file recording the submodule's URL and path.
- Stages the submodule as a special entry (a pointer to a specific commit, not the files themselves).

## `.gitmodules` File Example
```ini
[submodule "libs/shared-library"]
    path = libs/shared-library
    url = https://github.com/example/shared-library.git
```

## Cloning a Project That Has Submodules
Regular `git clone` does **not** automatically download submodule content:
```bash
git clone https://github.com/username/main-project.git
cd main-project
git submodule init
git submodule update
```
Or, in one step:
```bash
git clone --recurse-submodules https://github.com/username/main-project.git
```

## Updating Submodules
**Pull the latest changes for all submodules:**
```bash
git submodule update --remote
```

**Update a specific submodule:**
```bash
git submodule update --remote libs/shared-library
```

After updating, the main project sees a change (the submodule now points to a newer commit) — commit this like a normal change:
```bash
git add libs/shared-library
git commit -m "Update shared-library submodule to latest version"
```

## Working Inside a Submodule
```bash
cd libs/shared-library
git checkout main
git pull
# Make changes, commit, push as normal — this is its own repo
cd ../..
git add libs/shared-library
git commit -m "Bump shared-library to new commit"
```

## Removing a Submodule
```bash
git submodule deinit -f libs/shared-library
git rm -f libs/shared-library
rm -rf .git/modules/libs/shared-library
```

## Submodules vs Alternatives
| Approach | Pros | Cons |
|---|---|---|
| **Submodules** | Native Git support, pins exact commits | Complex workflow, easy to forget `init`/`update` |
| **Git Subtree** | Simpler for consumers (no extra clone steps) | History can bloat the main repo |
| **Package managers** (npm, pip) | Simplest for most dependency use cases | Not ideal for tightly-coupled internal code |

## Common Pitfalls
- Forgetting `--recurse-submodules` when cloning — leaves submodule folders **empty**.
- Submodule pointer not committed after updating — collaborators won't get the new version.
- Detached HEAD state inside submodules by default (since they point to a specific commit, not a branch).

## Summary
Submodules let you embed and pin external Git repositories inside your project at specific commits — powerful for managing shared dependencies, but requiring careful, deliberate workflow steps (`init`, `update`, explicit commits).
