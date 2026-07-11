# Trunk-Based Development

## What Is Trunk-Based Development (TBD)?
**Trunk-Based Development** is a branching strategy where developers integrate their changes into a single shared branch — the **"trunk"** (usually `main`) — very frequently, often **multiple times per day**, using very short-lived branches (or committing directly to trunk).

## Core Principles
1. There is **one main branch** ("trunk"/`main`) that all developers work against.
2. Feature branches, if used at all, live for **less than a day** before merging.
3. Incomplete features are hidden behind **feature flags**, not long-lived branches.
4. Heavy reliance on **automated testing and CI** to keep trunk always in a releasable state.
5. Enables **Continuous Integration (CI)** in its truest sense — integrating constantly, not just before a release.

## Visual Overview
```
main:  --o--o--o--o--o--o--o--o--o--o--o--
          \  /    \ /    \  /
       (tiny, short-lived branches merged within hours)
```
Compare this to GitFlow's long-lived `develop`/`feature` branches — TBD avoids divergence almost entirely.

## Typical Workflow
```bash
git checkout main
git pull
git checkout -b quick-fix/update-button-color

# Small, focused change
git add .
git commit -m "Update button color to match brand guidelines"
git push -u origin quick-fix/update-button-color

# Open PR, get fast review, merge within hours
git checkout main
git pull
git branch -d quick-fix/update-button-color
```
For very small, low-risk changes, some teams commit **directly to `main`** (especially with strong CI safety nets and small, senior teams).

## Feature Flags — The Key Enabler
Since branches are extremely short-lived, incomplete features can't hide in a branch. Instead, they're gated behind **feature flags** (toggles) so incomplete code can be merged into `main` without being visible/active to users:
```javascript
if (featureFlags.isEnabled('new-checkout-flow')) {
  renderNewCheckout();
} else {
  renderOldCheckout();
}
```

## Trunk-Based Development vs GitFlow vs GitHub Flow

| | GitFlow | GitHub Flow | Trunk-Based |
|---|---|---|---|
| Branch lifespan | Long (weeks) | Short (days) | Very short (hours) |
| Branches used | Many types | `main` + features | `main` (+ optional tiny branches) |
| Merge frequency | Infrequent | Frequent | Very frequent (multiple/day) |
| Requires feature flags? | Rarely | Sometimes | Almost always |
| Best for | Versioned releases | Continuous deployment | High-velocity CI/CD, large teams |

## Benefits
- Minimizes merge conflicts (branches barely diverge before merging).
- True Continuous Integration — bugs surface immediately, not after weeks of divergence.
- Scales well for **large teams** working on the same codebase (used at Google, Facebook, etc.).

## Challenges
- Requires a **mature CI/CD pipeline** and strong automated test coverage — otherwise trunk breaks often.
- Requires discipline around feature flags to avoid shipping half-finished features.
- Less suited for teams without strong testing culture or tooling investment.

## Summary
Trunk-Based Development pushes integration frequency to the extreme — tiny, frequent merges into a single trunk branch, enabled by feature flags and robust CI — favored by high-velocity teams practicing true continuous integration and deployment.
