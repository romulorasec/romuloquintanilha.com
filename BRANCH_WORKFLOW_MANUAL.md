# Branch Workflow Manual — romuloquintanilha.com

> Written based on the actual state of this repository. Every branch, command, and example in this manual reflects what already exists in this project — nothing is invented.

---

## Repository state at the time this manual was written

```
* 612f7f9 (HEAD -> dev, origin/dev)  ci: run checks on dev branch in addition to main
* ab24995 (origin/main, main)        Update CLAUDE.md and SETUP-NOTES.md for session readiness
* 79238de                             Set up full project for GitHub and Vercel deployment
* a359845                             Initial commit from Create Next App
```

**Summary:**
- You are currently on the `dev` branch
- `dev` is 1 commit ahead of `main`
- Working tree is completely clean (nothing uncommitted, nothing unsaved)
- There are exactly 2 branches: `main` and `dev`
- The remote is GitHub at `https://github.com/romulorasec/romuloquintanilha.com`

---

# 80/20 workflow for this project

This is a low-complexity personal portfolio project. You are working alone. Most of your daily work will be things like editing copy, adjusting colors, fixing spacing, swapping a button, or adding a new section.

**For 80% of your work, the entire workflow fits in 7 commands:**

```bash
git pull                          # sync with remote before touching anything
# ... make your changes in the editor ...
git status                        # see what changed
git add .                         # stage everything
git commit -m "What you changed"  # save to history
git push                          # send to GitHub
```

**Which branch do you use for almost everything?**

`dev`

That's it. `dev` is your working branch. You do your work there. When it's ready to go live, you merge `dev` into `main`. Vercel watches `main` and deploys automatically.

**The mental model:**

```
dev   →  where you work
main  →  what the world sees (production)
```

Do not edit `main` directly. Ever.

---

# What to do with changes that are already made in the project

This section is for when you've already edited files and aren't sure what to do next.

---

## Step 1 — Find out what's going on

```bash
git status
```

**What it shows and how to read it:**

```
On branch dev                          ← you are on dev. Good.
Your branch is up to date with 'origin/dev'.

Changes not staged for commit:         ← files you edited but haven't saved to git yet
  modified:   src/components/sections/hero.tsx

Untracked files:                       ← brand new files git doesn't know about yet
  src/components/sections/new-section.tsx
```

**What each status means:**

| What you see | What it means | What to do |
|---|---|---|
| `nothing to commit, working tree clean` | Nothing changed. You're safe. | Start working or pull. |
| `modified: filename` | You changed that file but haven't committed it | Review, then add and commit |
| `Untracked files: filename` | New file git has never seen | Add and commit |
| `Changes to be committed:` | File is staged (added) but not yet committed | Commit it |

---

## Step 2 — See exactly what changed

```bash
git diff
```

This shows you the actual lines that changed. Green lines with `+` were added. Red lines with `-` were removed.

**When to use it:**
- Before committing, to double-check you didn't accidentally change something you didn't mean to
- When `git status` says files are modified but you don't remember what you changed

**How to exit the diff view:** press `q`

---

## Step 3 — Stage the changes

```bash
git add .
```

This tells git "these are the changes I want to include in my next commit." The `.` means "everything in the current directory."

**When to use it:** After you've reviewed `git diff` and you're satisfied with the changes.

**Avoid:** Running `git add .` before checking `git diff`. You might accidentally commit files you didn't intend to include.

---

## Step 4 — Commit the changes

```bash
git commit -m "Describe the change made"
```

This saves a snapshot of your staged changes to the project history.

**When to use it:** After staging. A commit is a checkpoint — if something breaks later, you can always come back to this point.

**Good commit messages for this project:**

```bash
git commit -m "Update hero headline copy"
git commit -m "Fix button hover color on mobile"
git commit -m "Add client testimonials section"
git commit -m "Adjust spacing between services cards"
git commit -m "Change CTA text in footer"
```

**Bad commit messages:**
```bash
git commit -m "fix"
git commit -m "changes"
git commit -m "asdfdsjk"
```

**When to commit:**
- Every time you finish a meaningful unit of work
- Before switching branches
- Before pulling updates from the remote
- Don't wait until you've done 3 days of work — commit often, in small chunks

---

## Step 5 — Push to GitHub

