/**
 * Sall Marketing — proposal numbers & company profile.
 * Sourced from discovery call with Rikia Jamil (transcricao/reuniao.txt).
 */

export const PRICING_PLACEHOLDER = "[A DEFINIR NA DEMO]" as const;

export const DEFAULT_VALUES = {
  empresa: "Sall Marketing",
  legalName: "Sal Marketing Ventures",
  tagline: "19 people. One platform for HR — before scale makes manual work impossible.",
  location: "Georgia, USA · Remote team (Morocco & international)",
  headquarters: "Georgia, USA — main office with remote team members abroad",

  /** Company scale (discovery call) */
  totalColaboradores: 19,
  remoteRegions: "Morocco and other countries",
  decisionTimeline: "This week",
  goLiveTarget: "Next week",
  firstHrSoftware: true,

  /** Discovery call — Rikia Jamil (Executive Assistant) */
  clientQuote: "We want to make things more smooth.",
  clientQuoteAttribution: "Rikia Jamil — Executive Assistant, Sall Marketing",
  contactRole: "Executive Assistant",
  decisionMaker: "Manager (final decision after internal review)",

  /** Factorial proposal scope — Starter Productivity + Recruitment */
  bundleName: "Starter Productivity",
  bundleModules: "Core · Time Off · Performance · Recruitment (add-on)",
  recruitmentTier: "5 Active Jobs",
  pricingJustification:
    "Affordable pack for 19 employees — documents, onboarding, time off, performance, and ATS in one platform",

  /** Pricing — confirmed during demo */
  custoColaboradorMes_USD: null as number | null,
  mensalFactorial_USD: null as number | null,
  implantacaoFactorial_USD: null as number | null,
  implantacaoNota: "Pricing confirmed during your product demo",
  onboardingHoras: null as number | null,
  onboardingDias: "30",

  vendedor: "Victor Gutierrez",
  cargoVendedor: "Expansion Manager · US · Factorial",
  emailVendedor: "victor.gutierrez@factorial.co",

  demoUrl: null as string | null,
  demoEmail: null as string | null,
  demoPassword: null as string | null,
  demoNote: "Demo credentials and pricing confirmed in your product demo",

  payrollPartner: "Third-party payroll provider",
  currentTools: "Google Drive · Email · Google Sheets · Separate e-signature tool",

  /** Closing slide — Discover Factorial HR Software (English) */
  closingVideoId: "9mUIcLa2te8",
} as const;
