import { Workflow, ArrowRightLeft, Radio, Layers, BarChart3, Search } from "lucide-react";

const integrations = [
  { icon: ArrowRightLeft, text: "Интеграции 1С ↔ SQL ↔ WMS ↔ BI" },
  { icon: Radio, text: "Обмены через Kafka, API, SSIS" },
  { icon: Workflow, text: "Контроль CDC-процессов" },
  { icon: Layers, text: "ETL и витрины данных" },
  { icon: BarChart3, text: "BI-витрины и аналитика" },
  { icon: Search, text: "Мониторинг и контроль качества данных" },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Workflow className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Интеграции</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Интеграции и data-контуры</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {integrations.map((item, index) => (
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

          <div className="bg-secondary/30 rounded-xl border border-border/50 p-6 flex items-start gap-4">
            <Search className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-foreground/80 leading-relaxed">
              Мы работаем даже с системами без документации — через аудит, 
              reverse-engineering и восстановление логики данных.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
