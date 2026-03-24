# Demo Web (preparado para Playwright)

Servidor Express que entrega uma pagina estatica simples (`public/`). A porta padrao e **3001** para nao conflitar com `app_user_api` (3000).

## Executar

```bash
npm install
npm start
```

Abra `http://localhost:3001` — tela de login. Apos autenticar, voce vai para o dashboard com grafico mockado (Chart.js via CDN).

**Credenciais de demonstracao (apenas no navegador, sem servidor de auth):**

- Usuario: `demo`
- Senha: `demo`

- `GET /api/health` — JSON `{ ok: true }` para checagens de saude.

## Playwright

O Playwright **nao** esta instalado neste repositorio. Veja `e2e/README.md` para os passos quando for adicionar testes E2E.
