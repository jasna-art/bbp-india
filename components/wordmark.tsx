import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Size = "display" | "desktop" | "mobile" | "footer" | "small";
type Tone = "ink" | "canvas";

const LOGO_SIZE_CLASS: Record<Size, string> = {
  display: "h-[48px] w-auto",
  desktop: "h-[26px] w-auto",
  mobile: "h-[24px] w-auto",
  footer: "h-[30px] w-auto",
  small: "h-[20px] w-auto",
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
    className={cn("block object-contain", LOGO_SIZE_CLASS[size], className)}
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
