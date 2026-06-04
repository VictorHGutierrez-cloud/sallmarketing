import { motion } from "framer-motion";

const phases = [
  {
    phase: 1,
    title: "Validação Técnica/Funcional",
    description: "Reunião entre Oscar (Dulceria) e colega da GMA para avaliar a Factorial como substituto do SisQual.",
    participants: ["Oscar Fernandes (Dulceria)", "Responsável RH GMA"],
    status: "Em andamento",
  },
  {
    phase: 2,
    title: "Alinhamento com Líderes de RH",
    description: "Reunião com os HR leaders das ~20 unidades para validar se a Factorial resolve as dores comuns.",
    participants: ["HR Leaders das 20 unidades"],
    status: "Pendente",
  },
  {
    phase: 3,
    title: "Apresentação aos HRBPs e CFO",
    description: "Apresentar projeto consolidado, já validado pelos líderes de RH. Mostrar business case, comparação e roadmap.",
    participants: ["HRBPs do Grupo", "CFO do Grupo"],
    status: "Pendente",
  },
  {
    phase: 4,
    title: "Aprovação Final e Implementação",
    description: "Envolver CFO, HRBPs e direção. Decisão sobre escopo inicial e contratação.",
    participants: ["CFO", "HRBPs", "Direção"],
    status: "Pendente",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const NextStepSection = () => {
  const emailAddress = "victor.gutierrez@factorial.co";
  const emailSubject = "Dulceria Nacional — Agendar Próxima Reunião";
  const emailBody = "Olá Victor,\n\nGostaria de agendar a próxima reunião para avançar com a proposta Factorial.\n\nCumprimentos";
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section
      id="next-steps"
      className="py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          Próximos Passos
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-16 max-w-2xl">
          Jornada de implementação em 4 fases
        </p>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary-foreground/20" />

          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-primary-foreground/40 bg-primary flex items-center justify-center">
                  <span className="text-[10px] font-medium">{p.phase}</span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-normal">{p.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-sm ${p.status === "Em andamento" ? "bg-primary-foreground/20" : "bg-primary-foreground/10 opacity-60"}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-sm opacity-70 mb-2">{p.description}</p>
                  <p className="text-xs opacity-50">
                    Participantes: {p.participants.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <p className="text-xl md:text-2xl font-light">
            Pronto para Transformar a Gestão de RH do Grupo Webcor?
          </p>
          <p className="text-sm opacity-60 max-w-md mx-auto">
            Investindo no primeiro ano, o Grupo Webcor pode gerar economias significativas com um ROI superior a 400%.
          </p>
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            Agendar Próxima Reunião
          </a>
          <p className="mt-12 text-xs opacity-40">
            Proposta preparada para Dulceria Nacional / Grupo Webcor — 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;
