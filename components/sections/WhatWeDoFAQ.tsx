/**
 * ============================================================
 * FILE: 03-faq-section-what-we-do.tsx
 * PURPOSE: FAQ section to add at the bottom of /what-we-do page
 *
 * DEPLOYMENT (Next.js App Router):
 *   1. Save this file as: components/sections/WhatWeDoFAQ.tsx
 *      (or wherever your section components live)
 *   2. Import in app/what-we-do/page.tsx:
 *        import { WhatWeDoFAQ } from '@/components/sections/WhatWeDoFAQ';
 *   3. Add <WhatWeDoFAQ /> at the bottom of the page,
 *      before the footer / final CTA
 *
 * IMPORTANT: This component contains BOTH:
 *   - Visible FAQ UI (with accordion behavior)
 *   - FAQ Schema.org JSON-LD (invisible, for LLMs / AI Overviews)
 *
 * The schema MUST mirror the visible questions exactly.
 * If you edit the visible questions, edit the schemaData too.
 * ============================================================
 */

import Link from 'next/link';

// ============================================================
// FAQ DATA — single source of truth for both UI and schema
// ============================================================
const FAQS = [
  {
    q: 'What does a Brand Profitability Consultancy do?',
    a: 'A Brand Profitability Consultancy diagnoses why a brand is leaking margin or stalling commercially, designs the operating-system fix across positioning, identity, experience, and channel, and stays on the engagement until the result is reflected in the P&L. Unlike a creative agency, the work is tied to financial outcomes — not awareness or sentiment metrics.',
  },
  {
    q: 'What is a brand health audit, and what does it produce?',
    a: 'A brand health audit is a structured diagnostic that scores how a brand is performing across the dimensions that determine commercial outcomes — awareness, relevance, profitability, customer experience, growth, and future readiness. BBP\'s Brand OS™ audit uses 750 weighted questions across 30 sub-metrics to produce a composite Brand Health Score from 0 to 100, a tier classification, and a prioritised 12-month action roadmap.',
  },
  {
    q: 'How long does a Brand OS™ engagement take?',
    a: 'BBP engagements follow a three-stage model. Diagnose: 2 to 4 weeks for the Brand OS™ baseline. Design: 6 to 12 weeks for strategy, positioning, architecture, identity, or experience work — whatever the diagnostic surfaces as the binding constraint. Deploy: typically 12 months of implementation, measurement, and iteration. We stay on the engagement until the result is in the P&L.',
  },
  {
    q: 'How much does a brand consultancy cost in India?',
    a: 'Brand consultancy fees in India vary by scope. A focused brand health audit typically runs ₹3 lakh to ₹8 lakh. A strategic repositioning sprint runs ₹15 lakh to ₹40 lakh. A full brand transformation programme runs ₹50 lakh and above. BBP bills under a Result As A Service (RAAS) model — engagements are structured around defined outcomes with milestones, accountabilities, and a clear definition of done.',
  },
  {
    q: 'How is a Brand Profitability Consultancy different from a creative agency?',
    a: 'A creative agency executes — logos, ads, packaging, content, campaigns. A Brand Profitability Consultancy decides what should be executed and why, then ties the outcome to a P&L line item. Most Indian brands hire creative agencies before they have a strategic and financial foundation, which is why most rebrands fail to move the needle. BBP does both — diagnostic, strategy, and execution — under one accountable engagement.',
  },
  {
    q: 'When should a family business consider rebranding?',
    a: 'A family business should consider rebranding when one of three signals appears. The next generation of consumers no longer sees themselves in the brand. Trade partners describe the brand as "trusted but tired." Sales are stable but premium pricing has eroded. The risk in rebranding a legacy brand is breaking decades of equity, so the diagnostic determines exactly which elements must evolve and which must be protected. The judgement on what to change is the work.',
  },
  {
    q: 'Why do D2C brands stop scaling at ₹50 Cr?',
    a: 'D2C brands typically stall at ₹50 Cr for three reasons. Blended CAC stops decreasing because the brand is unknown beyond the warm audience. Retention cohorts collapse because the product experience promised more than the brand experience delivered. Premium pricing power doesn\'t exist because the brand has no positioning beyond "we sell X." Brand OS™ isolates which of the three is the binding constraint before money is spent on the wrong fix.',
  },
  {
    q: 'How do you measure the ROI of brand investment?',
    a: 'BBP measures brand ROI through four financial signals tracked over 12 months: gross margin trajectory, blended CAC reduction, customer LTV growth, and revenue concentration risk. These are tied directly to the Profitability Architecture dimension of Brand OS™. If brand investment isn\'t moving these numbers, the strategy is wrong — and that\'s the consultancy\'s problem to solve, not the client\'s to absorb.',
  },
];

// ============================================================
// SCHEMA — auto-generated from FAQS array
// ============================================================
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

// ============================================================
// COMPONENT
// ============================================================
export function WhatWeDoFAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="bg-stone-950 text-stone-100 px-6 py-24 border-t border-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            FAQ
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
            What founders, CMOs, and family businesses ask before working with BBP.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-12"></div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="bg-stone-900 border border-stone-800 rounded-lg p-6 cursor-pointer group"
              >
                <summary className="font-serif text-lg font-semibold text-stone-100 list-none flex justify-between items-center">
                  <span className="pr-4">{q}</span>
                  <span className="text-amber-500 text-2xl font-light group-open:rotate-45 transition flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-stone-300 leading-relaxed mt-5 pt-5 border-t border-stone-800">
                  {a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-stone-400 mb-6">Don't see your question?</p>
            <Link
              href="/connect"
              className="inline-block border border-amber-500 text-amber-500 font-mono text-sm font-semibold tracking-wider px-8 py-4 rounded hover:bg-amber-500/10 transition"
            >
              SEND US A BRIEF →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
