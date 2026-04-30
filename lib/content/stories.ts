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
    diagnostic: `The situation we walked into.

Seematti is a brand Kerala has loved for more than a century. Founded in 1905, it has dressed three generations of brides through its flagship stores in Kottayam and Kochi. The house is unmistakably the queen of Kanjeevaram silks in the South. The fourth generation of brides was beginning to choose differently.

When the leadership came to us in 2020, the conversation was not yet about a new brand. It was about a quieter, sharper concern. The bride who would walk into Seematti five years from then would not be choosing the way her mother had. She wanted a name attributable to a person, not a department. She wanted couture, not curation. She wanted to wear a designer.

This is the silent crisis of every successful Indian retail house. The brand is loved by the previous decision-maker. It has not yet failed with the current decision-maker. By the time it does, the brand has already lost the next decade.

The brand is loved by the previous decision-maker. It has not yet failed with the current decision-maker.`,

    decision: `The brief we wrote back.

Most family businesses at this junction try one of three answers, and most of them fail. Modernise the parent and lose the customer who loves it. Discount it to chase the daughter and erode the premium. Bolt on a sub-brand that confuses both audiences. Bring in an external designer name the family will never own.

We proposed the harder fourth answer. Architect a separate brand, named for the designer, designed to live in a different price-and-occasion territory, while leaving Seematti exactly as it has always been. Different brand, different price, different occasion, different audience. Same trust, transferred.

The work was comprehensive — strategy, identity, experience, launch. We worked alongside Beena Kannan, the third-generation designer, and the Seematti leadership team across roughly nine months of pre-launch architecture before the brand had a name, a logo, or a flagship address.`,

    deployment: `What we built.

Beena Kannan Couture launched in March 2021. The unveiling was not a store opening; it was a runway show at the Bolgatty Grand Hyatt in Kochi, with three mood-boarded collections walking with fusion music. Couture brands launch with shows. Retail extensions launch with openings. The signal had to land before the brand opened its doors.

The flagship sits on the fifth floor of the Seematti building on MG Road, Kochi. Seventeen and a half thousand square feet, by-appointment, invite-only. The bride coming up from Seematti gains credibility on the couture brand. The bride coming directly to the couture brand loses nothing about Seematti. Two brands, one address, two price tiers, one customer journey.

The brand was positioned as India's first silk-led luxury couture, anchored on bridal. Each of those choices — silk-led not designer-led, bridal not lifestyle, in-flagship not stand-alone — was specific, contested, and deliberate. The reasoning lives inside the engagement. Clients see the working. Public Stories carry only the result.`,

    result: `Five years on.

The architecture has held.

Seematti has not been cannibalised. The retail business continues at scale, with a renovated Kottayam showroom in 2024 and a continuing physical footprint expansion. The bridal Kanjeevaram retail business that Seematti owned before the launch still belongs to Seematti.

Beena Kannan Couture has built a separate trade presence, a separate community, and a separate retail rhythm — inside the same building. A failed luxury sub-brand of a heritage retailer becomes indistinguishable from the parent within two years. Beena Kannan Couture did not.

And Beena Kannan herself now operates as a recognisable Indian designer name, with national trade coverage, a personal Instagram audience near 95,000, and ramp presence at industry events. That equity is architecturally separate from Seematti's equity, which means it travels — to Mumbai, Delhi, Dubai, the markets the parent could never have reached on its own name.

The work is not finished. The architecture is settled. The next surface — digital, distribution, expansion — sits on the practice's desk.`,

    learned: `The argument, in one line.

A brand that has earned a hundred years of trust is not a constraint on the next move. It is the capital the next move spends.

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
    slug: "edtech-positioning-pivot",
    category: "brand",
    industry: "Education",
    headline:
      "How an edtech brand pivoted positioning without losing its founding cohort.",
    dek: "Repositioned from skill-as-a-service to outcome-as-a-service. Held existing learners. Opened the next category.",
    engagement: "Brand · Marketing",
    duration: "9 months",
    scoreBefore: 45,
    scoreAfter: 74,
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
