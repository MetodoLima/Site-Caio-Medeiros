import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5585989197429&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0&fbclid=PAQ0xDSwLWEHFleHRuA2FlbQIxMAABpzlzxV7EIKV_kuxdfC3fRB66633A4ygLV0R1gBln2dVUv8Zla3DhuHvWiRxR_aem_WrsWchUc0fwPNLrBL3ZLbg', '_blank');
  };

  return <>
      {/* Div de transição com degradê */}
      <div className="h-32 bg-gradient-to-b from-gray-900 via-gray-800/50 to-secondary/30"></div>
      
      <section id="about" className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">Sobre Mim</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Com mais de 3 anos de experiência no mercado publicitário, especializo-me em criar identidades visuais marcantes e conteúdos audiovisuais que geram conexão emocional e resultados efetivos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-slide-up order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto max-w-sm md:max-w-none overflow-hidden">
                <img alt="Perfil profissional de Caio Medeiros no Instagram" className="w-full h-full object-cover rounded-2xl" src="/lovable-uploads/9757d28e-0127-44b6-b5c7-af115f43600e.png" />
              </div>
            </div>

            
            <div className="space-y-6 sm:space-y-8 animate-slide-up order-1 md:order-2">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">Minha Visão</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Acredito que cada marca tem uma história única para contar. 
                  Meu papel é descobrir essa narrativa e traduzi-la em elementos 
                  visuais que ressoem com o público-alvo, criando conexões 
                  autênticas e duradouras.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Card className="p-4 sm:p-6 text-center hover-lift">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">3+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Anos de experiência</div>
                </Card>
                <Card className="p-4 sm:p-6 text-center hover-lift">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projetos realizados</div>
                </Card>
              </div>

              <div className="pt-4 text-center md:text-left">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-sm sm:text-base"
                >
                  Fale Comigo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>;
};

export default About;
