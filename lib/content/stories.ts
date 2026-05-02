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
    slug: "sleepsync-ergonomically-engineered-sleep-system",
    category: "brand",
    industry: "D2C Sleep",
    headline:
      "How we built India's first ergonomically engineered sleep system, from scratch.",
    dek: "Sleepsync — a D2C mattress brand born inside a category that had stopped innovating. A naming, product-architecture, brand and launch engagement.",
    engagement: "Strategy · Product Architecture · Identity · Digital Experience · Launch",
    duration: "Ongoing",
    scoreBefore: 0,
    scoreAfter: 64,
    leadConsultant: "[Reserved for the BBP team]",
    isPlaceholder: false,
    sections: {
      diagnostic: `The Indian mattress industry is a curious thing. It is large — projected to cross $3 billion before the end of the decade — and yet, until very recently, it was one of the least innovative consumer categories in the country.

Most Indians were sleeping on technologies invented before they were born. Memory foam was a NASA carryover from the 1960s. Spring coils were older than that. Coir and cotton, older still. The shelves were crowded. Real product differentiation was almost absent.

When the founders came to us, they didn't want to build “another mattress brand.” They wanted to build the first Indian brand where the mattress was actually designed — not assembled from off-the-shelf foam blocks and sold on price.

They had access to manufacturing depth. They had the conviction. They didn't have a product architecture, a name, a brand, or a digital storefront.

That is where we came in.

The Indian mattress shelf had a hundred SKUs and almost no engineering. The category was waiting for a brand that took the body seriously.`,

      decision: `A mattress is the only consumer product a person uses for one-third of their life and then almost never thinks about. That fact is either a marketing problem or an engineering problem. We argued it was both.

If the brand was going to mean anything, three things had to be true on day one.

The product had to be genuinely different — engineered, not assembled. The proposition had to be ergonomic, not “comfortable” — comfort is a felt claim, ergonomics is a measurable one. And the brand had to live D2C-first, because the legacy mattress trade in India is built on margin layers a new entrant cannot afford to inherit.

We worked alongside the founding team across product architecture, naming, identity, content strategy, and the digital launch surface. The mattress had to be the hero. Everything else had to get out of its way.`,

      deployment: `Sleepsync was built as a D2C mattress brand around what we positioned as India’s first ergonomically engineered sleep system.

The product itself is anchored on TRIZEN Technology — a tri-layer construction combining three engineered components, each doing a job the others cannot. Ultraresponz latex on top for responsive comfort and breathability. Pneumatic memory foam in the middle for adaptive contouring under load. A high-resilience support base underneath to hold the structure under bodyweight without sagging or bottoming-out.

The three layers are not merely stacked. They are zoned. Different areas of the mattress carry different firmness profiles to match how the human body actually distributes weight in sleep — heavier through the hips and shoulders, lighter through the lower back and calves. This is ergonomic zoning, and it is the engineering reason a Sleepsync mattress holds spinal alignment through the night where a uniform foam slab cannot.

Around that product, we built the brand.

Naming. Sleepsync — short, owned, and pronounceable across India’s language layers. Sleep that is in sync with the body, not just on top of it.

Proposition. “Memory foam alone doesn’t guarantee spinal alignment — engineering does.” This is the line we asked the brand to live by. Every other category claim — cooling, pressure relief, durability — sits underneath it.

Identity. Restrained. Clinical without feeling cold. The visual system was designed to look more like a sleep-science brand than a furniture brand, because the closest meaningful neighbour was healthcare, not home décor.

Digital experience. A direct-to-consumer storefront engineered for a single job — explain the engineering, then sell the mattress. The site at thesleepsync.com was structured around the body, not the catalogue. A visitor learns why before they learn how much.

Range architecture. The product line was structured around a clean ladder — Sleepsync 5, Sleepsync 7, and the TRIZEN Hybrid — each occupying a distinct sleeper profile rather than a price tier. A buyer chooses by body and sleep style, not by budget bracket.

A buyer chooses by body and sleep style, not by budget bracket. That is what separates a sleep system from a mattress catalogue.`,

      result: `Sleepsync is live. The architecture is settled. The next surfaces — performance marketing, expansion of the range, the eventual experiential layer — sit on the practice's desk.

Three things make this engagement different from a typical D2C launch we are asked to run.

The product is genuinely defensible. Many D2C launches we decline are skinned versions of someone else’s contract-manufactured base. Sleepsync is not.

The category is structurally ready. Indian consumers are now researching sleep before buying mattresses, comparing materials, asking about spinal alignment. The vocabulary is in place; the brands have not caught up to it.

The D2C economics work. Cutting the legacy distributor margin lets a Sleepsync mattress carry better engineering at a more honest price than any equivalent shelf product.

We expect the brand to compound. We are watching the cohort, not the launch metrics.`,

      learned: `There is a quieter idea inside this work, and it is worth saying out loud.

For thirty years, India's mattress conversation has been about firmness. Hard versus soft. Spring versus foam. Orthopaedic versus regular. None of those are engineering claims; they are texture claims. They describe what the mattress feels like under the hand at the showroom. They do not describe what happens to a body across eight hours of sleep.

Ergonomics is the missing axis. It is the discipline of designing objects around the human body in motion — not the body at rest, not the body at the showroom, but the body across a full night cycle of sixteen-to-thirty position changes. A sleep system worth its name has to behave correctly through all of them.

That reframing — from firmness to ergonomics, from texture to engineering — is the strategic move at the heart of Sleepsync. The TRIZEN construction is the proof. The brand is the carrier.

A category does not get disrupted by a better-looking version of the same product. It gets disrupted when a new brand changes the axis the category competes on.

Sleepsync changed the axis from firmness to engineering. The mattress industry will follow, the way it always does — slowly, then all at once.

If you are sitting on a product worth engineering inside a category that has stopped engineering, the Brand OS™ Diagnostic surfaces what the brand actually needs — proposition, architecture, or distribution — before any launch capital is spent.`,
    },
  },
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
  scoreAfter: 69,
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
  slug: "keerthi-nirmal-distributor-free-fmcg-house",
  category: "brand",
  industry: "FMCG",
  headline:
    "How we helped Keerthi Nirmal turn a rice brand into a distributor-free FMCG house.",
  dek: "A 28-year-old Kerala rice mill, a multi-category brand evolution, and a direct-to-retailer architecture most FMCG houses in India are still afraid to attempt.",
  engagement: "Identity · Packaging · Marketing · Sales · Retailer Operating Design",
  duration: "Ongoing",
  scoreBefore: 52,
  scoreAfter: 71,
  leadConsultant: "Ahamed Shine & Dr. Sabira Nalakath",
  isPlaceholder: false,
  sections: {
    diagnostic: `Keerthi Nirmal has been a name on Kerala kitchen counters for nearly three decades. Founded in 1998 by Johnson Varghese, Keerthi Agro Mills built its reputation on rice — Ponni, Jaya, ASD 16, Long Grain Matta, the staples of Malayali cooking. The mill in Kalady grew quietly into one of South India's largest rice processors, and the Keerthi Nirmal name became, for an entire generation of households, simply the rice brand you trust.

When the leadership came to us, the business was thriving but the brand was constrained. Three pressures had arrived at the same time. The next generation of consumers wanted more from a kitchen-staples brand than a single category. The traditional FMCG distribution model was steadily eroding margin at every link. And the retailer — the actual person who decides what sits at eye level on the shelf — was being progressively cut out of the conversation by every distributor-led brand in the category.

The leadership had a thesis. Keerthi Nirmal could be more than a rice brand. It could be a kitchen-staples brand. And it could go to the retailer directly, bypassing the layer that had been quietly taxing the business for decades. They came to us to architect that move — strategy, identity, packaging, sales, the operational system underneath it. The work was never going to be a brand refresh. It was going to be a category re-cast and a channel rebuild at the same time.

The retailer is the person who decides what sits at eye level on the shelf. Most FMCG distribution models cut them out of the conversation entirely.`,

    decision: `Most rice brands extending into FMCG make the same mistake. They add a sugar SKU, a salt SKU, a jaggery SKU, slap the existing logo on each, and push them through the same distribution stack. The category extension is real, but the brand reads as a rice brand with adjacent products. Consumers don't move it from the rice shelf to the staples shelf in their mental category map. The expansion looks like growth on paper and reads like opportunism on the shelf.

We proposed a different sequence. Re-architect the brand first, expand the category second, rebuild the channel third. Each step was a precondition for the next. The brand had to be repositioned as a kitchen-staples house — visually, verbally, structurally — before new categories could ride on it. The category extension had to be coherent — every SKU answering the same kitchen-staple promise — before the retailer would carry the expanded range. And the retailer had to be reached directly — not through the traditional distributor stack — for the unit economics of the new model to work.

Direct-to-retailer is structurally rare in Indian FMCG. The distributor layer takes its margin in exchange for credit, last-mile logistics, and trade relationships that have been built over generations. Removing it is not a marketing decision. It is an operational rebuild. We told the leadership this in the diagnostic read-out, and we told them what it would take. They backed the work in full.`,

    deployment: `The engagement ran across five practices, each in service of the same outcome. The work is ongoing in each of them.

Identity. We rebuilt the visual brand as a kitchen-staples house, not a rice mill. The new identity carries across rice, sugar, salt, jaggery, jaggery powder, crystal salt, and pathiru podi — each SKU coherent with the others without ever looking like a line extension. On the shelf, the brand reads as one. In the catalogue, the architecture is what holds the range together.

Packaging. Every SKU was redesigned to live on a retailer's shelf, not a distributor's warehouse. Hierarchy of information, language hierarchy — Malayalam alongside English where it earns its place — shelf presence, scan-friendly category cues: each decision was made for the moment a consumer is choosing between Keerthi Nirmal and an unbranded sack of the same grain six inches away.

Marketing revamp. The communication strategy moved the brand from a single-category rice voice to a multi-category staples voice — without losing the trust that the rice brand had earned over twenty-eight years. The blog, the campaign work, the founder-led storytelling, the export communications: every layer now operates on one architecture.

Sales revamp. This was the hardest single piece of work. The sales organisation had been built for distributor handoff. We rebuilt it for direct retailer engagement — different team structure, different incentive design, different cadence, different metrics. The sales force now thinks about retailer relationships the way a distributor used to, with the brand sitting on the right side of that relationship instead of behind it.

Retailer operating model. Direct-to-retailer at scale is impossible without an operating model that replaces what the distributor used to do — order capture, credit management, route logic, and the day-to-day texture of retailer relationships. We shaped the strategy and the operating design for that layer. The client built the technology that runs it. The two pieces of work moved in step, with the brand-side architecture defining what the system needed to do before the technical build began.

Each of those choices — the staples-house repositioning, the direct-to-retailer architecture, the operational system that replaces the distributor — was specific, contested, and deliberate. The reasoning lives inside the engagement. Clients see the working. Public Stories carry only the result.`,

    result: `Keerthi Nirmal is now one of Kerala's leading direct-to-retailer FMCG brands. The brand has moved decisively past its rice-only identity. The category extension into sugar, salt, jaggery, and adjacent kitchen staples now reads as native to the brand rather than bolted on. Retailers across Kerala carry the full Keerthi Nirmal range as a single decision, not a series of separate ones.

The direct-to-retailer model is doing what it was designed to do. Margin that used to live in the distributor layer now lives inside the business — funding faster product development, more competitive consumer pricing, and the operational infrastructure that the model itself depends on. The retailer now sees the brand as a partner with a direct relationship, which has changed the terms of every conversation about shelf space, payment, and new SKU acceptance.

The export business has scaled in parallel. Keerthi Nirmal positions itself, in current trade communications, as one of the world's largest exporters of Matta rice — carrying the Kerala-staples story to the diaspora, where the brand-trust premium compounds further.

The work is not finished. The architecture is settled. The next surfaces — deeper retailer-system capability, category extensions still in pipeline, geographic expansion beyond the home state — are all in motion.`,

    learned: `The most expensive layer in Indian FMCG is the one most founders refuse to remove. The distributor takes a margin that compounds over every transaction, every year, every category extension, until the brand has paid more for distribution than it has earned in pure brand premium.

Removing that layer is not a marketing decision. It is an operating-system decision — and the brand has to be ready, the category coherent, the sales force rebuilt, and the operational architecture in place before the move is even survivable. Most FMCG houses cannot do this. The ones that can, compound permanently.

Keerthi Nirmal did. The work continues.

If your FMCG business is at this junction, channel architecture decisions like this one are some of the most consequential and least understood moves in Indian FMCG. The Brand OS™ Diagnostic surfaces whether the business is structurally ready to attempt them — and what needs to ship before the move becomes survivable.`,
  },
},
];
