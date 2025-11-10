import Card from "./Card";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Vamos Conversar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Card />
        </div>
      </div>
    </section>
  );
}
