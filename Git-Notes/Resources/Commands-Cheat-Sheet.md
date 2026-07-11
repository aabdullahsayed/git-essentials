# Git Commands Cheat Sheet

A comprehensive, categorized list of Git commands for daily reference.

## Setup & Config
```bash
git init                                  # Initialize a new repo
git clone <url>                           # Clone a remote repo
git config --global user.name "Name"      # Set your name
git config --global user.email "email"    # Set your email
git config --list                         # View all config
```

## Basic Snapshotting
```bash
git status                    # Check current state
git add <file>                # Stage a file
git add .                     # Stage all changes
git add -p                    # Stage interactively (by hunk)
git commit -m "message"       # Commit staged changes
git commit -am "message"      # Stage tracked files + commit
git commit --amend            # Edit the last commit
git rm <file>                 # Remove a file (staged for deletion)
git mv <old> <new>             # Rename/move a file
```

## Viewing History
```bash
git log                              # Full commit history
git log --oneline                    # Compact history
git log --oneline --graph --all      # Visual branch history
git log -p                           # Show diffs per commit
git log --author="Name"              # Filter by author
git show <commit>                    # Show details of a commit
git diff                             # Unstaged changes
git diff --staged                    # Staged changes
git blame <file>                     # Line-by-line authorship
```

## Branching & Merging
```bash
git branch                        # List branches
git branch <name>                 # Create a branch
git branch -d <name>               # Delete a branch (safe)
git branch -D <name>               # Force delete a branch
git switch <name>                  # Switch to a branch
git switch -c <name>               # Create + switch
git checkout <name>                # Switch (older syntax)
git checkout -b <name>             # Create + switch (older syntax)
git merge <branch>                 # Merge a branch into current
git merge --no-ff <branch>         # Force a merge commit
git merge --abort                  # Abort a conflicted merge
```

## Remote Repositories
```bash
git remote -v                      # List remotes
git remote add <name> <url>        # Add a remote
git remote remove <name>            # Remove a remote
git fetch                          # Download without merging
git pull                           # Download + merge
git pull --rebase                  # Download + rebase
git push                           # Upload commits
git push -u origin <branch>        # Push + set upstream tracking
git push origin --delete <branch>  # Delete a remote branch
```

## Undoing Changes
```bash
git restore <file>                 # Discard working directory changes
git restore --staged <file>        # Unstage a file
git reset --soft HEAD~1            # Undo commit, keep changes staged
git reset --mixed HEAD~1           # Undo commit, unstage changes
git reset --hard HEAD~1            # Undo commit, discard all changes
git revert <commit>                # Create a commit that undoes another
git reflog                         # View HEAD movement history (recovery)
```

## Stashing
```bash
git stash                          # Stash current changes
git stash -u                       # Stash including untracked files
git stash list                     # List all stashes
git stash apply                    # Reapply latest stash (keep it)
git stash pop                      # Reapply latest stash (remove it)
git stash drop                     # Delete a specific stash
git stash clear                    # Delete all stashes
```

## Advanced
```bash
git rebase <branch>                # Rebase current branch onto another
git rebase -i HEAD~n                # Interactive rebase (squash/edit/reorder)
git rebase --continue                # Continue after resolving conflicts
git rebase --abort                   # Abort a rebase
git cherry-pick <commit>             # Apply a specific commit
git bisect start                     # Start binary search for a bug
git bisect good / bad                # Mark commits during bisect
git bisect reset                     # End bisect session
git tag -a v1.0.0 -m "message"       # Create an annotated tag
git push origin --tags                # Push all tags
git clean -fd                         # Remove untracked files/dirs
git clean -n                          # Dry run (preview only)
```

## Submodules
```bash
git submodule add <url> <path>       # Add a submodule
git submodule init                    # Initialize submodules
git submodule update                  # Fetch submodule content
git clone --recurse-submodules <url>  # Clone with submodules
git submodule update --remote          # Update to latest submodule commit
```

## Summary
Keep this page open in a tab while working — it covers nearly every command a developer uses day-to-day, organized by task category for fast lookup.
