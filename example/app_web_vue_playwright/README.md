# Demo Web Vue (Vue 3 + Vite + Tailwind CSS 4, preparado para Playwright)

SPA equivalente ao demo em `app_web_playwright`: login em `/`, dashboard em `/dashboard` com grafico mockado (Chart.js), sessao apenas no **sessionStorage** (`app_demo_session`, `app_demo_user`).

A porta padrao de desenvolvimento e preview e **3001** para nao conflitar com `app_user_api` (3000).

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3001` — tela de login. Apos autenticar, voce vai para o dashboard com grafico mockado.

**Credenciais de demonstracao (apenas no navegador, sem servidor de auth):**

- Usuario: `demo`
- Senha: `demo`

- `GET /api/health` — JSON `{ ok: true }` (no `npm run dev` via plugin do Vite; em producao via `server.mjs`).

### Build + servidor estatico (Express)

```bash
npm run build
npm start
```

O `server.mjs` serve o conteudo de `dist/` e faz fallback SPA para rotas como `/dashboard`.

## Stack

- Vue 3 (`vue@latest` no scaffold Vite)
- Vue Router (rotas `/` e `/dashboard`)
- Tailwind CSS 4 com `@tailwindcss/vite` (`@import "tailwindcss"` em `src/style.css`)
- Chart.js 4

## Playwright

O Playwright **nao** esta instalado neste repositorio. Veja `e2e/README.md` para os passos quando for adicionar testes E2E.
