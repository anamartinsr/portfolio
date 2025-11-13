export default function StatsGroup({ items }) {
  return (
    <div className="flex w-60 justify-center items-center glass-card rounded-full p-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              {item.label}
            </div>
          </div>

          {index < items.length - 1 && (
            <div className="hidden sm:block w-px h-10 sm:h-12 bg-border" />
          )}
        </div>
      ))}
    </div>
  );
}
