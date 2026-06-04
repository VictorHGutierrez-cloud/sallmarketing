import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DEFAULT_VALUES } from "@/utils/constants";
import { formatEUR } from "@/utils/formatters";

const TABS = ["visao-geral", "fluxo", "incluido"] as const;
type Tab = typeof TABS[number];

const TAB_LABELS: Record<Tab, string> = {
  "visao-geral": "Visão Consolidada",
  "fluxo": "Fluxo de Cobrança",
  "incluido": "O que está incluído",
};

const d = DEFAULT_VALUES;
const factorialMensal = d.totalColaboradores * d.custoColaboradorMes_EUR;
const primaveraMensal = d.totalColaboradores * d.custoPrimaveraMes_EUR;
const mensalRecorrente = factorialMensal + primaveraMensal;
const implantacao = d.implantacaoFactorial_EUR;
const mes1Total = implantacao + primaveraMensal;

const InvestmentSection = () => {
  const [tab, setTab] = useState<Tab>("visao-geral");

  return (
    <section id="investment" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investimento</h2>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-2xl">
          Factorial + Integração Primavera (E2E)
        </p>
        <p className="text-sm opacity-50 mb-10 max-w-xl">
          3 entidades legais · 500 colaboradores · €4,90/colaborador/mês
        </p>

        {/* Summary cards - MENSAL */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <SummaryCard label="Mês 1" value={formatEUR(mes1Total)} sub="Implantação + Primavera" highlight />
          <SummaryCard label="Mês 2 em diante" value={formatEUR(mensalRecorrente)} sub="Factorial + Primavera" />
          <SummaryCard label="Custo/colaborador" value={formatEUR(mensalRecorrente / d.totalColaboradores)} sub="Mensal recorrente" />
        </div>

        {/* Breakdown mensal */}
        <div className="border border-foreground/10 p-6 mb-12">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Composição mensal</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs opacity-40 mb-3">Mês 1 — Início</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between opacity-60">
                  <span>Implantação Factorial (one-time)</span>
                  <span>{formatEUR(implantacao)}</span>
                </div>
                <div className="flex justify-between opacity-60">
                  <span>Primavera E2E ({d.totalColaboradores} × €0,60)</span>
                  <span>{formatEUR(primaveraMensal)}</span>
                </div>
                <div className="flex justify-between border-t border-foreground/10 pt-2 font-medium">
                  <span>Total Mês 1</span>
                  <span>{formatEUR(mes1Total)}</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs opacity-40 mb-3">Mês 2+ — Recorrente</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between opacity-60">
                  <span>Factorial ({d.totalColaboradores} × €4,90)</span>
                  <span>{formatEUR(factorialMensal)}/mês</span>
                </div>
                <div className="flex justify-between opacity-60">
                  <span>Primavera E2E ({d.totalColaboradores} × €0,60)</span>
                  <span>{formatEUR(primaveraMensal)}/mês</span>
                </div>
                <div className="flex justify-between border-t border-foreground/10 pt-2 font-medium">
                  <span>Total Mensal</span>
                  <span>{formatEUR(mensalRecorrente)}/mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-foreground/10 mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-2.5 text-xs tracking-wide transition-colors border-b-2 -mb-px",
                tab === t ? "border-foreground/40 text-foreground" : "border-transparent text-foreground/40 hover:text-foreground/60"
              )}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          {tab === "visao-geral" && <ConsolidatedView />}
          {tab === "fluxo" && <BillingFlowView />}
          {tab === "incluido" && <IncludedView />}
        </motion.div>

        {/* Escalabilidade */}
        <div className="mt-12 border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-3">Escalabilidade</p>
          <p className="text-sm opacity-60 mb-3">
            Para expandir além das 3 entidades e 500 colaboradores:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p className="opacity-40 text-xs mb-1">Factorial</p>
              <p className="opacity-70">+€4,90/mês por colaborador adicional</p>
            </div>
            <div className="text-sm">
              <p className="opacity-40 text-xs mb-1">Primavera (E2E)</p>
              <p className="opacity-70">+€0,60/mês por colaborador adicional</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border border-foreground/10 p-4">
          <p className="text-xs opacity-40">
            <strong>Nota:</strong> O valor do Primavera será faturado diretamente pela E2E.
          </p>
        </div>
      </div>
    </section>
  );
};

function SummaryCard({ label, value, highlight, sub }: { label: string; value: string; highlight?: boolean; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border p-5", highlight ? "border-foreground/30 bg-foreground/5" : "border-foreground/10")}
    >
      <p className="text-xs opacity-50 mb-1">{label}</p>
      {sub && <p className="text-[10px] opacity-30 mb-1">{sub}</p>}
      <p className={cn("font-light", highlight ? "text-xl md:text-2xl" : "text-lg")}>{value}</p>
    </motion.div>
  );
}

