export default function AboutHeader({ badge, title, description }) {
  return (
    <div className="text-center mb-20">
      <div className="inline-block mb-4">
        <span
          className="text-sm font-semibold text-primary uppercase tracking-wider 
                           px-4 py-2 rounded-full border"
        >
          {badge}
        </span>
      </div>

      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="text-gradient">{title}</span>
      </h2>

      <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
