import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeader } from "@/components/section-header";
import { PrimaryCTA } from "@/components/primary-cta";
import { TextCTA } from "@/components/text-cta";
import { Callout } from "@/components/callout";
import { EditorialTable } from "@/components/editorial-table";
import { Closer } from "@/components/closer";
import { DIMENSIONS } from "@/lib/content/dimensions";
import { PERSONAS } from "@/lib/content/personas";
import { CLIENTS } from "@/lib/content/clients";
import { SITE_URL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "BBP India — Brand Profitability Consultancy | Brand OS™",
  description:
    "BBP is India's brand profitability consultancy. We diagnose brands with Brand OS™, our proprietary 750-question instrument, and rebuild them as operating systems for sustained margin and growth. Founded 2016. Based in Kochi.",
  alternates: { canonical: "/" },
};

const RECENT_THINKING = [
  {
    title: "Forget Sales. It's Time to Build Transactional Velocity.",
    href: "/thinking/transactional-velocity",
  },
  {
    title: "Strategic Inflection Point in the Age of AI.",
    href: "/thinking/strategic-inflection-point-ai",
  },
  {
    title:
      "The Love That Kills — How Brand Obsession Becomes the Icarus Paradox.",
    href: "/thinking/icarus-paradox",
  },
];

const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Diagnose",
    body: "Brand OS™ baseline. Six dimensions, thirty sub-metrics, 750 data points. Composite score, tier, dimension breakdown, gap analysis, prioritised roadmap. Two to four weeks.",
  },
  {
    number: "02",
    title: "Design",
    body: "Strategy, positioning, architecture, identity, experience, communication. Whatever the diagnostic surfaces as the binding constraint. Six to twelve weeks.",
  },
  {
    number: "03",
    title: "Deploy",
    body: "Implementation, measurement, iteration. We stay on the engagement until the result is in the P&L. Twelve months, typically.",
  },
];

