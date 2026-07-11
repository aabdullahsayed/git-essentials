# Merge Conflicts

## What Is a Merge Conflict?
A merge conflict occurs when Git **cannot automatically reconcile** changes between two branches — typically because the same lines in the same file were modified differently in each branch.

## When Do Conflicts Happen?
- During `git merge`
- During `git rebase`
- During `git cherry-pick`
- During `git pull` (which runs `fetch` + `merge` internally)

## Example Scenario
**main branch**, `app.js`:
```js
function greet() {
  console.log("Hello, World!");
}
```
**feature branch**, `app.js`:
```js
function greet() {
  console.log("Hi there!");
}
```
Merging `feature` into `main` produces a conflict because both branches changed the same line differently.

## What a Conflict Looks Like
```js
function greet() {
<<<<<<< HEAD
  console.log("Hello, World!");
=======
  console.log("Hi there!");
>>>>>>> feature
}
```
- `<<<<<<< HEAD` to `=======`: your current branch's version.
- `=======` to `>>>>>>> feature`: the incoming branch's version.

## Resolving a Conflict — Step by Step

1. **Identify conflicted files:**
```bash
git status
```

2. **Open each conflicted file and manually edit it** — choose one version, the other, a combination, or write something new. Remove the `<<<<<<<`, `=======`, `>>>>>>>` markers.

```js
function greet() {
  console.log("Hello there!");   // resolved version
}
```

3. **Mark the file as resolved:**
```bash
git add app.js
```

4. **Complete the merge:**
```bash
git commit
```
(Git pre-fills a merge commit message — you can edit or accept it.)

## Aborting a Merge
If the conflict is too complex or you want to start over:
```bash
git merge --abort
```
This restores the repository to its pre-merge state.

## Using a Merge Tool
```bash
git mergetool
```
Launches a configured visual diff/merge tool (e.g., VS Code, Meld, KDiff3) to resolve conflicts more easily.

## Tips to Avoid Conflicts
- Pull/rebase frequently to stay in sync with `main`.
- Keep feature branches short-lived.
- Communicate with teammates about who's editing which files.
- Break large changes into smaller, focused commits/PRs.

## Conflicts During Rebase
Conflicts during `git rebase` are resolved similarly, but you continue with:
```bash
git add <resolved-file>
git rebase --continue
```
Or abort with:
```bash
git rebase --abort
```

## Summary
Merge conflicts are a normal part of collaborative development. Git clearly marks the conflicting sections — resolving them is just a matter of editing the file, staging it, and completing the merge (or rebase).
