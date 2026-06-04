import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const painPoints = [
  {
    title: "Retrabalho Massivo e Trabalho Manual",
    description: "Atualização de horários, férias, ausências e justificativas um a um. Processos extremamente manuais para 400+ colaboradores apenas na Dulceria.",
    impact: "10 dias por mês com toda equipe focada",
  },
  {
    title: "Falhas de Integração SisQual → Primavera",
    description: "Exportações que deixam centenas de colaboradores de fora sem explicação clara. Exemplo real: 419 colaboradores não exportados numa única integração.",
    impact: "Zero visibilidade de quem falhou e por quê",
  },
  {
    title: "Fecho de Mês Lento e Caro",
    description: "~10 dias com toda a equipa dedicada só ao processo de ponto/integração. Tempo do Oscar, que deveria ser estratégico, consumido em correções operacionais.",
    impact: "Custo elevado para o grupo",
  },
  {
    title: "Risco de Erros em Folha",
    description: "Pagamento de horas extra erradas e faltas contabilizadas de forma incorreta por causa de horários não atualizados.",
    impact: "Alto risco de pagamentos incorretos",
  },
  {
    title: "Falta de BI e Visibilidade",
    description: "Relatórios de absenteísmo feitos em Excel manual. Nenhuma visão rápida de qual linha de produção falta mais, por gênero ou por unidade.",
    impact: "RH sem dados para decisões estratégicas",
  },
];

const impactMetrics = [
  { value: "10 dias", label: "Tempo de fecho de mês atual" },
  { value: "~33h", label: "Retrabalho mensal evitável" },
  { value: "~415K EUR", label: "Custo anual estimado" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const ProblemSection = () => {
  return (
    <section
      id="problems"
      className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          Problemas Identificados
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl">
          Os 5 principais problemas com o SisQual
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="p-6 border border-secondary-foreground/20 hover:border-secondary-foreground/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={16} className="opacity-60" />
                <h3 className="text-lg font-normal leading-tight">{point.title}</h3>
              </div>
              <p className="text-sm opacity-70 leading-relaxed mb-4">{point.description}</p>
              <div className="text-xs tracking-wide opacity-50 border-t border-secondary-foreground/10 pt-3">
                Impacto: {point.impact}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-secondary-foreground/20">
          {impactMetrics.map((metric, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-light mb-1">{metric.value}</div>
              <div className="text-sm opacity-60 tracking-wide">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
