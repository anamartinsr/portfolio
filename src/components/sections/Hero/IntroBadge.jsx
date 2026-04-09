export default function IntroBadge({ topText, bottomText }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="rounded-2xl py-2 px-4 bg-(--primary-color)">
        <h1 className="text-[color:var(--hero-text)]">{topText}</h1>
      </span>

      <p className="text-[color:var(--hero-text)]">{bottomText}</p>
    </div>
  );
}
