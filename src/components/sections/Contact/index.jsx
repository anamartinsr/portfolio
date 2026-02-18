import Title from "../../Title";
import Card from "./Card";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-(--black)">
      <div className="container mx-auto px-6">
        <Title
          text="Contato"
          description="Entre em contato e vamos criar algo incrível juntos!"
        />

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Card />
        </div>
      </div>
    </section>
  );
}
