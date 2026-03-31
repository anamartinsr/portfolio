export default function Title({
  eyebrow,
  text,
  highlight,
  description,
  align = "center",
}) {
  const isLeft = align === "left";

  return (
    <div className={`${isLeft ? "text-left" : "text-center"} mb-15`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-(--primary-color)">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mb-6 text-4xl leading-tight md:text-6xl font-bold text-[color:var(--text-primary)]">
        {text}
        {highlight ? (
          <span className="block text-(--primary-color)">{highlight}</span>
        ) : null}
      </h2>

      {description ? (
        <p
          className={`mb-10 max-w-xl text-base leading-relaxed text-[color:var(--text-muted-foreground)] md:text-lg ${
            isLeft ? "mx-0" : "mx-auto"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
