# Undoing Mistakes in Git — Quick Reference

A practical, scenario-based guide to fixing common Git mistakes.

## 1. I want to undo my last commit but keep the changes
```bash
git reset --soft HEAD~1
```

## 2. I want to undo my last commit and discard the changes completely
```bash
git reset --hard HEAD~1
```
⚠️ This permanently deletes those changes.

## 3. I committed to the wrong branch
```bash
git reset --soft HEAD~1     # Undo the commit, keep changes staged
git stash                    # Stash the changes
git switch correct-branch
git stash pop
git commit -m "Correct commit message"
```

## 4. I need to change my last commit's message
```bash
git commit --amend -m "New, corrected message"
```
⚠️ Don't do this if the commit has already been pushed and others may have pulled it.

## 5. I forgot to add a file to my last commit
```bash
git add forgotten-file.txt
git commit --amend --no-edit
```

## 6. I staged a file by mistake
```bash
git restore --staged file.txt
```

## 7. I want to discard changes to a file (revert to last commit)
```bash
git restore file.txt
```

## 8. I already pushed a bad commit — need to undo it safely
```bash
git revert <commit-hash>
git push
```
(Creates a new commit that undoes the bad one — safe for shared branches.)

## 9. I deleted a branch by accident
```bash
git reflog                          # Find the last commit hash of the deleted branch
git branch recovered-branch <hash>
```

## 10. I ran `git reset --hard` and lost work
```bash
git reflog
# Find the commit before the reset
git reset --hard <commit-hash-from-reflog>
```

## 11. I need to switch branches but have uncommitted changes
```bash
git stash
git switch other-branch
# ...later...
git switch original-branch
git stash pop
```

## 12. I merged the wrong branch
```bash
git reset --hard HEAD~1     # If merge was the last action and not yet pushed
# OR, if already pushed:
git revert -m 1 <merge-commit-hash>
```

## 13. I have a merge conflict and want to start over
```bash
git merge --abort
# or during rebase:
git rebase --abort
```

## 14. I accidentally committed a secret/password
```bash
git rm --cached secrets.env
echo "secrets.env" >> .gitignore
git commit -m "Remove secrets file from tracking"
```
⚠️ The secret still exists in history — rotate/invalidate the credential immediately, and consider using `git filter-repo` or BFG Repo-Cleaner to purge it from history entirely.

## 15. I want to see what changed before undoing anything
```bash
git diff
git diff --staged
git log -p -1
```
**Always check before you act — undoing mistakes is much easier than undoing an undo.**

## Golden Rule
> If you're unsure, **commit or stash your current work first**. It's much safer to have an extra commit/stash to clean up later than to lose work permanently.

## Summary
Most Git mistakes are recoverable thanks to `reflog`, `revert`, `restore`, and `stash`. The riskiest operations are `reset --hard` and `push --force` — use them carefully and always check `git status`/`git reflog` first.
