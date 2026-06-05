import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  BarChart3,
  Check,
  ClipboardList,
  Clock,
  FileText,
  DollarSign,
  FolderOpen,
  Link2,
  Mail,
  PenLine,
  Sparkles,
  TrendingUp,
  UserPlus,
  Video,
  X,
  Zap,
} from "lucide-react";
import factorialModulesImg from "@/assets/factorial/factorial-modules.jpg";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { ReportsGallery } from "@/components/slides/ReportsGallery";
import { DEFAULT_VALUES as d } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[28px] tracking-[0.2em] uppercase opacity-90 mb-6 font-bold">{children}</p>
);

const SlideTitle = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <h2
    className={`text-[64px] font-bold leading-[1.12] mb-8 max-w-[1300px] ${light ? "text-foreground" : ""}`}
  >
    {children}
  </h2>
);

const FactorialCard = ({
  icon,
  title,
  body,
  impact,
  light = false,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  impact?: string;
  light?: boolean;
}) => (
  <div
    className={`border-l-4 p-6 h-full ${
      light
        ? "border-primary bg-primary/[0.04] border border-l-4 border-foreground/10"
        : "border-primary/80 bg-white/5 border border-white/15"
    }`}
  >
    <div className="flex items-start gap-4 mb-3">
      <div
        className={`shrink-0 w-10 h-10 flex items-center justify-center ${
          light ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-[22px] font-bold leading-snug ${light ? "text-foreground" : ""}`}>{title}</h3>
    </div>
    <p className={`text-[18px] font-normal leading-relaxed ${light ? "text-foreground/75" : "opacity-75"}`}>
      {body}
    </p>
    {impact && (
      <p
        className={`text-[16px] font-bold mt-4 pt-3 border-t ${
          light ? "text-primary border-foreground/10" : "opacity-90 border-white/15"
        }`}
      >
        {impact}
      </p>
    )}
  </div>
);

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Welcome",
    summary: "Sall Marketing · 19 employees · US package",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[80px] font-bold leading-[1.08] mb-6 max-w-[1400px]">{d.empresa}</h1>
        <p className="opacity-90 font-normal mb-8 text-[36px]">{d.tagline}</p>
        <blockquote className="border-l-4 border-white/40 pl-8 mb-8 max-w-[1100px]">
          <p className="text-[24px] font-normal italic opacity-90 leading-relaxed">&ldquo;{d.clientQuote}&rdquo;</p>
          <footer className="text-[18px] font-bold opacity-70 mt-3 not-italic">— {d.clientQuoteAttribution}</footer>
        </blockquote>
        <p className="opacity-75 font-normal text-[26px] max-w-[1200px]">
          {d.location} — {d.totalColaboradores} employees · {d.bundleName}
        </p>
        <div className="mt-14 flex items-center gap-5">
          <div className="w-11 h-11 border border-white/30 flex items-center justify-center bg-white/5">
            <span className="text-[20px] font-bold">F</span>
          </div>
          <div>
            <p className="opacity-90 text-[28px] font-bold">{d.vendedor}</p>
            <p className="text-[16px] font-normal opacity-75">{d.cargoVendedor}</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "challenges",
    title: "Your challenges",
    summary: "6 pains · marketing · scaling hires",
    icon: <AlertTriangle size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>What we heard</SectionLabel>
        <SlideTitle>Your challenges today</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          {d.totalColaboradores} employees · flexible remote schedules · hiring more this year —{" "}
          <strong className="font-bold opacity-100">all HR still runs on traditional tools</strong>.
        </p>
        <div className="grid grid-cols-3 gap-5">
          <FactorialCard
            icon={<FolderOpen size={22} />}
            title="Scattered employee files"
            body="Resumes, IDs, diplomas, and policies live across Google Drive — not organized per person in real time."
            impact="Opens Drive + Excel every time"
          />
          <FactorialCard
            icon={<Mail size={22} />}
            title="Recruitment in email & sheets"
            body="Jobs on LinkedIn, Indeed, and Facebook — candidates tracked manually with email and WhatsApp."
            impact="No ATS or pipeline"
          />
          <FactorialCard
            icon={<ClipboardList size={22} />}
            title="Onboarding via Drive links"
            body="IDs, bank details, conduct rules, org chart, and role guides sent link by link — painful for new hires."
            impact="Rikia: very hard, very complicated"
          />
          <FactorialCard
            icon={<PenLine size={22} />}
            title="Payslips one by one"
            body="Payroll sends a 19-page PDF — each payslip emailed individually to employees."
            impact="Not scalable"
          />
          <FactorialCard
            icon={<DollarSign size={22} />}
            title="Tool expenses untracked"
            body="AI and creative tools (Cursor, Claude, etc.) — reimbursements and invoices hard to control."
            impact={`${d.expensesUsers} people need Expenses`}
          />
          <FactorialCard
            icon={<TrendingUp size={22} />}
            title="Performance & training next"
            body="KPIs live in Go High Level — but HR wants role guides, trainings for new hires, and structure before scale."
            impact="Decision target: ${d.decisionTimeline.toLowerCase()}"
          />
        </div>
      </div>
    ),
  },

  {
    id: "solution",
    title: "The solution",
    summary: "Full US package · demo ready",
    icon: <Zap size={24} />,
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Factorial HR</SectionLabel>
        <SlideTitle light>What we showed you — mapped to your workflow</SlideTitle>
        <p className="text-[20px] font-normal text-foreground/75 mb-6">
          <strong className="font-bold text-foreground">{d.bundleName}</strong> — {d.bundleModules}
        </p>
        <div className="border border-foreground/15 bg-primary/[0.03] p-5 mb-6 flex items-center justify-between gap-6">
          <div>
            <p className="text-[20px] font-bold text-foreground mb-1">Demo environment</p>
            <p className="text-[16px] font-normal text-foreground/80">
              {d.demoEmail} · <span className="font-mono">{d.demoPassword}</span>
            </p>
          </div>
          <a
            href={d.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-primary text-primary-foreground px-6 py-3 text-[18px] font-bold hover:opacity-90"
          >
            Open demo →
          </a>
        </div>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div className="grid grid-cols-2 gap-5">
            <FactorialCard
              light
              icon={<UserPlus size={22} />}
              title="Recruitment & ATS"
              body="LinkedIn, Indeed, Glassdoor — pipeline, WhatsApp, interviews, offer letter & e-sign before onboarding."
            />
            <FactorialCard
              light
              icon={<FolderOpen size={22} />}
              title="Core HR & onboarding"
              body="Per-employee vault, role-based onboarding (directors vs creators), fillable PDFs, org chart, payslip split upload."
            />
            <FactorialCard
              light
              icon={<Clock size={22} />}
              title="Time Off"
              body="Vacation, sick leave, maternity — manager approval workflow (no time tracking needed)."
            />
            <FactorialCard
              light
              icon={<Sparkles size={22} />}
              title="Factorial One · Trainings · Expenses"
              body={`AI reports (e.g. time off), trainings for new hires, Expenses for ${d.expensesUsers} users — tool receipts & reimbursements.`}
            />
          </div>
          <ExpandableImage
            src={factorialModulesImg}
            alt="Factorial HR modules overview"
            title={d.bundleName}
            caption={`Quoted scope · ${d.discountPercent}% discount applied`}
            className="border border-foreground/15 overflow-hidden bg-background h-[260px]"
            imgClassName="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    ),
  },

  {
    id: "investment",
    title: "Your proposal",
    summary: "$400 setup · $380/mo",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Your proposal</SectionLabel>
        <SlideTitle>Transparent pricing · no hidden fees</SlideTitle>
        <p className="text-[22px] font-normal opacity-80 mb-6">
          <strong className="font-bold">{d.bundleName}</strong> — {d.discountPercent}% discount on seats (
          {formatUSD(d.custoColaboradorMes_USD)}/user vs {formatUSD(d.listPricePerSeat_USD)} list)
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">One-time implementation</p>
            <p className="text-[56px] font-bold leading-none mb-2">{formatUSD(d.implantacaoFactorial_USD)}</p>
            <p className="text-[20px] font-normal opacity-75 mb-4">
              {d.onboardingHoras} hours guided onboarding · no surprise fees
            </p>
            <p className="text-[16px] font-normal opacity-60 border-t border-white/15 pt-4">{d.implantacaoNota}</p>
          </div>
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">Monthly subscription</p>
            <p className="text-[56px] font-bold leading-none mb-2">{formatUSD(d.mensalFactorial_USD)}</p>
            <p className="text-[20px] font-normal opacity-75 mb-2">
              / month · {d.totalColaboradores} employees
            </p>
            <p className="text-[16px] font-normal opacity-70 line-through mb-1">
              List price {formatUSD(d.mensalFactorialList_USD)}/mo
            </p>
            <p className="text-[16px] font-normal opacity-65 border-t border-white/15 pt-4 mt-4">
              {d.billingStartsNote}
            </p>
          </div>
        </div>
        <div className="mt-6 border border-white/15 bg-white/[0.03] p-5">
          <p className="text-[16px] font-bold uppercase tracking-widest opacity-70 mb-3">Monthly breakdown (list)</p>
          <div className="grid grid-cols-4 gap-4 text-[16px] font-normal opacity-85">
            <div>
              <p className="opacity-60">19 × {formatUSD(d.custoColaboradorMes_USD)}</p>
              <p className="font-bold">{formatUSD(d.seatsSubtotal_USD)}</p>
            </div>
            <div>
              <p className="opacity-60">Recruitment</p>
              <p className="font-bold">{formatUSD(d.recruitmentMonthly_USD)}</p>
            </div>
            <div>
              <p className="opacity-60">Time Off</p>
              <p className="font-bold">{formatUSD(d.timeOffMonthly_USD)}</p>
            </div>
            <div>
              <p className="opacity-60">Expenses ({d.expensesUsers} users)</p>
              <p className="font-bold">{formatUSD(d.expensesMonthly_USD)}</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "how-it-fits",
    title: "How it fits",
    summary: "Payroll stays · before vs after",
    icon: <Link2 size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>How it fits</SectionLabel>
        <SlideTitle>Your payroll partner stays. HR gets a system of record.</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          {d.payrollPartner} keeps processing payroll. Factorial organizes people, hiring, documents, time off, and{" "}
          {d.expensesUsers} expense users — KPIs for campaigns stay in {d.otherTools.split("·")[0].trim()}.
        </p>
        <div className="border border-white/20">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[18px] font-bold bg-white/5">
            <div className="px-6 py-4 border-b border-white/15 opacity-70">Criteria</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">Today</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">With Factorial</div>
            {[
              { c: "Employee documents", s: "Google Drive folders", f: "Per-employee vault + e-sign" },
              { c: "Hiring", s: "Email, sheets, WhatsApp", f: "ATS + LinkedIn/Indeed + pipeline" },
              { c: "Onboarding", s: "Drive links per document", f: "Workflows by role + trainings" },
              { c: "Time off", s: "Email + Google Sheets", f: "Requests + manager approval" },
              { c: "Payslips", s: "19 individual emails", f: "Bulk upload → auto-split per employee" },
              { c: "Tool expenses", s: "Manual tracking", f: `${d.expensesUsers} users on Expenses module` },
            ].map((row, i, arr) => (
              <Fragment key={row.c}>
                <div
                  className={`px-6 py-4 flex items-center font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  {row.c}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 opacity-70 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <X size={16} className="shrink-0" /> {row.s}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <Check size={16} className="shrink-0 opacity-90" /> {row.f}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "reports",
    title: "Reports & analytics",
    summary: "6 live dashboards · click to expand",
    icon: <BarChart3 size={24} />,
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px] py-[60px]">
        <SectionLabel>Reports & analytics</SectionLabel>
        <SlideTitle light>Live dashboards — not another spreadsheet</SlideTitle>
        <p className="text-[22px] font-normal text-foreground/75 mb-8 max-w-[1100px]">
          Replace Google Sheets with real-time views — recruitment, expenses, training, and people data in one place.
          Click any report to expand.
        </p>
        <ReportsGallery />
      </div>
    ),
  },

  {
    id: "factorial-video",
    title: "Discover Factorial",
    summary: "Product overview · Factorial One AI",
    icon: <Video size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[100px] text-center">
        <SectionLabel>See it live</SectionLabel>
        <SlideTitle>Discover Factorial — built for teams like Sall Marketing</SlideTitle>
        <div className="w-[960px] h-[540px] mt-2">
          <iframe
            width="960"
            height="540"
            src={`https://www.youtube.com/embed/${d.closingVideoId}`}
            title="Discover Factorial HR Software (English)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
        <p className="mt-8 max-w-[960px] text-[20px] font-normal opacity-80 text-left border border-white/20 bg-white/5 p-6">
          With <strong className="font-bold opacity-100">Factorial One</strong>, ask for time-off reports, document
          status, or expense categories in plain language — less time in spreadsheets, more time on your people.
        </p>
      </div>
    ),
  },
];
