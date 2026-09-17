interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  emphasis: string;
  light?: boolean;
}

/**
 * Standard heading pattern used across sections: a small eyebrow label,
 * a serif title with an italic gold emphasis word/phrase at the end.
 */
export default function SectionHeading({
  eyebrow,
  title,
  emphasis,
  light = false,
}: SectionHeadingProps) {
  return (
    <div>
      <span
        className={`text-xs tracking-[0.14em] font-medium ${
          light ? "text-gold-deep" : "text-gold-soft"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-serif font-medium leading-[1.08] text-[clamp(28px,4vw,44px)] max-w-xl ${
          light ? "text-text-dark" : "text-off-white"
        }`}
      >
        {title}{" "}
        <em className={`italic font-normal ${light ? "text-gold-deep" : "text-gold-soft"}`}>
          {emphasis}
        </em>
      </h2>
    </div>
  );
}
