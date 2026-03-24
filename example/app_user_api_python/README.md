# API de usuarios (exemplo, Python)

API REST com FastAPI e dados **em memoria** (reinicia ao parar o servidor). Mesmo contrato que `example/app_user_api_node` — util para testes e demonstracoes do agente QA.

**Requisito:** Python 3.12+

## Executar

```bash
cd example/app_user_api_python
python -m venv .venv
# Windows PowerShell:
.\.venv\Scripts\Activate.ps1
# Linux/macOS:
# source .venv/bin/activate

pip install -r requirements.txt
python main.py
```

Ou com uvicorn explicitamente:

```bash
uvicorn main:app --host 0.0.0.0 --port 3000
```

Base URL padrao: `http://localhost:3000`.

A porta pode ser alterada com a variavel de ambiente `PORT` (ex.: no PowerShell `$env:PORT=4000; python main.py`).

## Endpoints

| Metodo | Caminho | Descricao |
|--------|---------|-----------|
| `GET` | `/users` | Lista todos os usuarios |
| `GET` | `/users/{id}` | Busca um usuario pelo `id` numerico |
| `POST` | `/users` | Cria usuario (corpo JSON) |
| `PUT` | `/users/{id}` | Atualiza usuario existente |
| `DELETE` | `/users/{id}` | Remove usuario |

Documentacao interativa (OpenAPI): `http://localhost:3000/docs`

### Corpo JSON (POST e PUT)

Campos obrigatorios (strings nao vazias apos trim):

- `nome`
- `email` — deve ser um e-mail em formato valido (regex simples, igual ao exemplo Node)
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
