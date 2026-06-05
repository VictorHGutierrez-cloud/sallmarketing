import { useNavigate } from "react-router-dom";
import { LayoutGrid } from "lucide-react";
import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import { ParticleTextEffect, SALL_MARKETING_PARTICLE_WORDS } from "@/components/ui/particle-text-effect";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="proposal-font min-h-screen bg-background text-foreground font-sans flex flex-col">
      <section className="relative w-full flex-1 min-h-[min(55vh,480px)] overflow-hidden border-b border-border/60">
        <ParticleTextEffect words={SALL_MARKETING_PARTICLE_WORDS} theme="light" className="pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background pointer-events-none" />
      </section>

      <div className="shrink-0 flex justify-center px-6 py-10 md:py-12">
        <div className="w-full max-w-md">
          <ColorfulPillCardsGrid
            theme="light"
            columns={1}
            className="border border-border/80 bg-white shadow-sm"
            items={[
              {
                name: "Access proposal",
                detail: "",
                logo: <LayoutGrid className="h-5 w-5" />,
                accent: slidePillAccent(0),
                onClick: () => navigate("/proposta"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
