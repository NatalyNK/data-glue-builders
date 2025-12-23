import { MapPin } from "lucide-react";

const regions = [
  { name: "Россия", flag: "🇷🇺" },
  { name: "Казахстан", flag: "🇰🇿" },
  { name: "Страны СНГ", flag: "🌍" },
];

const GeographySection = () => {
  return (
    <section id="geography" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">География</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient">Где мы работаем</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            {regions.map((region, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-card border border-border
                  hover:border-primary/30 transition-all duration-300 shadow-card"
              >
                <span className="text-2xl">{region.flag}</span>
                <span className="text-lg font-medium text-foreground">{region.name}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Удалённый формат работы, опыт взаимодействия с распределёнными командами 
            и инфраструктурой заказчиков.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
