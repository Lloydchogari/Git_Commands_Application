 // Git commands database//
 
        const gitCommands = {
            "Basic Commands": {
                description: "Essential Git commands for daily use",
                commands: {
                    "git init": {
                        description: "Initialize a new Git repository in the current directory. This creates a new .git subdirectory in your current working directory, which contains all the necessary repository files.",
                        syntax: "git init [directory]",
                        example: "git init\ngit init my-project"
                    },
                    "git clone": {
                        description: "Create a copy of a remote repository on your local machine. This downloads the entire repository history and sets up tracking branches.",
                        syntax: "git clone <repository-url> [directory]",
                        example: "git clone https://github.com/user/repo.git\ngit clone https://github.com/user/repo.git my-folder"
                    },
                    "git add": {
                        description: "Add files to the staging area. Use '.' to add all changes, specific filenames, or patterns to stage changes for commit.",
                        syntax: "git add <file> | git add .",
                        example: "git add .\ngit add index.html\ngit add src/*.js"
                    },
                    "git commit": {
                        description: "Save staged changes to the repository with a descriptive message. Creates a new commit with a unique hash identifier.",
                        syntax: "git commit -m \"message\"",
                        example: "git commit -m \"Add login functionality\"\ngit commit -am \"Fix bug in user authentication\""
                    },
                    "git push": {
                        description: "Upload local commits to a remote repository. Shares your changes with others and updates the remote branch.",
                        syntax: "git push [remote] [branch]",
                        example: "git push\ngit push origin main\ngit push -u origin feature-branch"
                    },
                    "git pull": {
                        description: "Download and merge changes from a remote repository to your local branch. Combines git fetch and git merge.",
                        syntax: "git pull [remote] [branch]",
                        example: "git pull\ngit pull origin main\ngit pull --rebase origin main"
                    },
                    "git status": {
                        description: "Show the current state of your working directory and staging area. Displays modified, staged, and untracked files.",
                        syntax: "git status",
                        example: "git status\ngit status --short\ngit status --porcelain"
                    },
                    "git log": {
                        description: "Display commit history. Shows commit hashes, authors, dates, and commit messages in reverse chronological order.",
                        syntax: "git log [options]",
                        example: "git log\ngit log --oneline\ngit log --graph --all"
                    }
                }
            },
            "Branching & Merging": {
                description: "Commands for working with branches and merging code",
                commands: {
                    "git branch": {
                        description: "List, create, or delete branches. Branches allow you to work on different features simultaneously without affecting the main codebase.",
                        syntax: "git branch [branch-name]",
                        example: "git branch\ngit branch feature-login\ngit branch -d old-feature"
                    },
                    "git checkout": {
                        description: "Switch between branches or restore files. Used to navigate between different branches or specific commits.",
                        syntax: "git checkout <branch-name>",
                        example: "git checkout main\ngit checkout feature-branch\ngit checkout -b new-feature"
                    },
                    "git switch": {
                        description: "Modern command to switch branches. Introduced as a more intuitive alternative to git checkout for branch switching.",
                        syntax: "git switch <branch-name>",
                        example: "git switch main\ngit switch -c new-feature\ngit switch feature-branch"
                    },
                    "git merge": {
                        description: "Combine changes from one branch into another. Integrates the history of two branches into a single branch.",
                        syntax: "git merge <branch-name>",
                        example: "git merge feature-branch\ngit merge --no-ff feature\ngit merge --squash feature"
                    },
                    "git rebase": {
                        description: "Reapply commits from one branch onto another. Creates a linear history by moving commits to a new base.",
                        syntax: "git rebase <base-branch>",
                        example: "git rebase main\ngit rebase -i HEAD~3\ngit rebase --continue"
                    },
                    "git cherry-pick": {
                        description: "Apply specific commits from one branch to another. Useful for selectively applying changes without merging entire branches.",
                        syntax: "git cherry-pick <commit-hash>",
                        example: "git cherry-pick abc1234\ngit cherry-pick -n abc1234\ngit cherry-pick A..B"
                    }
                }
            },
            "Remote Operations": {
                description: "Commands for working with remote repositories",
                commands: {
                    "git remote": {
                        description: "Manage remote repositories. Add, remove, or modify connections to remote repositories like GitHub, GitLab, etc.",
                        syntax: "git remote [command] [name] [url]",
                        example: "git remote -v\ngit remote add origin https://github.com/user/repo.git\ngit remote remove origin"
                    },
                    "git fetch": {
                        description: "Download changes from remote repository without merging. Updates your remote-tracking branches with new commits.",
                        syntax: "git fetch [remote] [branch]",
                        example: "git fetch\ngit fetch origin\ngit fetch --all"
                    },
                    "git push": {
                        description: "Upload local commits to remote repository. Share your changes with team members and update the remote branch.",
                        syntax: "git push [remote] [branch]",
                        example: "git push origin main\ngit push -u origin feature\ngit push --tags"
                    },
                    "git pull": {
                        description: "Download and integrate changes from remote repository. Combines git fetch and git merge in one command.",
                        syntax: "git pull [remote] [branch]",
                        example: "git pull origin main\ngit pull --rebase\ngit pull --no-ff"
                    }
                }
            },
            "Staging & Changes": {
                description: "Commands for managing changes and the staging area",
                commands: {
                    "git add": {
                        description: "Add file contents to staging area. Prepares changes for the next commit by moving them to the staging area.",
                        syntax: "git add <file>",
                        example: "git add .\ngit add src/\ngit add -p file.js"
                    },
                    "git reset": {
                        description: "Unstage files or reset commits. Move the HEAD pointer and optionally update staging area and working directory.",
                        syntax: "git reset [--soft|--mixed|--hard] [commit]",
                        example: "git reset HEAD file.txt\ngit reset --soft HEAD~1\ngit reset --hard origin/main"
                    },
                    "git restore": {
                        description: "Restore files in working tree or staging area. Modern command for undoing changes to files.",
                        syntax: "git restore [--staged] <file>",
                        example: "git restore file.txt\ngit restore --staged file.txt\ngit restore --source=HEAD~1 file.txt"
                    },
                    "git rm": {
                        description: "Remove files from working tree and staging area. Stages the removal of files for the next commit.",
                        syntax: "git rm <file>",
                        example: "git rm file.txt\ngit rm --cached file.txt\ngit rm -r folder/"
                    },
                    "git mv": {
                        description: "Move or rename files and stage the change. Equivalent to moving a file and staging both the deletion and addition.",
                        syntax: "git mv <old-name> <new-name>",
                        example: "git mv old-file.txt new-file.txt\ngit mv src/old.js src/new.js"
                    },
                    "git diff": {
                        description: "Show differences between commits, working tree, and staging area. Compare various states of your files.",
                        syntax: "git diff [options] [commit] [path]",
                        example: "git diff\ngit diff --staged\ngit diff HEAD~1 HEAD"
                    },
                    "git stash": {
                        description: "Temporarily save changes without committing. Useful when you need to quickly switch branches.",
                        syntax: "git stash [push|pop|list|drop]",
                        example: "git stash\ngit stash pop\ngit stash list"
                    }
                }
            },
            "History & Information": {
                description: "Commands for viewing repository history and information",
                commands: {
                    "git log": {
                        description: "Show commit history. Display commits in reverse chronological order with details like author, date, and message.",
                        syntax: "git log [options]",
                        example: "git log --oneline\ngit log --graph --all\ngit log --author=\"John\""
                    },
                    "git show": {
                        description: "Display information about specific commits or objects. Shows the changes introduced by a commit.",
                        syntax: "git show [commit-hash]",
                        example: "git show\ngit show abc1234\ngit show HEAD~1"
                    },
                    "git blame": {
                        description: "Show who last modified each line of a file. Useful for understanding code history and responsibility.",
                        syntax: "git blame <file>",
                        example: "git blame index.html\ngit blame -L 10,20 script.js"
                    },
                    "git reflog": {
                        description: "Show reference logs. Displays a history of all ref updates including branch switches and resets.",
                        syntax: "git reflog [show] [branch]",
                        example: "git reflog\ngit reflog show main\ngit reflog --all"
                    }
                }
            },
            "GitHub Specific": {
                description: "Commands and workflows specific to GitHub",
                commands: {
                    "gh pr create": {
                        description: "Create a pull request using GitHub CLI. Opens a pull request from your current branch to the base branch.",
                        syntax: "gh pr create [flags]",
                        example: "gh pr create --title \"Add feature\" --body \"Description\"\ngh pr create --draft"
                    },
                    "gh pr list": {
                        description: "List pull requests in the repository. Shows open pull requests with their status and details.",
                        syntax: "gh pr list [flags]",
                        example: "gh pr list\ngh pr list --state merged\ngh pr list --author @me"
                    },
                    "gh repo clone": {
                        description: "Clone a GitHub repository using GitHub CLI. Alternative to git clone with GitHub integration.",
                        syntax: "gh repo clone <repository>",
                        example: "gh repo clone user/repo\ngh repo clone https://github.com/user/repo"
                    },
                    "gh issue create": {
                        description: "Create a new issue using GitHub CLI. Opens a new issue in the repository with title and body.",
                        syntax: "gh issue create [flags]",
                        example: "gh issue create --title \"Bug report\" --body \"Description\"\ngh issue create --label bug"
                    }
                }
            }
        };


// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered:', reg.scope))
        .catch(err => console.log('SW registration failed:', err));
    });
}

// App initialization
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderCategories();
    setupInstallPrompt();
}

function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    Object.entries(gitCommands).forEach(([categoryName, categoryData]) => {
        const categoryElement = createCategoryElement(categoryName, categoryData);
        categoriesContainer.appendChild(categoryElement);
    });
}

function createCategoryElement(categoryName, categoryData) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    categoryDiv.onclick = () => toggleCommands(categoryDiv, categoryData.commands);

    categoryDiv.innerHTML = `
        <h3>${categoryName}</h3>
        <p>${categoryData.description}</p>
        <div class="commands-list">
            ${Object.keys(categoryData.commands).map(cmd => 
                `<div class="command-tag" onclick="event.stopPropagation(); showCommand('${cmd}', '${categoryName}')">${cmd}</div>`
            ).join('')}
        </div>
    `;
    return categoryDiv;
}

function toggleCommands(categoryElement, commands) {
    const commandsList = categoryElement.querySelector('.commands-list');
    const isVisible = commandsList.style.display === 'flex';
    document.querySelectorAll('.commands-list').forEach(list => list.style.display = 'none');
    commandsList.style.display = isVisible ? 'none' : 'flex';
}

function showCommand(commandName, categoryName) {
    const command = gitCommands[categoryName].commands[commandName];
    const commandDetail = document.getElementById('commandDetail');
    const commandContent = document.getElementById('commandContent');

    commandContent.innerHTML = `
        <h3>${commandName}</h3>
        <div class="command-description">${command.description}</div>
        <div class="command-syntax"><strong>Syntax:</strong><br><code>${command.syntax}</code></div>
        <div class="command-example"><strong>Examples:</strong><br><code>${command.example.replace(/\n/g,'<br>')}</code></div>
    `;

    commandDetail.classList.add('show');
}

function closeCommand() {
    document.getElementById('commandDetail').classList.remove('show');
}

// PWA Install Prompt
let deferredPrompt;
function setupInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallButton();
    });
}

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.textContent = '📱 Install App';
    installBtn.style.cssText = `position:fixed;top:20px;right:20px;background:var(--accent-blue);color:white;border:none;padding:10px 15px;border-radius:20px;cursor:pointer;z-index:1001;font-family:'Fira Code', monospace;`;
    installBtn.onclick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const choice = await deferredPrompt.userChoice;
            if (choice.outcome === 'accepted') installBtn.remove();
            deferredPrompt = null;
        }
    };
    document.body.appendChild(installBtn);
}

// Close command detail when clicking outside
document.addEventListener('click', (e) => {
    const commandDetail = document.getElementById('commandDetail');
    if (e.target === commandDetail) closeCommand();
});
