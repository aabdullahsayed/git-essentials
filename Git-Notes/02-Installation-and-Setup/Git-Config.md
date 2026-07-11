# Git Configuration

Git configuration determines how Git behaves and identifies you as an author. Configuration exists at three levels:

| Level | Scope | File Location | Flag |
|---|---|---|---|
| System | All users on the machine | `/etc/gitconfig` | `--system` |
| Global | All repos for current user | `~/.gitconfig` | `--global` |
| Local | Current repository only | `.git/config` | `--local` (default) |

**Priority**: Local overrides Global, which overrides System.

## Essential First-Time Setup

```bash
git config --global user.name "Jane Doe"
git config --global user.email "jane@example.com"
```

These values are attached to every commit you make (visible via `git log`).

## Set Default Branch Name
```bash
git config --global init.defaultBranch main
```

## Set Default Editor
```bash
git config --global core.editor "code --wait"     # VS Code
git config --global core.editor "vim"              # Vim
git config --global core.editor "nano"              # Nano
```

## Useful Aliases
Aliases let you create shortcuts for common commands:
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
git config --global alias.lg "log --oneline --graph --all --decorate"
```
Now `git st` works the same as `git status`.

## Color Output
```bash
git config --global color.ui auto
```

## Line Ending Handling
```bash
git config --global core.autocrlf input    # macOS/Linux
git config --global core.autocrlf true     # Windows
```

## Viewing Configuration
```bash
git config --list                 # All settings, with source
git config --list --show-origin   # Show which file each setting came from
git config user.name              # View a specific value
```

## Editing Config Directly
```bash
git config --global --edit        # Opens ~/.gitconfig in your default editor
```

## Example `~/.gitconfig` File
```ini
[user]
    name = Jane Doe
    email = jane@example.com
[init]
    defaultBranch = main
[alias]
    st = status
    co = checkout
    lg = log --oneline --graph --all --decorate
[color]
    ui = auto
```

## Summary
Proper configuration — especially `user.name` and `user.email` — is essential before committing. Aliases and editor settings can significantly speed up your daily workflow.
