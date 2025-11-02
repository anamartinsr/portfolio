export default function StatsGroup({ items }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 glass-card rounded-full px-6 sm:px-8 py-3 sm:py-4">
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
