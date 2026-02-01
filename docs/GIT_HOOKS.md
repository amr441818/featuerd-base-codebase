# Git Hooks & Husky Roles 🛡️

This project uses **Husky** to automate Git hooks and ensure code quality before it enters the repository. This document explains the rules enforced and how they help the team.

## 🚀 Overview

Git hooks are scripts that run automatically during certain Git events (like committing or pushing). Husky makes it easy to manage these hooks within our codebase.

## 🛠️ Configured Hooks

### 1. Pre-commit (`.husky/pre-commit`)

**Action:** Runs `lint-staged`.

- **ESLint:** Automatically checks for code quality issues in staged files.
- **Prettier:** Automatically formats staged files to match our project style.
- **Goal:** Prevent "messy" or broken code from being committed.

**Example Action:**
If you leave an unused variable in `server.js` and try to commit:

```text
🔍 Running ESLint...
server.js
  16:7  error  'unusedVar' is assigned a value but never used  @typescript-eslint/no-unused-vars

✖ 1 problem (1 error, 0 warnings)
```

The commit will **fail** until you fix the error.

### 2. Commit Message (`.husky/commit-msg`)

**Action:** Runs `commitlint`.

- **Rule:** We follow [Conventional Commits](https://www.conventionalcommits.org/).
- **Format:** `type(scope): subject` (e.g., `feat(auth): add login form`)
- **Goal:** Keep the git history readable and allow for automated changelog generation.

**Examples:**
✅ **Good:** `feat(api): add endpoint for users`
✅ **Good:** `fix(ui): resolve button alignment on mobile`
❌ **Bad:** `fixed the bug`
❌ **Bad:** `update files`

### 3. Pre-push (`.husky/pre-push`)

**Action:** Runs `npm run type-check`.

- **TypeScript:** Checks that all types are correct across the entire project.
- **Goal:** Ensure the code is type-safe before it reaches the remote server, preventing build failures in CI/CD.

**Example Action:**
If you pass a `string` to a function expecting a `number`:

```text
🔍 Running TypeScript check before push...
src/utils/math.ts:10:24 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

The push will **fail**, protecting the main branch.

---

## 💡 Pro Tips

### Using Commitizen

Instead of writing commit messages manually, you can use our interactive cli:

```bash
npm run commit
```

This will guide you through creating a valid conventional commit message.

### Skipping Hooks (Use Sparingly)

If you MUST skip a hook (e.g., for an urgent WIP commit), add `--no-verify`:

```bash
git commit -m "wip" --no-verify
```

> [!WARNING]
> Use this only when absolutely necessary. Skipping hooks can lead to broken builds for other team members.

### Troubleshooting

If hooks are not running, ensure you have initialized Husky:

```bash
npm install
# or
npm run prepare
```
