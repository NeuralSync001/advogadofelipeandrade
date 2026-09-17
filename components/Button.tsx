import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  light?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "ghost",
  light = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-sm border transition-colors duration-300 whitespace-nowrap";

  const styles =
    variant === "solid"
      ? "bg-gold border-gold text-ink-black hover:bg-gold-soft hover:border-gold-soft"
      : light
      ? "bg-transparent border-line-light text-text-dark hover:border-text-dark"
      : "bg-transparent border-goldline text-off-white hover:border-off-white";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
