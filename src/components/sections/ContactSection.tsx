import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Контакты</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Связаться с нами</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Мы открыты к диалогу и обсуждению задач
          </p>

          <a
            href="https://t.me/dataglobalglue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="telegram" size="xl" className="group">
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              Перейти в Telegram-чат Data Global Glue
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
