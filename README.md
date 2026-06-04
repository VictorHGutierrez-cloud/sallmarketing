# Sall Marketing — Factorial HR Proposal

Interactive commercial proposal for **Sall Marketing** (19 employees, Georgia USA).

**Live site:** https://victorhgutierrez-cloud.github.io/sallmarketing/

## Quick start

```sh
npm ci
npm run dev
# Open http://localhost:8080/sallmarketing/
```

```sh
npm run build   # output in dist/
```

Deploy runs automatically on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

## Project structure

| Folder / file | Purpose |
|---------------|---------|
| `src/` | React app — landing + 7-slide proposal |
| `transcricao/reuniao.txt` | Discovery call transcript (source of copy) |
| `intake-sallmarketing.json` | Structured client data |
| `proposta-sallmarketing.md` | Commercial outline |
| `docs/` | Playbooks — `PROMPT-UNICO-PROPOSTA.md`, pricing logic, pitch rules |
| `reference/` | Factorial pricing & feature source files (xlsx, core.txt) |
| `Design/` | Brand reference (colors, fonts, layout) |
| `templates/19-slide-template/` | Full 19-slide template for future proposals |

## After the demo

Update `src/utils/constants.ts` with real pricing and demo credentials, then push to `main`.
