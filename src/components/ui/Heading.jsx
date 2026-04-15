export default function Heading({ children, size = "md" }) {
  const sizeStyles = {
    sm: "text-base font-semibold",
    md: "text-lg font-semibold",
    lg: "text-3xl font-bold",
    xl: "text-4xl font-bold md:text-6xl",
  };

  return (
    <h3
      className={`text-[color:var(--color-text-primary)] ${sizeStyles[size]}`}
    >
      {children}
    </h3>
  );
}
