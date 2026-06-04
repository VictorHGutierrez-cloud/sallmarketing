import { ReactNode } from "react";
import { Check, X, AlertTriangle, Play, Mail, Shield, Server, Brain, Lock, Globe, Cpu, Database, Cloud, Fingerprint, Wifi, FileText, Eye, BarChart3, Zap, Link2, Monitor, Video, Award, Rocket, Users, Building2 } from "lucide-react";
import { DEFAULT_VALUES } from "@/utils/constants";
import { formatEUR } from "@/utils/formatters";
import { ReportsGallery } from "./ReportsGallery";

// Reuse investment calculations
const d = DEFAULT_VALUES;
const factorialMensal = d.totalColaboradores * d.custoColaboradorMes_EUR;
const primaveraMensal = d.totalColaboradores * d.custoPrimaveraMes_EUR;
const mensalRecorrente = factorialMensal + primaveraMensal;
const implantacao = d.implantacaoFactorial_EUR;

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  gradient: string;
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

export const slides: SlideData[] = [
  // ─── 1. CAPA ───────────────────────────────────────────
  {
    id: "cover",
    title: "Olá! Seja bem-vindo!",
    summary: "Proposta de parceria — Uma nova era na gestão de pessoas",
    icon: <FileText size={24} />,
    gradient: "from-[hsl(347,100%,20%)] to-[hsl(347,80%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Proposta de Parceria</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">
          Grupo Webcor
        </h1>
        <p className="opacity-80 font-light mb-6 text-6xl">
          Uma nova era na gestão de pessoas
        </p>
        <p className="opacity-60 font-light text-3xl">
          Como libertar o RH do operacional e transformá-lo em motor estratégico do grupo
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
            <span className="text-[24px] font-light">F</span>
          </div>
          <div>
            <p className="opacity-70 text-4xl">Victor Gutierrez</p>
            <p className="text-[18px] opacity-75">Gerente de Expansão · Factorial</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 2. LINHA DO TEMPO — CRESCIMENTO ──────────────────
  {
    id: "timeline",
    title: "Grupo Webcor",
    summary: "De uma loja no Zaire a líder agroindustrial em 3 países — quase 50 anos de crescimento",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(200,40%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>A Trajetória</SectionLabel>
        <SlideTitle>De uma loja de têxteis a um império agroindustrial</SlideTitle>
        <div className="relative mt-4">
          {/* Timeline line */}
          <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-white/20" />
          <div className="grid grid-cols-7 gap-3">
            {[
              { year: "1978", label: "Fundação", desc: "Starco — loja de têxteis no Zaire", highlight: false },
              { year: "1992", label: "Angola", desc: "AngoAlissar — pivot para Luanda", highlight: false },
              { year: "2005", label: "Nova geração", desc: "Wissam Nesr assume como CEO", highlight: false },
              { year: "2020", label: "Escala", desc: "GMA: 320K ton/ano de farinha", highlight: false },
              { year: "2022", label: "Dulceria", desc: "Parceria com Arcor — US$45M", highlight: false },
              { year: "2025", label: "Medalha", desc: "Condecoração presidencial a Wissam Nesr", highlight: false },
              { year: "2026", label: "Transformação digital", desc: "IA, automação e RH estratégico", highlight: true },
            ].map((item) => (
              <div key={item.year} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10 ${item.highlight ? "bg-white text-primary" : "border-white/40 bg-primary border-2 font-bold text-3xl"}`}>
                  <span className={`text-[16px] font-bold ${item.highlight ? "" : "opacity-90"}`}>{item.year}</span>
                </div>
                <h4 className={`font-bold mb-2 opacity-90 ${item.highlight ? "text-white text-[18px]" : "text-3xl"}`}>{item.label}</h4>
                <p className={`leading-snug ${item.highlight ? "text-[14px] opacity-90" : "opacity-80 font-bold text-primary-foreground bg-primary text-xl"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Stats bar */}
        <div className="grid grid-cols-4 gap-6 mt-14 border-t border-white/15 pt-8">
          {[
            { stat: "4.000+", label: "Colaboradores" },
            { stat: "3 países", label: "Angola · RDC · Moçambique" },
            { stat: "110+", label: "Pontos de venda" },
            { stat: "~50 anos", label: "De crescimento contínuo" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[42px] font-light">{s.stat}</p>
              <p className="text-[16px] opacity-75 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 3. 2026 — PRÓXIMA ESCALA ───────────────────────────
  {
    id: "next-scale",
    title: "2026: Próxima Escala",
    summary: "Com novo CIO e Factorial, o RH deixa de ser gargalo e vira vantagem competitiva",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(160,60%,15%)] to-[hsl(200,50%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>O Momento é Agora</SectionLabel>
        <SlideTitle>Vocês cresceram sem tecnologia de RH. Imaginem com ela.</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-6">
          {/* Left: narrative */}
          <div>
            <p className="text-[24px] opacity-75 leading-[1.8] mb-8">
              O Grupo Webcor construiu um império agroindustrial em quase 50 anos — atravessando guerras civis, mudanças de país e crises económicas. Tudo isso <strong className="opacity-100">sem um sistema de RH à altura</strong>.
            </p>
            <p className="text-[24px] opacity-75 leading-[1.8] mb-8">
              Agora, com <strong className="opacity-100">Nuno Mergulhão</strong> como novo CIO — com vasta experiência no ecossistema Microsoft — o grupo tem a liderança técnica para dar o próximo salto.
            </p>
            <p className="text-[24px] opacity-75 leading-[1.8]">
              A Factorial entra como o motor de RH que faltava: <strong className="opacity-100">IA, automação, self-service</strong> e integração nativa com o ecossistema que vocês já conhecem.
            </p>
          </div>

          {/* Right: before/after */}
          <div className="space-y-6">
            <div className="border border-white/15 p-8">
              <p className="text-[16px] opacity-75 uppercase tracking-widest mb-4">Até agora</p>
              <div className="space-y-4">
                {["Excel como sistema paralelo", "RH 100% operacional", "Zero visibilidade em tempo real", "Processos manuais que não escalam"].map((item) => (
                  <p key={item} className="text-[20px] opacity-65 flex items-center gap-3">
                    <X size={18} className="opacity-75 shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="border border-white/25 bg-white/5 p-8">
              <p className="text-[16px] opacity-75 uppercase tracking-widest mb-4">2026 em diante</p>
              <div className="space-y-4">
                {["Plataforma unificada com IA integrada", "RH estratégico com dados em tempo real", "Self-service para 4.000+ colaboradores", "Integração nativa: Microsoft · Picagem de Ponto\n · Primavera"].map((item) => (
                  <p key={item} className="text-[20px] opacity-90 flex items-center gap-3">
                    <Check size={18} className="opacity-70 shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 4. CONTEXTO — VISÃO GERAL ───────────────────────
  {
    id: "context-overview",
    title: "Case: Dulceria Nacional",
    summary: "20 unidades, 3.000 colaboradores — o RH pensa estratégico mas as ferramentas prendem no operacional",
    icon: <Eye size={24} />,
    gradient: "from-[hsl(347,60%,25%)] to-[hsl(347,50%,12%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Contexto</SectionLabel>
        <SlideTitle>Cenário atual</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              O grupo Webcor opera num grupo com <strong className="opacity-100">~20 unidades</strong> e mais de <strong className="opacity-100">4.000 colaboradores</strong> em Angola e outros países. Recentemente, centralizaram o payroll — um passo estratégico que exige ferramentas à altura.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              O vosso RH já pensa de forma estratégica. Mas as ferramentas atuais <strong className="opacity-100">prendem a equipa no operacional</strong> — e isso não é culpa de ninguém. É uma questão de tecnologia.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "⚙️", title: "Processos que consomem tempo", desc: "Tarefas repetitivas que poderiam ser automáticas." },
              { icon: "📊", title: "Atualizações uma a uma", desc: "Horários, férias e ausências sem opção de lote." },
              { icon: "🔗", title: "Dados que não conversam", desc: "Atrasos no fecho da folha por falhas de integração." },
              { icon: "📋", title: "Excel como plano B", desc: "Controles paralelos porque o sistema não entrega." },
              { icon: "👷", title: "Equipa sobrecarregada", desc: "O RH insere o que os colaboradores não conseguem." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 border border-foreground/15 p-5">
                <span className="text-[30px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[22px] font-medium mb-1">{item.title}</h4>
                  <p className="text-[19px] opacity-60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ─── 3. FERRAMENTAS ATUAIS ────────────────────────────
  {
    id: "context-tools",
    title: "Ferramentas Atuais",
    summary: "SisQual, Primavera e Excel — onde cada um falha e porquê",
    icon: <AlertTriangle size={24} />,
    gradient: "from-[hsl(37,80%,25%)] to-[hsl(37,60%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Diagnóstico</SectionLabel>
        <SlideTitle>O que vocês usam hoje — e onde dói</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-6">
          {/* SisQual */}
          <div className="border border-white/20 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">SQ</span>
              </div>
              <div>
                <h3 className="text-[28px] font-medium">SisQual</h3>
                <p className="text-[16px] opacity-75 uppercase tracking-widest">Ponto & Turnos</p>
              </div>
            </div>
            <p className="text-[20px] opacity-70 leading-relaxed mb-6">
              Cumpre o básico, mas não acompanha a complexidade de um grupo com 20+ unidades.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[16px] opacity-75 uppercase tracking-widest mb-3">Onde limita</p>
              {["Horários só se atualizam um a um", "Relatórios gerenciais inexistentes", "Exportações que falham sem aviso", "Cada lançamento exige entrada manual"].map((l) => (
                <p key={l} className="text-[18px] opacity-65 flex items-center gap-3">
                  <X size={16} className="opacity-75 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>

          {/* Primavera */}
          <div className="border border-white/20 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">P</span>
              </div>
              <div>
                <h3 className="text-[28px] font-medium">Primavera</h3>
                <p className="text-[16px] opacity-75 uppercase tracking-widest">Folha & Financeiro</p>
              </div>
            </div>
            <p className="text-[20px] opacity-70 leading-relaxed mb-6">
              Robusto na folha, mas refém dos dados que recebe. Se a fonte falha, tudo atrasa.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[16px] opacity-75 uppercase tracking-widest mb-3">O que sofre</p>
              {["Qualidade depende do SisQual", "Importações chegam incompletas", "Equipa valida tudo manualmente", "Fecho da folha atrasa a cada mês"].map((l) => (
                <p key={l} className="text-[18px] opacity-65 flex items-center gap-3">
                  <AlertTriangle size={16} className="opacity-75 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>

          {/* Excel */}
          <div className="border border-white/20 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">XL</span>
              </div>
              <div>
                <h3 className="text-[28px] font-medium">Excel</h3>
                <p className="text-[16px] opacity-75 uppercase tracking-widest">O remendo</p>
              </div>
            </div>
            <p className="text-[20px] opacity-70 leading-relaxed mb-6">
              Não é uma ferramenta de gestão — é um sinal de que o sistema não dá conta.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[16px] opacity-75 uppercase tracking-widest mb-3">O risco</p>
              {["Erros invisíveis até à folha", "Cada unidade faz diferente", "Impossível ter visão de grupo", "Decisões sem dados confiáveis"].map((l) => (
                <p key={l} className="text-[18px] opacity-65 flex items-center gap-3">
                  <X size={16} className="opacity-75 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 4. IMPACTO NA OPERAÇÃO ───────────────────────────
  {
    id: "context-impact",
    title: "Impacto Operacional",
    summary: "Tempo desperdiçado, risco acumulado e crescimento travado — todos os meses",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(184,80%,18%)] to-[hsl(184,60%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>O impacto real</SectionLabel>
        <SlideTitle>O que o grupo perde — todos os meses</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-8">
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">⏱️</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Tempo desperdiçado</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              A equipa de RH dedica semanas inteiras a tarefas que sistemas modernos resolvem em horas. Esse tempo deveria ir para pessoas, não para planilhas.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">⚠️</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Risco acumulado</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              Cada erro manual é uma bomba-relógio: pagamentos incorretos, colaboradores insatisfeitos, auditoria que encontra inconsistências. O risco cresce silenciosamente.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">📈</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Crescimento travado</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              O grupo quer expandir, mas os processos de RH não escalam. Cada nova unidade multiplica o retrabalho em vez de se integrar.
            </p>
          </div>
        </div>
        <div className="mt-12 border border-white/15 p-8 text-center">
          <p className="text-[26px] opacity-75 font-light leading-relaxed max-w-[1200px] mx-auto">
            A boa notícia? <strong className="opacity-100">Nada disto é inevitável.</strong> Existe um caminho claro para transformar esta realidade — e começa agora.
          </p>
        </div>
      </div>
    ),
  },

  // ─── 5. DORES IDENTIFICADAS ───────────────────────────
  {
    id: "problems",
    title: "Dores",
    summary: "5 dores que não deviam existir em 2026 — retrabalho, integração, fecho, erros, visibilidade",
    icon: <X size={24} />,
    gradient: "from-[hsl(0,70%,25%)] to-[hsl(0,50%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>O que identificámos</SectionLabel>
        <SlideTitle>5 dores que não deviam existir em 2026</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            { title: "Retrabalho massivo", impact: "10 dias/mês, 4 pessoas dedicadas", desc: "Horários, férias e ausências atualizados manualmente, um colaborador de cada vez." },
            { title: "Integração que falha", impact: "419 colaboradores não exportados", desc: "Dados que saem do SisQual e não chegam ao Primavera — sem explicação visível." },
            { title: "Fecho de mês interminável", impact: "~320 horas mensais consumidas", desc: "A equipa inteira para tudo para fechar o ponto. Dez dias. Todos os meses." },
            { title: "Folha com erros", impact: "Pagamentos incorretos", desc: "Horas extra mal calculadas, faltas não contabilizadas. O colaborador é quem sofre." },
            { title: "Zero visibilidade", impact: "Decisões no escuro", desc: "Sem dashboards, sem BI. Quando pedem um relatório, alguém abre o Excel." },
          ].map((p) => (
            <div key={p.title} className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={24} className="opacity-65" />
                <h3 className="text-[26px] font-normal">{p.title}</h3>
              </div>
              <p className="text-[20px] opacity-75 leading-relaxed mb-5">{p.desc}</p>
              <p className="text-[18px] opacity-80 border-t border-white/15 pt-4">
                {p.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 6. CUSTO DO CENÁRIO ATUAL ────────────────────────
  {
    id: "cost-analysis",
    title: "Custo Atual",
    summary: "US$ 436K/ano perdidos em trabalho manual — o custo de não mudar",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,90%,22%)] to-[hsl(0,70%,15%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>O custo de ficar parado</SectionLabel>
        <SlideTitle>Quanto custa não mudar?</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          {/* Left: calculation breakdown */}
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">O cálculo é simples</h3>
            <div className="border border-white/20 p-8 space-y-4">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Pessoas envolvidas no fecho</span>
                <span className="font-medium">4 pessoas</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Jornada diária</span>
                <span className="font-medium">8 horas/dia</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Dias dedicados por mês</span>
                <span className="font-medium">10 dias</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Horas consumidas / mês</span>
                <span className="font-medium text-[24px]">320 h</span>
              </div>
              <div className="flex justify-between text-[22px] mt-2">
                <span className="opacity-65">Custo por hora (ref. US$ 1.000/mês)</span>
                <span className="font-medium">US$ 5,68</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Custo mensal (1 unidade)</span>
                <span className="font-medium text-[24px]">US$ 1.818</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-75 font-medium">Custo anual (1 unidade)</span>
                <span className="font-medium text-[24px]">US$ 21.800</span>
              </div>
            </div>
          </div>

          {/* Right: group impact + indirect costs */}
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">Agora multiplique por 20 unidades</h3>
            
            {/* Big number */}
            <div className="border border-white/25 bg-white/10 p-10 text-center mb-8">
              <p className="text-[20px] opacity-80 mb-2">Custo anual estimado — todo o grupo</p>
              <p className="text-[80px] font-light leading-none">US$ 436K</p>
              <p className="text-[18px] opacity-75 mt-3">Apenas em trabalho manual e retrabalho</p>
            </div>

            {/* Indirect costs */}
            <div className="border border-white/15 p-6">
              <p className="text-[18px] opacity-80 uppercase tracking-widest mb-4">E isto ainda não conta...</p>
              <div className="space-y-3">
                {[
                  "Multas e passivos por pagamentos incorretos",
                  "Produtividade perdida de gestores e colaboradores",
                  "Riscos de compliance em auditorias",
                  "O custo invisível: um RH que não consegue ser estratégico",
                ].map((c) => (
                  <p key={c} className="text-[19px] opacity-65 flex items-start gap-3">
                    <AlertTriangle size={18} className="opacity-80 shrink-0 mt-1" /> {c}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-white/15 p-5 text-center">
          <p className="text-[22px] opacity-70 font-light">
            Cada mês sem mudança é um mês a pagar este preço. <strong className="opacity-100">A pergunta não é "se" — é "quando".</strong>
          </p>
        </div>
      </div>
    ),
  },

  // ─── 7. SOLUÇÃO FACTORIAL ─────────────────────────────
  {
    id: "solution",
    title: "Solução",
    summary: "Cada dor tem uma solução concreta — demo interativo, turnos em massa, IA",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(184,90%,20%)] to-[hsl(184,70%,10%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>A resposta</SectionLabel>
        <SlideTitle>Cada dor tem uma solução concreta</SlideTitle>

        {/* Demo access banner */}
        <div className="border-2 border-foreground/25 bg-foreground/[0.06] p-6 mb-10 flex items-center justify-between">
          <div>
            <p className="text-[22px] font-medium opacity-90 mb-1">🔑 Preparámos um ambiente só para vocês</p>
            <p className="text-[18px] opacity-80">Login: <span className="font-mono opacity-80">hellen@demob25acc00.com</span> · Senha: <span className="font-mono opacity-80">Papapapa333!</span></p>
          </div>
          <a
            href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=75113&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-foreground text-background px-8 py-4 text-[20px] font-medium hover:opacity-90 transition-opacity"
          >
            Entrar no Demo →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* Left: interactive feature links */}
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">Veja com os vossos próprios olhos</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Turnos em massa",
                  desc: "Centenas de horários atualizados em segundos. Nunca mais um a um.",
                  url: "https://app.eu2.demo.factorial.dev/shifts/monthly/employees/2026/1/1",
                  isDemo: true,
                },
                {
                  label: "Férias em lote",
                  desc: "Atribua ausências para equipas inteiras de uma só vez.",
                  url: "https://help.factorialhr.com/ausencias-e-aprovacoes/how-to-assign-the-absence-in-bulk-?from_search=218380148",
                  isDemo: false,
                },
                {
                  label: "Aprovações com IA",
                  desc: "A IA sugere aprovações inteligentes baseadas em padrões da equipa.",
                  url: "https://help.factorialhr.com/one/one-ai-%E2%80%93-time-off-management-approvals?from_search=218384939",
                  isDemo: false,
                },
                {
                  label: "Pergunte qualquer coisa à IA",
                  desc: "\"Quais os principais motivos de ausência por departamento?\" — e receba um gráfico.",
                  url: "https://app.eu2.demo.factorial.dev/analytics/reports/dashboards/105102/list/question",
                  isDemo: true,
                },
              ].map((f) => (
                <a
                  key={f.label}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border border-foreground/15 p-6 hover:border-foreground/35 hover:bg-foreground/[0.04] transition-all group cursor-pointer"
                >
                  <Check size={24} className="opacity-60 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[24px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">{f.label}</p>
                    <p className="text-[19px] opacity-80 mt-1">{f.desc}</p>
                  </div>
                  <span className="text-[18px] opacity-70 group-hover:opacity-70 shrink-0 mt-1 transition-opacity">
                    {f.isDemo ? "🔗 Demo" : "📖 Saiba mais"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: expected gains */}
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">O que muda na prática</h3>
            <div className="space-y-6">
              {[
                { title: "De 10 dias para 2–3 dias", desc: "O fecho de mês deixa de ser um pesadelo." },
                { title: "Zero retrabalho", desc: "Processos em massa eliminam lançamentos individuais." },
                { title: "Integração que funciona", desc: "Dados validados automaticamente antes de ir para o Primavera." },
              ].map((g) => (
                <div key={g.title} className="border border-foreground/15 p-8">
                  <h4 className="text-[26px] font-normal mb-2">{g.title}</h4>
                  <p className="text-[22px] opacity-60">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Primavera integrado de forma robusta",
                "Preparado para 20+ unidades desde o dia 1",
              ].map((f) => (
                <div key={f} className="flex items-center gap-4 text-[24px] opacity-70 border border-foreground/15 p-5">
                  <Check size={22} className="opacity-60 shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 7B. RELATÓRIOS GERENCIAIS ────────────────────────
  {
    id: "reports",
    title: "Relatórios Gerenciais",
    summary: "Insights em tempo real — clique nos relatórios para explorar cada vista",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(184,40%,95%)] to-[hsl(347,30%,92%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px] py-[60px]">
        <SectionLabel>Insights em tempo real</SectionLabel>
        <SlideTitle>Relatórios Gerenciais</SlideTitle>
        <SlideSubtitle>
          Decisões orientadas por dados — clique para explorar cada vista.
        </SlideSubtitle>
        <ReportsGallery />
      </div>
    ),
  },

  // ─── 8. INTEGRAÇÃO ────────────────────────────────────
  {
    id: "integration",
    title: "Integração Primavera",
    summary: "Factorial + E2E Middleware + Primavera — sincronização bidirecional",
    icon: <Link2 size={24} />,
    gradient: "from-[hsl(37,70%,22%)] to-[hsl(37,50%,10%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>COMO FUNCIONA?</SectionLabel>
        <SlideTitle>O Primavera fica. A Factorial entra.</SlideTitle>

        {/* Topology diagram */}
        <div className="flex items-center justify-center gap-0 mt-6">
          {/* Factorial */}
          <div className="w-[380px] border border-white/25 bg-white/10 p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 border border-white/25 flex items-center justify-center">
              <span className="text-[24px] font-light">F</span>
            </div>
            <p className="text-[26px] font-medium mb-1">Factorial HR</p>
            <p className="text-[15px] opacity-80 uppercase tracking-[0.2em] mb-4">Camada de Gestão</p>
            <div className="space-y-2 text-left">
              {["Gestão de colaboradores", "Controlo de ausências", "Portal do colaborador", "Aprovações e workflows"].map((item) => (
                <p key={item} className="text-[17px] opacity-70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Arrow to middleware */}
          <div className="flex items-center px-3">
            <div className="w-12 h-px bg-white/25" />
            <span className="text-[16px] opacity-70">→</span>
          </div>

          {/* E2E Middleware */}
          <div className="border border-white/30 bg-white/10 px-6 py-6 text-center min-w-[200px]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
              <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>
            <p className="text-[20px] font-medium opacity-80">E2E.pt</p>
            <p className="text-[15px] opacity-80 mt-1">Middleware Certificado</p>
            <div className="border-t border-white/15 mt-3 pt-3 space-y-1 text-2xl font-bold">
              <p className="text-[14px] opacity-75">Public API + WebAPI</p>
              <p className="text-[14px] opacity-75">SQL dedicado (regras locais)</p>
              <p className="text-[14px] opacity-75">Sync automático diário</p>
            </div>
          </div>

          {/* Arrow to Primavera */}
          <div className="flex items-center px-3">
            <span className="text-[16px] opacity-70">←</span>
            <div className="w-12 h-px bg-white/25" />
          </div>

          {/* Primavera */}
          <div className="w-[380px] border border-white/25 bg-white/10 p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 border border-white/25 flex items-center justify-center">
              <span className="text-[24px] font-light">P</span>
            </div>
            <p className="text-[26px] font-medium mb-1">Cegid Primavera</p>
            <p className="text-[15px] opacity-80 uppercase tracking-[0.2em] mb-4">Folha & ERP</p>
            <div className="space-y-2 text-left">
              {["Processamento salarial", "Obrigações fiscais", "Declarações legais", "Arquivo contabilístico"].map((item) => (
                <p key={item} className="text-[17px] opacity-70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Syncable fields */}
        <div className="grid grid-cols-7 gap-3 mt-8 pt-6 border-t border-white/15">
          {[
            { label: "Colaboradores", dir: "↔", desc: "Bidirecional" },
            { label: "Ausências", dir: "→", desc: "Fact → Primavera" },
            { label: "Horas Extra", dir: "→", desc: "Fact → Primavera" },
            { label: "Despesas", dir: "→", desc: "Fact → Primavera" },
            { label: "Compensação", dir: "→", desc: "Fact → Primavera" },
            { label: "Payslips", dir: "←", desc: "Primavera → Fact" },
            { label: "Declarações", dir: "←", desc: "Primavera → Fact" },
          ].map((f) => (
            <div key={f.label} className="text-center border border-white/15 p-3">
              <p className="text-[24px] font-light opacity-70 mb-1">{f.dir}</p>
              <p className="text-[17px] font-medium opacity-80">{f.label}</p>
              <p className="text-[14px] opacity-75 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 9. ZKTECO — CONTROLO DE PONTO ─────────────────────
  {
    id: "zkteco",
    title: "Picagem de Ponto\n",
    summary: "Do terminal biométrico ao salário — sem intervenção manual",
    icon: <Fingerprint size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(184,60%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Controlo de Ponto</SectionLabel>
        <SlideTitle>Do terminal ao salário — sem intervenção</SlideTitle>

        {/* Full topology: ZKTeco → Factorial → E2E → Primavera */}
        <div className="flex items-center justify-center gap-0 mt-6 mb-8">
          {/* ZKTeco Terminal */}
          <div className="w-[280px] border border-white/25 bg-white/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 border border-white/25 flex items-center justify-center">
              <Fingerprint size={24} className="opacity-80" />
            </div>
            <p className="text-[22px] font-medium mb-1">Picagem de Ponto\n</p>
            <p className="text-[14px] opacity-80 uppercase tracking-[0.2em] mb-3">Terminal Biométrico</p>
            <div className="space-y-1.5 text-left">
              {["Impressão digital", "Reconhecimento facial", "Cartão RFID / NFC", "Código PIN"].map((item) => (
                <p key={item} className="text-[15px] opacity-65 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center px-2">
            <div className="w-10 h-px bg-white/25" />
            <p className="text-[12px] opacity-70 my-1">SSL/TLS</p>
            <p className="text-[12px] opacity-70">SHA-256 + RSA</p>
            <div className="w-10 h-px bg-white/25" />
          </div>

          {/* Factorial */}
          <div className="w-[280px] border border-white/25 bg-white/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 border border-white/25 flex items-center justify-center">
              <span className="text-[20px] font-light">F</span>
            </div>
            <p className="text-[22px] font-medium mb-1">Factorial HR</p>
            <p className="text-[14px] opacity-80 uppercase tracking-[0.2em] mb-3">Time Tracking</p>
            <div className="space-y-1.5 text-left">
              {["Recebe clock-ins/outs", "Aplica políticas de ponto", "Consolida timesheets", "Calcula horas extra"].map((item) => (
                <p key={item} className="text-[15px] opacity-65 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center px-2">
            <div className="w-10 h-px bg-white/25" />
            <p className="text-[12px] opacity-70 my-1">Public API</p>
            <p className="text-[12px] opacity-70">E2E.pt</p>
            <div className="w-10 h-px bg-white/25" />
          </div>

          {/* Primavera */}
          <div className="w-[280px] border border-white/25 bg-white/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 border border-white/25 flex items-center justify-center">
              <span className="text-[20px] font-light">P</span>
            </div>
            <p className="text-[22px] font-medium mb-1">Cegid Primavera</p>
            <p className="text-[14px] opacity-80 uppercase tracking-[0.2em] mb-3">Payroll & ERP</p>
            <div className="space-y-1.5 text-left">
              {["Horas trabalhadas", "Ausências e extras", "Processamento salarial", "Relatórios legais"].map((item) => (
                <p key={item} className="text-[15px] opacity-65 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: 3 columns — Flow, Security, Features */}
        <div className="grid grid-cols-3 gap-8">
          {/* Passo a Passo */}
          <div className="border border-white/20 p-6">
            <h3 className="text-[20px] font-medium mb-4 flex items-center gap-2">
              <Wifi size={20} className="opacity-70" /> Fluxo de Dados
            </h3>
            <div className="space-y-3">
              {[
                { step: "1", text: "Colaborador autentica-se no terminal (digital, face, cartão ou PIN)" },
                { step: "2", text: "Evento transmitido via SSL/TLS para a cloud Factorial" },
                { step: "3", text: "Factorial aplica políticas, consolida timesheets e calcula extras" },
                { step: "4", text: "E2E.pt lê dados via API e envia para o Primavera" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 border border-white/30 flex items-center justify-center text-[14px] font-medium opacity-60 shrink-0 mt-0.5">{s.step}</span>
                  <p className="text-[16px] opacity-70 leading-snug">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Segurança Biométrica */}
          <div className="border border-white/20 p-6">
            <h3 className="text-[20px] font-medium mb-4 flex items-center gap-2">
              <Lock size={20} className="opacity-70" /> Segurança & Privacidade
            </h3>
            <div className="space-y-2.5">
              {[
                "Biometria armazenada como templates matemáticos — nunca imagens",
                "Dados biométricos ficam no terminal, não na cloud",
                "Comunicação encriptada: SHA-256 + RSA + SSL/TLS",
                "Infraestrutura Factorial na AWS (UE) — GDPR compliant",
                "Até 16 tipos de pausa registáveis no terminal",
              ].map((item) => (
                <p key={item} className="text-[16px] opacity-70 flex items-start gap-2">
                  <Check size={14} className="opacity-60 shrink-0 mt-1" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Direção dos Dados */}
          <div className="border border-white/20 p-6">
            <h3 className="text-[20px] font-medium mb-4 flex items-center gap-2">
              <Database size={20} className="opacity-70" /> Sincronização
            </h3>
            <div className="space-y-3">
              {[
                { dir: "→", from: "Factorial → Picagem de Ponto\n", desc: "Dados dos colaboradores (nome, ID, perfil biométrico)" },
                { dir: "↔", from: "Picagem de Ponto\n ↔ Factorial", desc: "Clock-ins/outs, breaks, eventos de ponto" },
                { dir: "→", from: "Factorial → Primavera", desc: "Horas, ausências, extras, variáveis de payroll" },
              ].map((f) => (
                <div key={f.from} className="border border-white/15 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[20px] font-light opacity-60">{f.dir}</span>
                    <span className="text-[17px] font-medium opacity-80">{f.from}</span>
                  </div>
                  <p className="text-[15px] opacity-80">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-white/15 pt-3">
              <p className="text-[15px] opacity-75">Sync configurável · Ex: automático diário às 08h</p>
              <p className="text-[15px] opacity-75 mt-1">Regras PT: 1ª hora 25%, 2ª hora 37,5% via SQL dedicado</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 10. FACTORIAL × MICROSOFT — PARCERIA ESTRATÉGICA ──
  {
    id: "microsoft-partnership",
    title: "Factorial × Microsoft",
    summary: "Parceria estratégica multidimensional — Azure, IA, Marketplace, 90+ partners",
    icon: <Award size={24} />,
    gradient: "from-[hsl(210,70%,20%)] to-[hsl(260,50%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Parceria Estratégica</SectionLabel>
        <SlideTitle>Factorial × Microsoft</SlideTitle>

        {/* Timeline ribbon */}
        <div className="flex items-stretch gap-0 mt-4 mb-10">
          {[
            { year: "2024", icon: <Cloud size={20} />, title: "Migração Azure", desc: "Infraestrutura 100% migrada para Azure — €300K+/mês de consumo cloud" },
            { year: "2024", icon: <Award size={20} />, title: "Startup do Ano", desc: "Microsoft for Startups España — prémio pela adoção rápida de IA" },
            { year: "2025", icon: <Brain size={20} />, title: "Factorial One", desc: "Suite de IA construída sobre Azure + OpenAI — agora integrada ao Teams" },
            { year: "2026", icon: <Rocket size={20} />, title: "Satya Nadella", desc: "CEO da Microsoft destaca Factorial no keynote do AI Tour Madrid" },
          ].map((item, i) => (
            <div key={i} className="flex-1 border border-white/20 bg-white/[0.06] p-5 relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="opacity-60">{item.icon}</span>
                <span className="text-[14px] opacity-70 uppercase tracking-[0.15em]">{item.year}</span>
              </div>
              <p className="text-[20px] font-medium mb-2 opacity-90">{item.title}</p>
              <p className="text-[15px] opacity-80 leading-snug">{item.desc}</p>
              {i < 3 && <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-5 h-5 border border-white/20 bg-[hsl(210,70%,20%)] flex items-center justify-center text-[12px] opacity-75">→</div>}
            </div>
          ))}
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { num: "90+", label: "Dynamics partners ativos", sub: "incl. TDSynnex" },
            { num: "50%", label: "Receita de parcerias via Microsoft", sub: "Q1 2025" },
            { num: "€10M", label: "AI Acceleration Fund", sub: "para adoção de IA em PMEs" },
            { num: "MACC", label: "Co-sell eligible", sub: "Compra conta para Azure commitment" },
          ].map((kpi) => (
            <div key={kpi.label} className="border border-white/15 p-5 text-center">
              <p className="text-[40px] font-light mb-1">{kpi.num}</p>
              <p className="text-[16px] opacity-70 font-medium">{kpi.label}</p>
              <p className="text-[14px] opacity-70 mt-1">{kpi.sub}</p>
            </div>
          ))}
        </div>

        {/* Bottom: Quote + AI Tour cities */}
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div className="border border-white/15 p-6 bg-white/[0.04]">
            <p className="text-[18px] opacity-70 italic leading-relaxed mb-3">
              "Microsoft CEO Satya Nadella highlighted Factorial as one of the most important companies in Spain and an example of a partner building cutting edge AI solutions for SMBs around Europe and the world."
            </p>
            <p className="text-[15px] opacity-70">— AI Tour Madrid, Fevereiro 2026</p>
          </div>
          <div className="border border-white/15 p-6">
            <p className="text-[16px] font-medium opacity-70 mb-3 uppercase tracking-[0.15em]">AI Tour 2026</p>
            <div className="space-y-2">
              {["Madrid 🇪🇸", "Munique 🇩🇪", "Paris 🇫🇷"].map((city) => (
                <p key={city} className="text-[18px] opacity-60 flex items-center gap-2">
                  <Globe size={16} className="opacity-75" /> {city}
                </p>
              ))}
            </div>
            <div className="border-t border-white/15 mt-4 pt-3">
              <p className="text-[14px] opacity-70">Azure Marketplace · Listagem ativa</p>
              <p className="text-[14px] opacity-70 mt-1">Compra sem intermediários</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 11. MICROSOFT DYNAMICS — BUSINESS CENTRAL ─────────
  {
    id: "microsoft-bc",
    title: "Microsoft Business Central",
    summary: "Dynamics 365 Business Central — cloud, MACC eligible, €1.50/seat",
    icon: <Monitor size={24} />,
    gradient: "from-[hsl(220,60%,22%)] to-[hsl(220,50%,10%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Integração Microsoft</SectionLabel>
        <SlideTitle>Dynamics 365 Business Central</SlideTitle>

        <div className="grid grid-cols-[1fr_1fr] gap-16 mt-4">
          {/* Left: topology & sync */}
          <div>
            {/* Topology */}
            <div className="flex items-center justify-center gap-0 mb-8">
              <div className="border border-foreground/20 bg-foreground/5 px-6 py-5 text-center min-w-[200px]">
                <p className="text-[24px] font-medium mb-1 opacity-90">Factorial HR</p>
                <p className="text-[14px] opacity-75 uppercase tracking-[0.15em]">Cloud</p>
              </div>
              <div className="flex items-center px-3">
                <div className="w-10 h-px bg-foreground/25" />
                <span className="text-[14px] opacity-70">↔</span>
                <div className="w-10 h-px bg-foreground/25" />
              </div>
              <div className="border border-foreground/20 bg-foreground/5 px-6 py-5 text-center min-w-[200px]">
                <p className="text-[24px] font-medium mb-1 opacity-90">Aciactech</p>
                <p className="text-[14px] opacity-75 uppercase tracking-[0.15em]">Partner / Connector</p>
              </div>
              <div className="flex items-center px-3">
                <div className="w-10 h-px bg-foreground/25" />
                <span className="text-[14px] opacity-70">↔</span>
                <div className="w-10 h-px bg-foreground/25" />
              </div>
              <div className="border border-foreground/20 bg-foreground/5 px-6 py-5 text-center min-w-[200px]">
                <p className="text-[24px] font-medium mb-1 opacity-90">Business Central</p>
                <p className="text-[14px] opacity-75 uppercase tracking-[0.15em]">Cloud · API</p>
              </div>
            </div>

            <h3 className="text-[24px] font-normal mb-4 opacity-80">Fluxos de Dados</h3>
            <div className="space-y-3">
              {[
                { dir: "→", label: "Funcionários → BC", desc: "Nome, apelido, conta bancária, telefone, email" },
                { dir: "←", label: "Projetos ← BC", desc: "Nome do projeto, datas, responsável, subprojetos/tarefas" },
                { dir: "→", label: "Time Tracking → BC", desc: "Dia, mês, minutos, projeto/subprojeto, funcionário" },
                { dir: "→", label: "Despesas → BC", desc: "Data, categoria, IVA, fornecedor, método pagamento, montante, recibo" },
              ].map((f) => (
                <div key={f.label} className="border border-foreground/15 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[20px] font-light opacity-60">{f.dir}</span>
                    <span className="text-[18px] font-medium opacity-80">{f.label}</span>
                  </div>
                  <p className="text-[15px] opacity-80">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: setup + MACC highlight */}
          <div>
            <h3 className="text-[24px] font-normal mb-4 opacity-80">Setup</h3>
            <div className="space-y-3 mb-6">
              {[
                "Ativar conector no Marketplace da Factorial",
                "Fornecer Tenant ID + conta admin do BC",
                "Partner configura mapeamento de campos",
                "Teste de sincronização + validação",
                "Ativação em produção",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3 text-[18px] opacity-70">
                  <span className="w-7 h-7 border border-foreground/20 flex items-center justify-center shrink-0 text-[14px] opacity-60">{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* MACC Highlight */}
            <div className="border-2 border-blue-400/30 bg-blue-400/[0.06] p-5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Award size={20} className="opacity-70 text-blue-300" />
                <p className="text-[18px] font-medium opacity-90">MACC Co-sell Eligible</p>
              </div>
              <p className="text-[16px] opacity-60 leading-relaxed">
                A compra da Factorial via Azure Marketplace conta para o Azure Consumption Commitment — ideal para empresas com contratos MACC de 1 a 3 anos.
              </p>
            </div>

            {/* Notes */}
            <div className="border border-foreground/15 p-5 bg-foreground/[0.03]">
              <p className="text-[15px] opacity-75">Cloud only — não suporta BC on-premise</p>
              <p className="text-[15px] opacity-75 mt-1">Sincronização via API · Near real-time ou batches agendados</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 12. MICROSOFT DYNAMICS NAV ────────────────────────
  {
    id: "microsoft-nav",
    title: "Microsoft Dynamics NAV",
    summary: "Dynamics NAV / Navision — on-premise, NAV 2015+, via Illusion Studio",
    icon: <Server size={24} />,
    gradient: "from-[hsl(260,50%,22%)] to-[hsl(260,40%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Integração Microsoft</SectionLabel>
        <SlideTitle>Dynamics NAV / Navision</SlideTitle>
        <SlideSubtitle>Para ambientes on-premise — NAV 2015 ou superior</SlideSubtitle>

        <div className="grid grid-cols-[1fr_1fr] gap-16 mt-10">
          {/* Left: topology & sync */}
          <div>
            {/* Topology */}
            <div className="flex items-center justify-center gap-0 mb-8">
              <div className="border border-white/25 bg-white/10 px-6 py-5 text-center min-w-[200px]">
                <p className="text-[24px] font-medium mb-1">Factorial HR</p>
                <p className="text-[14px] opacity-75 uppercase tracking-[0.15em]">Cloud · API</p>
              </div>
              <div className="flex items-center px-3">
                <div className="w-10 h-px bg-white/25" />
                <span className="text-[14px] opacity-70">↔</span>
                <div className="w-10 h-px bg-white/25" />
              </div>
              <div className="border border-white/25 bg-white/10 px-6 py-5 text-center min-w-[200px]">
                <p className="text-[24px] font-medium mb-1">Illusion Studio</p>
                <p className="text-[14px] opacity-75 uppercase tracking-[0.15em]">Partner / Connector</p>
              </div>
              <div className="flex items-center px-3">
                <div className="w-10 h-px bg-white/25" />
                <span className="text-[14px] opacity-70">↔</span>
                <div className="w-10 h-px bg-white/25" />
              </div>
              <div className="border border-white/25 bg-white/10 px-6 py-5 text-center min-w-[200px]">
                <p className="text-[24px] font-medium mb-1">Dynamics NAV</p>
                <p className="text-[14px] opacity-75 uppercase tracking-[0.15em]">On-Premise · SOAP/OData</p>
              </div>
            </div>

            <h3 className="text-[24px] font-normal mb-4 opacity-80">O que sincroniza</h3>
            <div className="space-y-3">
              {[
                "Funcionários",
                "Projetos e Subprojetos/Tarefas",
                "Registos de tempo / picagens",
                "Despesas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/15 p-4">
                  <Check size={20} className="opacity-60 shrink-0" />
                  <span className="text-[20px] opacity-80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: setup, requirements & pricing */}
          <div>
            <h3 className="text-[24px] font-normal mb-4 opacity-80">Requisitos</h3>
            <div className="space-y-3 mb-6">
              {[
                "NAV 2015 ou superior",
                "Web Services SOAP/OData publicados",
                "Integração separada e distinta do Business Central",
              ].map((req) => (
                <div key={req} className="flex items-start gap-3 text-[18px] opacity-70 border border-white/15 p-4">
                  <Server size={18} className="shrink-0 mt-0.5 opacity-75" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[24px] font-normal mb-4 opacity-80">Setup</h3>
            <div className="space-y-3 mb-6">
              {[
                "Implementação típica: ~3 semanas",
                "Configuração de Web Services no NAV",
                "Mapeamento de campos + testes",
                "Ativação em produção",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3 text-[18px] opacity-70">
                  <span className="w-7 h-7 border border-white/20 flex items-center justify-center shrink-0 text-[14px] opacity-60">{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="border border-white/15 p-5 bg-white/[0.04]">
              <p className="text-[16px] opacity-75">Integração separada do Business Central — requer configuração SOAP/OData no servidor NAV</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 12. COMPARAÇÃO ────────────────────────────────────
  {
    id: "comparison",
    title: "Comparação",
    summary: "Antes e depois — ponto a ponto, SisQual vs Factorial",
    icon: <Check size={24} />,
    gradient: "from-[hsl(160,50%,20%)] to-[hsl(160,40%,8%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Antes e depois</SectionLabel>
        <SlideTitle>O que muda — ponto a ponto</SlideTitle>
        <div className="border border-foreground/20 mt-6">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[22px]">
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60">Critério</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">Hoje (SisQual)</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">Com Factorial</div>
            {[
              { c: "Tempo de fechamento", s: "~10 dias/mês", f: "2–3 dias/mês" },
              { c: "Atualização de turnos", s: "Um a um", f: "Em massa" },
              { c: "Lançamento de férias", s: "Colaborador por colaborador", f: "Em lote, por equipa" },
              { c: "Exportação p/ Primavera", s: "Falhas recorrentes", f: "Integração validada" },
              { c: "Rastreabilidade de erros", s: "Nenhuma", f: "Logs por colaborador" },
              { c: "Relatórios e BI", s: "Excel manual", f: "Dashboards + IA" },
              { c: "Escalabilidade", s: "1 unidade por vez", f: "20+ unidades nativas" },
            ].map((row, i) => (
              <>
                <div key={`c${i}`} className={`px-10 py-5 flex items-center text-[20px] ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  {row.c}
                </div>
                <div key={`s${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 opacity-70 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <X size={20} className="opacity-60 shrink-0" />
                  <span className="text-[20px]">{row.s}</span>
                </div>
                <div key={`f${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <Check size={20} className="opacity-80 shrink-0" />
                  <span className="text-[20px]">{row.f}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ─── 10. ARQUITETURA & INFRAESTRUTURA (TI) ────────────
  {
    id: "tech-architecture",
    title: "Arquitetura Técnica",
    summary: "React, Rails, AWS Frankfurt — SOC 2, ISO 27001, GDPR",
    icon: <Cloud size={24} />,
    gradient: "from-[hsl(210,50%,18%)] to-[hsl(210,40%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Camada Técnica · Para TI</SectionLabel>
        <SlideTitle>Arquitetura & Infraestrutura</SlideTitle>

        <div className="grid grid-cols-2 gap-10 mt-4">
          {/* Left: Topologia */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Server size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">Topologia do Sistema</h3>
            </div>
            <div className="border border-white/20 p-7 space-y-3 mb-6">
              {[
                { label: "Frontend", value: "React + GraphQL APIs" },
                { label: "Backend", value: "Ruby on Rails — gems modulares" },
                { label: "Mobile", value: "React Native (Android & iOS)" },
                { label: "APIs", value: "GraphQL (principal) + REST" },
                { label: "Background Jobs", value: "Sidekiq sobre Redis" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[20px]">
                  <span className="opacity-60">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Database size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">Multi-Tenancy</h3>
            </div>
            <div className="border border-white/20 p-7 space-y-2">
              {[
                "Isolamento lógico por tenant",
                "RBAC — Controle de acesso por role",
                "Dados nunca compartilhados entre clientes",
                "Opção de instância dedicada (mercado DACH)",
              ].map((item) => (
                <p key={item} className="text-[19px] opacity-70 flex items-center gap-3">
                  <Check size={16} className="opacity-60 shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Infra & Segurança */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Cloud size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">Infraestrutura Cloud</h3>
            </div>
            <div className="border border-white/20 p-7 space-y-3 mb-6">
              {[
                { label: "Provedor", value: "AWS (Frankfurt, EU)" },
                { label: "Disponibilidade", value: "SLA ≥ 99,5% · 3 AZs" },
                { label: "DR", value: "RPO < 1h · RTO < 4h" },
                { label: "Database", value: "MySQL — replicação + backups" },
                { label: "Storage", value: "S3 com redundância" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[20px]">
                  <span className="opacity-60">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">Certificações & Compliance</h3>
            </div>
            <div className="border border-white/20 p-7 grid grid-cols-2 gap-3">
              {[
                "SOC 2 Type II — zero exceções",
                "ISO/IEC 27001:2023",
                "ENS — Nível Alto",
                "GDPR — 100% dados na UE",
              ].map((cert) => (
                <p key={cert} className="text-[18px] opacity-70 flex items-center gap-2">
                  <Check size={16} className="opacity-60 shrink-0" /> {cert}
                </p>
              ))}
            </div>

            <div className="border border-white/15 p-5 mt-6">
              <p className="text-[18px] opacity-80 uppercase tracking-widest mb-3">Criptografia</p>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-[18px] opacity-70">Em trânsito: <strong>TLS 1.2+</strong> (A+ SSL Labs)</p>
                <p className="text-[18px] opacity-70">Em repouso: <strong>AES-256-GCM</strong> (AWS KMS)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 11. INFRAESTRUTURA DE IA (TI) ────────────────────
  {
    id: "tech-ai",
    title: "IA & Segurança",
    summary: "Azure OpenAI, RAG contextualizado, zero partilha entre tenants",
    icon: <Brain size={24} />,
    gradient: "from-[hsl(280,50%,20%)] to-[hsl(280,40%,8%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Camada Técnica · Para TI</SectionLabel>
        <SlideTitle>Infraestrutura de IA</SlideTitle>

        <div className="grid grid-cols-3 gap-8 mt-4">
          {/* Col 1: Arquitetura IA */}
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-3 mb-5">
              <Brain size={24} className="opacity-70" />
              <h3 className="text-[24px] font-medium">Arquitetura de IA</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Provedor Principal", value: "Azure OpenAI" },
                { label: "Fallback", value: "Rauda AI (automático)" },
                { label: "Abordagem", value: "RAG contextualizado" },
                { label: "Pipeline", value: "Cloudflare AutoRAG" },
                { label: "Cache", value: "Semantic Caching (Redis)" },
                { label: "Observabilidade", value: "Langfuse (traces)" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[19px]">
                  <span className="opacity-80">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Privacidade & Segregação */}
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-3 mb-5">
              <Lock size={24} className="opacity-70" />
              <h3 className="text-[24px] font-medium">Privacidade de Dados</h3>
            </div>
            <div className="space-y-3 mb-6">
              {[
                "Zero compartilhamento entre tenants",
                "Sem treinamento com dados de clientes",
                "Modelos base via API — sem fine-tuning",
                "IA desativável por tenant",
                "Transparência total sobre lógica e dados",
              ].map((item) => (
                <p key={item} className="text-[18px] opacity-70 flex items-start gap-3">
                  <Check size={16} className="opacity-60 shrink-0 mt-1" /> {item}
                </p>
              ))}
            </div>
            <div className="border-t border-white/15 pt-4 space-y-2">
              <p className="text-[17px] opacity-80 uppercase tracking-widest mb-2">Processamento</p>
              <p className="text-[18px] opacity-70">VPC privada AWS (Frankfurt)</p>
              <p className="text-[18px] opacity-70">Azure OpenAI com DPA + GDPR</p>
            </div>
          </div>

          {/* Col 3: Escalabilidade & Failover */}
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-3 mb-5">
              <Cpu size={24} className="opacity-70" />
              <h3 className="text-[24px] font-medium">Resiliência & Roadmap</h3>
            </div>
            <div className="space-y-3 mb-6">
              {[
                "Lambda serverless para picos",
                "Load balancing multi-AZ",
                "Auto-scaling baseado em demanda",
                "Failover Azure → Rauda automático",
                "Monitoramento contínuo de health",
              ].map((item) => (
                <p key={item} className="text-[18px] opacity-70 flex items-start gap-3">
                  <Check size={16} className="opacity-60 shrink-0 mt-1" /> {item}
                </p>
              ))}
            </div>
            <div className="border-t border-white/15 pt-4">
              <p className="text-[17px] opacity-80 uppercase tracking-widest mb-3">Roadmap Q2–Q3 2026</p>
              <div className="space-y-2">
                {[
                  "Unificação Knowledge Base",
                  "Enhanced AI observability",
                  "Expansão RAG capabilities",
                  "German Cloud dedicado",
                ].map((item) => (
                  <p key={item} className="text-[17px] opacity-65 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 text-center">
          <div className="border border-white/15 p-4">
            <p className="text-[18px] opacity-80">Security & Compliance</p>
            <p className="text-[20px] font-medium opacity-80">security@factorial.co</p>
          </div>
          <div className="border border-white/15 p-4">
            <p className="text-[18px] opacity-80">SOC 2 Report</p>
            <p className="text-[20px] font-medium opacity-80">Disponível mediante NDA</p>
          </div>
          <div className="border border-white/15 p-4">
            <p className="text-[18px] opacity-80">Infraestrutura</p>
            <p className="text-[20px] font-medium opacity-80">Arnau Vazquez · Eng. Manager</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 12. VÍDEO DEMO ───────────────────────────────────
  {
    id: "video",
    title: "Vídeo Demo",
    summary: "Visualize o futuro — veja o vosso RH a funcionar de forma diferente",
    icon: <Video size={24} />,
    gradient: "from-[hsl(347,100%,25%)] to-[hsl(347,80%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>Visualize o futuro</SectionLabel>
        <SlideTitle>Imagine o vosso RH assim</SlideTitle>
        <div className="w-[960px] h-[540px] mt-8">
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/6sUn2w1hRv0?start=26"
            title="Factorial Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
      </div>
    ),
  },
];
