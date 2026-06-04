# Prompt único — manter DESIGN + Copy (proposta comercial)

Use **um único pedido** no Cursor (modo Agent). Este documento fixa o **design system**, os **componentes que não podem mudar**, a **inteligência de pitch** e o **bloco de prompt** no final.

---

## Como usar (3 passos)

| Passo | O que fazer |
|-------|-------------|
| 1 | Coloque a transcrição em `transcricao/reuniao.txt` (texto integral da reunião) |
| 2 | Preencha a pasta `Design/` (cores, screenshots, links — ver `Design/README.md`) |
| 3 | Abra o chat do Cursor, cole **todo o bloco [PROMPT ÚNICO](#prompt-único-copiar-e-colar)** no final deste ficheiro |

**Repo novo:** um repositório Git por cliente. Configure `base` e `basename` com o nome do repo (ver `PLAYBOOK-PROPOSTA.md`).

---

## Estrutura obrigatória no repo

```
proposta-NOME-CLIENTE/
├── transcricao/
│   └── reuniao.txt          ← VOCÊ fornece (fonte da copy)
├── Design/                  ← VOCÊ fornece (fonte do visual)
├── PROMPT-UNICO-PROPOSTA.md ← este ficheiro
├── src/
│   ├── components/slides/   ← só COPY muda aqui (slides.tsx)
│   ├── pages/Landing.tsx    ← só textos das props
│   └── index.css            ← só tokens HSL (se Design/brand/cores.md mandar)
└── ...
```

---

## Regras invioláveis

### NÃO alterar (design / UX)

| Ficheiro | Motivo |
|----------|--------|
| `src/components/slides/SlidePresenter.tsx` | Navegação, sidebar, fullscreen, teclado, swipe |
| `src/components/slides/SlideLayout.tsx` | Canvas 1920×1080 + scale |
| `src/components/ui/cinematic-hero.tsx` | Animações GSAP, estrutura visual da landing |
| `src/components/ui/*` (resto shadcn) | Biblioteca genérica |
| Classes de tipografia dos slides | Ver tabela abaixo |
| `px-[120px]` nos slides | Margem horizontal padrão |
| Alternância `bg: "dark" \| "neutral" \| "light"` | Ritmo visual |

**Pode alterar** apenas texto dentro de `content`, props de `Landing.tsx`, `constants.ts`, `index.html`, tokens em `index.css`, imports de imagens, `vite.config.ts` `base`, `App.tsx` `basename`, e o título da sidebar em `SlidePresenter` (linha `FACTORIAL RH` → nome do produto).

### NÃO fazer

- Inventar novo layout de slide (ex.: carrossel diferente, fontes novas, gradientes aleatórios)
- Remover slides do arco de pitch sem instrução explícita
- Mudar ordem do arco: **contexto → dor → custo → solução → prova → integração → comparação → fecho**
- Criar páginas novas além de `/` e `/proposta`

---

## Inteligência de PITCH (copy)

### Arco narrativo (19 slides do template)

| Ordem | `id` | Função de copy | Emoção |
|-------|------|----------------|--------|
| 1 | `cover` | Personalização + autoridade do vendedor | Acolhimento |
| 2 | `timeline` | Credibilidade do cliente (história) | Orgulho |
| 3 | `next-scale` | “Momento agora” + líder técnico + antes/depois | Urgência positiva |
| 4 | `context-overview` | Cenário atual sem culpar RH | Empatia |
| 5 | `context-tools` | Diagnóstico sistemas (SisQual/Excel/…) | Clareza |
| 6 | `context-impact` | Consequência operacional | Tensão moderada |
| 7 | `problems` | 5 dores com **impacto quantificado** | Desconforto |
| 8 | `cost-analysis` | Custo de não mudar (conta visível) | Choque racional |
| 9 | `solution` | Cada dor → resposta + **demo** | Alívio + ação |
| 10 | `reports` | Prova visual (galeria) | Desejo |
| 11 | `integration` | “ERP fica, nós entramos” | Segurança |
| 12–15 | `zkteco`, `microsoft-*` | Opcional conforme transcrição | Confiança técnica |
| 16 | `comparison` | Tabela Antes \| Hoje \| Com produto | Contraste |
| 17–18 | `tech-architecture`, `tech-ai` | Para audiência TI | Credibilidade |
| 19 | `video` | Fecho emocional | Fechamento |

### Tom de voz

- **Segunda pessoa plural:** “vocês”, “o vosso RH”
- **Empático, consultivo:** problemas = tecnologia/processos, não incompetência
- **Específico:** números da transcrição; se faltar dado → `[A DEFINIR]` ou estimativa com comentário `// estimativa`
- **Frases de fecho tipo:** “A pergunta não é se — é quando.” / “Nada disto é inevitável.”
- **Evitar** jargão vazio (“solução inovadora”) sem ligar a uma dor nomeada

### Fórmulas de copy por tipo de slide

| Tipo | Fórmula |
|------|---------|
| **Capa** | `[Label]` + Nome cliente + `[Promessa em 1 linha]` + `[Subpromessa]` + Vendedor |
| **Dor (card)** | `Título` + `Descrição 1 frase` + `Impacto em métrica` |
| **Custo** | Conta linha a linha → número grande central → “E isto ainda não conta…” |
| **Solução** | Banner demo (login) + links “veja com os vossos olhos” + “o que muda na prática” |
| **Comparação** | 7 linhas: critério \| hoje (X) \| com produto (Check) |

### Dados

- Números recorrentes → `src/utils/constants.ts`
- Formatação EUR → `formatEUR()` de `src/utils/formatters.ts`
- Não duplicar número diferente entre slide e constants

---

## Design system (referência fixa)

### Tokens CSS (`src/index.css`)

```css
:root {
  --primary: 347 100% 60%;           /* vermelho produto */
  --secondary: 347 50% 18%;          /* slides neutral */
  --background: 0 0% 100%;
  --foreground: 347 80% 15%;
  --accent: 37 100% 63%;
}
```

Classes de secção: `.section-dark`, `.section-neutral`, `.section-light` (= `bg` do slide).

### Escala tipográfica dos slides (NÃO alterar tamanhos)

| Elemento | Classes |
|----------|---------|
| SectionLabel | `text-[32px] tracking-[0.25em] uppercase opacity-80 mb-8 font-bold` |
| Título capa h1 | `text-[96px] font-light leading-[1.1]` |
| SlideTitle | `text-[80px] font-light leading-[1.15] mb-10` |
| SlideSubtitle | `text-[36px] opacity-80 font-light` |
| Corpo narrativo | `text-[24px]` ou `text-[26px] opacity-70 leading-[1.7]` |
| Cards dores título | `text-[26px]` |
| Número hero custo | `text-[80px] font-light` |
| Container slide | `flex flex-col justify-center h-full px-[120px]` |

### Fundos por slide

```typescript
bg: "dark"    // bg-primary text-primary-foreground
bg: "neutral" // bg-secondary
bg: "light"   // bg-background text-foreground — bordas border-foreground/15
```

### Sidebar apresentador

- Fundo: `hsl(347, 80%, 12%)`
- Atualizar só o texto `FACTORIAL RH` → nome do produto (1 linha em `SlidePresenter.tsx`)

---

## Código — componentes shell (não reescrever)

### `SlideLayout.tsx` (canvas 16:9)

```tsx
const SLIDE_W = 1920;
const SLIDE_H = 1080;
// scale = min(parentW/1920, parentH/1080)
// transform: scale(${scale}), transformOrigin: center
```

Ficheiro completo: `src/components/slides/SlideLayout.tsx`

### `SlideData` + tipografia interna (`slides.tsx`)

```tsx
export interface SlideData {
  id: string;
  title: string;       // menu lateral
  summary: string;     // não visível no slide, ajuda navegação
  icon: ReactNode;
  gradient: string;    // reservado — manter padrão hsl do template
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] tracking-[0.25em] uppercase opacity-80 mb-8 font-bold text-primary-foreground">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[80px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[36px] opacity-80 font-light leading-relaxed max-w-[1200px]">{children}</p>
);
```

### `Landing.tsx` (só mudar props)

```tsx
<CinematicHero
  brandName="FACTORIAL RH"
  tagline1="Plataforma completa"
  tagline2="para a gestão de RH."
  cardHeading="RH inteligente, integrado."
  cardDescription={<>...</>}
  metricValue={15}
  metricLabel="unidades de negócios"
  ctaHeading="Acessar a Proposta"
  ctaDescription="..."
  onCtaClick={() => navigate("/proposta")}
/>
```

Interface completa: `CinematicHeroProps` em `src/components/ui/cinematic-hero.tsx`.

### `SlidePresenter.tsx` — comportamento fixo

- Teclas: `→` `↓` `Space` próximo; `←` `↑` anterior; `F` fullscreen
- Swipe horizontal > 50px no mobile
- `slides` importado de `./slides` — **único sítio onde se adiciona/remove slides**

### `ReportsGallery.tsx` — padrão galeria

- Grid 3 + 2 cards, lightbox com Escape
- Imagens em `src/assets/reports/*.png` — copiar de `Design/screenshots/`
- Atualizar array `REPORTS` (title, category, src)

---

## Moldes de copy (copiar estrutura, trocar texto)

### Slide `cover`

```tsx
{
  id: "cover",
  title: "Olá! Seja bem-vindo!",
  summary: "Proposta de parceria — ...",
  icon: <FileText size={24} />,
  gradient: "from-[hsl(347,100%,20%)] to-[hsl(347,80%,10%)]",
  bg: "dark",
  content: (
    <div className="flex flex-col justify-center h-full px-[120px]">
      <SectionLabel>Proposta de Parceria</SectionLabel>
      <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">NOME CLIENTE</h1>
      <p className="opacity-80 font-light mb-6 text-6xl">SUBTÍTULO</p>
      <p className="opacity-60 font-light text-3xl">TAGLINE</p>
      <div className="mt-16 flex items-center gap-6">
        <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
          <span className="text-[24px] font-light">X</span>
        </div>
        <div>
          <p className="opacity-70 text-4xl">NOME VENDEDOR</p>
          <p className="text-[18px] opacity-75">CARGO · EMPRESA</p>
        </div>
      </div>
    </div>
  ),
},
```

### Slide `problems` (grid 3 colunas, 5 cards)

```tsx
<div className="grid grid-cols-3 gap-6 mt-4">
  {[
    { title: "...", impact: "métrica", desc: "..." },
    // 5 itens — se só 4 dores na transcrição, manter 5º como risco genérico ou fundir
  ].map((p) => (
    <div key={p.title} className="border border-white/20 p-8">
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle size={24} className="opacity-65" />
        <h3 className="text-[26px] font-normal">{p.title}</h3>
      </div>
      <p className="text-[20px] opacity-75 leading-relaxed mb-5">{p.desc}</p>
      <p className="text-[18px] opacity-80 border-t border-white/15 pt-4">{p.impact}</p>
    </div>
  ))}
</div>
```

### Slide `cost-analysis` (2 colunas + número grande)

```tsx
<SectionLabel>O custo de ficar parado</SectionLabel>
<SlideTitle>Quanto custa não mudar?</SlideTitle>
<div className="grid grid-cols-2 gap-16 mt-4">
  <div>{/* tabela cálculo border border-white/20 p-8 */}</div>
  <div>
    <div className="border border-white/25 bg-white/10 p-10 text-center mb-8">
      <p className="text-[80px] font-light leading-none">VALOR</p>
    </div>
  </div>
</div>
```

### Slide `solution` (banner demo + grid 2 colunas)

```tsx
<div className="border-2 border-foreground/25 bg-foreground/[0.06] p-6 mb-10 flex items-center justify-between">
  {/* login + botão Entrar no Demo */}
</div>
<div className="grid grid-cols-2 gap-16">
  {/* links com Check + hover:border-foreground/35 */}
  {/* ganhos práticos em cards */}
</div>
```

### Slide `comparison` (tabela 3 colunas)

```tsx
<div className="grid grid-cols-[1fr_1fr_1fr] text-[22px]">
  <div>Critério</div>
  <div className="text-center">Hoje (SISTEMA ATUAL)</div>
  <div className="text-center">Com PRODUTO</div>
  {/* rows: { c, s, f } com X e Check */}
</div>
```

---

## `constants.ts` (molde)

```typescript
export const DEFAULT_VALUES = {
  empresa: "NOME / GRUPO",
  unidades: 0,
  colaboradoresPorUnidade: 0,
  totalColaboradores: 0,
  // salários, tempos fechamento, custoErrosUnidade_EUR,
  custoColaboradorMes_EUR: 0,
  custoPrimaveraMes_EUR: 0,
  implantacaoFactorial_EUR: 0,
};
```

---

## Ficheiros a ler antes de editar

| Prioridade | Caminho |
|------------|---------|
| 1 | `transcricao/reuniao.txt` |
| 2 | `Design/brand/cores.md` |
| 3 | `Design/referencias/links.md` |
| 4 | `Design/screenshots/*` |
| 5 | `src/components/slides/slides.tsx` (referência de estrutura) |

---

# PROMPT ÚNICO (copiar e colar)

Copie **desde a linha abaixo** até `--- FIM DO PROMPT ---` para o Cursor Agent.

---

```
TAREFA: Adaptar esta proposta comercial para um NOVO CLIENTE usando APENAS a transcrição e a pasta Design. Manter ESTRITAMENTE o design (componentes shell, tipografia, layouts, canvas 1920×1080, SlidePresenter, SlideLayout, CinematicHero). Alterar somente COPY, números, nomes, links e assets.

REPO GITHUB (novo): [SEU-USUARIO/proposta-NOME-CLIENTE]
BASE PATH Vite + BrowserRouter basename: /proposta-NOME-CLIENTE/

PRODUTO / VENDEDOR
- Produto: [ex.: Factorial RH]
- Vendedor: [Nome, cargo]
- Idioma da copy: [pt-PT]

FICHEIROS OBRIGATÓRIOS — LER PRIMEIRO
1. transcricao/reuniao.txt (fonte única da narrativa)
2. Design/brand/cores.md → aplicar em src/index.css se diferente do template
3. Design/referencias/links.md → demo, vídeo, credenciais
4. Design/screenshots/* → copiar para src/assets/reports/ e atualizar ReportsGallery.tsx
5. PROMPT-UNICO-PROPOSTA.md (regras de design e pitch)

REGRAS DE DESIGN (INVIOLÁVEIS)
- NÃO modificar: SlidePresenter.tsx, SlideLayout.tsx, cinematic-hero.tsx (estrutura/animações)
- NÃO alterar classes de tamanho: text-[96px], text-[80px], text-[32px], px-[120px], etc.
- NÃO inventar novos tipos de slide ou rotas
- Manter interface SlideData e componentes SectionLabel, SlideTitle, SlideSubtitle
- Manter alternância bg dark/neutral/light
- Atualizar só o texto "FACTORIAL RH" na sidebar para o nome do produto

REGRAS DE PITCH (COPY)
- Seguir ordem narrativa: capa → história cliente → momento agora → contexto (3 slides) → 5 dores → custo status quo → solução+demo → relatórios → integrações (só se na transcrição) → parceiros tech (opcional) → comparação antes/depois → tech TI (se relevante) → vídeo
- Tom: "vocês", empático, específico, números da transcrição
- Sem inventar valores financeiros; usar [A DEFINIR] ou // estimativa
- Remover TODAS as referências ao cliente template (Webcor, Dulceria, SisQual, Nuno Mergulhão, Victor Gutierrez, URLs demo antigas) salvo se ainda aplicável
- Cada dor no slide problems deve ter title + desc + impact (métrica)
- Slide cost-analysis: mostrar conta + número grande anual
- Slide solution: banner com login demo de Design/referencias/links.md

TAREFAS TÉCNICAS (ordem)
1. Resumir em 15 linhas o que extraiu da transcrição
2. Atualizar src/utils/constants.ts
3. Reescrever src/components/slides/slides.tsx (manter ids e molde visual de cada slide; remover copy antiga)
4. Atualizar src/pages/Landing.tsx, index.html, SlidePresenter sidebar title
5. Copiar screenshots Design → src/assets/reports/; ajustar ReportsGallery
6. Configurar vite.config.ts base e App.tsx basename para o repo novo
7. Listar [A DEFINIR] e estimativas para revisão humana

NÃO FAZER
- Refatorar components/ui
- Adicionar dependências
- Mudar SlidePresenter ou SlideLayout

Ao terminar, dar: URL local de teste, lista de ficheiros alterados, e checklist do PLAYBOOK-PROPOSTA.md secção revisão.
```

--- FIM DO PROMPT ---

---

## Referência cruzada

- Processo completo (repo novo, deploy): [PLAYBOOK-PROPOSTA.md](./PLAYBOOK-PROPOSTA.md)
- Pasta visual: [Design/README.md](./Design/README.md)
