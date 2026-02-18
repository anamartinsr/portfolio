import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Card() {
  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "martinnrs.ana@gmail.com",
      href: "mailto:martinnrs.ana@gmail.com",
      highlight: true,
    },
    {
      icon: <MessageCircle />,
      title: "LinkedIn",
      value: "linkedin.com/in/anamartinsr/",
      href: "https://linkedin.com/in/anamartinsr/",
    },
    {
      icon: <MapPin />,
      title: "Localização",
      value: "Belo Horizonte - MG, Brasil",
      description: "",
      href: null,
    },
  ];

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
        <div className="relative z-10 w-full grid md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              onClick={() => info.href && window.open(info.href, "_blank")}
              className={`
              rounded-2xl 
              p-6 glass-card 
              flex gap-4 items-start text-left
              ${info.highlight ? "md:col-span-2 border-primary/40" : ""}
              ${info.href ? "cursor-pointer" : ""}
            `}
            >
              <div className="mb-4 p-2 rounded-xl bg-[linear-gradient(135deg,hsla(280,80%,65%,0.1)_0%,hsla(320,85%,65%,0.1)_100%)]">
                <div className="text-(--purple-0)">{info.icon}</div>
              </div>

              <div>
                <h4 className="font-semibold text-lg">{info.title}</h4>

                <p className="text-sm text-muted-foreground">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