function ConsolidatedView() {
  const meses = [
    { mes: "Mês 1", factorial: "—", primavera: formatEUR(primaveraMensal), implantacao: formatEUR(implantacao), total: formatEUR(mes1Total) },
    { mes: "Mês 2", factorial: formatEUR(factorialMensal), primavera: formatEUR(primaveraMensal), implantacao: "—", total: formatEUR(mensalRecorrente) },
    { mes: "Mês 3+", factorial: formatEUR(factorialMensal), primavera: formatEUR(primaveraMensal), implantacao: "—", total: formatEUR(mensalRecorrente) },
  ];

  return (
    <div>
      <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Evolução mensal</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-foreground/10">
              <th className="text-left py-3 pr-4 text-xs uppercase tracking-widest opacity-40 font-normal">Período</th>
              <th className="text-right py-3 px-4 text-xs uppercase tracking-widest opacity-40 font-normal">Factorial</th>
              <th className="text-right py-3 px-4 text-xs uppercase tracking-widest opacity-40 font-normal">Primavera</th>
              <th className="text-right py-3 px-4 text-xs uppercase tracking-widest opacity-40 font-normal">Implantação</th>
              <th className="text-right py-3 pl-4 text-xs uppercase tracking-widest opacity-40 font-normal">Total</th>
            </tr>
          </thead>
          <tbody>
            {meses.map((r, i) => (
              <tr key={i} className="border-b border-foreground/5">
                <td className="py-3 pr-4 opacity-70 font-medium">{r.mes}</td>
                <td className="py-3 px-4 text-right opacity-60">{r.factorial}</td>
                <td className="py-3 px-4 text-right opacity-60">{r.primavera}</td>
                <td className="py-3 px-4 text-right opacity-60">{r.implantacao}</td>
                <td className="py-3 pl-4 text-right font-medium">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BillingFlowView() {
  return (
    <div className="space-y-8">
      <p className="text-sm opacity-50">Fluxo de cobrança mês a mês</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Mês 1 — Início</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between opacity-60">
              <span>Implantação Factorial (one-time)</span>
              <span>{formatEUR(implantacao)}</span>
            </div>
            <div className="flex justify-between opacity-60">
              <span>Primavera E2E</span>
              <span>{formatEUR(primaveraMensal)}</span>
            </div>
            <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
              <span>Total Mês 1</span>
              <span>{formatEUR(mes1Total)}</span>
            </div>
          </div>
        </div>

        <div className="border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Mês 2 em diante</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between opacity-60">
              <span>Factorial ({d.totalColaboradores} × €4,90)</span>
              <span>{formatEUR(factorialMensal)}/mês</span>
            </div>
            <div className="flex justify-between opacity-60">
              <span>Primavera E2E ({d.totalColaboradores} × €0,60)</span>
              <span>{formatEUR(primaveraMensal)}/mês</span>
            </div>
            <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
              <span>Total Mensal</span>
              <span>{formatEUR(mensalRecorrente)}/mês</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-foreground/10 p-4 text-sm opacity-50">
        <p><strong>Nota:</strong> O valor do Primavera ({formatEUR(primaveraMensal)}/mês) será faturado diretamente pela E2E.</p>
      </div>
    </div>
  );
}

function IncludedView() {
  const sections = [
    {
      title: "Factorial Starter Planning",
      modules: [
        { name: "Core", items: ["Gestão completa de colaboradores", "Cadastro e atualização de dados", "Organograma e estrutura organizacional"] },
        { name: "Time Tracking", items: ["Ponto biométrico integrado", "Controle de horas trabalhadas", "Gestão de turnos e escalas", "Relatórios de ponto"] },
        { name: "Time Off", items: ["Gestão de férias", "Ausências e licenças", "Justificativas e atestados", "Aprovações digitais"] },
        { name: "Shifts", items: ["Gestão de turnos em massa", "Atribuição de escalas", "Troca de turnos", "Notificações automáticas"] },
      ],
    },
    {
      title: "Integração Primavera (E2E)",
      modules: [
        { name: "Sincronização", items: ["Admissão automática", "Cessação automática", "Atualização bidirecional de dados"] },
        { name: "Time Off", items: ["Exportação de ausências e férias", "Sincronização de justificativas"] },
        { name: "Documents", items: ["Envio de recibos de vencimento", "Declarações anuais"] },
        { name: "Overtime", items: ["Importação de horas extra aprovadas", "Cálculo automático no Primavera", "Horas noturnas, feriados, fim de semana"] },
        { name: "Compensation", items: ["Informação contratual sincronizada", "Dados de remuneração"] },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {sections.map((sec) => (
        <div key={sec.title}>
          <p className="text-sm font-medium opacity-80 mb-4">{sec.title}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sec.modules.map((mod) => (
              <div key={mod.name} className="border border-foreground/10 p-5">
                <p className="text-xs uppercase tracking-widest opacity-50 mb-3">{mod.name}</p>
                <ul className="space-y-1.5">
                  {mod.items.map((item, i) => (
                    <li key={i} className="text-sm opacity-60 flex gap-2">
                      <span className="opacity-40">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InvestmentSection;
