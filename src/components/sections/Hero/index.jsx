import TrueFocus from "./TrueFocus";
import BlurText from "./BlurText";
// import DarkVeil from "./effects/DarkVeil";
import IntroBadge from "./IntroBadge";
import ScrollDownButton from "./ScrollDownButton";
import SplitText from "./effects/SplitText";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div id="hero" className="relative h-screen">
      {/* <DarkVeil /> */}

      <div className="absolute inset-0 flex flex-col items-start justify-center">
        <IntroBadge />
        <br />
        <BlurText className="text-5xl mb-8 text-(--primary-color)" />
        {/* <TrueFocus /> */}

        <SplitText
          text="Software Developer"
          className="text-5xl font-bold text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          showCallback
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <ScrollDownButton />
      </div>
    </div>
  );
}
