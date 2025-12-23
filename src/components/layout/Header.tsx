import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Send } from "lucide-react";
import logoImg from "@/assets/logo-dgg.png";

const navLinks = [
  { href: "#about", label: "О нас" },
  { href: "#expertise", label: "Экспертиза" },
  { href: "#cases", label: "Кейсы" },
  { href: "#pricing", label: "Стоимость" },
  { href: "#contact", label: "Контакты" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logoImg} alt="DGG Logo" className="h-10 w-auto" />
            <span className="font-semibold text-foreground hidden sm:block">
              Data Global Glue
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://t.me/dataGlobalGlue?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%B1%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85%2C%20%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5%20dgg.one"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="sm" className="gap-2">
                <Send className="w-4 h-4" />
                Telegram
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/dataGlobalGlue?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%B1%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85%2C%20%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5%20dgg.one"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button variant="telegram" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Telegram-чат
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
