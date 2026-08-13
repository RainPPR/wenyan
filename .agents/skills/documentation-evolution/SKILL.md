---
name: documentation-evolution
description: Workflow for continuously syncing and evolving project documentation, AGENTS.md, and skills as requirements change.
---

# Documentation Evolution Skill

This skill guides AI Agents on how to continuously maintain and evolve documentation and agent workflows in this repository.

## When to Use This Skill

Use this skill whenever:

- Project architecture, data structures, UI features, or user rules change.
- New patterns or user requirements are discovered during development.
- A new task or turn is completed.

## Mandatory Documentation Set

Every modification MUST keep the following documentation files strictly up to date:

1. **`README.md`**: For human users; quick start, feature overview, tech stack.
2. **`AGENTS.md`**: For AI Agents; project context, build commands, data rules, reference to `docs/` and `.agents/skills/`.
3. **`docs/*.md`**: Flat documentation explaining core design and specifications:
   - `docs/architecture.md`: Architecture overview and tech stack.
   - `docs/data-structure.md`: Dataset schema, entry relationships, and unmerging rules.
   - `docs/features.md`: UI features, search ranking, and UX details.
   - `docs/content-specification.md`: Content curation requirements, zero-placeholder policy, and search ranking algorithms.
4. **`.agents/skills/*`**: Specialized skill definitions that AI agents read and update as workflows evolve.

## Self-Evolution Protocol

AI Agents working in this repository are explicitly required to:

- Read `AGENTS.md` and relevant `.agents/skills/` at the start of complex tasks.
- Refine existing skills or create new skills under `.agents/skills/` when reusable workflows or patterns are identified.
- Update `AGENTS.md` to register new skills and link to updated documentation.
