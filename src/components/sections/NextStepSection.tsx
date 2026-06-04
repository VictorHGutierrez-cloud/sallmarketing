import { motion } from "framer-motion";
import { CLIENT, PRICING_TOTALS_USD } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";

const phases = [
  {
    phase: 1,
    title: "Stakeholder sign-off",
    description: "Align HR, Finance, and IT on seat count, modules, and payroll export needs.",
    participants: [CLIENT.organizationName, "Factorial"],
    status: "Suggested",
  },
  {
    phase: 2,
    title: "Commercial confirmation",
    description: `Order form, billing currency (USD/EUR), and nonprofit discount documentation (${CLIENT.licenseDiscountPercent}% on licenses).`,
    participants: [CLIENT.organizationName, "Factorial"],
    status: "Suggested",
  },
  {
    phase: 3,
    title: "Implementation kickoff",
    description: "Guided configuration (~5 hours baseline) for policies, approvals, attendance, documents, and recruiting.",
    participants: [CLIENT.organizationName, "Factorial onboarding"],
    status: "Suggested",
  },
  {
    phase: 4,
    title: "Go-live + payroll export validation",
    description: "Train admins/managers, migrate employees, validate the first payroll extract with your provider.",
    participants: ["All pilot stakeholders"],
    status: "Suggested",
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
  const emailSubject = `${CLIENT.organizationName} — Next steps with Factorial`;
  const emailBody = `Hi Victor,\n\nWe'd like to move forward with the Factorial proposal for ${CLIENT.organizationName}.\n\nBest regards`;
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="next-steps" className="py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Next steps</h2>
        <p className="text-2xl md:text-3xl font-light mb-16 max-w-2xl">Implementation journey</p>

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
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-normal">{p.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-sm bg-primary-foreground/10 opacity-60">{p.status}</span>
                  </div>
                  <p className="text-sm opacity-70 mb-2">{p.description}</p>
                  <p className="text-xs opacity-50">Participants: {p.participants.join(", ")}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-xl md:text-2xl font-light">Ready to modernize HR for {CLIENT.organizationName}?</p>
          <p className="text-sm opacity-60 max-w-md mx-auto">
            Reference monthly estimate: {formatUSD(PRICING_TOTALS_USD.monthlyTotal)}
          </p>
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            Contact Victor Gutierrez
          </a>
          <p className="mt-12 text-xs opacity-40">Proposal prepared for {CLIENT.organizationName} — 2026</p>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;