const WHY_BBP_ROWS = [
  {
    label: "What you get",
    strategy: "A 120-slide deck.",
    agency: "A campaign and a logo.",
    bbp: "A diagnostic, a strategy, a creative system, and a result in the P&L.",
  },
  {
    label: "How they bill",
    strategy: "Hours, partners, associates.",
    agency: "Retainers, scope creep, change orders.",
    bbp: "RAAS — Result As A Service. One outcome, one price, one definition of done.",
  },
  {
    label: "Who runs it",
    strategy: "A partner you meet at kickoff and closeout.",
    agency: "An account director and a rotating creative team.",
    bbp: "A senior partner from diagnosis to deployment.",
  },
  {
    label: "The instrument",
    strategy: "Frameworks built for Fortune 500 boardrooms.",
    agency: "Awards-shelf creative built for global headquarters.",
    bbp: "Brand OS™ — built for Indian founders, CMOs, family businesses, and investors.",
  },
  {
    label: "What you measure",
    strategy: "Slides delivered.",
    agency: "Impressions, reach, awards.",
    bbp: "Composite score, margin movement, brand premium, P&L line items.",
  },
  {
    label: "What happens after",
    strategy: "They leave. You implement.",
    agency: "They keep billing. You keep approving.",
    bbp: "We stay until the result is in the P&L. Then we leave.",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.bbp-india.com/#organization",
      name: "BBP India",
      alternateName: "BBP — Brand Profitability Consultancy",
      description:
        "BBP India is a Brand Profitability, Sustenance, and Growth consultancy founded in 2016. We work with founders, CMOs, family businesses, and investors to diagnose what is broken in a brand using Brand OS, fix it through an operating-system approach, and turn brand into a measurable line item on the P&L.",
      url: "https://www.bbp-india.com/",
      logo: "https://www.bbp-india.com/logo.png",
      image: "https://www.bbp-india.com/logo.png",
      foundingDate: "2016",
      founder: [
        {
          "@type": "Person",
          name: "Ahamed Shine",
          jobTitle: "Founder",
          worksFor: {
            "@id": "https://www.bbp-india.com/#organization",
          },
        },
        {
          "@type": "Person",
          name: "Dr. Sabira Nalakath",
          worksFor: {
            "@id": "https://www.bbp-india.com/#organization",
          },
        },
      ],
      email: "hello@bbp-india.com",
      telephone: "+91-73564-44771",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 46/2978, Third Avenue, Sobha Road, Vennala",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        postalCode: "682028",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Kochi" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Chennai" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Coimbatore" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Trivandrum" },
        { "@type": "City", name: "Calicut" },
        { "@type": "AdministrativeArea", name: "South India" },
        { "@type": "Country", name: "India" },
      ],
      serviceType: [
        "Brand Strategy Consulting",
        "Brand Profitability Consulting",
        "Brand Health Diagnostics",
        "Rebranding and Repositioning",
        "Brand Identity Design",
        "D2C Brand Consulting",
        "Family Business Brand Consulting",
        "Portfolio Brand Diagnostics for Investors",
      ],
      knowsAbout: [
        "Brand profitability",
        "Brand health diagnostics",
        "Brand positioning",
        "D2C brand strategy",
        "Family business brand modernisation",
        "CAC to LTV optimisation",
        "Margin recovery through brand",
        "Brand architecture",
        "Result As A Service consulting",
      ],
      slogan:
        "We don't make brands more creative. We make them more profitable.",
      sameAs: ["https://www.linkedin.com/company/bbp-india"],
    },
    {
      "@type": "Service",
      "@id": "https://www.bbp-india.com/#brand-os",
      name: "Brand OS — Brand Operating System Diagnostic",
      alternateName: "Brand OS Diagnostic",
      provider: {
        "@id": "https://www.bbp-india.com/#organization",
      },
      description:
        "Brand OS is BBP India's proprietary brand health diagnostic. It scores brands across six dimensions — Brand Vitality, Relevance Quotient, Profitability Architecture, Experience Coherence, Growth Velocity, and Future Readiness — using thirty sub-metrics and 750 weighted questions. Output is a composite Brand Health Score from 0 to 100, a tier classification, dimension scores, sub-metric breakdowns, and a sequenced 12-month roadmap.",
      url: "https://www.bbp-india.com/brand-os",
      areaServed: "IN",
      serviceOutput:
        "Composite Brand Health Score, six dimension scores, thirty sub-metric breakdowns, prioritised 12-month roadmap",
      category: "Brand Strategy Consulting",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is BBP India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BBP India is a Brand Profitability, Sustenance, and Growth consultancy founded in Kochi in 2016. BBP works with founders, CMOs, family businesses, and investors across India to diagnose brand problems using Brand OS, a proprietary 750-question diagnostic, and fix them through an operating-system approach that ties brand directly to P&L outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "What is Brand OS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brand OS is BBP India's proprietary brand health diagnostic. It scores brands across six dimensions — Vitality, Relevance, Profitability, Experience, Growth, and Future Readiness — using thirty sub-metrics and 750 weighted questions. The output is a composite score from 0 to 100, a tier classification, and a sequenced 12-month roadmap.",
          },
        },
        {
          "@type": "Question",
          name: "How is BBP India different from a creative agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Creative agencies execute — logos, ads, content, campaigns. BBP India is a profitability consultancy: we diagnose why a brand is leaking margin, design the operating-system fix, and stay on the engagement until the result is in the P&L. We bill for outcomes, not hours, under a model called RAAS — Result As A Service.",
          },
        },
        {
          "@type": "Question",
          name: "Who does BBP India work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BBP India works with four client profiles. Founders growing revenue but losing margin. CMOs needing to defend brand spend in front of the CFO. Family businesses whose brand was built for a consumer who no longer exists. Investors needing standardised brand health scoring across portfolio companies.",
          },
        },
        {
          "@type": "Question",
          name: "Where is BBP India based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BBP India is headquartered in Kochi, Kerala, and works with brands across India — including Bangalore, Chennai, Hyderabad, Coimbatore, Mumbai, Trivandrum, and the wider South Indian market. Engagements run on a hybrid model: on-site for stakeholder workshops and creative reviews, remote for deep work.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a BBP India engagement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BBP engagements follow a three-stage model. Diagnose: 2 to 4 weeks for the Brand OS baseline. Design: 6 to 12 weeks for strategy, positioning, architecture, identity, or experience work. Deploy: typically 12 months of implementation, measurement, and iteration. We stay on the engagement until the result is in the P&L.",
          },
        },
      ],
    },
  ],
};
export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* 1. Hero */}
      <section className="container-bbp flex min-h-[80vh] flex-col justify-center pt-32 pb-24 lg:min-h-[100vh] lg:pt-40 lg:pb-32">
        <Eyebrow>India's Brand Profitability Consultancy · Est. 2016</Eyebrow>
        <h1 className="heading-serif mt-10 font-bold tracking-tight text-display lg:max-w-[18ch]">
          We don't make brands more creative. We make them more profitable.
        </h1>
        <p className="heading-serif text-lede mt-10 max-w-reading italic text-muted lg:max-w-[60ch]">
          BBP is a Profitability, Sustenance, and Growth consultancy. We work
          with founders, CMOs, family businesses, and investors to diagnose
          what's actually broken in their brand, fix it with an
          operating-system approach, and turn brand into a measurable line
          item on the P&L.
        </p>
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
          <PrimaryCTA href="/diagnostic">
            Run the Brand OS™ Diagnostic
          </PrimaryCTA>
          <TextCTA href="/connect">Or talk to us first</TextCTA>
        </div>
      </section>

      {/* 2. The premise */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The premise"
          headline={
            <>Most "brand" problems are profitability problems wearing a costume.</>
          }
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            A founder calls us because their D2C cohort retention is collapsing.
            A CMO calls because the board is questioning the brand spend. A
            family-business head calls because the next generation is losing
            relevance with the consumer their grandfather built the company
            for. An investor calls because three brands in the portfolio are
            growing revenue and shrinking margin at the same time.
          </p>
          <p className="font-sans text-body text-ink">
            These look like four different problems. They're the same problem.
            The brand isn't an operating system anymore. It's a logo, a
            campaign, a packaging refresh — disconnected from how the business
            actually makes money.
          </p>
          <p className="font-sans text-body text-ink">
            We rebuild it as a system. Six dimensions, thirty sub-metrics, one
            diagnostic, one roadmap, one accountable engagement. That's BBP.
          </p>
        </div>
      </section>

     {/* 3. Why BBP */}
<section className="container-bbp section-y">
  <SectionHeader
    eyebrow="Why BBP?"
    headline={<>You shouldn’t have to hire two firms to fix one brand.</>}
  />

  <div className="mt-16 flex max-w-reading flex-col gap-8">
    <p className="font-sans text-body text-ink">
      Most companies solving brand problems end up running two parallel
      engagements — a strategy consultancy for the rigor, a creative agency for
      the execution. The strategy deck doesn’t survive contact with the creative
      brief. The creative work drifts from the strategic intent. The seam
      between them is where the money leaks.
    </p>

    <p className="font-sans text-body font-semibold text-ink">
      BBP was built to close that seam.
    </p>
  </div>

  <div className="mt-16 overflow-x-auto border-t-hairline border-rule">
    <table className="w-full min-w-[920px] border-collapse">
      <thead>
        <tr className="border-b-hairline border-rule">
          <th
            scope="col"
            className="w-[18%] py-5 pr-6 text-left font-sans text-eyebrow uppercase text-muted"
          >
            &nbsp;
          </th>

          <th
            scope="col"
            className="w-[22%] py-5 pr-6 text-left font-sans text-eyebrow uppercase text-muted"
          >
            The Strategy Consultancy
          </th>

          <th
            scope="col"
            className="w-[22%] py-5 pr-6 text-left font-sans text-eyebrow uppercase text-muted"
          >
            The Creative Agency
          </th>

          <th
            scope="col"
            className="w-[38%] py-5 text-left font-sans text-eyebrow uppercase text-ink"
          >
            BBP
          </th>
        </tr>
      </thead>

      <tbody>
        {WHY_BBP_ROWS.map((row) => (
          <tr key={row.label} className="border-b-hairline border-rule">
            <th
              scope="row"
              className="py-5 pr-6 align-top text-left font-sans text-eyebrow uppercase text-muted"
            >
              {row.label}
            </th>

            <td className="py-5 pr-6 align-top font-sans text-small text-ink">
              {row.strategy}
            </td>

            <td className="py-5 pr-6 align-top font-sans text-small text-ink">
              {row.agency}
            </td>

            <td className="py-5 align-top font-sans text-small font-semibold text-ink">
              {row.bbp}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="mt-16 max-w-reading">
    <Eyebrow tone="muted">The integration is the point</Eyebrow>

    <div className="mt-8 flex flex-col gap-8">
      <p className="font-sans text-body text-ink">
        A consultancy without creative capability hands you a strategy your team
        can’t execute. An agency without strategic rigor hands you creative your
        CFO can’t defend. BBP does both, in one engagement, with one accountable
        partner, against one measurable outcome.
      </p>

      <p className="heading-serif text-lede italic text-muted">
        That’s not a positioning claim. It’s the operating model.
      </p>
    </div>
  </div>
</section>

      {/* 4. Brand OS™ teaser */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The instrument"
          headline={<>Brand OS™ — the operating system for your brand.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            Brand OS™ is BBP's proprietary diagnostic. It scores your brand
            across six dimensions — Vitality, Relevance, Profitability,
            Experience, Growth, and Future Readiness — using thirty sub-metrics
            and 750 questions. Every dimension is benchmarked. Every gap is
            quantified. Every recommendation is tied to a number, not an
            opinion.
          </p>
          <p className="font-sans text-body text-ink">
            We built it because we got tired of brand audits that read like
            horoscopes. You leave a Brand OS™ engagement with a composite
            score, a tier (Leader, Challenger, At Risk, In Crisis), six
            dimension scores, thirty sub-metric breakdowns, and a sequenced
            12-month roadmap. Your team can act on it on Monday.
          </p>
        </div>
        <div className="mt-16">
          <EditorialTable
            headers={["Dimension", "What it measures"]}
            rows={DIMENSIONS.map((d) => ({
              label: d.name,
              description: d.subMetricsShort,
            }))}
          />
        </div>
        <div className="mt-12">
          <TextCTA href="/brand-os">See how Brand OS™ works</TextCTA>
        </div>
      </section>

      {/* 5. Who we work with */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Who we work with"
          headline={
            <>Four kinds of people call us. Different problems. Same instrument.</>
          }
        />
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {PERSONAS.map((p) => (
            <article
              key={p.label}
              className="flex flex-col gap-6 border-t-hairline border-rule pt-8"
            >
              <Eyebrow>{p.label}</Eyebrow>
              <blockquote className="heading-serif text-lede italic text-muted">
                "{p.quote}"
              </blockquote>
              <p className="font-sans text-body text-ink">{p.body}</p>
              <div>
                <TextCTA href={p.cta.href}>{p.cta.label}</TextCTA>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. How we work / RAAS */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="How we work"
          headline={<>RAAS — Result As A Service.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            We don't bill for hours, slides, or retainers in the abstract. We
            bill for outcomes. Every BBP engagement is structured around a
            defined result — a Brand OS™ score improvement, a margin recovery,
            a category repositioning, a successful brand launch — with
            milestones, accountabilities, and a clear definition of done.
          </p>
        </div>
        <div className="mt-12">
          <Callout>
            If the result doesn't ship, the engagement isn't finished. That's
            what RAAS means.
          </Callout>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {ENGAGEMENT_STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-6">
              <span className="heading-serif text-[56px] leading-none text-muted">
                {step.number}
              </span>
              <h3 className="heading-serif text-h3 font-bold text-ink">
                {step.title}
              </h3>
              <p className="font-sans text-body text-ink">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Recent thinking */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Thinking"
          headline={<>Frameworks, essays, and field notes from the practice.</>}
          lede="Written by Ahamed Shine and the BBP team. Read in long form. Subscribe for the next one."
        />
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {RECENT_THINKING.map((essay) => (
            <article
              key={essay.href}
              className="flex flex-col gap-6 border-t-hairline border-rule pt-8"
            >
              <Eyebrow tone="muted">Essay</Eyebrow>
              <h3 className="heading-serif text-h3 font-bold text-ink">
                <Link
                  href={essay.href}
                  className="hover:text-muted transition-colors"
                >
                  {essay.title}
                </Link>
              </h3>
              <div>
                <TextCTA href={essay.href}>Read the essay</TextCTA>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <TextCTA href="/thinking">Read all essays</TextCTA>
        </div>
      </section>

      {/* 8. Selected work */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Selected work"
          headline={<>Eleven years. Sixty-plus brands. One instrument.</>}
          lede="A small selection of the brands we've worked with — across FMCG, retail, jewellery, hospitality, education, and D2C."
        />
        <ul className="mt-16 grid grid-cols-2 border-l-hairline border-t-hairline border-rule sm:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((client) => (
            <li
              key={client.name}
              className="flex aspect-[3/2] items-center justify-center border-b-hairline border-r-hairline border-rule"
            >
              <span className="heading-serif text-h4 font-bold text-ink/60">
                {client.name}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <TextCTA href="/stories">See the case work</TextCTA>
        </div>
      </section>

      {/* 9. The closer */}
      <Closer
        eyebrow="Start here"
        headline="The brand you have isn't the brand you need. We can prove it in two weeks."
        body="Run the Brand OS™ Diagnostic. Get a composite score, six dimension scores, thirty sub-metric breakdowns, and a prioritised roadmap. No retainer. No commitment beyond the diagnostic. If the score is wrong, you walk away with a free benchmark. If it's right, you have your roadmap."
        primary={{ label: "Run the Diagnostic", href: "/diagnostic" }}
        secondary={{ label: "Talk to us first", href: "/connect" }}
      />
    </main>
  );
}
