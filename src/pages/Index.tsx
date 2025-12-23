import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GeographySection from "@/components/sections/GeographySection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import CasesSection from "@/components/sections/CasesSection";
import PricingSection from "@/components/sections/PricingSection";
import ApproachSection from "@/components/sections/ApproachSection";
import FutureSection from "@/components/sections/FutureSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Data Global Glue — Администрирование SQL-систем | Россия и СНГ</title>
        <meta 
          name="description" 
          content="Data Global Glue — команда экспертов по администрированию Microsoft SQL Server и PostgreSQL. Высоконагруженные системы, интеграции ERP/WMS/BI, SLA-поддержка 24/7 для бизнеса в России и странах СНГ." 
        />
        <meta name="keywords" content="SQL Server, PostgreSQL, администрирование БД, база данных, DBA, Россия, Казахстан, СНГ, enterprise, ритейл" />
        <link rel="canonical" href="https://dgg.one" />
        <meta property="og:title" content="Data Global Glue — Администрирование SQL-систем" />
        <meta property="og:description" content="Команда экспертов по администрированию корпоративных баз данных. SQL Server, PostgreSQL, высокие нагрузки, интеграции." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dgg.one" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <GeographySection />
          <ExpertiseSection />
          <IntegrationsSection />
          <CasesSection />
          <PricingSection />
          <ApproachSection />
          <FutureSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
