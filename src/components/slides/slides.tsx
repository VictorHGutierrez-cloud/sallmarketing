import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  Calendar,
  Check,
  ClipboardList,
  FileText,
  FolderOpen,
  Link2,
  Mail,
  PenLine,
  TrendingUp,
  UserPlus,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import factorialModulesImg from "@/assets/factorial/factorial-modules.jpg";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { DEFAULT_VALUES as d, PRICING_PLACEHOLDER } from "@/utils/constants";

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
    summary: "Sall Marketing · 19 employees · Georgia USA",
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
    summary: "5 pains · 19 employees · first HR software",
    icon: <AlertTriangle size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>What we heard</SectionLabel>
        <SlideTitle>Your challenges today</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          {d.totalColaboradores} employees · Georgia, USA · remote team abroad — still manageable today, but{" "}
          <strong className="font-bold opacity-100">scaling will make manual HR unsustainable</strong>.
        </p>
        <div className="grid grid-cols-3 gap-5">
          <FactorialCard
            icon={<FolderOpen size={22} />}
            title="Google Drive chaos"
            body="Resumes, IDs, and personal letters scattered — not organized by employee."
            impact="No per-person document vault"
          />
          <FactorialCard
            icon={<ClipboardList size={22} />}
            title="Onboarding via Drive links"
            body="SOPs and company overview sent as links — new hires can't find everything in one place."
            impact="Back-and-forth email links"
          />
          <FactorialCard
            icon={<PenLine size={22} />}
            title="Separate e-signatures"
            body="Documents signed in a standalone tool — then saved and tracked manually elsewhere."
            impact="Two systems for one hire"
          />
          <FactorialCard
            icon={<Mail size={22} />}
            title="Vacation by email"
            body="Time-off requests arrive by email — balances tracked manually in Google Sheets."
            impact="No approval workflow"
          />
          <FactorialCard
            icon={<Users size={22} />}
            title="No HR platform"
            body="First time evaluating HR software — everything runs on traditional tools today."
            impact={`${d.currentTools}`}
          />
          <FactorialCard
            icon={<TrendingUp size={22} />}
            title="Scaling risk"
            body="19 people is manageable now — but growth will make it hard to keep track of everything."
            impact="Decision target: this week"
          />
        </div>
      </div>
    ),
  },

  {
    id: "solution",
    title: "The solution",
    summary: "Starter Productivity · demo ready",
    icon: <Zap size={24} />,
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Factorial HR</SectionLabel>
        <SlideTitle light>Every challenge maps to a module</SlideTitle>
        <p className="text-[20px] font-normal text-foreground/75 mb-6">
          <strong className="font-bold text-foreground">{d.bundleName}</strong> — {d.bundleModules}
        </p>
        <div className="border border-foreground/15 bg-primary/[0.03] p-5 mb-6">
          <p className="text-[20px] font-bold text-foreground mb-1">Demo & pricing — confirmed in your session</p>
          <p className="text-[16px] font-normal text-foreground/80">{d.demoNote}</p>
        </div>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div className="grid grid-cols-2 gap-5">
            <FactorialCard
              light
              icon={<FolderOpen size={22} />}
              title="Core HR"
              body="Per-employee document vault, org chart, onboarding/offboarding workflows, and built-in e-signatures."
            />
            <FactorialCard
              light
              icon={<Calendar size={22} />}
              title="Time Off"
              body="Vacation requests with manager approval — replaces email requests and Google Sheets tracking."
            />
            <FactorialCard
              light
              icon={<Check size={22} />}
              title="Performance"
              body="One-on-one templates, manager structure, and company-wide performance visibility."
            />
            <FactorialCard
              light
              icon={<UserPlus size={22} />}
              title="Recruitment"
              body={`ATS for the full hiring pipeline — ${d.recruitmentTier} included as add-on.`}
            />
          </div>
          <ExpandableImage
            src={factorialModulesImg}
            alt="Factorial HR modules overview"
            title={d.bundleName}
            caption={`Your proposed scope · ${d.bundleModules}`}
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
    summary: "Scope defined · pricing at demo",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Your proposal</SectionLabel>
        <SlideTitle>Clear scope · pricing confirmed in demo</SlideTitle>
        <p className="text-[22px] font-normal opacity-80 mb-8">
          <strong className="font-bold">{d.bundleName}</strong> — {d.bundleModules}
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">One-time implementation</p>
            <p className="text-[48px] font-bold leading-none mb-2">{PRICING_PLACEHOLDER}</p>
            <p className="text-[20px] font-normal opacity-75 mb-4">Guided onboarding · confirmed during demo</p>
            <p className="text-[16px] font-normal opacity-60 border-t border-white/15 pt-4">{d.implantacaoNota}</p>
          </div>
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">Monthly subscription</p>
            <p className="text-[48px] font-bold leading-none mb-2">{PRICING_PLACEHOLDER}</p>
            <p className="text-[20px] font-normal opacity-75 mb-2">/ month · {d.totalColaboradores} employees</p>
            <p className="text-[18px] font-bold opacity-90">+ {d.recruitmentTier} Recruitment add-on</p>
            <p className="text-[16px] font-normal opacity-65 border-t border-white/15 pt-4 mt-4">
              {d.pricingJustification}
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 border border-white/15 bg-white/[0.03] p-6">
          {[
            { label: "Seats", value: String(d.totalColaboradores) },
            { label: "Bundle", value: d.bundleName },
            { label: "Pricing", value: "At demo" },
          ].map((row) => (
            <div key={row.label} className="text-center">
              <p className="text-[14px] font-bold uppercase tracking-widest opacity-60 mb-1">{row.label}</p>
              <p className="text-[24px] font-bold">{row.value}</p>
            </div>
          ))}
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
          {d.payrollPartner} keeps processing payroll. Factorial becomes the single place for employee documents,
          onboarding, time off, and hiring — without replacing how you run payroll today.
        </p>
        <div className="border border-white/20">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[18px] font-bold bg-white/5">
            <div className="px-6 py-4 border-b border-white/15 opacity-70">Criteria</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">Today</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">With Factorial</div>
            {[
              { c: "Employee documents", s: "Google Drive folders", f: "Per-employee vault in Core HR" },
              { c: "Onboarding", s: "Email links to Drive", f: "Structured workflows with SOPs" },
              { c: "E-signatures", s: "Separate software", f: "Built into the platform" },
              { c: "Time off", s: "Email + Google Sheets", f: "Time Off module with approvals" },
              { c: "Org chart", s: "Manual / none", f: "Auto-generated from employee data" },
              { c: "Hiring", s: "No ATS", f: "Recruitment pipeline in Factorial" },
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
    id: "next-steps",
    title: "Next steps",
    summary: "Demo · manager review · go-live next week",
    icon: <Calendar size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Next steps</SectionLabel>
        <SlideTitle>Ready to decide this week — and start next week</SlideTitle>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Product demo",
                body: "Walk through documents, onboarding, time off, performance, and recruitment — pricing confirmed live.",
              },
              {
                step: "2",
                title: "Present to your manager",
                body: "Rikia shares findings in an internal meeting — manager makes the final decision.",
              },
              {
                step: "3",
                title: "Decide & implement",
                body: `Target decision ${d.decisionTimeline.toLowerCase()} · employee go-live ${d.goLiveTarget.toLowerCase()}.`,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 border-l-4 border-primary/80 bg-white/5 border border-white/15 p-6">
                <span className="text-[32px] font-bold opacity-50 shrink-0">{item.step}</span>
                <div>
                  <p className="text-[22px] font-bold mb-1">{item.title}</p>
                  <p className="text-[18px] font-normal opacity-75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-white/20 bg-white/5 p-8 flex flex-col justify-center">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-6">Summary</p>
            <div className="space-y-5">
              <div>
                <p className="text-[16px] font-normal opacity-65">Employees</p>
                <p className="text-[40px] font-bold">{d.totalColaboradores} seats</p>
              </div>
              <div>
                <p className="text-[16px] font-normal opacity-65">Bundle</p>
                <p className="text-[28px] font-bold">{d.bundleName}</p>
              </div>
              <div className="border-t border-white/15 pt-5">
                <p className="text-[20px] font-bold">{d.vendedor}</p>
                <p className="text-[16px] font-normal opacity-75">{d.emailVendedor}</p>
              </div>
            </div>
          </div>
        </div>
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
          With <strong className="font-bold opacity-100">Factorial One</strong>, your AI business agent pulls reports
          from across the platform — employee documents, time-off balances, and onboarding status — so HR spends less
          time in spreadsheets and more time on your people.
        </p>
      </div>
    ),
  },
];
