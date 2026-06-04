import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CLIENT, PRICING_ROW_USD, PRICING_TOTALS_USD } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";

const InvestmentSection = () => {
  const licenseDiscountAmount =
    PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal;
  const recruitmentDiscountAmount =
    PRICING_TOTALS_USD.recruitmentListPerMonth - PRICING_TOTALS_USD.recruitmentDiscountedSubtotal;
  const implementationDiscountAmount =
    PRICING_TOTALS_USD.implementationListOneTime - PRICING_TOTALS_USD.implementationOneTime;

  return (
    <section id="investment" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investment</h2>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-2xl">
          Commercial summary — {CLIENT.organizationName}
        </p>
        <p className="text-sm opacity-50 mb-10 max-w-xl">
          {CLIENT.seatCount} seats · ROW USD monthly · {CLIENT.licenseDiscountPercent}% nonprofit discount on licenses, recruitment, and implementation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <SummaryCard
            label="Implementation (one-time)"
            value={formatUSD(PRICING_TOTALS_USD.implementationOneTime)}
            sub={`List ${formatUSD(PRICING_TOTALS_USD.implementationListOneTime)} · −${formatUSD(implementationDiscountAmount)} nonprofit`}
            highlight
          />
          <SummaryCard label="Licenses (after discount)" value={`${formatUSD(PRICING_TOTALS_USD.licenseDiscountedSubtotal)}/mo`} />
          <SummaryCard
            label="Total subscription (monthly)"
            value={`${formatUSD(PRICING_TOTALS_USD.monthlyTotal)}/mo`}
            sub={`Recruitment included at ${formatUSD(PRICING_TOTALS_USD.recruitmentDiscountedSubtotal)}/mo after discount`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-foreground/10 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Subscription breakdown</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between opacity-60">
                <span>Bundle</span>
                <span>{PRICING_ROW_USD.bundleName}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Seats</span>
                <span>{CLIENT.seatCount}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>List price / seat / month</span>
                <span>{formatUSD(PRICING_ROW_USD.listPricePerSeatPerMonth)}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Licenses subtotal (list)</span>
                <span>{formatUSD(PRICING_TOTALS_USD.licenseListSubtotal)}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Nonprofit discount ({CLIENT.licenseDiscountPercent}%)</span>
                <span>−{formatUSD(licenseDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Licenses after discount</span>
                <span>{formatUSD(PRICING_TOTALS_USD.licenseDiscountedSubtotal)}/mo</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Recruitment list ({PRICING_ROW_USD.recruitment.tier})</span>
                <span>{formatUSD(PRICING_TOTALS_USD.recruitmentListPerMonth)}/mo</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Nonprofit discount ({CLIENT.licenseDiscountPercent}%)</span>
                <span>−{formatUSD(recruitmentDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Recruitment after discount</span>
                <span>{formatUSD(PRICING_TOTALS_USD.recruitmentDiscountedSubtotal)}/mo</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Estimated monthly total</span>
                <span>{formatUSD(PRICING_TOTALS_USD.monthlyTotal)}</span>
              </div>
            </div>
          </div>

          <div className="border border-foreground/10 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Implementation & notes</p>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between opacity-60">
                <span>List (reference)</span>
                <span>{formatUSD(PRICING_TOTALS_USD.implementationListOneTime)}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Nonprofit discount ({CLIENT.licenseDiscountPercent}%)</span>
                <span>−{formatUSD(implementationDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>One-time fee</span>
                <span>{formatUSD(PRICING_TOTALS_USD.implementationOneTime)}</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm opacity-70">
              <li>• {CLIENT.licenseDiscountPercent}% nonprofit pricing applies to this proposal’s license, recruitment, and implementation lines.</li>
              <li>• Final tax treatment and FX (USD vs EUR) are confirmed in the order form.</li>
              <li>• Payroll partner costs are separate from this subscription.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

function SummaryCard({ label, value, highlight, sub }: { label: string; value: string; highlight?: boolean; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border p-5", highlight ? "border-foreground/30 bg-foreground/5" : "border-foreground/10")}
    >
      <p className="text-xs opacity-50 mb-1">{label}</p>
      {sub && <p className="text-[10px] opacity-30 mb-1">{sub}</p>}
      <p className={cn("font-light", highlight ? "text-xl md:text-2xl" : "text-lg")}>{value}</p>
    </motion.div>
  );
}

export default InvestmentSection;
