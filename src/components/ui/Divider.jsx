export default function Divider({ inverted = false }) {
  return (
    <div
      className={`section-divider ${inverted ? "inverted" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        role="presentation"
      >
        <path d="M0,76 C160,10 420,8 720,48 C1010,90 1240,112 1440,34 L1440,120 L0,120 Z" />
      </svg>
      <span className="shape circle" />
      <span className="shape square" />
      <span className="shape triangle" />
    </div>
  );
}