```bash
git push
```

This sends your local commits to GitHub. If you're on `dev`, it sends to `origin/dev`.

```bash
git push origin dev    # explicit version — same result if you're already on dev
```

**When to push:**
- After every commit, or at the end of every work session
- Before closing your laptop
- Before asking someone else to review your work

---

## What to do if you're on the wrong branch but already made changes

This happens. You forget to check which branch you're on, you edit some files, and then you realize you're on `main` instead of `dev`.

**Check where you are:**
```bash
git branch
```
The branch with `*` in front is where you are.

**If you're on `main` and have changes that aren't committed yet:**

Move those changes to `dev` before committing:

```bash
git stash          # temporarily saves your changes and cleans the working tree
git switch dev     # switch to dev
git stash pop      # bring your changes back
```

Now you're on `dev` with your changes intact. Continue from Step 2.

**If you already committed on `main` by mistake:** Stop. Don't push. Ask for help — this is recoverable but requires care.

---

# How to discover the purpose of each existing branch

```bash
git branch -a
```

Shows all branches — local and remote:

```
* dev
  main
  remotes/origin/dev
  remotes/origin/main
```

```bash
git log --oneline --graph --decorate --all
```

Shows the full history of every branch in a visual tree. This is the most informative command when you're trying to understand the state of a project.

```bash
git show-branch
```

Shows which commits are on which branches and which aren't shared.

---

## How to identify each branch by name and history

| Branch name pattern | What it likely is | What to do with it |
|---|---|---|
| `main` | Production branch | Never edit directly. Only receives merges from `dev`. |
| `dev` | Development branch | This is where you work. |
| `feat/something` | Feature branch | Used for a specific new feature. Merge into `dev` when done. |
| `fix/something` | Bug fix branch | Used for a specific fix. Merge into `dev` when done. |
| `hotfix/something` | Emergency fix | Goes directly to `main` in a real emergency. |
| `test/something` | Experimental branch | Can be deleted if the experiment is discarded. |
| `release/x.x` | Release candidate | Exists only briefly before a major launch. |

**In this project right now:** Only `main` and `dev` exist. That's all you need.

---

# How to work day to day using the current structure

The flow for every single working session looks like this:

```bash
git status        # always start here
git branch        # confirm you're on dev
git pull          # get any updates from GitHub
```

Then make your changes. Then:

```bash
git status        # see what changed
git diff          # review the actual changes
git add .         # stage them
git commit -m "What you did"
git push          # send to GitHub
```

---

## Practical examples

### 1. Editing the copy of an existing section

**Branch to use:** `dev`

```bash
git branch          # confirm you're on dev
git pull            # get latest changes
```

Open `src/components/sections/hero.tsx` (or whichever section), make your text change.

```bash
git status          # shows: modified: src/components/sections/hero.tsx
git diff            # confirm you only changed the copy you intended
git add .
git commit -m "Update hero headline and subheading copy"
git push
```

**What to avoid:** Committing without reading `git diff` first — you might accidentally include an unrelated file you had open.

---

### 2. Changing the color of a button

**Branch to use:** `dev`

Colors live in `src/styles/tokens.css` (CSS variables) or in the component's inline style prop.

```bash
git pull
```

Make the change. Then:

```bash
git diff            # verify only the color line changed
git add .
git commit -m "Update primary button hover color"
git push
```

**What to avoid:** Hardcoding a hex value directly in the component. Always use a CSS variable from `tokens.css`.

---

### 3. Adding a new section to a page

**Branch to use:** `dev` (this is exactly the kind of change `dev` is for)

Create your new component, for example `src/components/sections/faq.tsx`. Import and add it to `src/app/page.tsx`.

```bash
git status
# shows:
#   modified:   src/app/page.tsx
#   Untracked files: src/components/sections/faq.tsx
git add .
git commit -m "Add FAQ section to homepage"
git push
```

**Note:** If this is a large section that will take multiple sessions to build, you could create a `feat/faq-section` branch off `dev`. But for most additions, just working directly on `dev` is perfectly fine.

---

### 4. Adjusting spacing

**Branch to use:** `dev`

Spacing adjustments typically happen in a single component file.

```bash
git pull
```

Make the change (padding, margin, gap, clamp value, etc.).

