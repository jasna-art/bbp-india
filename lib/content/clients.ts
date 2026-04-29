export type Client = {
  name: string;
  industry: string;
  logo: string;
  logoScale?: number;
  isPlaceholder?: boolean;
};

export const CLIENTS: readonly Client[] = [
  {
    name: "Impex",
    industry: "Retail",
    logo: "/brand-logos/imp.png",
    logoScale: 1.3,
  },
  {
    name: "Seematti",
    industry: "Fashion",
    logo: "/brand-logos/seemattii.png",
    logoScale: 1.15,
  },
  {
    name: "BK Couture",
    industry: "Fashion",
    logo: "/brand-logos/bk-couture.png",
    logoScale: 1.15,
  },
  {
    name: "Keerthi",
    industry: "Retail",
    logo: "/brand-logos/keerthi.png",
    logoScale: 1,
  },
  {
    name: "Nirapara",
    industry: "FMCG",
    logo: "/brand-logos/nirapara.png",
    logoScale: 1.55,
  },
  {
    name: "Kalyan Hypermarket",
    industry: "Retail",
    logo: "/brand-logos/kalyanhyper.png",
    logoScale: 1.45,
  },
  {
    name: "AGP",
    industry: "Retail",
    logo: "/brand-logos/agp.png",
    logoScale: 1,
  },
  {
    name: "Eduport",
    industry: "Education",
    logo: "/brand-logos/eduport.png",
    logoScale: 1,
  },
  {
    name: "SleepSync",
    industry: "D2C",
    logo: "/brand-logos/sleepsync.png",
    logoScale: 1.3,
  },
  {
    name: "Swarnam",
    industry: "Jewellery",
    logo: "/brand-logos/swarnam.png",
    logoScale: 1.1,
  },
];
