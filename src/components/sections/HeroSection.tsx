import { motion } from "framer-motion";
import { CLIENT } from "@/utils/constants";

const HeroSection = () => {
  const scrollToContext = () => {
    document.getElementById("context")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-primary text-primary-foreground px-6 md:px-12 lg:px-24 pt-14"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <span className="text-sm tracking-widest uppercase opacity-60">Factorial proposal</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-3xl">
            {CLIENT.organizationName}
          </h1>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl mb-4 font-light leading-relaxed">
            HR operations for a distributed nonprofit — attendance, time off, documents, and recruitment in one place.
          </p>

          <p className="text-base opacity-60 max-w-xl mb-12 font-light leading-relaxed">
            {CLIENT.seatCount} seats · ROW USD · nonprofit pricing (licenses, recruitment & implementation)
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContext}
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
            >
              View context
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
