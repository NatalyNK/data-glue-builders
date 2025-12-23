import { Button } from "@/components/ui/button";
import { Database, Server, BarChart3, Shield, Globe } from "lucide-react";
import { Send } from "lucide-react";

const highlights = [
  { icon: Database, text: "Microsoft SQL Server (2012–2019) и PostgreSQL" },
  { icon: Server, text: "Высоконагруженные и распределённые системы" },
  { icon: BarChart3, text: "Интеграции ERP, WMS, BI и витрин данных" },
  { icon: Shield, text: "Удалённое администрирование с SLA" },
  { icon: Globe, text: "Опыт enterprise-ритейла и логистики" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
            <span className="text-sm font-mono text-muted-foreground">dgg.one</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            <span className="text-gradient">Data Global Glue</span>
            <span className="block text-foreground mt-2 text-3xl md:text-4xl lg:text-5xl">
              администрирование и развитие корпоративных SQL-систем
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-100">
            Мы — команда инженеров данных и администраторов БД, обеспечивающая стабильную, 
            отказоустойчивую и производительную работу SQL-инфраструктур для бизнеса 
            в России и странах СНГ.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 
                  animate-fade-in-up animation-delay-${(index + 2) * 100}`}
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/90 text-left">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://t.me/dataglobalglue"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block animate-fade-in-up animation-delay-500"
          >
            <Button variant="telegram" size="xl" className="group">
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              Перейти в Telegram-чат
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
