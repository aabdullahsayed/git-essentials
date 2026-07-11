# Branch Naming Conventions

## Why Naming Matters
Clear, consistent branch names make it immediately obvious what a branch is for, who's working on what, and help tools (CI/CD, automation) parse branch purpose programmatically.

## Common Convention
```
<type>/<short-description>
```

| Type | Purpose | Example |
|---|---|---|
| `feature/` | New functionality | `feature/user-authentication` |
| `fix/` or `bugfix/` | Bug fixes | `fix/login-redirect-loop` |
| `hotfix/` | Urgent production fixes | `hotfix/payment-gateway-down` |
| `release/` | Release preparation | `release/2.1.0` |
| `chore/` | Maintenance, tooling, dependencies | `chore/upgrade-react-18` |
| `docs/` | Documentation changes | `docs/update-api-reference` |
| `refactor/` | Code restructuring, no behavior change | `refactor/simplify-auth-service` |
| `test/` | Adding/fixing tests | `test/add-cart-unit-tests` |

## Best Practices

### 1. Use Lowercase and Hyphens
```
✅ feature/add-search-bar
❌ Feature/AddSearchBar
❌ feature/add_search_bar
```

### 2. Be Descriptive but Concise
```
✅ fix/null-pointer-on-empty-cart
❌ fix/bug
❌ fix/fix-the-thing-that-was-broken-yesterday-during-standup
```

### 3. Include Ticket/Issue Numbers (if using an issue tracker)
```
feature/JIRA-123-add-search-bar
fix/GH-456-login-redirect-loop
```
This links the branch directly to tracked work and helps tools auto-associate PRs with tickets.

### 4. Include Your Name/Initials (for some teams)
```
jane/feature/dark-mode
```
Useful in smaller teams or when multiple people might work on similarly-named features.

### 5. Avoid Special Characters
Stick to letters, numbers, hyphens, and forward slashes. Avoid spaces, underscores (mixed with hyphens), or symbols like `!@#$%`.

## Example Team Convention
```
main                              # production-ready code
develop                           # integration branch (if using GitFlow)
feature/PROJ-101-user-profile
fix/PROJ-205-broken-image-upload
hotfix/PROJ-310-security-patch
release/v3.2.0
chore/update-dependencies
```

## Enforcing Conventions
Many teams enforce branch naming via:
- **Git hooks** (`pre-push`, `pre-receive`) that reject non-conforming names.
- **CI checks** that validate branch name patterns before allowing merges.
- **Documentation/README** conventions communicated to the team.

## Summary
Consistent branch naming (`type/description`, optionally with ticket numbers) makes it instantly clear what each branch is for — improving team communication and enabling automation tooling to parse intent.
