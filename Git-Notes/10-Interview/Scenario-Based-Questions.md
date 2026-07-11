# Scenario-Based Git Questions

Real-world problem-solving scenarios commonly asked in interviews, with step-by-step solutions.

## Scenario 1: "You committed to the wrong branch. How do you fix it?"
```bash
git reset --soft HEAD~1        # Undo the commit, keep changes staged
git stash                       # Stash the changes
git checkout correct-branch
git stash pop
git commit -m "Correct commit message"
```

## Scenario 2: "You need to combine your last 3 commits into one before opening a PR."
```bash
git rebase -i HEAD~3
```
In the editor, change `pick` to `squash` (or `fixup`) for the 2nd and 3rd commits, then save. Edit the combined commit message when prompted.

## Scenario 3: "You accidentally deleted a branch that had unmerged work."
```bash
git reflog                                  # Find the last commit hash on that branch
git branch recovered-branch <commit-hash>   # Recreate the branch
```

## Scenario 4: "Your `main` branch and your feature branch have diverged. How do you update your feature branch cleanly?"
```bash
git checkout feature-branch
git rebase main
# resolve any conflicts, then:
git rebase --continue
```
(Alternative if the branch is shared: `git merge main` instead of rebasing.)

## Scenario 5: "You need to apply a hotfix commit from another branch without merging the whole branch."
```bash
git checkout main
git cherry-pick <hotfix-commit-hash>
```

## Scenario 6: "You pushed a commit containing a secret API key. What do you do?"
1. **Immediately rotate/invalidate** the exposed key (most important step — assume it's compromised).
2. Remove it from the current codebase:
```bash
git rm --cached config.js
echo "config.js" >> .gitignore
git commit -m "Remove secret file from tracking"
```
3. Purge it from **history** using `git filter-repo` (or BFG Repo-Cleaner), since it still exists in old commits.
4. Force-push the cleaned history (coordinate with the team first, since this rewrites shared history).

## Scenario 7: "You need to find which commit introduced a specific bug, out of 200 commits."
```bash
git bisect start
git bisect bad                 # current commit has the bug
git bisect good <old-commit>   # this old commit didn't
# Git checks out commits one by one; test each and mark good/bad
git bisect good   # or
git bisect bad
# ...repeat until Git identifies the exact bad commit...
git bisect reset
```

## Scenario 8: "You're mid-feature but need to urgently fix a production bug."
```bash
git stash push -m "WIP: feature X"
git checkout main
git checkout -b hotfix/urgent-fix
# ...fix, commit, push, merge...
git checkout feature-branch
git stash pop
```

## Scenario 9: "A teammate force-pushed and now your local branch is diverged/broken."
```bash
git fetch origin
git reset --hard origin/main    # ⚠️ discards your local commits on this branch — back up first if needed!
```
Better: coordinate with the team beforehand, and use `--force-with-lease` (not plain `--force`) to prevent this scenario in the first place.

## Scenario 10: "You want to see exactly what changed between two releases (tags)."
```bash
git diff v1.0.0 v2.0.0
git log v1.0.0..v2.0.0 --oneline
```

## Scenario 11: "You need to revert a merge commit that was already pushed."
```bash
git revert -m 1 <merge-commit-hash>
```
(`-m 1` specifies keeping the mainline/parent-1 side of the merge.)

## Scenario 12: "Two developers modified the same file, and now there's a conflict during `git pull`."
```bash
git pull
# CONFLICT (content): Merge conflict in app.js
# Manually resolve conflict markers in app.js
git add app.js
git commit
```

## Scenario 13: "You want to test if an old version of the code still has a bug, without disrupting your current branch."
```bash
git checkout <old-commit-hash>   # Detached HEAD — safe to explore
# test...
git checkout main                # Return to your branch when done
```

## Scenario 14: "Your `.gitignore` isn't working — a file you added is still being tracked."
```bash
git rm --cached path/to/file
git commit -m "Stop tracking file now covered by .gitignore"
```
(`.gitignore` only prevents tracking of *new* files — it doesn't retroactively untrack already-committed files.)

## Scenario 15: "You need to see who last modified a specific line causing a bug."
```bash
git blame -L 45,50 app.js
```

## Summary
These scenarios mirror real day-to-day Git challenges. The key skills tested are: understanding the difference between local/remote/staged states, knowing which commands rewrite history (dangerous) vs. preserve it (safe), and being comfortable resolving conflicts.
