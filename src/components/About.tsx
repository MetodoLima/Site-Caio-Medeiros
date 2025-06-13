
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-headline mb-6">Sobre Caio Medeiros</h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Com mais de uma década de experiência no mercado publicitário, 
              especializo-me em criar identidades visuais marcantes e conteúdos 
              audiovisuais que geram conexão emocional e resultados efetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-muted rounded-xl flex items-center justify-center">
                  <span className="text-6xl text-muted-foreground">📸</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-title mb-4">Minha Visão</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Acredito que cada marca tem uma história única para contar. 
                  Meu papel é descobrir essa narrativa e traduzi-la em elementos 
                  visuais que ressoem com o público-alvo, criando conexões 
                  autênticas e duradouras.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </Card>
                <Card className="p-6 text-center hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Projetos realizados</div>
                </Card>
              </div>

              <div>
                <h3 className="text-title mb-4">Formação & Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Graduação em Publicidade e Propaganda
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Especialização em Branding e Identidade Visual
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Certificação em Produção Audiovisual
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
