import { motion } from "framer-motion";
import { useROICalculation } from "@/hooks/useROICalculation";
import { DEFAULT_VALUES } from "@/utils/constants";
import { formatEUR, formatPercent, formatMonths } from "@/utils/formatters";

const ROIHeroSection = () => {
  const results = useROICalculation({
    unidades: DEFAULT_VALUES.unidades,
    totalColaboradores: DEFAULT_VALUES.totalColaboradores,
    salarioResponsavelRH: DEFAULT_VALUES.salarioResponsavelRH_MZN,
    salarioAnalista: DEFAULT_VALUES.salarioAnalista_MZN,
    tempoFechamentoAtual: DEFAULT_VALUES.tempoFechamentoAtual,
    cenario: "realista",
  });

  const cards = [
    { label: "Custo Operacional Atual", value: formatEUR(results.custoAtualMensal), sub: "/mês" },
    { label: "Investimento Factorial", value: formatEUR(results.mensalRecorrente), sub: "/mês" },
    { label: "Ganho Líquido", value: formatEUR(results.ganhoLiquidoMensal), sub: "/mês" },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-8">ROI Cenário Realista · 3 Entidades · 500 Colaboradores</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-primary-foreground/20 p-5"
            >
              <p className="text-xs opacity-50 mb-2">{c.label}</p>
              <p className="text-xl md:text-2xl font-light">{c.value}<span className="text-xs opacity-40">{c.sub}</span></p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border border-primary-foreground/30 bg-primary-foreground/10 p-5"
          >
            <p className="text-xs opacity-50 mb-2">ROI Mensal</p>
            <p className="text-2xl md:text-3xl font-light">{formatPercent(results.roiPercent)}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border border-primary-foreground/20 p-5"
          >
            <p className="text-xs opacity-50 mb-2">Payback</p>
            <p className="text-xl md:text-2xl font-light">{formatMonths(results.paybackMeses)}</p>
          </motion.div>
        </div>

        <p className="text-sm opacity-60 max-w-lg mx-auto">
          Com o cenário realista, o Grupo Webcor recupera a implantação em {results.paybackMeses.toFixed(1)} meses, gerando um ganho líquido de {formatEUR(results.ganhoLiquidoMensal)}/mês.
        </p>
      </div>
    </section>
  );
};

export default ROIHeroSection;
