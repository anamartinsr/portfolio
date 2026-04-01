import { ArrowDown } from "lucide-react";
import ScrollToSection from "../../../utils/scroll";

export default function ScrollDownButton() {
  return (
    <button
      onClick={() => ScrollToSection("#about")}
      className="animate-bounce transition-colors cursor-pointer"
    >
      <ArrowDown className="h-5 text-[color:var(--hero-arrow)] hover:text-[color:var(--hero-arrow)]" />
    </button>
  );
}
