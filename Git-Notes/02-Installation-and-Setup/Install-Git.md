# Installing Git

## Check if Git is Already Installed
```bash
git --version
```
If it prints a version (e.g., `git version 2.44.0`), Git is already installed.

## Windows
1. Download the installer from [git-scm.com](https://git-scm.com/download/win).
2. Run the installer — recommended defaults work for most users:
   - Editor: choose your preferred default editor (VS Code recommended if installed).
   - Line ending conversion: "Checkout Windows-style, commit Unix-style" (default) is usually safest.
   - Enable Git Credential Manager (default) for easier authentication.
3. This also installs **Git Bash**, a Unix-like terminal for running Git commands on Windows.
4. Verify: open Git Bash or Command Prompt and run `git --version`.

## macOS
Multiple options:

**Option 1: Homebrew (recommended)**
```bash
brew install git
```

**Option 2: Xcode Command Line Tools**
```bash
xcode-select --install
```

**Option 3: Official installer**
Download from [git-scm.com](https://git-scm.com/download/mac).

## Linux

**Debian/Ubuntu:**
```bash
sudo apt update
sudo apt install git
```

**Fedora:**
```bash
sudo dnf install git
```

**Arch:**
```bash
sudo pacman -S git
```

## Verify Installation
```bash
git --version
```

## Post-Install: Set Up Your Identity
Before making commits, configure your name and email (see `Git-Config.md`):
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## GUI Clients (Optional)
While the command line is the most powerful way to use Git, GUI tools can help visualize history:
- **GitHub Desktop**
- **GitKraken**
- **Sourcetree**
- Built-in Git support in **VS Code**, **JetBrains IDEs**

## Summary
Git installation is quick and available on all major operating systems. Once installed, always configure your identity before your first commit.
