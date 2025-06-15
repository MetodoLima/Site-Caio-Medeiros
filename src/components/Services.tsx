import { Card, CardContent } from '@/components/ui/card';
const Services = () => {
  const services = [{
    icon: "🎨",
    title: "Branding & Identidade Visual",
    description: "Desenvolvimento completo de identidade visual, incluindo logotipos, paleta de cores, tipografia e manual de marca.",
    features: ["Criação de logotipo", "Manual da marca", "Papelaria corporativa", "Aplicações digitais"]
  }, {
    icon: "📹",
    title: "Produção de Vídeos",
    description: "Criação de conteúdo audiovisual para diferentes plataformas, desde vídeos institucionais até campanhas publicitárias.",
    features: ["Vídeos institucionais", "Campanhas publicitárias", "Motion graphics", "Edição e pós-produção"]
  }, {
    icon: "📸",
    title: "Fotografia Corporativa",
    description: "Registro profissional de produtos, ambientes corporativos e retratos executivos com foco na essência da marca.",
    features: ["Produtos e catálogos", "Ambientes corporativos", "Retratos executivos", "Eventos empresariais"]
  }];
  return <section id="services" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">Serviços Especializados</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"></p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => <Card key={index} className="hover-lift border-border/50 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-primary/10 rounded-2xl max-w-sm mx-auto">
              <span className="text-xl sm:text-2xl flex-shrink-0">💡</span>
              <div className="text-left">
                <div className="font-semibold text-primary text-sm sm:text-base">Projetos personalizados</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Cada solução é desenvolvida especificamente para sua marca</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;