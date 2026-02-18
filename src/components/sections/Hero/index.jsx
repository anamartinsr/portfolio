import TrueFocus from "./effects/TrueFocus";
import Background from "../../../assets/background.png";
import IntroBadge from "./IntroBadge";
import ScrollDownButton from "./ScrollDownButton";

export default function Hero() {
  return (
    <div id="hero" className="relative h-screen overflow-hidden">
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <IntroBadge />
        <br />
        <h1 className="text-5xl mb-8 font-bold text-(--primary-color)">
          Ana Martins
        </h1>
        <TrueFocus />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <ScrollDownButton />
      </div>
    </div>
  );
}
