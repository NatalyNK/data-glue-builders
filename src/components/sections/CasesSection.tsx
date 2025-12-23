import { Building2, Truck, BarChart3, Server, Database, Zap, TrendingUp, Calendar } from "lucide-react";

const cases = [
  {
    title: "Крупный ритейл Казахстана",
    icon: Building2,
    highlights: [
      "Сопровождение высоконагруженной SQL-инфраструктуры",
      "Десятки серверов и более 150 БД",
      "Интеграция ERP, WMS и BI",
      "Снижение инцидентов и простоев",
      "Долгосрочное сопровождение (6+ лет)",
    ],
    stats: [
      { value: "150+", label: "БД" },
      { value: "6+", label: "лет" },
    ],
  },
  {
    title: "Логистика и WMS",
    icon: Truck,
    highlights: [
      "Базы данных до 1.5 ТБ",
      "Интеграции через Kafka",
      "Оптимизация обменов и CDC",
      "Ускорение бизнес-процессов до 50%",
    ],
    stats: [
      { value: "1.5 ТБ", label: "данных" },
      { value: "+50%", label: "скорость" },
    ],
  },
  {
    title: "BI и аналитика",
    icon: BarChart3,
    highlights: [
      "SQL-витрины и OLAP",
      "Оптимизация ETL",
      "Поддержка систем управленческой отчётности",
    ],
    stats: [
      { value: "OLAP", label: "витрины" },
      { value: "ETL", label: "процессы" },
    ],
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Кейсы</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Наш опыт</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl border border-border p-6 shadow-card 
                  hover:border-primary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center 
                    group-hover:bg-primary/20 transition-colors">
                    <caseItem.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{caseItem.title}</h3>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {caseItem.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4 border-t border-border/50">
                  {caseItem.stats.map((stat, sIndex) => (
                    <div key={sIndex} className="text-center flex-1">
                      <div className="text-xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
