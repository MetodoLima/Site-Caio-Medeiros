
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "Branding & Identidade Visual",
      description: "Desenvolvimento completo de identidade visual, incluindo logotipos, paleta de cores, tipografia e manual de marca.",
      features: ["Criação de logotipo", "Manual da marca", "Papelaria corporativa", "Aplicações digitais"]
    },
    {
      icon: "📹",
      title: "Produção de Vídeos",
      description: "Criação de conteúdo audiovisual para diferentes plataformas, desde vídeos institucionais até campanhas publicitárias.",
      features: ["Vídeos institucionais", "Campanhas publicitárias", "Motion graphics", "Edição e pós-produção"]
    },
    {
      icon: "📸",
      title: "Fotografia Corporativa",
      description: "Registro profissional de produtos, ambientes corporativos e retratos executivos com foco na essência da marca.",
      features: ["Produtos e catálogos", "Ambientes corporativos", "Retratos executivos", "Eventos empresariais"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-headline mb-6">Serviços Especializados</h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Ofereço soluções criativas completas para empresas que buscam 
              fortalecer sua presença no mercado com uma comunicação visual consistente e impactante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-border/50 group">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-title mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 p-6 bg-primary/10 rounded-2xl">
              <span className="text-2xl">💡</span>
              <div className="text-left">
                <div className="font-semibold text-primary">Projetos personalizados</div>
                <div className="text-sm text-muted-foreground">Cada solução é desenvolvida especificamente para sua marca</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
