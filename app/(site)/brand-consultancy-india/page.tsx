/**
 * ============================================================
 * FILE: 02-brand-consultancy-india-page.tsx
 * ROUTE: /brand-consultancy-india
 * PURPOSE: SEO/LLM landing page targeting generic high-intent keywords
 *          ("brand consultancy India", "brand consultant Bangalore", etc.)
 *          and bridging them to the BBP "Brand Profitability" POV.
 *
 * DEPLOYMENT (Next.js App Router):
 *   1. Create folder: app/brand-consultancy-india/
 *   2. Save this file as: app/brand-consultancy-india/page.tsx
 *   3. Add to sitemap.xml
 *   4. Add link in footer (NOT main nav — keeps nav clean)
 *
 * STYLING NOTES:
 *   - Uses Tailwind utility classes matching existing site
 *   - Replace class names with your component library equivalents
 *     if site uses CSS modules or styled-components
 *   - Color tokens assumed: bg-stone-950, text-stone-100, text-amber-500
 *     etc. — adjust to match your existing design tokens
 *   - Typography: serif for headings (Playfair-style), sans for body
 *
 * SEO META:
 *   - Page metadata is in the `metadata` export below
 *   - Schema.org JSON-LD is in the schemaData object
 *   - H1 hits primary keyword: "brand consultancy in India"
 *
 * VOICE NOTES:
 *   - Matches existing site tone: declarative, no marketing fluff
 *   - Uses BBP's existing terminology: Brand OS, RAAS,
 *     "Brand Profitability Consultancy", four-ICP framework
 *   - Founder-direct quotes used as section dividers
 * ============================================================
 */

import type { Metadata } from 'next';
import Link from 'next/link';

// ============================================================
// SEO METADATA
// ============================================================
export const metadata: Metadata = {
  title: 'Brand Consultancy in India | Brand OS™ Diagnostic | BBP India',
  description:
    'BBP India is a Brand Profitability Consultancy serving founders, CMOs, family businesses, and investors across India. Diagnose your brand with Brand OS™ — 6 dimensions, 30 sub-metrics, 750 questions. Book a diagnostic.',
  keywords: [
    'brand consultancy India',
    'brand consultant Bangalore',
    'brand strategy India',
    'brand audit India',
    'brand health diagnostic',
    'brand consultancy Chennai',
    'brand consultancy Kochi',
    'rebranding India',
    'D2C brand consultant',
    'family business brand consultant',
  ],
  alternates: {
    canonical: 'https://www.bbp-india.com/brand-consultancy-india',
  },
  openGraph: {
    title: 'Brand Consultancy in India — BBP India',
    description:
      'India\'s Brand Profitability Consultancy. We diagnose what\'s broken in your brand using Brand OS™, fix it with an operating-system approach, and turn brand into a P&L line item.',
    url: 'https://www.bbp-india.com/brand-consultancy-india',
    type: 'website',
  },
};

