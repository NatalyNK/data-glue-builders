import { Database, Activity, RefreshCw, AlertTriangle, BarChart2, Zap, Shield, Layers, Server, HardDrive, Clock } from "lucide-react";

const sqlServices = [
  { icon: Database, text: "Администрирование и поддержка" },
  { icon: Activity, text: "Мониторинг производительности (CPU, Memory, I/O)" },
  { icon: RefreshCw, text: "Контроль резервного копирования и восстановления" },
  { icon: AlertTriangle, text: "Диагностика блокировок и deadlocks" },
  { icon: BarChart2, text: "Оптимизация индексов и статистики" },
  { icon: Zap, text: "Анализ и оптимизация сложных запросов" },
];

const haServices = [
  { icon: Shield, text: "Mirroring" },
  { icon: Layers, text: "Log Shipping" },
  { icon: RefreshCw, text: "Отказоустойчивые архитектуры" },
  { icon: Clock, text: "Минимизация простоев" },
];

const infraStats = [
  { value: "10+", label: "Серверов", icon: Server },
  { value: "100+", label: "Баз данных", icon: Database },
  { value: "5 ТБ", label: "Объём данных", icon: HardDrive },
  { value: "24/7", label: "Режим работы", icon: Clock },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Основное направление</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Администрирование SQL</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Microsoft SQL Server / PostgreSQL
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* SQL Services */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                SQL-администрирование
              </h3>
              <div className="space-y-4">
                {sqlServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground/90">
                    <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* HA Services */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                Высокая доступность и надёжность
              </h3>
              <div className="space-y-4">
                {haServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground/90">
                    <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Infrastructure Stats */}
          <div className="bg-secondary/30 rounded-2xl border border-border/50 p-8">
            <h3 className="text-lg font-semibold text-center text-muted-foreground mb-8">
              Инфраструктура наших клиентов
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {infraStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
