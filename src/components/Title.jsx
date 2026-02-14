export default function Title({ text, description }) {
  return (
    <div className="text-center mb-15">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-(--white)">
        {text}
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
