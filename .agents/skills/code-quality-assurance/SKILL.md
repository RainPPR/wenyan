---
name: code-quality-assurance
description: Workflows for type checking, linting, formatting, build compilation, and UI accessibility verification for the static React application.
---

# Code Quality Assurance Skill

This skill defines the complete testing and quality assurance pipeline required for every code modification turn.

## When to Use This Skill

Use this skill before ending any task or turn to ensure zero regressions in code, types, linting, and build output.

## Quality Assurance Steps

1. **Type Checking**:

   ```bash
   npm run typecheck
   ```

   Ensures TypeScript strictness (`tsc --noEmit`).

2. **Linting & Fixing**:

   ```bash
   npm run lint
   npm run lint:fix
   ```

   Ensures ESLint flat config compliance.

3. **Code Formatting**:

   ```bash
   npm run pretty
   npm run pretty:fix
   ```

   Ensures Prettier formatting consistency across all `.ts`, `.tsx`, `.md`, `.json`, and `.yml` files.

4. **Applet Compilation Verification**:
   Run `compile_applet` tool to confirm Vite static build succeeds cleanly without errors.

5. **Modal Accessibility & Scroll Compensation Check**:
   Verify `VocabularyCardModal.tsx` implements background lock (`document.body.style.overflow = 'hidden'`) with scrollbar width padding compensation when opened, preventing layout shifts.
