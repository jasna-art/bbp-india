export type StoryCategory =
  | "brand"
  | "marketing"
  | "growth"
  | "experience";

export type Story = {
  slug: string;
  category: StoryCategory;
  industry: string;
  headline: string;
  dek: string;
  engagement: string;
  duration: string;
  scoreBefore: number;
  scoreAfter: number;
  leadConsultant: string;
  isPlaceholder?: boolean;
  sections: {
    diagnostic: string;
    decision: string;
    deployment: string;
    result: string;
    learned: string;
  };
};

const PLACEHOLDER_SECTION =
  "Full case narrative published with the case edit.";

// NOTE: Every entry below is a layout placeholder. Industries, durations, and
// score deltas are illustrative — none represent a real BBP engagement. Replace
// each entry with editor-approved copy before shipping.
export const STORIES: readonly Story[] = [
  {
    slug: "regional-retail-modernisation",
    category: "brand",
    industry: "Textile Retail",
    headline:
      "How we launched India's first silk-led luxury couture brand.",
    dek: "Beena Kannan Couture, born inside the century-old house of Seematti — a brand-architecture engagement still in motion.",
    engagement: "Strategy · Identity · Experience · Launch",
    duration: "Ongoing since 2020",
    scoreBefore: 47,
    scoreAfter: 78,
    leadConsultant: "Ahamed Shine & Dr. Sabira Nalakath",
    isPlaceholder: false,
    sections: {
    diagnostic: `Seematti is a brand Kerala has loved for more than a century. Founded in 1905, it has dressed three generations of brides through its flagship stores in Kottayam and Kochi. The house is unmistakably the queen of Kanjeevaram silks in the South. The fourth generation of brides was beginning to choose differently.

When the leadership came to us in 2020, the conversation was not yet about a new brand. It was about a quieter, sharper concern. The bride who would walk into Seematti five years from then would not be choosing the way her mother had. She wanted a name attributable to a person, not a department. She wanted couture, not curation. She wanted to wear a designer.

This is the silent crisis of every successful Indian retail house. The brand is loved by the previous decision-maker. It has not yet failed with the current decision-maker. By the time it does, the brand has already lost the next decade.

The brand is loved by the previous decision-maker. It has not yet failed with the current decision-maker.`,

    decision: `Most family businesses at this junction try one of three answers, and most of them fail. Modernise the parent and lose the customer who loves it. Discount it to chase the daughter and erode the premium. Bolt on a sub-brand that confuses both audiences. Bring in an external designer name the family will never own.

We proposed the harder fourth answer. Architect a separate brand, named for the designer, designed to live in a different price-and-occasion territory, while leaving Seematti exactly as it has always been. Different brand, different price, different occasion, different audience. Same trust, transferred.

The work was comprehensive — strategy, identity, experience, launch. We worked alongside Beena Kannan, the third-generation designer, and the Seematti leadership team across roughly nine months of pre-launch architecture before the brand had a name, a logo, or a flagship address.`,

    deployment: `Beena Kannan Couture launched in March 2021. The unveiling was not a store opening; it was a runway show at the Bolgatty Grand Hyatt in Kochi, with three mood-boarded collections walking with fusion music. Couture brands launch with shows. Retail extensions launch with openings. The signal had to land before the brand opened its doors.

The flagship sits on the fifth floor of the Seematti building on MG Road, Kochi. Seventeen and a half thousand square feet, by-appointment, invite-only. The bride coming up from Seematti gains credibility on the couture brand. The bride coming directly to the couture brand loses nothing about Seematti. Two brands, one address, two price tiers, one customer journey.

The brand was positioned as India's first silk-led luxury couture, anchored on bridal. Each of those choices — silk-led not designer-led, bridal not lifestyle, in-flagship not stand-alone — was specific, contested, and deliberate. The reasoning lives inside the engagement. Clients see the working. Public Stories carry only the result.`,

    result: `The architecture has held.

Seematti has not been cannibalised. The retail business continues at scale, with a renovated Kottayam showroom in 2024 and a continuing physical footprint expansion. The bridal Kanjeevaram retail business that Seematti owned before the launch still belongs to Seematti.

Beena Kannan Couture has built a separate trade presence, a separate community, and a separate retail rhythm — inside the same building. A failed luxury sub-brand of a heritage retailer becomes indistinguishable from the parent within two years. Beena Kannan Couture did not.

And Beena Kannan herself now operates as a recognisable Indian designer name, with national trade coverage, a personal Instagram audience near 95,000, and ramp presence at industry events. That equity is architecturally separate from Seematti's equity, which means it travels — to Mumbai, Delhi, Dubai, the markets the parent could never have reached on its own name.

The work is not finished. The architecture is settled. The next surface — digital, distribution, expansion — sits on the practice's desk.`,

    learned: `A brand that has earned a hundred years of trust is not a constraint on the next move. It is the capital the next move spends.

Beena Kannan Couture spent that capital well. Most family businesses that arrive at this junction don't.

If your family business is at this junction, brand architecture decisions like this one are the most consequential and most often-bungled moves in family-business strategy. The Brand OS™ Diagnostic surfaces the binding constraint — relevance, profitability, or future readiness — and tells you which architecture move the business actually needs.`,
  },
},
  {
    slug: "fmcg-trade-margin-rebuild",
    category: "growth",
    industry: "FMCG",
    headline:
      "How a regional spices brand recaptured nine points of trade margin in eight months.",
    dek: "Re-engineered distribution architecture and trade incentives — without raising shelf price.",
    engagement: "Growth · Marketing",
    duration: "8 months",
    scoreBefore: 52,
    scoreAfter: 71,
    leadConsultant: "Ahamed Shine",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
    slug: "d2c-cohort-retention-recovery",
    category: "growth",
    industry: "D2C Consumer",
    headline:
      "How a D2C wellness brand turned a collapsing cohort into a compounding one.",
    dek: "Diagnosed retention as a positioning problem, not a discount problem. Rebuilt the post-purchase experience.",
    engagement: "Growth · Experience",
    duration: "10 months",
    scoreBefore: 41,
    scoreAfter: 69,
    leadConsultant: "Dr. Sabira Nalakath",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
    slug: "hospitality-service-redesign",
    category: "experience",
    industry: "Hospitality",
    headline:
      "How a heritage hotel group rebuilt its service blueprint and recovered NPS in a season.",
    dek: "Engineered the five-second moments. Rewrote the employee narrative. The brand the consumer actually receives.",
    engagement: "Experience",
    duration: "6 months",
    scoreBefore: 58,
    scoreAfter: 82,
    leadConsultant: "Dr. Sabira Nalakath",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
  slug: "eduport-third-lane-positioning",
  category: "brand",
  industry: "Education",
  headline:
    "How we positioned Eduport in a category nobody thought had room for a third brand.",
  dek: "Kerala's NEET-JEE coaching market was a duopoly — celebrity ads on one side, forty-year legacies on the other. We helped Eduport find the third lane and own it.",
  engagement: "Strategy · Positioning · Identity · Communication",
  duration: "Ongoing",
  scoreBefore: 45,
  scoreAfter: 74,
  leadConsultant: "Ahamed Shine & Dr. Sabira Nalakath",
  isPlaceholder: false,
  sections: {
    diagnostic: `Kerala's NEET-JEE coaching market is one of the most competitive in India. Roughly 50,000 students from the state attempt the medical and engineering entrance exams every year, and the sums are real — a serious aspirant's family will commit anywhere from ₹80,000 to ₹3 lakh per year to coaching. Two brands had locked the conversation between them.

On one side, Xylem Learning — Kozhikode-based, fast-growing, fronted by celebrity advertising and a decisively contemporary marketing register. On the other, Brilliant Study Centre in Pala — founded in 1984, four decades of doctors and engineers in its alumni rolls, a near-zero-marketing reputation built entirely on word of mouth. Aspirants chose between the loud one and the legacy one, and most felt their choice was already made for them by their parents' generation.

The product was real. The teaching was excellent. The technology — adaptive learning algorithms that would later become the core of Adapt — was already in development. What the brand did not have was a position in the market the consumer could see.

Aspirants chose between the loud one and the legacy one, and most felt their choice was already made for them by their parents' generation.`,

    decision: `The default move at this junction is the wrong one. Out-spend Xylem on advertising. Out-result Brilliant on legacy. Both paths are catastrophic. You don't out-spend a brand that has already raised at scale and gone celebrity. You don't out-legacy a brand that has been graduating doctors since 1984. Eduport had neither the capital to do the first nor the time to do the second.

We proposed a third path. Don't fight on either of their territories. Take a position structurally unavailable to either. Xylem's economics depend on scale — 4,000-seat lecture halls, mass live classes, standardised pacing. Brilliant Pala's reputation depends on its 40-year offline residential model. Neither can credibly offer what an aspirant in 2022 was beginning to want — a learning experience that adapts to the individual student rather than asking the student to adapt to the institution.

That gap was the position. Adaptive learning, personalised pace, individual attention — the brand promise no scale-driven competitor could make. It became the territory Eduport would own.`,

    deployment: `The positioning crystallised into one word — Adapt. We worked alongside the founding team to build the brand around it, end to end. Adapt as the proprietary technology layer. Adapt as the product promise. Adapt as the philosophical claim. The same word doing strategic, technical, and emotional work — the rare positioning device that compounds across every touchpoint.

The communication strategy positioned Eduport as Kerala's first adaptive learning NEET / JEE platform. Not the cheapest, not the largest, not the oldest. The first to teach to the student rather than to the syllabus. That single claim became the lens through which every brand asset, course launch, founder interview, and parent-facing communication was filtered.

The founder origin story — NIT alumni from struggling backgrounds building affordable coaching for the next student like themselves — became the credibility anchor. It was true, it was specific, and it answered the silent question every aspirant's parent asks: can these people be trusted with my child's future? Most edtech brands in this category lead with results. We led with the founders, because the founders were the brand's most defensible asset.

Each of those choices — the Adapt anchor, the third-lane positioning, the founder-led credibility play — was specific, contested, and deliberate. The reasoning lives inside the engagement. Clients see the working. Public Stories carry only the result.`,

    result: `Eduport is now consistently named, in independent trade coverage and aggregator listings, as one of the top three NEET-JEE coaching centres in Kerala — alongside Xylem and Brilliant Pala. That ranking, in a market where the top two had been settled for years, is the single clearest signal that the third lane was real and the brand has occupied it.

The brand has scaled across formats — online platform, residential repeater campus in Malappuram, regional offline centres — without diluting the core positioning. Adapt is now described in trade reviews as Eduport's defining feature. The AI-driven personalisation, the daily learning goals, the performance analytics, the recommended revision paths — every product capability rolls up to the single brand idea, and consumers describe the brand in the language we wrote.

The competitive landscape has shifted around the brand, and the position has held. Xylem was acquired by Physics Wallah for ₹500 crore in mid-2024, which intensified the noise on the loud side of the market. Brilliant Pala continues its quiet, results-only operation on the legacy side. Eduport's third lane has not narrowed under the pressure — it has widened, because parents of NEET / JEE aspirants are increasingly looking for exactly the position the brand owns.

The work is not finished. The brand is now extending into new geographies, new exam categories, and new product formats. The architecture holds across each of them, because the architecture was built to.`,

    learned: `In a category that looks like a duopoly, the third lane is almost always available. It is not a smaller version of either competitor's position. It is a different question entirely, asked in the language of the customer, answered with a capability the incumbents cannot copy without breaking themselves.

Eduport found that question and the answer to it. Most edtech brands at this junction would have spent themselves into the loud lane or starved themselves into the legacy lane. Eduport did neither. The brand is in the market the incumbents do not see, growing in a way they cannot replicate, on a position they do not have an answer to.

If you're entering a category that looks taken, most categories that appear locked are not. The third lane exists in almost every duopoly — but finding it requires a diagnostic that reads the incumbents' structural constraints, not just their marketing. The Brand OS™ Diagnostic is built to surface exactly this.`,
  },
},
  {
    slug: "family-business-portfolio-architecture",
    category: "brand",
    industry: "Family Business",
    headline:
      "How a third-generation textiles family rebuilt a portfolio that had grown into itself.",
    dek: "Architected master, sub, and ingredient brands so each could grow without cannibalising the others.",
    engagement: "Brand",
    duration: "12 months",
    scoreBefore: 49,
    scoreAfter: 73,
    leadConsultant: "Ahamed Shine",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
];
