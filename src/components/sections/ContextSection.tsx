import { motion } from "framer-motion";
import { CLIENT } from "@/utils/constants";

const cards = [
  {
    title: "Organization",
    description: `${CLIENT.organizationName} — nonprofit team working across regions with a strong remote footprint.`,
  },
  {
    title: "Team size",
    description: `Proposal is sized for ${CLIENT.seatCount} employees in Factorial (seats can be adjusted before signature).`,
  },
  {
    title: "Current reality",
    description: "Prior HR software struggled with mobile UX and weak reporting; many processes moved to manual work.",
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
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">Context</h2>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light mb-16">
          <p className="text-2xl md:text-3xl font-normal">Why this investment matters now</p>
          <p className="opacity-80">
            You need an HR layer that employees will actually use on mobile, with approvals and exports that Finance and Payroll can rely on — without going back to spreadsheets.
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
