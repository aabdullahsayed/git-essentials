# git bisect

## Purpose
Uses **binary search** across your commit history to efficiently find the exact commit that introduced a bug.

## Why It's Useful
Instead of manually checking commits one by one (linear search — slow for large histories), `git bisect` narrows down the search by half with each test, finding the culprit commit in `log2(n)` steps. For example, in a history of 1,000 commits, it takes at most ~10 steps instead of up to 1,000.

## Syntax & Workflow

**1. Start the bisect session:**
```bash
git bisect start
```

**2. Mark the current commit as "bad" (has the bug):**
```bash
git bisect bad
```

**3. Mark a known-good commit (before the bug existed):**
```bash
git bisect good v1.0.0
# or
git bisect good a1b2c3d
```

**4. Git checks out a commit halfway between good and bad.** Test it (run the app, run tests, reproduce the bug manually), then tell Git the result:
```bash
git bisect good     # if the bug is NOT present
# or
git bisect bad       # if the bug IS present
```

**5. Repeat step 4** — Git keeps narrowing the range until it identifies the exact first bad commit:
```
a1b2c3d is the first bad commit
```

**6. End the bisect session (return to your original branch):**
```bash
git bisect reset
```

## Automating with a Test Script
If you have an automated test that can detect the bug, you can automate the entire process:
```bash
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
git bisect run npm test
```
Git will automatically run `npm test` at each step, interpreting a **non-zero exit code** as "bad" and a **zero exit code** as "good" — completing the search without manual intervention.

## Example Full Session
```bash
git bisect start
git bisect bad                     # current commit is broken
git bisect good v2.0.0              # this old tag was fine
# Git checks out a middle commit
npm test                            # e.g., tests fail
git bisect bad
# Git checks out another middle commit
npm test                            # e.g., tests pass
git bisect good
# ... repeats until Git identifies the exact bad commit ...
git bisect reset
```

## Viewing Bisect Log
```bash
git bisect log
```
Useful for reviewing the steps taken, or replaying them (`git bisect replay <logfile>`).

## Summary
`git bisect` automates the process of pinpointing exactly which commit introduced a regression, using binary search — dramatically faster than manually checking commits one at a time.
