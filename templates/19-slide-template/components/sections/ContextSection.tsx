import { motion } from "framer-motion";




const cards = [
  {
    title: "Empresa",
    description: "Dulceria Nacional, parte do Grupo Webcor — parceria entre Arcor e Webcor, com operações em Angola e Moçambique.",
  },
  {
    title: "Escala",
    description: "Mais de 400 colaboradores apenas na Dulceria, distribuídos em cerca de 20 unidades. Turnos rotativos em linhas de produção.",
  },
  {
    title: "Sistemas Atuais",
    description: "ERP Primavera para folha de pagamento e SisQual para gestão de ponto e turnos — com graves falhas de integração.",
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

const ContextSection = () => {
  return (
    <section
      id="context"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">
          Contexto
        </h2>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light mb-16">
          <p className="text-2xl md:text-3xl font-normal">
            Conheça o contexto da Dulceria Nacional e do Grupo Webcor.
          </p>
          <p className="opacity-80">
            Um grupo industrial com operações em Angola e Moçambique, enfrentando desafios críticos na gestão de pessoas e integração de sistemas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="border border-foreground/10 p-8 hover:border-foreground/30 transition-colors"
            >
              <h3 className="text-lg font-normal mb-3">{card.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContextSection;
