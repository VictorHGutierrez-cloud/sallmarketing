import { useState, useEffect } from "react";
import { BarChart3, LineChart, PieChart, Users, Wallet } from "lucide-react";
import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import { LightboxOverlay } from "@/components/ui/ImageLightbox";
import reportRotatividade from "@/assets/reports/report-rotatividade.png";
import reportDesempenho from "@/assets/reports/report-desempenho.png";
import reportAusencias from "@/assets/reports/report-ausencias.png";
import reportFuncionarios from "@/assets/reports/report-funcionarios.png";
import reportFolha from "@/assets/reports/report-folha.png";

const REPORTS = [
  { src: reportRotatividade, title: "Turnover & retention", category: "People analytics", icon: <LineChart className="h-5 w-5" /> },
  { src: reportDesempenho, title: "Performance", category: "Performance", icon: <BarChart3 className="h-5 w-5" /> },
  { src: reportAusencias, title: "Absences", category: "HR operations", icon: <PieChart className="h-5 w-5" /> },
  { src: reportFuncionarios, title: "Employees", category: "HR operations", icon: <Users className="h-5 w-5" /> },
  { src: reportFolha, title: "Payroll management", category: "Payroll", icon: <Wallet className="h-5 w-5" /> },
];

export function ReportsGallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  const openReport = openIdx !== null ? REPORTS[openIdx] : null;

  const toItems = (slice: typeof REPORTS, offset: number) =>
    slice.map((report, i) => ({
      name: report.title,
      detail: `${report.category} · Click to expand preview`,
      logo: report.icon,
      accent: slidePillAccent(offset + i),
      onClick: () => setOpenIdx(offset + i),
    }));

  return (
    <>
      <ColorfulPillCardsGrid
        title="Managerial reports"
        theme="light"
        columns={2}
        className="mt-2 max-w-[1000px]"
        items={toItems(REPORTS.slice(0, 3), 0)}
      />
      <ColorfulPillCardsGrid
        theme="light"
        columns={2}
        className="mt-4 max-w-[680px] mx-auto"
        items={toItems(REPORTS.slice(3, 5), 3)}
      />

      {openReport && (
        <LightboxOverlay
          image={{
            src: openReport.src,
            alt: openReport.title,
            title: openReport.title,
            caption: openReport.category,
          }}
          onClose={() => setOpenIdx(null)}
        />
      )}
    </>
  );
}
