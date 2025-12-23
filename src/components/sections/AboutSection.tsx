import { Shield, Eye, TrendingDown } from "lucide-react";

const focuses = [
  { icon: Shield, title: "Долгосрочное сопровождение", description: "Надёжное партнёрство на годы" },
  { icon: Eye, title: "Проактивный мониторинг", description: "Контроль 24/7" },
  { icon: TrendingDown, title: "Предотвращение инцидентов", description: "Не реакция на сбои" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Кто мы</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Data Global Glue — это команда специалистов по администрированию и развитию 
              корпоративных баз данных. Мы работаем как внешний центр экспертизы для компаний, 
              которым важны стабильность, прозрачность и масштабируемость IT-инфраструктуры.
            </p>
          </div>

          <div className="bg-gradient-card rounded-2xl border border-border p-8 md:p-10 shadow-card mb-12">
            <p className="text-foreground/90 text-lg leading-relaxed text-center">
              Мы сопровождаем системы с объёмами данных до <span className="text-primary font-semibold">нескольких терабайт</span>, 
              десятками и сотнями баз данных, сложными интеграционными контурами 
              и требованиями к работе <span className="text-primary font-semibold">24/7</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focuses.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-secondary/30 border border-border/50 
                  hover:border-primary/30 transition-all duration-300 hover:shadow-glow/20"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 
                  group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
