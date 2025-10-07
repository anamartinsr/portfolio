import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Card() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "martinnrs.ana@gmail.com",
      description: "Respondo em até 24 horas",
      href: "mailto:martinnrs.ana@gmail.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/anamartinsr/",
      description: "Vamos nos conectar",
      href: "https://linkedin.com/in/anamartinsr/",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Localização",
      value: "Brasil, Belo Horizonte, MG",
      description: "",
      href: null,
    },
  ];

  return (
    <div
      className="relative group rounded-3xl p-10 glass-card overflow-hidden 
                 hover:scale-[1.02] transition-transform duration-500 ease-out 
                 hover:shadow-glow animate-slide-up flex flex-col items-center text-center
                 w-full min-h-[480px]"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r 
                   from-primary via-accent to-primary-glow scale-x-0 
                   group-hover:scale-x-100 transition-transform duration-700 origin-left"
      />
      
      <div className="space-y-8 w-full mt-6">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            onClick={() => info.href && window.open(info.href, "_blank")}
            className={`glass-card border border-primary/20 hover:border-primary/40 
                       rounded-2xl transition-all duration-500 p-6 w-full 
                       hover:shadow-md hover:shadow-primary/10
                       ${info.href ? "cursor-pointer" : "cursor-default"}`}
          >
            <div className="flex items-center sm:items-start sm:justify-start gap-4 flex-col sm:flex-row text-center sm:text-left">
              <div className="p-4 bg-primary/10 rounded-xl flex-shrink-0 mx-auto sm:mx-0">
                {info.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg text-foreground">{info.title}</h4>
                <p className="text-primary font-medium break-words">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
