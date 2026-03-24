# Memory Template

Copy this structure to `~/self-improving/memory.md` on first use.

```markdown
# Self-Improving Memory

## Active Records (Safe Schema)
<!--
- type: preference|pattern|lesson|override
- scope: global|domain/<name>|project/<name>|session
- confidence: tentative|emerging|pending_confirmation|confirmed
- source: user_explicit|repeated_correction|self_reflection
- source_ref: file:line or chat timestamp
- text: concise non-imperative statement
- safety_review: pass|quarantine
-->

## Confirmed
<!-- Only records with confidence=confirmed and safety_review=pass -->

## Pending
<!-- tentative/emerging/pending_confirmation records with safety_review=pass -->
```

## Initial Directory Structure

Create on first activation:

```bash
mkdir -p ~/self-improving/{projects,domains,archive}
touch ~/self-improving/{memory.md,index.md,corrections.md,heartbeat-state.md,quarantine.md}
```

## Index Template

For `~/self-improving/index.md`:

```markdown
# Memory Index

## HOT
- memory.md: 0 lines
- quarantine.md: 0 lines

## WARM
- (no namespaces yet)

## COLD
- (no archives yet)

Last compaction: never
```

## Corrections Log Template

For `~/self-improving/corrections.md`:

```markdown
# Corrections Log

<!-- Format:
## YYYY-MM-DD
- [HH:MM] Changed X → Y
  Type: format|technical|communication|project
  Context: where correction happened
  Confirmed: pending (N/3) | yes | no
-->
```

## Quarantine Template

For `~/self-improving/quarantine.md`:

```markdown
# Quarantine Log

## [YYYY-MM-DD HH:MM UTC] <entry-id>
- source_file: <path-or-chat-context>
- source_type: user_message | memory_import | correction | reflection | unknown
- detection_reason: policy_override | command_execution | exfiltration | ambiguous_instruction | other
- risk_level: high | medium | low
- raw_text: "<original text>"
- normalized_summary: "<short neutral summary>"
- action: quarantined
- reviewed_by_user: pending | approved_safe | confirmed_malicious
- disposition: none | promote_to_tentative | delete | keep_quarantined
```

## Heartbeat State Template

For `~/self-improving/heartbeat-state.md`:

```markdown
# Self-Improving Heartbeat State

last_heartbeat_started_at: never
last_reviewed_change_at: never
last_heartbeat_result: never

## Last actions
- none yet
```
