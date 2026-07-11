# Setting Up GitHub

## Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com) and sign up with an email, username, and password.
2. Verify your email address.

## Step 2: Set Up Authentication
Choose one method to connect your local Git to GitHub:

### Option A: SSH (Recommended)
See `SSH-Keys.md` for full setup steps.

### Option B: HTTPS with Personal Access Token (PAT)
GitHub no longer accepts plain passwords for Git operations over HTTPS. You must use a **Personal Access Token**:
1. **GitHub → Settings → Developer settings → Personal access tokens → Generate new token**.
2. Select scopes (e.g., `repo` for full repository access).
3. Copy the token (you won't see it again).
4. Use it as your password when Git prompts for authentication:
```bash
git clone https://github.com/username/repo.git
# Username: your-username
# Password: <paste your token>
```
Git can cache this so you don't need to re-enter it:
```bash
git config --global credential.helper cache
```

## Step 3: Create Your First Repository
**Via GitHub website:**
1. Click **New repository**.
2. Name it, optionally add a README, `.gitignore`, and license.
3. Click **Create repository**.

**Via command line (existing local project):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:username/repo.git
git push -u origin main
```

## Step 4: Clone an Existing Repository
```bash
git clone git@github.com:username/repo.git
# or
git clone https://github.com/username/repo.git
```

## Step 5: Basic GitHub Concepts to Know
- **Repository (repo)**: A project's storage space on GitHub.
- **Fork**: Your personal copy of someone else's repository.
- **Pull Request (PR)**: A request to merge your changes into another branch/repo.
- **Issues**: Track bugs, feature requests, and tasks.
- **Actions**: Automate workflows (CI/CD) directly in GitHub.
- **Organizations**: Group multiple repos and manage team access.

## Step 6: Set Repository Visibility
- **Public**: Anyone can view (great for open source/portfolio projects).
- **Private**: Only you and invited collaborators can view.

## Summary
Setting up GitHub involves creating an account, configuring authentication (SSH or PAT), and either creating a new repository or cloning an existing one. From there, you're ready to push, pull, and collaborate.
