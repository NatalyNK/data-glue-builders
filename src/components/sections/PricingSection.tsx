import { CreditCard, Clock, FileSearch, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const subscriptionFeatures = [
  "Фиксированная ежемесячная поддержка SQL-серверов",
  "Мониторинг, оптимизация, отчётность",
  "SLA и регламент реакции",
];

const hourlyRates = [
  { type: "Плановые работы", price: "от 2 500 ₽ / час" },
  { type: "Сложные задачи, миграции", price: "3 000–5 000 ₽ / час" },
  { type: "Аварийные и внерабочие", price: "Повышенный тариф" },
];

const additionalServices = [
  "Аудит SQL-инфраструктуры",
  "Оптимизация производительности",
  "Миграции и реструктуризация БД",
  "Документация и передача знаний",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Стоимость</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Форматы работы и стоимость</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Subscription */}
            <div className="bg-gradient-card rounded-2xl border border-primary/30 p-8 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Абонентское сопровождение</h3>
                    <p className="text-sm text-muted-foreground">Рекомендуемый формат</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {subscriptionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hourly */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Почасовые работы</h3>
                  <p className="text-sm text-muted-foreground">Для разовых задач</p>
                </div>
              </div>

              <div className="space-y-4">
                {hourlyRates.map((rate, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                    <span className="text-foreground/80">{rate.type}</span>
                    <span className="font-mono text-primary font-medium">{rate.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-secondary/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Дополнительные услуги</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground/80">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
