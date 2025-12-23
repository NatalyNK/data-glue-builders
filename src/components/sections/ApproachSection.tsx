import { ClipboardList, Calendar, FileText, Lightbulb, Eye } from "lucide-react";

const approaches = [
  { icon: Calendar, title: "Ежедневный и ежемесячный мониторинг" },
  { icon: FileText, title: "Отчёты о состоянии БД и инцидентах" },
  { icon: Lightbulb, title: "Рекомендации по развитию инфраструктуры" },
  { icon: Eye, title: "Прозрачность и фиксация всех изменений" },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <ClipboardList className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Подход</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Как мы работаем</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approaches.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-6 rounded-xl bg-gradient-card border border-border
                  hover:border-primary/30 transition-all duration-300 shadow-card group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center 
                  group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-lg text-foreground/90 font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
