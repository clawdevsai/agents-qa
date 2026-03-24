# API de usuarios (exemplo)

API REST em Express com dados **em memoria** (reinicia ao parar o servidor). Serve para testes e demonstracoes do agente QA.

## Executar

```bash
npm install
npm start
```

Base URL padrao: `http://localhost:3000`.

A porta pode ser alterada com a variavel de ambiente `PORT` (ex.: `PORT=4000 npm start` no Linux/macOS; no PowerShell use `$env:PORT=4000; npm start`).

## Endpoints

| Metodo | Caminho | Descricao |
|--------|---------|-----------|
| `GET` | `/users` | Lista todos os usuarios |
| `GET` | `/users/:id` | Busca um usuario pelo `id` numerico |
| `POST` | `/users` | Cria usuario (corpo JSON) |
| `PUT` | `/users/:id` | Atualiza usuario existente |
| `DELETE` | `/users/:id` | Remove usuario |

### Corpo JSON (POST e PUT)

Campos obrigatorios (strings nao vazias apos trim):

- `nome`
- `email` — deve ser um e-mail em formato valido (regex simples)
- `username`
- `password`

Resposta de erro de validacao: `400` com `{ "error": "<mensagem>" }`.

Resposta quando o `id` nao existe: `404` com `{ "error": "User nao encontrado." }`.

`DELETE` bem-sucedido: `204` sem corpo.

### Exemplo (criar usuario)

```bash
curl -s -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d "{\"nome\":\"Ana\",\"email\":\"ana@example.com\",\"username\":\"ana\",\"password\":\"secret\"}"
```

---

Projeto apenas para testes e demonstracoes.
