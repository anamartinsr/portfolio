export default function StatsGroup({ items }) {
  return (
    <div className="inline-flex items-center gap-8 glass-card rounded-full px-8 py-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{item.value}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </div>

          {index < items.length - 1 && <div className="w-px h-12 bg-border" />}
        </div>
      ))}
    </div>
  );
}
