/**
 * Sall Marketing — proposal numbers & company profile.
 * Sourced from discovery (Andrew) + product demo (Victor) — transcricao/reuniao.txt.
 */

export const DEFAULT_VALUES = {
  empresa: "Sall Marketing",
  legalName: "Sal Marketing Ventures",
  tagline: "Marketing team, 19 people — one platform before the next hire breaks your process.",
  location: "Georgia, USA · Remote team (Morocco & international)",
  headquarters: "Georgia, USA — US office with remote team members abroad",

  totalColaboradores: 19,
  expensesUsers: 5,
  remoteRegions: "Morocco and other countries",
  industry: "Marketing · content creation · affiliate",
  otherTools: "Go High Level (campaign KPIs) · ClickUp / Trello (projects)",
  decisionTimeline: "Beginning of next week",
  goLiveTarget: "ASAP — phased launch during onboarding (documents & time off first)",
  firstHrSoftware: true,
  noTimeTracking: true,

  clientQuote: "I like this tool very much — it's very organized and clear.",
  clientQuoteAttribution: "Rikia Jamil — Executive Assistant, Sall Marketing",
  contactRole: "Executive Assistant",
  decisionMaker: "Manager (final decision after internal review)",
  competitorNote: "Last vendor evaluated · Factorial preferred on UI and Expenses module",

  /** US package quoted on demo — 20% discount applied */
  bundleName: "US Custom Package",
  bundleModules:
    "Core · Time Off · Performance · Trainings · Engagement · Recruitment (5 jobs) · Expenses (5 users)",
  recruitmentTier: "5 Active Jobs",
  pricingJustification:
    "19 seats with 20% discount ($8/user), Recruitment, Time Off with manager approvals, Trainings for new hires, and Expenses for 5 tool/reimbursement users",

  listPricePerSeat_USD: 10,
  custoColaboradorMes_USD: 8,
  discountPercent: 20,
  seatsSubtotal_USD: 152,
  recruitmentMonthly_USD: 119,
  timeOffMonthly_USD: 100,
  expensesMonthly_USD: 69,
  mensalFactorialList_USD: 473,
  mensalFactorial_USD: 380,
  implantacaoFactorial_USD: 400,
  implantacaoNota: "$400 USD one-time · 7 hours guided onboarding · no hidden fees",
  onboardingHoras: 7,
  onboardingDias: "30–45",
  billingStartsNote: "Monthly billing starts 30–45 days after onboarding payment",

  vendedor: "Victor Gutierrez",
  cargoVendedor: "Expansion Manager · US · Factorial",
  emailVendedor: "victor.gutierrez@factorial.co",

  demoUrl:
    "https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=125471&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in",
  demoEmail: "hellen@demo2e774c9b.com",
  demoPassword: "Papapapa333!",
  demoNote: "Demo environment available — same credentials shared on the call",

  payrollPartner: "Third-party payroll / bookkeeper",
  currentTools:
    "Google Drive · Email · Google Sheets · Separate e-signature · Manual recruitment tracking",

  closingVideoId: "9mUIcLa2te8",
} as const;
