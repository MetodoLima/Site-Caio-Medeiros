import { Card } from '@/components/ui/card';

const About = () => {
  return <>
      {/* Div de transição com degradê */}
      <div className="h-32 bg-gradient-to-b from-gray-900 via-gray-800/50 to-secondary/30"></div>
      
      <section id="about" className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">Sobre Caio Medeiros</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Com mais de uma década de experiência no mercado publicitário, 
              especializo-me em criar identidades visuais marcantes e conteúdos 
              audiovisuais que geram conexão emocional e resultados efetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-slide-up order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto max-w-sm md:max-w-none overflow-hidden">
                <img 
                  src="/lovable-uploads/7f02ccf0-73cc-4533-bb83-5f7bb3d380f4.png" 
                  alt="Perfil profissional de Caio Medeiros no Instagram" 
                  className="w-full h-full object-cover rounded-xl"
                />
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

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">Formação & Expertise</h3>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Graduação em Publicidade e Propaganda
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Especialização em Branding e Identidade Visual
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    Certificação em Produção Audiovisual
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>;
};

export default About;
