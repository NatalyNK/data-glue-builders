import { Send } from "lucide-react";
import logoImg from "@/assets/logo-dgg.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="DGG Logo" className="h-10 w-auto" />
            <div className="text-center md:text-left">
              <div className="font-semibold text-foreground">Data Global Glue</div>
              <div className="text-sm text-muted-foreground">© 2024 Все права защищены</div>
            </div>
          </div>

          {/* Domain */}
          <div className="text-sm font-mono text-muted-foreground">
            dgg.one
          </div>

          {/* Telegram Link */}
          <a
            href="https://t.me/dataGlobalGlue?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%B1%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85%2C%20%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5%20dgg.one"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Send className="w-4 h-4" />
            <span className="text-sm font-medium">Telegram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
