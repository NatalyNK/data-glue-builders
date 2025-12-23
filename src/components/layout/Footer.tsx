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
            href="https://t.me/dataglobalglue"
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
