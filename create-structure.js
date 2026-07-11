const fs = require("fs");
const path = require("path");

const structure = {
  "Git-Notes": {
    "README.md": "",

    "01-Introduction": {
      "What-is-Git.md": "",
      "Why-Git.md": "",
      "Git-vs-GitHub.md": "",
      "Version-Control.md": "",
      "Git-Architecture.md": "",
    },

    "02-Installation-and-Setup": {
      "Install-Git.md": "",
      "Git-Config.md": "",
      "SSH-Keys.md": "",
      "GitHub-Setup.md": "",
    },

    "03-Basic-Commands": {
      "git-init.md": "",
      "git-clone.md": "",
      "git-status.md": "",
      "git-add.md": "",
      "git-commit.md": "",
      "git-log.md": "",
      "git-diff.md": "",
      "git-rm.md": "",
      "git-mv.md": "",
      "git-ignore.md": "",
    },

    "04-Branching": {
      "Branches.md": "",
      "git-branch.md": "",
      "git-checkout.md": "",
      "git-switch.md": "",
      "git-merge.md": "",
      "Merge-Conflict.md": "",
      "Fast-Forward-vs-Three-Way-Merge.md": "",
    },

    "05-Remote-Repositories": {
      "Remote.md": "",
      "git-remote.md": "",
      "git-fetch.md": "",
      "git-pull.md": "",
      "git-push.md": "",
      "Upstream-Branch.md": "",
    },

    "06-History-and-Recovery": {
      "git-reset.md": "",
      "git-revert.md": "",
      "git-restore.md": "",
      "git-reflog.md": "",
      "git-stash.md": "",
      "Undo-Mistakes.md": "",
    },

    "07-Advanced-Git": {
      "git-rebase.md": "",
      "git-cherry-pick.md": "",
      "git-tag.md": "",
      "git-bisect.md": "",
      "git-blame.md": "",
      "git-clean.md": "",
      "Submodules.md": "",
    },

    "08-GitHub-Workflow": {
      "Fork.md": "",
      "Pull-Request.md": "",
      "Code-Review.md": "",
      "GitFlow.md": "",
      "GitHub-Flow.md": "",
      "Trunk-Based-Development.md": "",
    },

    "09-Best-Practices": {
      "Commit-Messages.md": "",
      "Branch-Naming.md": "",
      "Repository-Structure.md": "",
      ".gitignore-Best-Practices.md": "",
      "Common-Mistakes.md": "",
    },

    "10-Interview": {
      "Git-Interview-QA.md": "",
      "Scenario-Based-Questions.md": "",
      "Cheat-Sheet.md": "",
    },

    Resources: {
      "Useful-Links.md": "",
      "Commands-Cheat-Sheet.md": "",
      "Practice-Exercises.md": "",
    },
  },
};

function createStructure(basePath, obj) {
  for (const name in obj) {
    const fullPath = path.join(basePath, name);

    if (typeof obj[name] === "object") {
      fs.mkdirSync(fullPath, { recursive: true });
      createStructure(fullPath, obj[name]);
    } else {
      fs.writeFileSync(fullPath, obj[name]);
    }
  }
}

createStructure(".", structure);

console.log("✅ Git-Notes directory structure created successfully!");