```bash
git diff            # confirm only spacing values changed
git add .
git commit -m "Increase vertical spacing between service cards"
git push
```

---

### 5. Fixing a button that doesn't work

**Branch to use:** `dev`

```bash
git pull
```

Fix the button logic or handler in the relevant component.

```bash
git status
git diff
git add .
git commit -m "Fix CTA button click handler in navbar"
git push
```

---

### 6. Reviewing changes that were already made before committing

You made changes across several files but haven't committed yet and want to review everything:

```bash
git status          # get the list of all modified files
git diff            # see all changes line by line
```

If you want to review just one file:

```bash
git diff src/components/sections/about.tsx
```

Once you're satisfied:

```bash
git add .
git commit -m "Revise About section layout and copy"
git push
```

---

### 7. Sending committed changes to the remote repository

You committed locally but haven't pushed yet:

```bash
git log --oneline -5    # confirm your commit is there
git push
```

---

### 8. Updating the local project with changes from the remote

Someone else made changes (or you pushed from another computer):

```bash
git pull
```

**When to run it:** Always at the start of a work session, before making any changes. This prevents conflicts.

---

# When NOT to create a new branch

In this project, you are working alone on a personal portfolio. For the following tasks, **do not create a new branch** — just work directly on `dev`:

- Editing any text, headline, subtitle, or CTA
- Changing a color, font size, or spacing value
- Fixing a broken link or typo
- Adjusting padding, margin, or layout
- Swapping an image
- Reordering sections on the page
- Adding, removing, or renaming a CSS variable in `tokens.css`
- Updating `src/config/site.ts` with contact info or social links
- Any change that touches 1–3 files and takes under an hour

Creating a branch for every small change adds overhead with zero benefit when you're working alone. You'd spend more time managing branches than building the site.

---

# When it may be necessary to create a new branch

Keep this rare. Consider a new branch only when:

- You are building a large, multi-day feature (e.g., a full contact form with email integration)
- The change could break the entire site (e.g., changing the routing structure, replacing Lenis with another library)
- You want to experiment with a design direction you might throw away (e.g., trying a completely different hero layout)
- You need the project to remain 100% stable on `dev` while you experiment

**Convention for new branches in this project:**
```bash
git switch dev
git pull
git switch -c feat/contact-form     # create branch from latest dev
# ... do work ...
git push -u origin feat/contact-form
# open a Pull Request: feat/contact-form → dev
```

After the PR is merged, delete the branch:
```bash
git branch -d feat/contact-form
git push origin --delete feat/contact-form
```

---

# What each command does in this project

### `git status`
**What it does:** Shows the current state of your working directory — which files changed, which are staged, which are untracked.

**When to use it:** Before anything else. Start every session with this.

**What to look for:**
- `On branch dev` → you're in the right place
- `nothing to commit` → your slate is clean
- `modified:` → files with unsaved changes

**Common mistake:** Skipping it and editing files while on `main`.

---

### `git branch`
**What it does:** Lists local branches. The one with `*` is where you are.

**When to use it:** Any time you're not sure which branch you're on.

**What to look for:** `* dev` before you start any work.

**Common mistake:** Assuming you're on `dev` without checking.

---

### `git branch -a`
**What it does:** Lists all branches — local and remote.

**When to use it:** When you want to see the full picture of what exists on GitHub vs your machine.

**What to look for:** `remotes/origin/dev` and `remotes/origin/main` should both appear.

---

### `git diff`
**What it does:** Shows the exact lines that changed in your files since the last commit.

**When to use it:** After `git status` shows modified files, before running `git add .`.

**What to look for:** Green `+` lines are additions. Red `-` lines are removals. Scan for anything unexpected.

**Common mistake:** Skipping this and committing changes you didn't intend.

---

### `git log --oneline --graph --decorate --all`
**What it does:** Shows the full commit history of all branches in a compact visual tree.

**When to use it:** When you want to understand the current state of the project — what's been done, which branch is ahead.

**What to look for:**
- `HEAD -> dev` → where you currently are
- `origin/main` → what's deployed/on GitHub main
- How many commits separate `dev` from `main`

---

### `git pull`
**What it does:** Downloads commits from GitHub and merges them into your current local branch.

**When to use it:** Always at the start of a work session.

**What to look for:** `Already up to date.` means you're in sync. If it downloads changes, read what was updated.

