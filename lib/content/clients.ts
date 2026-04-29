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
    logoScale: 1.2,
  },
  {
    name: "Seematti",
    industry: "Fashion",
    logo: "/brand-logos/seematii.png",
    logoScale: 1,
  },
  {
    name: "BK Couture",
    industry: "Fashion",
    logo: "/brand-logos/bk-couture.png",
  },
  {
    name: "Keerthi",
    industry: "Retail",
    logo: "/brand-logos/keerthi.png",
  },
  {
    name: "Nirapara",
    industry: "FMCG",
    logo: "/brand-logos/nira.png",
    logoScale: 1.15,
  },
  {
    name: "Kalyan Hypermarket",
    industry: "Retail",
    logo: "/brand-logos/kal.png",
    logoScale: 1.15,
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
    logoScale: 1.15,
  },
  {
    name: "Swarnam",
    industry: "Jewellery",
    logo: "/brand-logos/swarnam.png",
    logoScale: 1.1,
  },
];
