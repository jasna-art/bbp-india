import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Size = "display" | "desktop" | "mobile" | "footer" | "small";
type Tone = "ink" | "canvas";

const LOGO_SIZE_CLASS: Record<Size, string> = {
  display: "w-[180px]",
  desktop: "w-[120px]",
  mobile: "w-[100px]",
  footer: "w-[110px]",
  small: "w-[80px]",
};

export function Wordmark({
  size = "desktop",
  tone = "ink",
  asLink = true,
  className,
}: {
  size?: Size;
  tone?: Tone;
  asLink?: boolean;
  className?: string;
}) {
  const inner = (
    <Image
      src="/logo.png"
      alt="BBP India"
      width={80}
      height={52}
      className={cn("h-auto", LOGO_SIZE_CLASS[size], className)}
      priority
    />
  );

  if (!asLink) return inner;

  return (
    <Link href="/" aria-label="BBP India home" className="inline-block">
      {inner}
    </Link>
  );
}