**Common mistake:** Making changes before pulling — this can create unnecessary merge conflicts.

---

### `git add .`
**What it does:** Stages all changed and new files in the project for the next commit.

**When to use it:** After reviewing `git diff` and you're satisfied with the changes.

**Common mistake:** Running this before reviewing what changed.

---

### `git commit -m "message"`
**What it does:** Creates a permanent snapshot of your staged changes with a description.

**When to use it:** After `git add .`. Write a message that describes what you did, not what the code does.

**Common mistake:** Vague messages like "update" or "fix" — these are useless when looking at history later.

---

### `git push`
**What it does:** Sends your local commits to GitHub.

**When to use it:** After committing. At minimum, at the end of every work session.

**Common mistake:** Going days without pushing. If your laptop dies, uncommitted or unpushed work is gone.

---

### `git stash`
**What it does:** Temporarily saves all your uncommitted changes and cleans your working directory, without committing.

**When to use it:** When you realize you're on the wrong branch and need to switch without losing your work.

```bash
git stash          # save work temporarily
git switch dev     # move to correct branch
git stash pop      # restore your work
```

**Common mistake:** Stashing and forgetting. Always `git stash pop` after switching branches.

---

### `git stash pop`
**What it does:** Restores the most recently stashed changes back to your working directory.

**When to use it:** Immediately after switching to the correct branch, following a `git stash`.

---

### `git checkout branch-name` / `git switch branch-name`
**What it does:** Switches you to a different branch. `git switch` is the modern version of `git checkout` for branch switching.

**When to use it:** To move between `dev` and `main`.

```bash
git switch main    # go to main to review it
git switch dev     # go back to dev to continue working
```

**Common mistake:** Switching branches with uncommitted changes — git will warn you. Either commit or stash first.

---

# Checklist before editing anything

Run through this every time you sit down to work:

- [ ] Run `git status` — check for pending changes from a previous session
- [ ] Run `git branch` — confirm you're on `dev`
- [ ] Run `git pull` — sync with GitHub before touching any file
- [ ] Open the file you want to edit
- [ ] Make your change
- [ ] Run `git status` — confirm only the files you intended to change show up
- [ ] Run `git diff` — read the actual diff line by line
- [ ] Run `git add .`
- [ ] Run `git commit -m "Clear description of what changed"`
- [ ] Run `git push`
- [ ] Check GitHub to confirm the commit appears on `origin/dev`

---

# Checklist for changes that are already made

Use this when you've already edited files and aren't sure what to do next:

- [ ] Run `git status` — identify every file that changed
- [ ] Run `git diff` — read every change line by line
- [ ] Run `git branch` — confirm you're on `dev` (not `main`)
- [ ] If you're on `main`, run `git stash`, then `git switch dev`, then `git stash pop`
- [ ] Decide if the changes are complete or if you need to keep editing
- [ ] Run `git add .`
- [ ] Run `git commit -m "Describe what you changed"` — be specific
- [ ] Run `git push`
- [ ] Open GitHub and confirm the commit appears in the repository

---

# Branch summary table

| Branch | Type | Purpose | When to use | When to avoid | Notes |
|---|---|---|---|---|---|
| `main` | Production | The live site. Connected to Vercel for deployment. | Only to merge finished, reviewed work from `dev` | Never edit directly. Never commit directly. | Commits here trigger a Vercel deployment. |
| `dev` | Development | Your daily working branch. All edits go here first. | Every day, for every change, big or small. | Avoid merging to `main` if the build is broken or the site looks wrong. | Always in sync with `origin/dev` on GitHub. CI runs here. |

> **Note:** There are no `feat/`, `fix/`, `hotfix/`, or `release/` branches currently. They don't need to exist right now. If a large or risky change comes up, create one off `dev`, use it, then delete it after merging.

---

## When does `dev` go into `main`?

When you've completed a batch of changes on `dev` that are working correctly and you want them to go live:

```bash
git switch main
git pull
git merge dev
git push
```

Or, the preferred method: open a Pull Request on GitHub from `dev` → `main`. This way the CI checks run before anything touches production.

> Until Vercel is connected to the repository, pushing to `main` won't automatically deploy anything. Once Vercel is connected, every merge into `main` will trigger a production deployment.
