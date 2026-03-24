# Agent QA Workspace

Workspace para desenvolvimento e validacao de um ambiente de QA com OpenClaw, incluindo skills customizadas para investigacao de bugs e especializacao em testes.

## Objetivo

Este repositorio serve para:

- subir um ambiente local com `openclaw` + `ollama` via Docker;
- manter e evoluir skills de QA em Node.js;
- testar fluxos de investigacao de defeitos e ampliacao de cobertura de testes.

## Estrutura do Projeto

- `docker-compose.yml`: orquestracao dos containers (`openclaw` e `ollama`).
- `config/`: configuracoes de workspace e contexto do agente (`AGENTS.md`, `SOUL.md`, etc.).
- `skill-qa-bug-investigation/`: skill de triagem e analise de bugs.
- `skill-test-specialist/`: skill voltada para estrategia e implementacao de testes.
- `skill-self-improving/`: artefatos de aprendizado e evolucao continua.
- `example/`: projeto de exemplo para exercicios e validacao do agente.
- `projects/`: area para projetos montados no runtime do OpenClaw.

## Pre-requisitos

- Docker e Docker Compose instalados.
- (Opcional) GPU Nvidia para aceleracao do `ollama` conforme configuracao atual.

## Como Executar

1. Suba os servicos:

```bash
docker compose up -d
```

2. Verifique se os containers estao ativos:

```bash
docker compose ps
```

3. Acesse os servicos locais:

- OpenClaw: `http://localhost:18789`
- OpenClaw (porta adicional): `http://localhost:18791`
- Ollama API: `http://localhost:11434`

## Desenvolvimento das Skills

Cada skill possui seu proprio `package.json` para versionamento e distribuicao local.

Exemplo para a skill `qa-bug-investigation`:

```bash
cd skill-qa-bug-investigation
npm pack
```

Use esse mesmo fluxo para outras skills, ajustando o diretorio.

## Configuracoes Relevantes

- O token de gateway do OpenClaw e definido em `docker-compose.yml` (`OPENCLAW_GATEWAY_TOKEN`).
- Dados persistentes do OpenClaw ficam em `./.openclaw-data`.
- Pastas de skills e configuracoes sao montadas como volume no container `openclaw`.

## Observacoes

- O repositorio ignora artefatos de runtime e dados locais em `.gitignore` (ex.: `projects/`, `.openclaw-data/`, logs e credenciais).
- O diretorio `projects/` e pensado para trabalho de QA em execucao local, nao para codigo-fonte permanente deste workspace.
