import { useState, useEffect } from "react";
import { BarChart3, ClipboardList, DollarSign, LineChart, Sparkles, UserPlus } from "lucide-react";
import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import { LightboxOverlay } from "@/components/ui/ImageLightbox";
import reportCostControl from "@/assets/reports/report-cost-control.png";
import reportExpenses from "@/assets/reports/report-expenses.png";
import reportRecruitment from "@/assets/reports/report-recruitment.png";
import reportRecruitmentOne from "@/assets/reports/report-recruitment-one.png";
import reportTraining from "@/assets/reports/report-training.png";
import reportPeopleManagement from "@/assets/reports/report-people-management.png";

const REPORTS = [
  {
    src: reportCostControl,
    title: "Cost control",
    category: "Workspace analytics",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    src: reportExpenses,
    title: "Expenses",
    category: "Spending · 5 users",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    src: reportRecruitment,
    title: "Recruitment funnel",
    category: "ATS pipeline",
    icon: <UserPlus className="h-5 w-5" />,
  },
  {
    src: reportRecruitmentOne,
    title: "Recruitment ONE",
    category: "Factorial One",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    src: reportTraining,
    title: "Training",
    category: "Onboarding paths",
    icon: <ClipboardList className="h-5 w-5" />,
  },
  {
    src: reportPeopleManagement,
    title: "People management",
    category: "HR analytics",
    icon: <BarChart3 className="h-5 w-5" />,
  },
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
        theme="light"
        columns={2}
        className="mt-2 max-w-[1000px]"
        items={toItems(REPORTS.slice(0, 3), 0)}
      />
      <ColorfulPillCardsGrid
        theme="light"
        columns={2}
        className="mt-4 max-w-[1000px]"
        items={toItems(REPORTS.slice(3, 6), 3)}
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
