import TrueFocus from "./TrueFocus";
import BlurText from "./BlurText";
import DarkVeil from "./effects/DarkVeil";
import IntroBadge from "./IntroBadge";
import ScrollDownButton from "./ScrollDownButton";

export default function Hero() {
  return (
    <div id="hero" className="relative h-screen">
      <DarkVeil />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <IntroBadge />
        <br />
        <BlurText className="text-5xl mb-8 text-(--primary-color)" />
        <TrueFocus />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <ScrollDownButton />
      </div>
    </div>
  );
}
