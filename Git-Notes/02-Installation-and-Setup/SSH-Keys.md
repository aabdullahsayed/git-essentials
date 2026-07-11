# SSH Keys for Git/GitHub

SSH keys let you authenticate with remote Git servers (like GitHub) **without typing your username/password every time**.

## Why Use SSH Instead of HTTPS?
| | HTTPS | SSH |
|---|---|---|
| Authentication | Username/password or token each time (or cached) | Key-based, no repeated prompts |
| Setup | Easier initially | Slightly more setup, but seamless afterward |
| Firewall friendliness | Usually allowed everywhere | May be blocked on some corporate networks |

## Step 1: Check for Existing SSH Keys
```bash
ls -al ~/.ssh
```
Look for files like `id_ed25519.pub` or `id_rsa.pub`.

## Step 2: Generate a New SSH Key
```bash
ssh-keygen -t ed25519 -C "you@example.com"
```
(Use `-t rsa -b 4096` if `ed25519` isn't supported by your system.)

- Press Enter to accept the default file location (`~/.ssh/id_ed25519`).
- Optionally set a passphrase for extra security.

## Step 3: Start the SSH Agent and Add Your Key
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## Step 4: Copy the Public Key
```bash
cat ~/.ssh/id_ed25519.pub
```
Copy the output (starts with `ssh-ed25519 ...`).

**macOS shortcut:**
```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

## Step 5: Add the Key to GitHub
1. Go to **GitHub → Settings → SSH and GPG keys → New SSH key**.
2. Paste the public key, give it a title (e.g., "My Laptop"), and save.

## Step 6: Test the Connection
```bash
ssh -T git@github.com
```
You should see:
```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

## Step 7: Clone/Use Repos via SSH
```bash
git clone git@github.com:username/repo.git
```
Note the SSH URL format: `git@github.com:username/repo.git` (not `https://...`).

## Switching an Existing Repo from HTTPS to SSH
```bash
git remote set-url origin git@github.com:username/repo.git
```

## Common Issues
- **Permission denied (publickey)**: Ensure the key was added to the SSH agent and to GitHub correctly.
- **Multiple GitHub accounts**: Use an SSH config file (`~/.ssh/config`) with different keys per host alias.

## Summary
SSH keys provide secure, password-free authentication for Git operations — the recommended approach for frequent GitHub users.
