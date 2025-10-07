export default function GlassCard({ title, text }) {
  return (
    <div className="glass-card rounded-2xl p-8 transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
        <div className="title-line" />
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
