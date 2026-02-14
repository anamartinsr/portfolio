import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialLink from "../../ui/SocialLink";

export default function CardAbout({ icon, title, text, showSocial = false }) {
  return (
    <div
      className="group relative rounded-2xl p-8 glass-card overflow-hidden
      hover:scale-105 transition-transform duration-500 ease-out
      hover:shadow-glow animate-slide-up min-h-[240px]
      flex flex-col items-center text-center"
    >
      <div
        className="top-border absolute top-0 left-0 right-0 h-1 
        bg-gradient-to-r from-primary via-accent to-primary-glow 
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 p-2 rounded-xl bg-[linear-gradient(135deg,hsla(280,80%,65%,0.1)_0%,hsla(320,85%,65%,0.1)_100%)]">
          <div className="text-(--purple-0)">{icon}</div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>

      {showSocial && (
        <div className="mt-auto pt-6 flex justify-center gap-4">
          <SocialLink
            href="https://www.instagram.com/anamartins.dev"
            Icon={FaInstagram}
          />
          <SocialLink
            href="https://www.tiktok.com/@anamartins.dev"
            Icon={FaTiktok}
          />
          <SocialLink href="https://x.com/anamartinsdev" Icon={FaXTwitter} />
        </div>
      )}
    </div>
  );
}
