# Repository Structure Best Practices

## Why Structure Matters
A well-organized repository is easier to navigate, onboard new contributors into, and maintain over time. Poor structure leads to confusion, duplicated effort, and slower development.

## Essential Files at the Root

| File | Purpose |
|---|---|
| `README.md` | Project overview, setup instructions, usage examples |
| `.gitignore` | Files/folders Git should never track |
| `LICENSE` | Legal terms for using/distributing the code |
| `CONTRIBUTING.md` | Guidelines for contributors (PR process, coding standards) |
| `CHANGELOG.md` | Human-readable log of notable changes per version |
| `CODE_OF_CONDUCT.md` | Community behavior expectations (common in open source) |
| `.github/` | GitHub-specific config: issue templates, PR templates, workflows (Actions) |

## Example Structure (Web App)
```
my-project/
├── README.md
├── LICENSE
├── .gitignore
├── .github/
│   ├── workflows/
│   │   └── ci.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── index.js
├── tests/
├── docs/
├── public/
├── package.json
└── .env.example
```

## Monorepo vs Polyrepo

| | Monorepo | Polyrepo |
|---|---|---|
| Structure | All projects in one repository | Each project in its own repository |
| Pros | Shared tooling, atomic cross-project commits, easier code sharing | Clear ownership boundaries, independent versioning/deployment |
| Cons | Can grow large/slow, requires tooling (Nx, Turborepo, Bazel) | Harder to make coordinated cross-repo changes |
| Examples | Google, Facebook (internal), many JS monorepos | Most small-to-medium teams, microservices |

## README Best Practices
A good `README.md` typically includes:
1. **Project title and short description**
2. **Installation/setup instructions**
3. **Usage examples**
4. **Configuration/environment variables**
5. **Contributing guidelines** (or link to `CONTRIBUTING.md`)
6. **License**
7. **Badges** (build status, coverage, version) — optional but common

## Organizing Source Code
- Group by **feature/domain**, not just by file type, for larger projects:
```
src/
├── features/
│   ├── auth/
│   │   ├── AuthForm.jsx
│   │   ├── authSlice.js
│   │   └── authAPI.js
│   ├── cart/
│   └── checkout/
```
vs. purely type-based (`components/`, `reducers/`, `apis/` — can become unwieldy as the app grows).

## `.env.example`
Never commit actual secrets (`.env`), but **do** commit a `.env.example` showing which variables are needed:
```
DATABASE_URL=
API_KEY=
DEBUG=false
```

## Keep the Root Clean
Avoid cluttering the repository root with miscellaneous scripts, notes, or temp files. Use dedicated folders (`scripts/`, `docs/`, `tools/`) to keep things organized.

## Summary
A clear, consistent repository structure — with essential documentation files, sensible source organization, and clean separation of concerns — makes projects easier to understand, maintain, and contribute to.
