# Git Architecture

Understanding Git's internal architecture helps you reason about *why* commands behave the way they do.

## The Three (Four) Trees / Areas

Git manages your project through distinct areas:

1. **Working Directory** — The actual files on your disk that you edit.
2. **Staging Area (Index)** — A snapshot of changes you've marked to include in the next commit (`git add`).
3. **Local Repository (`.git` directory)** — Where committed snapshots (commits) are permanently stored, along with all history.
4. **Remote Repository** — A copy of the repository hosted elsewhere (e.g., GitHub), synced via `push`/`pull`/`fetch`.

```
Working Directory  --git add-->  Staging Area  --git commit-->  Local Repo  --git push-->  Remote Repo
        <---------------------- git restore / checkout ------------------------ git pull / fetch
```

## The `.git` Directory
When you run `git init`, Git creates a hidden `.git/` folder containing:

| File/Folder | Purpose |
|---|---|
| `HEAD` | Pointer to the current branch/commit |
| `config` | Repository-specific configuration |
| `objects/` | Git's object database (blobs, trees, commits) |
| `refs/` | Pointers to commits (branches, tags) |
| `index` | The staging area |
| `logs/` | Reflog — history of where HEAD has pointed |

## Git's Object Model
Git stores data as a **content-addressable filesystem** using four object types, each identified by a **SHA-1 hash**:

1. **Blob** — Stores the raw content of a file (no filename, just content).
2. **Tree** — Represents a directory; maps filenames to blobs/trees (like a folder structure).
3. **Commit** — Points to a tree (snapshot of the project), plus metadata: author, timestamp, message, and pointer(s) to parent commit(s).
4. **Tag** — A named pointer to a specific commit (usually for releases).

```
Commit  →  Tree (root)  →  Tree (subfolder) → Blob (file content)
                         →  Blob (file content)
```

## Snapshots, Not Diffs
A common misconception: Git does **not** store diffs between file versions like older VCS tools. Instead, **each commit stores a full snapshot** of all tracked files at that point in time. For efficiency, Git deduplicates unchanged files by referencing the same blob and compresses objects internally (via delta compression during packing).

## HEAD, Branches, and Commits
- A **branch** is simply a movable pointer to a commit (stored as a file in `.git/refs/heads/`).
- **HEAD** points to the branch you currently have checked out (or directly to a commit in "detached HEAD" state).
- Creating a branch is just creating a new pointer — extremely cheap and fast (unlike copying the whole codebase).

```
main    →  commit C3
feature →  commit C2
HEAD    →  main
```

## SHA-1 Hashing
Every object (blob, tree, commit) is identified by a 40-character SHA-1 hash of its content. This means:
- Identical content always produces the same hash (deduplication).
- Any modification to content — even one character — produces a completely different hash, ensuring **data integrity**.

## Summary
Git's architecture is built around a simple, elegant object model (blobs, trees, commits, tags) stored in a content-addressable database, with branches as lightweight pointers. This design is what makes Git fast, reliable, and well-suited to distributed collaboration.
