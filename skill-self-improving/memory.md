# HOT Memory — Template

> This file is created in `~/self-improving/memory.md` when you first use the skill.
> Keep it ≤100 lines. Most-used patterns live here.

## Example Entries

```markdown
## Active Records (Safe Schema)
- type: preference
  scope: global
  confidence: confirmed
  source: user_explicit
  source_ref: chat 2026-02-10T14:32Z
  text: Prefer direct communication without filler.
  safety_review: pass

- type: pattern
  scope: domain/code
  confidence: confirmed
  source: repeated_correction
  source_ref: corrections.md:42
  text: Prefer explicit TypeScript configuration for production code.
  safety_review: pass

- type: override
  scope: project/my-app
  confidence: pending_confirmation
  source: user_explicit
  source_ref: chat 2026-02-12T09:15Z
  text: Use Jest for tests in this project.
  safety_review: pass
```

## Usage

The agent will:
1. Load this file on every session
2. Add entries when patterns are used 3x in 7 days
3. Demote unused entries to WARM after 30 days
4. Never exceed 100 lines (compacts automatically)
