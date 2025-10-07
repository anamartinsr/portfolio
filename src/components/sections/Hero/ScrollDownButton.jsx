import { ArrowDown } from "lucide-react";
import ScrollToSection from "../../../utils/scroll";

export default function ScrollDownButton() {
  return (
    <button
      onClick={() => ScrollToSection("#about")}
      className="animate-bounce text-muted-foreground transition-colors cursor-pointer"
    >
      <ArrowDown className="h-8 w-8 text-(--gray) hover:text-(--primary-color)" />
    </button>
  );
}
