import Link from "next/link";
import { cn } from "@/lib/cn";

export function TextCTA({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const classes = cn(
    "group inline-flex items-baseline gap-2 font-sans text-body font-semibold text-ink underline decoration-ink decoration-1 underline-offset-4 transition-colors duration-150 ease-out hover:text-muted",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  // Use a normal anchor for email and telephone links.
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  // Keep Next.js Link for internal/external web URLs.
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

