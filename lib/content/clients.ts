export type Client = {
  name: string;
  industry: string;
  logo: string;
  isPlaceholder?: boolean;
};

export const CLIENTS: readonly Client[] = [
  {
    name: "Brand Alpha",
    industry: "FMCG",
    logo: "/brand-logos/brand-alpha.png",
  },
  {
    name: "Brand Beta",
    industry: "Jewellery",
    logo: "/brand-logos/brand-beta.png",
  },
  {
    name: "Brand Gamma",
    industry: "Hospitality",
    logo: "/brand-logos/brand-gamma.png",
  },
  {
    name: "Brand Delta",
    industry: "Education",
    logo: "/brand-logos/brand-delta.png",
  },
  {
    name: "Brand Epsilon",
    industry: "D2C",
    logo: "/brand-logos/brand-epsilon.png",
  },
  {
    name: "Brand Zeta",
    industry: "Retail",
    logo: "/brand-logos/brand-zeta.png",
  },
  {
    name: "Brand Eta",
    industry: "FMCG",
    logo: "/brand-logos/brand-eta.png",
  },
  {
    name: "Brand Theta",
    industry: "Family Business",
    logo: "/brand-logos/brand-theta.png",
  },
];
