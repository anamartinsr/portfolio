import { Linkedin } from "lucide-react";
import Title from "../../Title";
import Button from "../../ui/Button";
import Card from "./Card";
import { getLanguageContent, sharedSocialLinks } from "../../../data/content";
import { useLanguage } from "../../../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const { contact } = getLanguageContent(language);

  return (
    <section id="contact" className="py-24 bg-(--black)">
      <div className="container mx-auto px-6">
        <Title eyebrow={contact.eyebrow} text={contact.text} />

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Card />
        </div>

        <div className="flex justify-center items-center mt-12">
          <Button href={sharedSocialLinks.linkedin} icon={Linkedin}>
            {contact.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
