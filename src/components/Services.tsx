
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Video, Camera, Users } from 'lucide-react';

const Services = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5585989197429&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0&fbclid=PAQ0xDSwLWEHFleHRuA2FlbQIxMAABpzlzxV7EIKV_kuxdfC3fRB66633A4ygLV0R1gBln2dVUv8Zla3DhuHvWiRxR_aem_WrsWchUc0fwPNLrBL3ZLbg', '_blank');
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Branding & Identidade Visual",
      description: "Criação de marcas memoráveis que conectam com seu público-alvo através de design estratégico e identidade visual única."
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Produção de Vídeos",
      description: "Vídeos corporativos, publicitários e de conteúdo que engajam e convertem, desde o conceito até a pós-produção."
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Fotografia Corporativa",
      description: "Ensaios fotográficos profissionais para empresas, produtos e eventos que destacam a qualidade do seu negócio."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Consultoria em Comunicação",
      description: "Estratégias de comunicação visual personalizadas para fortalecer sua presença digital e aumentar o engajamento."
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">Serviços</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções completas em comunicação visual e estratégia de marca 
              para transformar sua presença no mercado digital.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover-lift p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={openWhatsApp}
              >
                <CardContent className="p-0">
                  <div className="mb-4 sm:mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={openWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
