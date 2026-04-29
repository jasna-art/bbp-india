export type Client = {
  name: string;
  industry: string;
  logo: string;
  isPlaceholder?: boolean;
};

export const CLIENTS: readonly Client[] = [
  {
    name: "Impex",
    industry: "Retail",
    logo: "/brand-logos/imp.png",
  },
  {
    name: "Seematti",
    industry: "Fashion",
    logo: "/brand-logos/seemattii.png",
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
    logo: "/brand-logos/nirapara.png",
  },
  {
    name: "Kalyan Hypermarket",
    industry: "Retail",
    logo: "/brand-logos/kalyanhyper.png",
  },
  {
    name: "AGP",
    industry: "Retail",
    logo: "/brand-logos/agp.png",
  },
  {
    name: "Eduport",
    industry: "Education",
    logo: "/brand-logos/eduport.png",
  },
  {
    name: "SleepSync",
    industry: "D2C",
    logo: "/brand-logos/sleepsync.png",
  },
  {
    name: "Swarnam",
    industry: "Jewellery",
    logo: "/brand-logos/swarnam.png",
  },
];
