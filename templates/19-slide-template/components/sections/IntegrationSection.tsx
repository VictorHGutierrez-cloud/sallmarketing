import { motion } from "framer-motion";

const integrations = [
  { title: "Sincronização de Colaboradores", description: "Dados dos colaboradores sincronizados automaticamente entre Factorial e Primavera." },
  { title: "Informação Contratual", description: "Contratos, categorias profissionais e vínculos atualizados em tempo real." },
  { title: "Ausências e Férias", description: "Aprovações no Factorial exportadas automaticamente para o Primavera." },
  { title: "Horas Extraordinárias", description: "Registos de horas extra calculados e prontos para processamento salarial." },
  { title: "Documentos", description: "Documentos de colaboradores armazenados de forma centralizada e acessível." },
  { title: "Arquivo Pronto para Folha", description: "Exportação validada e completa — sem falhas nem colaboradores esquecidos." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const IntegrationSection = () => {
  return (
    <section
      id="integration"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          Integração
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-6 max-w-2xl">
          Como funciona a integração Factorial + Primavera
        </p>
        <p className="text-base opacity-60 mb-16 max-w-xl">
          A Factorial serve como camada de gestão, enquanto o Primavera permanece como sistema de folha. A integração garante sincronização automática e sem falhas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="border border-foreground/10 p-6 hover:border-foreground/30 transition-colors"
            >
              <h3 className="text-base font-normal mb-2">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-foreground/15 bg-foreground/[0.02] p-8 md:p-12"
        >
          <h3 className="text-sm tracking-widest uppercase opacity-50 mb-10 text-center">Arquitectura da Integração</h3>
          
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0">
            {/* Factorial */}
            <div className="flex-1 max-w-xs mx-auto md:mx-0 border border-foreground/20 bg-foreground/[0.04] p-6 md:p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-foreground/20 flex items-center justify-center">
                <span className="text-lg font-light">F</span>
              </div>
              <p className="text-lg font-medium tracking-tight mb-1">Factorial</p>
              <p className="text-xs opacity-50 uppercase tracking-widest mb-4">Camada de Gestão</p>
              <div className="space-y-1.5 text-left">
                {["Gestão de colaboradores", "Controlo de ausências", "Portal do colaborador", "Aprovações e workflows"].map((item) => (
                  <p key={item} className="text-xs opacity-50 flex items-center gap-2">
                    <span className="w-1 h-1 bg-foreground/30 rounded-full shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center justify-center px-4 py-6 md:py-0 md:px-2 relative">
              <div className="hidden md:block w-16 h-px bg-foreground/20" />
              <div className="md:hidden h-8 w-px bg-foreground/20" />
              <div className="border border-foreground/25 bg-foreground/[0.06] px-5 py-4 my-2 text-center min-w-[140px]">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-foreground/40 rounded-full"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-1.5 h-1.5 bg-foreground/40 rounded-full"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-1.5 h-1.5 bg-foreground/40 rounded-full"
                  />
                </div>
                <p className="text-xs font-medium opacity-70">Sincronização</p>
                <p className="text-[10px] opacity-40 mt-0.5">Automática · Bidirecional</p>
              </div>
              <div className="hidden md:block w-16 h-px bg-foreground/20" />
              <div className="md:hidden h-8 w-px bg-foreground/20" />
            </div>

            {/* Primavera */}
            <div className="flex-1 max-w-xs mx-auto md:mx-0 border border-foreground/20 bg-foreground/[0.04] p-6 md:p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-foreground/20 flex items-center justify-center">
                <span className="text-lg font-light">P</span>
              </div>
              <p className="text-lg font-medium tracking-tight mb-1">Primavera</p>
              <p className="text-xs opacity-50 uppercase tracking-widest mb-4">Sistema de Folha</p>
              <div className="space-y-1.5 text-left">
                {["Processamento salarial", "Obrigações fiscais", "Declarações legais", "Arquivo contabilístico"].map((item) => (
                  <p key={item} className="text-xs opacity-50 flex items-center gap-2">
                    <span className="w-1 h-1 bg-foreground/30 rounded-full shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Data flow indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-foreground/10">
            {[
              { label: "Colaboradores", desc: "Dados pessoais e contratuais" },
              { label: "Ausências", desc: "Férias, faltas e licenças" },
              { label: "Horas Extra", desc: "Registos validados" },
              { label: "Folha", desc: "Ficheiro pronto para processamento" },
            ].map((flow, i) => (
              <motion.div
                key={flow.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <p className="text-xs font-medium opacity-70">{flow.label}</p>
                <p className="text-[10px] opacity-40 mt-0.5">{flow.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
