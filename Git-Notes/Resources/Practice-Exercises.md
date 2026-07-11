# Git Practice Exercises

Hands-on exercises to reinforce each topic. Try them in a scratch folder — mistakes are part of learning!

## Beginner

### Exercise 1: First Repository
1. Create a folder called `git-practice` and initialize it as a Git repo.
2. Create a file `notes.txt` with some text.
3. Stage and commit it with a proper message.
4. Run `git log` to confirm your commit exists.

### Exercise 2: Staging Practice
1. Modify `notes.txt` and create a new file `todo.txt`.
2. Run `git status` and observe the output.
3. Stage only `notes.txt`, leave `todo.txt` unstaged.
4. Run `git status` again — confirm the difference between staged/unstaged/untracked.
5. Commit, then stage and commit `todo.txt` separately.

### Exercise 3: .gitignore
1. Create a file `secret.env` and a folder `build/` with a dummy file inside.
2. Create a `.gitignore` file that ignores both.
3. Confirm with `git status` that neither appears as untracked.

## Intermediate

### Exercise 4: Branching & Merging
1. Create a branch `feature/greeting`.
2. Add a function to a file that prints a greeting; commit it.
3. Switch back to `main` and make an unrelated change; commit it.
4. Merge `feature/greeting` into `main`. Observe whether it's a fast-forward or three-way merge.

### Exercise 5: Creating a Merge Conflict (on purpose!)
1. On `main`, edit line 1 of a file and commit.
2. Create a branch from an **earlier** commit, edit the same line differently, commit.
3. Merge the branch into `main` and observe the conflict.
4. Resolve it manually, stage, and complete the merge commit.

### Exercise 6: Undoing Mistakes
1. Make three commits in a row.
2. Use `git reset --soft HEAD~1` to undo the last one — confirm changes are staged.
3. Re-commit with a better message.
4. Now try `git reset --hard HEAD~1` on a throwaway commit and confirm the changes are gone.
5. Use `git reflog` to find and recover the "lost" commit.

### Exercise 7: Stashing
1. Start editing a file (don't commit).
2. Stash the changes.
3. Switch to another branch, make an unrelated commit.
4. Switch back and pop the stash — confirm your original edits reappear.

## Advanced

### Exercise 8: Rebase vs Merge
1. Create two branches from `main` that both add different files.
2. Merge one of them into `main` normally (`git merge`).
3. Rebase the other onto `main` instead (`git rebase main`), then fast-forward merge it.
4. Compare `git log --graph` output for both approaches — notice the difference in history shape.

### Exercise 9: Interactive Rebase
1. Make 4 small, separate commits (e.g., typo fixes) on a branch.
2. Run `git rebase -i HEAD~4`.
3. Squash the last 3 into the first, producing a single clean commit.
4. Confirm with `git log --oneline`.

### Exercise 10: Cherry-Picking
1. Create a branch `experiment` with 3 commits, each doing something different.
2. On `main`, cherry-pick only the *middle* commit.
3. Confirm `main` now has that one change, without the other two.

### Exercise 11: Bisect Practice
1. Create 10 commits, where commit #7 intentionally introduces a "bug" (e.g., a syntax error or a failing condition in a script).
2. Use `git bisect start`, mark HEAD as bad and commit #1 as good.
3. Let Git guide you through testing until it identifies commit #7 as the culprit.

### Exercise 12: Tags & Releases
1. Make a few commits representing "version 1" of a project.
2. Tag the current commit as `v1.0.0` (annotated).
3. Make more commits.
4. Tag again as `v1.1.0`.
5. Use `git diff v1.0.0 v1.1.0` to see everything that changed between releases.

## Collaboration Simulation (Solo Practice)

### Exercise 13: Simulate a Remote Workflow
1. Create a "remote" repo using `git init --bare` in a separate folder (simulating GitHub).
2. Clone it into two separate folders (simulating two developers).
3. In "developer A's" clone, make a commit and push.
4. In "developer B's" clone, pull the change.
5. Both make conflicting changes to the same file; push from A, then try pushing from B (rejected) — pull, resolve the conflict, then push successfully.

### Exercise 14: Full Pull Request Simulation (Real GitHub)
1. Create a real (public or private) repository on GitHub.
2. Fork it into a second GitHub account (or just simulate with a second local clone + branch).
3. Create a feature branch, make a change, push, and open a real Pull Request.
4. Practice writing a clear PR description, then merge it.

## Summary
Work through these exercises roughly in order — each builds on Git concepts from earlier sections. The best way to learn Git is to **break things on purpose** in a throwaway repository, then practice fixing them using the techniques from `06-History-and-Recovery/`.
