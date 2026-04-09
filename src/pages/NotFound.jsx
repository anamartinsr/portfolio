import { ArrowLeft, AlertTriangle } from "lucide-react";
import Button from "../components/ui/Button";
import floatingLinesBackground from "../assets/light-pillar-1775069855742.png";
import { getLanguageContent } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();
  const { notFound } = getLanguageContent(language);

  const blueprintGridStyle = {
    backgroundImage:
      "linear-gradient(to right, rgba(72, 71, 74, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(72, 71, 74, 0.05) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  };

  const scanlinesStyle = {
    background:
      "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.2) 50%)",
    backgroundSize: "100% 4px",
  };

  const glitchShadowStyle = {
    textShadow: "2px 0 #df8eff, -2px 0 #9093ff",
  };

  return (
    <section className="relative bg-[#0e0e10] text-[#f6f3f5] pb-3">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0" style={blueprintGridStyle} />
        <div className="absolute inset-0 opacity-30" style={scanlinesStyle} />
        <div className="absolute inset-0 bg-[#0e0e10]" />
        <img
          src={floatingLinesBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]">
          <h2 className="font-headline text-[30vw] font-black leading-none">
            ERROR
          </h2>
        </div>

        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[rgba(223,142,255,0.10)] blur-[120px]" />
        <div className="absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[rgba(144,147,255,0.10)] blur-[150px]" />
      </div>

      <main className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="absolute -bottom-4 right-2 z-20 rotate-2 rounded-lg border border-[rgba(72,71,74,0.15)] bg-[rgba(31,31,34,0.60)] p-3 shadow-2xl backdrop-blur-xl md:-bottom-8 md:-right-20 md:rotate-3 md:p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-(--button-text)" />
              <div className="h-2 w-2 rounded-full bg-[rgba(223,142,255,0.5)]" />
            </div>
            <div className="font-mono text-[11px] text-[rgba(223,142,255,0.8)]">
              {notFound.requestPath}
              <br />
              {notFound.statusCode}
              <br />
              {notFound.redirectHome}
            </div>
          </div>

          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden">
            <div className="relative">
              <h1
                className="font-headline text-[8rem] font-extrabold leading-none tracking-tighter text-[rgba(246,243,245,0.9)] md:text-[14rem]"
                style={glitchShadowStyle}
              >
                404
              </h1>
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 400 200"
              >
                <path
                  d="M 50 100 L 150 100 L 170 80 M 230 120 L 250 140 L 350 140"
                  fill="none"
                  stroke="#df8eff"
                  strokeWidth="0.5"
                />
                <circle cx="50" cy="100" fill="#df8eff" r="2" />
                <circle cx="350" cy="140" fill="#df8eff" r="2" />
              </svg>
            </div>

            <div className="absolute right-1/4 top-1/4 h-0.5 w-32 rotate-45 bg-[rgba(223,142,255,0.4)] blur-[1px]" />
            <div className="absolute bottom-1/3 left-1/4 h-0.5 w-48 -rotate-12 bg-[rgba(144,147,255,0.4)] blur-[1px]" />
            <div className="absolute left-10 top-1/2 h-12 w-12 rotate-12 border border-[rgba(72,71,74,0.30)]" />
          </div>
        </div>

        <div className="-mt-14 max-w-2xl space-y-4 text-center md:-mt-24">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#262528] px-4 py-1">
            <AlertTriangle className="h-4 w-4 text-(--button-text)" />

            <span className="font-light text-xs tracking-widest text-[#f6f3f5]">
              {notFound.label}
            </span>
          </div>

          <Button to="/" target="_self" icon={ArrowLeft}>
            {notFound.backButton}
          </Button>
        </div>
      </main>

      <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full">
        <div className="absolute left-8 top-8 h-12 w-12 border-l-2 border-t-2 border-[rgba(223,142,255,0.20)]" />
        <div className="absolute right-8 top-8 h-12 w-12 border-r-2 border-t-2 border-[rgba(223,142,255,0.20)]" />
        <div className="absolute bottom-8 left-8 h-12 w-12 border-b-2 border-l-2 border-[rgba(223,142,255,0.20)]" />
        <div className="absolute bottom-8 right-8 h-12 w-12 border-b-2 border-r-2 border-[rgba(223,142,255,0.20)]" />
      </div>
    </section>
  );
}
