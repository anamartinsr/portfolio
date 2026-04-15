export default function IntroBadge({ topText, bottomText }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="rounded-2xl py-2 px-4 bg-[color:var(--color-primary)]">
        <h1 className="text-[color:var(--color-hero-text)]">{topText}</h1>
      </span>

      <p className="text-[color:var(--color-hero-text)]">{bottomText}</p>
    </div>
  );
}
