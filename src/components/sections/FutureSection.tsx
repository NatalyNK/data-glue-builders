import { Sparkles, Brain, TrendingUp, Workflow, Scale } from "lucide-react";

const directions = [
  { icon: Brain, text: "AI-подходы к мониторингу и диагностике" },
  { icon: TrendingUp, text: "Предиктивная аналитика инцидентов" },
  { icon: Workflow, text: "Автоматизация ETL и data-quality" },
  { icon: Scale, text: "Масштабирование data-платформ" },
];

const FutureSection = () => {
  return (
    <section id="future" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Развитие</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Вектор развития</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data Global Glue развивает направление интеллектуальной автоматизации работы с данными
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {directions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-card border border-border
                  hover:border-primary/30 transition-all duration-300 shadow-card group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center 
                  group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground/90 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-6 rounded-xl bg-secondary/30 border border-border/50">
            <p className="text-muted-foreground">
              На текущий момент основной фокус — <span className="text-primary font-medium">профессиональное администрирование SQL-систем</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
