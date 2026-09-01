import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { TextCTA } from "@/components/text-cta";
import { DummyImage } from "@/components/dummy-image";
import { VAULT_ITEMS } from "@/lib/content/vault";

export const metadata: Metadata = {
  title: "The BBP Vault — Visual Archive",
  description:
    "Selected design work, identity systems, and packaging from eleven years of BBP engagements and ventures.",
  alternates: { canonical: "/vault" },
};

export default function VaultPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Vault"
        headline="The visual archive of eleven years."
        sub="Selected design work, identity systems, packaging, and visual experiments from across BBP's case work and ventures. Curated rather than complete. Updated quarterly."
      />

      {/* Image grid */}
      <section className="container-bbp section-y">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VAULT_ITEMS.map((item) => (
            <figure key={item.slug} className="flex flex-col gap-3">
              <DummyImage
                aspect="square"
                label={item.brand}
                caption={`${item.engagement} · ${item.year}`}
              />
              <figcaption className="font-sans text-small text-muted">
                {item.brand} · {item.engagement} · {item.year}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* The fish, retired */}
      
    </main>
  );
}
