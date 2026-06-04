import { useState, useEffect } from "react";
import { X } from "lucide-react";
import reportRotatividade from "@/assets/reports/report-rotatividade.png";
import reportDesempenho from "@/assets/reports/report-desempenho.png";
import reportAusencias from "@/assets/reports/report-ausencias.png";
import reportFuncionarios from "@/assets/reports/report-funcionarios.png";
import reportFolha from "@/assets/reports/report-folha.png";

const REPORTS = [
  { src: reportRotatividade, title: "Rotatividade e Retenção", category: "People Analytics" },
  { src: reportDesempenho, title: "Desempenho e Performance", category: "Performance" },
  { src: reportAusencias, title: "Ausências", category: "Departamento Pessoal" },
  { src: reportFuncionarios, title: "Funcionários", category: "Departamento Pessoal" },
  { src: reportFolha, title: "Gestão de Folha de Pagamento", category: "Payroll" },
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

  return (
    <>
      {/* Row 1: 3 cards */}
      <div className="grid grid-cols-3 gap-6 mt-4">
        {REPORTS.slice(0, 3).map((r, i) => (
          <ReportCard key={i} report={r} onClick={() => setOpenIdx(i)} />
        ))}
      </div>
      {/* Row 2: 2 cards centered */}
      <div className="grid grid-cols-2 gap-6 mt-6 max-w-[1100px] mx-auto w-full">
        {REPORTS.slice(3, 5).map((r, i) => (
          <ReportCard key={i + 3} report={r} onClick={() => setOpenIdx(i + 3)} />
        ))}
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-12 animate-in fade-in duration-200"
          onClick={() => setOpenIdx(null)}
        >
          <button
            className="absolute top-8 right-8 w-16 h-16 border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx(null);
            }}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <div
            className="max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={REPORTS[openIdx].src}
              alt={REPORTS[openIdx].title}
              className="max-w-full max-h-[80vh] object-contain border border-white/20 shadow-2xl"
            />
            <div className="text-center">
              <p className="text-white/60 text-[20px] tracking-[0.25em] uppercase mb-2">
                {REPORTS[openIdx].category}
              </p>
              <p className="text-white text-[36px] font-light">{REPORTS[openIdx].title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ReportCard({
  report,
  onClick,
}: {
  report: { src: string; title: string; category: string };
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group border border-foreground/15 bg-background/40 overflow-hidden text-left hover:border-foreground/40 hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden bg-foreground/5">
        <img
          src={report.src}
          alt={report.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-[18px] tracking-[0.2em] uppercase opacity-50 mb-2">{report.category}</p>
        <p className="text-[26px] font-light leading-tight">{report.title}</p>
      </div>
    </button>
  );
}
