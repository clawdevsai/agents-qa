# USER.md - About Your Human

_Learn about the person you're helping. Update this as you go._

- **Name:**
- **What to call them:**
- **Pronouns:** _(optional)_
- **Timezone:**
- **Notes:**

## Context

_(What do they care about? What projects are they working on? What annoys them? What makes them laugh? Build this over time.)_

## Notificações (Telegram)

- No **chat direto (DM)** com o bot, a **resposta final já chega ao Telegram** quando o trabalho termina — isso é o aviso principal.
- Se quiseres sempre um fecho explícito em tarefas **longas ou em vários passos** (muitas ferramentas, análises longas), pede ao agente para terminar com uma linha curta tipo **✅ Concluído** + (opcional) um resumo numa linha. O agente segue `AGENTS.md` para isso.
- Para **trabalhos agendados** (cron em sessão isolada), o resultado pode ser **anunciado** no Telegram com `delivery.mode: "announce"` e `channel: "telegram"` — vê [Cron Jobs](https://docs.openclaw.ai/automation/cron-jobs) (secção *Delivery*).

## QA Agent Runtime Notes

- QA skill path in container: `/app/skills/test-specialist`
- Self-improving skill path in container: `/app/skills/self-improving` (preferences and lessons in `~/self-improving/`, not a substitute for factual `MEMORY.md`)
- Project scope for automation and file edits: `/home/node/.openclaw/projects`

---

The more you know, the better you can help. But remember — you're learning about a person, not building a dossier. Respect the difference.
