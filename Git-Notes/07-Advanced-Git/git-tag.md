# git tag

## Purpose
Marks a specific commit with a memorable, permanent name — typically used for **releases** (e.g., `v1.0.0`).

## Syntax
```bash
git tag [tag-name] [commit]
```

## Types of Tags

### 1. Lightweight Tags
Just a pointer to a commit — no extra metadata.
```bash
git tag v1.0.0
```

### 2. Annotated Tags (Recommended)
Stored as full objects in Git's database — includes tagger name, email, date, and a message. Preferred for releases.
```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
```

## Common Usage

**List all tags:**
```bash
git tag
```

**List tags matching a pattern:**
```bash
git tag -l "v1.*"
```

**Tag a specific (past) commit:**
```bash
git tag -a v0.9.0 a1b2c3d -m "Beta release"
```

**Show tag details:**
```bash
git show v1.0.0
```

**Push a single tag to remote:**
```bash
git push origin v1.0.0
```

**Push all tags to remote:**
```bash
git push origin --tags
```
(Note: tags are **not** pushed automatically with `git push` — you must push them explicitly.)

**Delete a local tag:**
```bash
git tag -d v1.0.0
```

**Delete a remote tag:**
```bash
git push origin --delete v1.0.0
```

**Check out a tag (detached HEAD state):**
```bash
git checkout v1.0.0
```

**Create a branch from a tag** (if you need to make changes):
```bash
git checkout -b hotfix/v1.0.1 v1.0.0
```

## Semantic Versioning Convention
Most projects tag releases using **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`
```
v1.0.0   → Initial stable release
v1.1.0   → New backward-compatible feature
v1.1.1   → Backward-compatible bug fix
v2.0.0   → Breaking change
```

## Tags vs Branches
| | Tag | Branch |
|---|---|---|
| Moves as new commits are added? | No (fixed point) | Yes (moving pointer) |
| Typical use | Marking releases/milestones | Ongoing development |

## Summary
`git tag` creates permanent markers on specific commits — most commonly used to denote release versions. Annotated tags are preferred for their extra metadata and are the standard for public releases.