// ============================================================
// PAGE-SPECIFIC SCHEMA.ORG DATA
// ============================================================
const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.bbp-india.com/brand-consultancy-india',
      url: 'https://www.bbp-india.com/brand-consultancy-india',
      name: 'Brand Consultancy in India | BBP India',
      isPartOf: { '@id': 'https://www.bbp-india.com/#website' },
      about: { '@id': 'https://www.bbp-india.com/#organization' },
      description:
        'BBP India is a Brand Profitability Consultancy serving founders, CMOs, family businesses, and investors across India.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bbp-india.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Brand Consultancy in India',
          item: 'https://www.bbp-india.com/brand-consultancy-india',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a brand consultancy in India actually do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'A brand consultancy diagnoses why a brand is underperforming commercially, designs the strategic and structural fix, and either executes it directly or directs a team to. The best consultancies in India treat brand as a P&L instrument — tied to margin, retention, and revenue concentration — not as a logo or a campaign. BBP India specifically operates as a Brand Profitability Consultancy: every recommendation is tied to a measurable financial outcome.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a brand consultancy and a creative agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'A creative agency executes — logos, ads, packaging, content, campaigns. A brand consultancy decides what should be executed and why — positioning, architecture, audience, narrative, pricing, portfolio. Most Indian brands hire creative agencies before they have a strategic foundation, which is why most rebrands fail to move the needle. BBP India does both: diagnostic, strategy, and execution under one accountable engagement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a brand consultancy cost in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Brand consultancy fees in India vary by scope. A focused brand health audit typically runs ₹3 lakh to ₹8 lakh. A strategic repositioning sprint runs ₹15 lakh to ₹40 lakh. A full brand transformation programme runs ₹50 lakh and above. BBP India bills under a Result As A Service (RAAS) model: every engagement is structured around a defined outcome with milestones, accountabilities, and a clear definition of done.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who should hire a brand consultancy in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Four profiles benefit most from a brand consultancy. Founders who scaled to ₹50 Cr on performance marketing and now need brand to compound the next ₹100 Cr. CMOs who need to defend brand spend with quantified outcomes. Family businesses whose brand was built for a consumer who no longer exists. Investors who need a standardised brand health view across portfolio companies. BBP India works with all four.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do most brand consultancy engagements fail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Most brand consultancy engagements fail for three reasons. The diagnostic is interview-led and subjective, so the recommendations are opinions. The strategy is delivered as a deck without an owner for execution. The metrics for success are vague (awareness, sentiment, engagement) instead of financial. BBP India built Brand OS to fix the first problem, RAAS to fix the second, and a profitability framing to fix the third.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does BBP India work with brands outside Kerala?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. BBP India is headquartered in Kochi, Kerala, but works with brands across India. Major engagements run in Bangalore, Chennai, Hyderabad, Coimbatore, Mumbai, Trivandrum, and Calicut. Engagements use a hybrid model: on-site for stakeholder workshops, immersion, and creative reviews; remote for deep work and async iteration.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Brand OS™ and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Brand OS is BBP India\'s proprietary brand health diagnostic. It scores a brand across six dimensions — Vitality, Relevance, Profitability, Experience, Growth, and Future Readiness — using thirty sub-metrics and 750 weighted questions. The output is a composite Brand Health Score from 0 to 100, a tier classification, and a sequenced 12-month roadmap. The diagnostic takes 2 to 4 weeks and is delivered as a written report plus a strategy review with the founding team.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should a D2C brand hire a brand consultancy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'A D2C brand should hire a brand consultancy when blended CAC stops decreasing despite operational optimisation, when retention cohorts start collapsing past month three, or when the founder can no longer answer the question "why does the customer buy from us instead of the alternative?" in one sentence. These are signals that the brand has stopped doing the work that paid acquisition cannot do. BBP India\'s Brand OS diagnostic isolates which of the three is the binding constraint.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a brand consultancy help a legacy family business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes — and this is one of the four core engagement types BBP India runs. Legacy family businesses face a specific problem: the brand was built for a consumer who shopped, valued, and trusted differently. The risk in modernising is breaking fifty years of equity. BBP\'s approach is to isolate exactly which elements (positioning, identity, channel mix, communication tone) need to evolve and which must be protected. The diagnostic is the same. The judgement on what to change is the work.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes BBP India different from other brand consultancies in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Three things. First, the diagnostic — Brand OS is a structured 750-question instrument, not a discovery interview, so recommendations are quantified, not assumed. Second, the framing — BBP positions brand as a profitability instrument tied to P&L outcomes, not a creative one. Third, the model — RAAS (Result As A Service) means engagements are billed for outcomes, not hours, so the consultancy stays on the engagement until the result is in the P&L.',
          },
        },
      ],
    },
  ],
};

