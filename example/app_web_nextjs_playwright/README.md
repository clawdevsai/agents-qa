# Demo Web Next.js (preparado para Playwright)

Aplicacao **Next.js 16** com **Tailwind CSS 4**, espelhando o fluxo do exemplo `app_web_playwright`:

- Login em `/` com credenciais apenas no browser (sem backend de auth).
- Apos autenticar, `/dashboard` com grafico mockado (Chart.js).
- `GET /api/health` retorna JSON `{ ok: true }` para readiness.

A porta padrao e **3001** (igual ao demo Express), para nao conflitar com `app_user_api` (3000).

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3001`.

**Credenciais de demonstracao:**

- Usuario: `demo`
- Senha: `demo`

A sessao usa as mesmas chaves de `sessionStorage` que o demo estatico (`app_demo_session`, `app_demo_user`).

## Playwright

O Playwright **nao** esta instalado neste repositorio. Veja `e2e/README.md` para os passos quando for adicionar testes E2E.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4 (`@import "tailwindcss"` em `app/globals.css`)
- Chart.js + react-chartjs-2 no dashboard
