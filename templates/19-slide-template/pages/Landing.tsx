import { useNavigate } from "react-router-dom";
import { CinematicHero } from "@/components/ui/cinematic-hero";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <CinematicHero
      brandName="FACTORIAL RH"
      tagline1="Plataforma completa"
      tagline2="para a gestão de RH."
      cardHeading="RH inteligente, integrado."
      cardDescription={
        <>
          A Factorial centraliza todos os processos de recursos humanos numa plataforma única
          com <strong>IA integrada</strong>, automação e integrações nativas com Microsoft, Primavera e sistemas de ponto.
        </>
      }
      metricValue={15}
      metricLabel="unidades de negócios"
      ctaHeading="Acessar a Proposta"
      ctaDescription="Descubra como a Factorial pode transformar a gestão de RH da Dulceria Nacional com automação, IA e integrações."
      onCtaClick={() => navigate("/proposta")}
    />
  );
};

export default Landing;