// ============================================================
// PAGE COMPONENT
// ============================================================
export default function BrandConsultancyIndia() {
  return (
    <>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            India's Brand Profitability Consultancy · Est. 2016
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.1] mb-8">
            Brand consultancy in India — for founders, CMOs, family businesses, and investors who treat brand as a P&L line item, not a logo.
          </h1>
          <div className="w-16 h-0.5 bg-amber-500 mb-8"></div>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-6 max-w-4xl">
            BBP India is a Brand Profitability, Sustenance, and Growth consultancy. We diagnose what's actually broken in your brand using <strong className="text-stone-100">Brand OS™</strong> — a proprietary 750-question diagnostic across six dimensions and thirty sub-metrics — and fix it with an operating-system approach that ties every recommendation to a measurable financial outcome.
          </p>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-10 max-w-4xl">
            We don't bill for hours, slides, or retainers in the abstract. We bill for outcomes, under a model called <strong className="text-stone-100">RAAS — Result As A Service</strong>. If the result doesn't ship, the engagement isn't finished.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/diagnostic"
              className="bg-amber-500 text-stone-950 font-mono text-sm font-semibold tracking-wider px-8 py-4 rounded hover:bg-amber-400 transition"
            >
              RUN THE BRAND OS™ DIAGNOSTIC →
            </Link>
            <Link
              href="/connect"
              className="border border-amber-500 text-amber-500 font-mono text-sm font-semibold tracking-wider px-8 py-4 rounded hover:bg-amber-500/10 transition"
            >
              TALK TO US FIRST →
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          THE PREMISE — bridges generic search to BBP POV
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            The premise
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-4xl">
            Most "brand consultancy" searches start with a marketing problem. They almost always end at a profitability problem.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-10"></div>
          <p className="text-stone-300 text-lg leading-relaxed mb-6 max-w-4xl">
            A founder Googles "brand consultant Bangalore" because their D2C cohort retention is collapsing. A CMO searches "brand audit India" because the board is questioning the brand spend. A family-business head looks for "rebranding agency" because the next generation is losing relevance with the consumer their grandfather built the company for. An investor searches "brand strategy consultancy" because three brands in the portfolio are growing revenue and shrinking margin at the same time.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mb-6 max-w-4xl">
            These look like four different problems. They're the same problem. The brand isn't an operating system anymore. It's a logo, a campaign, a packaging refresh — disconnected from how the business actually makes money.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed max-w-4xl">
            BBP rebuilds it as a system. Six dimensions, thirty sub-metrics, one diagnostic, one roadmap, one accountable engagement.
          </p>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          SERVICES GRID — keyword-targeted service cards
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            What we do
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl">
            Strategy, identity, and growth — under one accountable engagement.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Brand Strategy & Positioning"
              body="Category definition, target audience architecture, positioning, brand narrative, and competitive differentiation. Built on consumer research and Brand OS™ diagnostic data, not slogans."
            />
            <ServiceCard
              title="Brand Health Audits"
              body="Diagnostic engagements using Brand OS™. Composite Brand Health Score, six dimension scores, thirty sub-metric breakdowns, benchmarks against category leaders, prioritised roadmap."
            />
            <ServiceCard
              title="Rebranding & Repositioning"
              body="For legacy brands losing relevance and growth-stage brands that have outgrown their original identity. Strategy-led rebrands — never decorative redesigns."
            />
            <ServiceCard
              title="Brand Identity & Design"
              body="Logo systems, visual identity, typography, packaging, brand guidelines. Designed by senior creative directors, structured by the strategy that came before it."
            />
            <ServiceCard
              title="D2C Brand Consulting"
              body="Specialised engagements for D2C brands at ₹5–50 Cr. Positioning, packaging, marketplace strategy, content systems, CAC:LTV unit economics. We understand D2C profitability, not just aesthetics."
            />
            <ServiceCard
              title="Family Business Brand Consulting"
              body="Modernising legacy brands without breaking the equity that took decades to build. Isolating which elements must evolve, which must be protected, and the sequence in which both happen."
            />
          </div>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          BRAND OS — same content as homepage, reinforced for SEO
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            The instrument
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-4xl">
            Brand OS™ — the operating system for your brand.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-10"></div>
          <p className="text-stone-300 text-lg leading-relaxed mb-12 max-w-4xl">
            Brand OS™ is BBP's proprietary diagnostic. It scores your brand across six dimensions using thirty sub-metrics and 750 weighted questions. Every dimension is benchmarked. Every gap is quantified. Every recommendation is tied to a number, not an opinion. You leave a Brand OS™ engagement with a composite score, a tier (Leader, Challenger, At Risk, In Crisis), six dimension scores, thirty sub-metric breakdowns, and a sequenced 12-month roadmap your team can act on Monday.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <StatCard number="6" label="Dimensions" />
            <StatCard number="30" label="Sub-Metrics" />
            <StatCard number="750" label="Weighted Questions" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="font-mono text-xs tracking-widest text-amber-500 uppercase py-4 pr-6">
                    Dimension
                  </th>
                  <th className="font-mono text-xs tracking-widest text-amber-500 uppercase py-4">
                    What it measures
                  </th>
                </tr>
              </thead>
              <tbody>
                <DimensionRow
                  name="Brand Vitality"
                  desc="Awareness, share of voice, search volume, media presence, community strength"
                />
                <DimensionRow
                  name="Relevance Quotient"
                  desc="Brand-market fit, trend alignment, differentiation, price premium, consideration"
                />
                <DimensionRow
                  name="Profitability Architecture"
                  desc="Margin, CAC:LTV, channel profitability, revenue concentration, brand premium value"
                />
                <DimensionRow
                  name="Experience Coherence"
                  desc="NPS, touchpoint consistency, digital quality, service quality, retail experience"
                />
                <DimensionRow
                  name="Growth Velocity"
                  desc="Revenue growth, market expansion, acquisition, innovation, retention"
                />
                <DimensionRow
                  name="Future Readiness"
                  desc="Digital maturity, AI & data readiness, talent brand, sustainability, adaptability"
                />
              </tbody>
            </table>
          </div>

          <Link
            href="/brand-os"
            className="inline-block mt-12 text-amber-500 font-mono text-sm tracking-wider hover:underline"
          >
            SEE HOW BRAND OS™ WORKS →
          </Link>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          WHO WE WORK WITH — four ICPs
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Who we work with
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl">
            Four kinds of people search for brand consultancies in India. Different problems. Same instrument.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ICPCard
              segment="Founders"
              quote="We're growing revenue but our margin is shrinking and we don't know why."
              body="You scaled to ₹50 Cr on performance marketing and product-market fit. The next ₹100 Cr needs brand. We diagnose the profitability leak, fix the positioning and pricing architecture, and rebuild the brand for compounding margin."
            />
            <ICPCard
              segment="CMOs"
              quote="I need to defend my brand spend in front of the CFO."
              body="You know brand investment matters. You also know the CFO needs proof. Brand OS™ gives you a quantified baseline, a measurable trajectory, and a board-ready narrative that ties brand to revenue and margin."
            />
            <ICPCard
              segment="Family Businesses"
              quote="Our brand was built for a consumer who doesn't exist anymore."
              body="The brand your father or grandfather built earned trust over decades. The next generation of consumers is shopping differently, valuing differently, and trusting differently. We modernise the brand without breaking the equity that took fifty years to build."
            />
            <ICPCard
              segment="Investors"
              quote="We need a brand health view across the portfolio."
              body="We run Brand OS™ across portfolio companies as a standardised diagnostic. You get comparable scores, comparable risks, and comparable upside across every brand you've backed. The closest thing to a Bloomberg terminal for brand health."
            />
          </div>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          GEOGRAPHIC COVERAGE
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Where we work
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">
            Headquartered in Kochi. Working with brands across India.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-10"></div>
          <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-4xl">
            BBP India is headquartered in Kochi, Kerala — and runs engagements across India's major brand markets. Our hybrid working model means we serve brands without compromising the seniority of the team on each engagement: on-site for stakeholder workshops, immersion, and creative reviews; remote for deep work.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              'Kochi',
              'Bangalore',
              'Chennai',
              'Hyderabad',
              'Coimbatore',
              'Mumbai',
              'Trivandrum',
              'Calicut',
              'Mysore',
              'Madurai',
              'Visakhapatnam',
            ].map((city) => (
              <span
                key={city}
                className="bg-stone-900 border border-stone-700 text-stone-300 font-mono text-sm px-4 py-2 rounded-full"
              >
                📍 {city}
              </span>
            ))}
          </div>

          <p className="text-stone-300 text-lg leading-relaxed max-w-4xl">
            We work with consumer brands across <strong className="text-stone-100">FMCG, retail, jewellery, hospitality, education, fashion, F&B, beauty, wellness, B2B services</strong>, and emerging categories like quick commerce, premium grocery, and digital-native lifestyle brands.
          </p>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          COMPARISON TABLE — LLM citation goldmine
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Why BBP
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl">
            Brand consultancy vs creative agency vs Brand Profitability Consultancy.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-10"></div>
          <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-4xl">
            The most expensive mistake Indian brands make is hiring the wrong type of partner. A creative agency cannot fix a positioning problem. A traditional consultancy cannot fix an execution problem. A Brand Profitability Consultancy is built to fix both — and tie the work to a P&L outcome. Here is how the categories actually differ.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="font-mono text-xs tracking-widest text-amber-500 uppercase py-4 pr-4">
                    What you get
                  </th>
                  <th className="font-mono text-xs tracking-widest text-amber-500 uppercase py-4 px-4">
                    Creative Agency
                  </th>
                  <th className="font-mono text-xs tracking-widest text-amber-500 uppercase py-4 px-4">
                    Traditional Consultancy
                  </th>
                  <th className="font-mono text-xs tracking-widest text-amber-500 uppercase py-4 pl-4">
                    BBP India
                  </th>
                </tr>
              </thead>
              <tbody className="text-stone-300">
                <CompareRow cells={['Quantified diagnostic', 'No', 'Sometimes', 'Yes — Brand OS™']} />
                <CompareRow cells={['Strategy & positioning', 'Light', 'Deep', 'Deep']} />
                <CompareRow cells={['Identity & design execution', 'Yes', 'Outsourced', 'Yes — in-house']} />
                <CompareRow cells={['Tied to P&L outcomes', 'No', 'Rare', 'Always']} />
                <CompareRow cells={['Senior-led engagement', 'Sometimes', 'Yes', 'Always']} />
                <CompareRow cells={['Billing model', 'Hourly / project', 'Retainer', 'RAAS — Result As A Service']} />
                <CompareRow cells={['Engagement depth', '6–12 weeks', '8–16 weeks', 'Until result is in P&L']} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          FAQ — long-tail keyword block
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            FAQ
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
            What founders ask before hiring a brand consultancy in India.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-12"></div>

          <div className="space-y-3">
            <FAQ
              q="What does a brand consultancy in India actually do?"
              a="A brand consultancy diagnoses why a brand is underperforming commercially, designs the strategic and structural fix, and either executes it directly or directs a team to. The best consultancies in India treat brand as a P&L instrument — tied to margin, retention, and revenue concentration — not as a logo or a campaign. BBP India specifically operates as a Brand Profitability Consultancy: every recommendation is tied to a measurable financial outcome."
            />
            <FAQ
              q="What is the difference between a brand consultancy and a creative agency?"
              a="A creative agency executes — logos, ads, packaging, content, campaigns. A brand consultancy decides what should be executed and why — positioning, architecture, audience, narrative, pricing, portfolio. Most Indian brands hire creative agencies before they have a strategic foundation, which is why most rebrands fail to move the needle. BBP India does both: diagnostic, strategy, and execution under one accountable engagement."
            />
            <FAQ
              q="How much does a brand consultancy cost in India?"
              a="Brand consultancy fees in India vary by scope. A focused brand health audit typically runs ₹3 lakh to ₹8 lakh. A strategic repositioning sprint runs ₹15 lakh to ₹40 lakh. A full brand transformation programme runs ₹50 lakh and above. BBP India bills under a Result As A Service (RAAS) model: every engagement is structured around a defined outcome with milestones, accountabilities, and a clear definition of done."
            />
            <FAQ
              q="Who should hire a brand consultancy in India?"
              a="Four profiles benefit most. Founders who scaled to ₹50 Cr on performance marketing and now need brand to compound the next ₹100 Cr. CMOs who need to defend brand spend with quantified outcomes. Family businesses whose brand was built for a consumer who no longer exists. Investors who need a standardised brand health view across portfolio companies. BBP India works with all four."
            />
            <FAQ
              q="Why do most brand consultancy engagements fail?"
              a="Most fail for three reasons. The diagnostic is interview-led and subjective, so the recommendations are opinions. The strategy is delivered as a deck without an owner for execution. The metrics for success are vague — awareness, sentiment, engagement — instead of financial. BBP India built Brand OS™ to fix the first problem, RAAS to fix the second, and a profitability framing to fix the third."
            />
            <FAQ
              q="Does BBP India work with brands outside Kerala?"
              a="Yes. BBP India is headquartered in Kochi but works with brands across India. Major engagements run in Bangalore, Chennai, Hyderabad, Coimbatore, Mumbai, Trivandrum, and Calicut. Engagements use a hybrid model — on-site for workshops, immersion, and creative reviews; remote for deep work and async iteration."
            />
            <FAQ
              q="What is Brand OS™ and how does it work?"
              a="Brand OS™ is BBP India's proprietary brand health diagnostic. It scores a brand across six dimensions using thirty sub-metrics and 750 weighted questions. The output is a composite Brand Health Score from 0 to 100, a tier classification (Leader, Challenger, At Risk, In Crisis), and a sequenced 12-month roadmap. The diagnostic takes 2 to 4 weeks and is delivered as a written report plus a strategy review with the founding team."
            />
            <FAQ
              q="When should a D2C brand hire a brand consultancy?"
              a="When blended CAC stops decreasing despite operational optimisation. When retention cohorts collapse past month three. When the founder can no longer answer in one sentence why the customer buys from them instead of the alternative. These are signals that the brand has stopped doing the work that paid acquisition cannot do. Brand OS™ isolates which is the binding constraint."
            />
            <FAQ
              q="Can a brand consultancy help a legacy family business?"
              a="Yes — and this is one of the four core engagement types BBP runs. Legacy family businesses face a specific problem: the brand was built for a consumer who shopped, valued, and trusted differently. The risk in modernising is breaking decades of equity. BBP's approach isolates exactly which elements need to evolve and which must be protected. The diagnostic is the same. The judgement on what to change is the work."
            />
            <FAQ
              q="What makes BBP India different from other brand consultancies?"
              a="Three things. First, the diagnostic — Brand OS™ is a structured 750-question instrument, not a discovery interview, so recommendations are quantified, not assumed. Second, the framing — BBP positions brand as a profitability instrument tied to P&L, not a creative one. Third, the model — RAAS means engagements are billed for outcomes, not hours, so we stay on the engagement until the result is in the P&L."
            />
          </div>
        </div>
      </section>

      <hr className="border-stone-800" />

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="bg-stone-950 text-stone-100 px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Start here
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">
            The brand you have isn't the brand you need. We can prove it in two weeks.
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-10"></div>
          <p className="text-stone-300 text-lg leading-relaxed mb-10">
            Run the Brand OS™ Diagnostic. Get a composite score, six dimension scores, thirty sub-metric breakdowns, and a prioritised roadmap. No retainer. No commitment beyond the diagnostic.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/diagnostic"
              className="bg-amber-500 text-stone-950 font-mono text-sm font-semibold tracking-wider px-8 py-4 rounded hover:bg-amber-400 transition"
            >
              RUN THE DIAGNOSTIC →
            </Link>
            <Link
              href="/connect"
              className="border border-amber-500 text-amber-500 font-mono text-sm font-semibold tracking-wider px-8 py-4 rounded hover:bg-amber-500/10 transition"
            >
              TALK TO US FIRST →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

function ServiceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-stone-900 border border-stone-800 rounded-lg p-7 hover:border-amber-500/30 transition">
      <h3 className="font-serif text-xl font-semibold text-stone-100 mb-3">{title}</h3>
      <p className="text-stone-400 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-stone-900 border border-amber-500/20 rounded-lg p-8 text-center">
      <div className="font-mono text-5xl font-bold text-amber-500 mb-2">{number}</div>
      <div className="font-mono text-xs tracking-widest text-stone-500 uppercase">{label}</div>
    </div>
  );
}

function DimensionRow({ name, desc }: { name: string; desc: string }) {
  return (
    <tr className="border-b border-stone-800">
      <td className="py-5 pr-6 font-medium text-stone-100">{name}</td>
      <td className="py-5 text-stone-400 text-sm">{desc}</td>
    </tr>
  );
}

function ICPCard({
  segment,
  quote,
  body,
}: {
  segment: string;
  quote: string;
  body: string;
}) {
  return (
    <div className="bg-stone-900 border border-stone-800 rounded-lg p-8">
      <div className="font-mono text-xs tracking-widest text-amber-500 uppercase mb-4">
        {segment}
      </div>
      <blockquote className="font-serif text-xl text-stone-100 italic mb-5 border-l-2 border-amber-500 pl-5">
        "{quote}"
      </blockquote>
      <p className="text-stone-400 leading-relaxed">{body}</p>
    </div>
  );
}

function CompareRow({ cells }: { cells: string[] }) {
  return (
    <tr className="border-b border-stone-800">
      {cells.map((cell, i) => (
        <td
          key={i}
          className={`py-4 ${i === 0 ? 'pr-4 text-stone-100 font-medium' : 'px-4'} ${
            i === cells.length - 1 ? 'pl-4 text-amber-500/90' : ''
          }`}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-stone-900 border border-stone-800 rounded-lg p-6 cursor-pointer group">
      <summary className="font-serif text-lg font-semibold text-stone-100 list-none flex justify-between items-center">
        <span>{q}</span>
        <span className="text-amber-500 text-2xl font-light group-open:rotate-45 transition">+</span>
      </summary>
      <p className="text-stone-300 leading-relaxed mt-5 pt-5 border-t border-stone-800">{a}</p>
    </details>
  );
}
