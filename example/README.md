# Projetos de Exemplo para Agente QA

Esta pasta contem exemplos em Node.js para testes do agente QA.

## `app_user_api` — API REST

Valida funcionalidades basicas de API:

- CRUD de usuarios
- Validacao de campos obrigatorios
- Validacao de formato de email

### Como executar

```bash
cd app_user_api
npm install
npm start
```

API em `http://localhost:3000`.

## `app_web_playwright` — pagina web (E2E depois)

Servidor Express com uma pagina estatica e `GET /api/health`. Pensado para adicionar **Playwright** mais tarde; o runner ainda **nao** esta instalado (veja `app_web_playwright/e2e/README.md`).

### Como executar

```bash
cd app_web_playwright
npm install
npm start
```

App em `http://localhost:3001` (porta distinta da API).

---

Estes projetos sao apenas para testes e demonstracoes.
