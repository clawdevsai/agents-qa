# E2E (Playwright) — ainda nao configurado

Esta pasta reserva o lugar para testes end-to-end. O projeto **nao** inclui Playwright por padrao.

Quando quiser adicionar:

1. Na raiz de `app_web_nextjs_playwright`, instale o runner de testes:

   ```bash
   npm install -D @playwright/test
   npx playwright install
   ```

2. Crie `playwright.config.ts` (ou `.js`) com `baseURL: 'http://localhost:3001'` (ou a `PORT` que usar).

3. Coloque specs em `e2e/` (ex.: `demo.spec.ts`).

4. Garanta que o servidor esta no ar antes dos testes (script `webServer` no config do Playwright com `npm run dev` ou `npm run start` apos `npm run build`).

O endpoint `GET /api/health` pode ser usado para readiness antes de abrir o browser.

Fluxo da app: login em `/` com usuario `demo` e senha `demo`, depois `/dashboard` (sessao via `sessionStorage`).
