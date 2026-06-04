import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { criteria: "Tempo de Fechamento", sisqual: "~10 dias/mês", factorial: "2–3 dias/mês" },
  { criteria: "Atualização de Turnos", sisqual: "Um a um, manual", factorial: "Em massa, por grupo" },
  { criteria: "Lançamento de Férias", sisqual: "Colaborador por colaborador", factorial: "Em massa, por equipe" },
  { criteria: "Exportação para Primavera", sisqual: "Com falhas recorrentes (419 erros)", factorial: "Integração robusta e validada" },
  { criteria: "Visibilidade de Erros", sisqual: "Zero rastreabilidade", factorial: "Logs detalhados por colaborador" },
  { criteria: "Relatórios de Absenteísmo", sisqual: "Excel manual", factorial: "BI automatizado por área/unidade" },
  { criteria: "Escalabilidade", sisqual: "Limitada a 1 unidade", factorial: "Multi-unidade (20+ unidades)" },
];

const ComparisonSection = () => {
  return (
    <section
      id="comparison"
      className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          Comparação
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl">
          SisQual vs. Factorial + Integração Primavera
        </p>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:block border border-secondary-foreground/20 overflow-hidden"
        >
          <div className="grid grid-cols-3 text-sm">
            {/* Header */}
            <div className="px-6 py-4 border-b border-secondary-foreground/20 font-medium opacity-60">Critério</div>
            <div className="px-6 py-4 border-b border-secondary-foreground/20 font-medium opacity-60 text-center">SisQual (Atual)</div>
            <div className="px-6 py-4 border-b border-secondary-foreground/20 font-medium opacity-60 text-center">Factorial</div>

            {rows.map((row, i) => (
              <>
                <div key={`c-${i}`} className={`px-6 py-4 flex items-center ${i < rows.length - 1 ? "border-b border-secondary-foreground/10" : ""}`}>
                  {row.criteria}
                </div>
                <div key={`s-${i}`} className={`px-6 py-4 flex items-center justify-center gap-2 opacity-70 ${i < rows.length - 1 ? "border-b border-secondary-foreground/10" : ""}`}>
                  <X size={14} className="opacity-60" />
                  <span className="text-xs">{row.sisqual}</span>
                </div>
                <div key={`f-${i}`} className={`px-6 py-4 flex items-center justify-center gap-2 ${i < rows.length - 1 ? "border-b border-secondary-foreground/10" : ""}`}>
                  <Check size={14} className="opacity-80" />
                  <span className="text-xs">{row.factorial}</span>
                </div>
              </>
            ))}
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div key={i} className="border border-secondary-foreground/20 p-5">
              <p className="text-sm font-medium mb-3">{row.criteria}</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 opacity-60">
                  <X size={12} className="mt-0.5 flex-shrink-0" />
                  <span>SisQual: {row.sisqual}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={12} className="mt-0.5 flex-shrink-0" />
                  <span>Factorial: {row.factorial}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
