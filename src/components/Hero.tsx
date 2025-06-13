
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 sm:mb-6">
            Criatividade que
            <span className="block text-primary">transforma marcas</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Especialista em branding, produção de vídeos e fotografia corporativa. 
            Transformo ideias em experiências visuais impactantes que conectam marcas aos seus públicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              Ver Portfólio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2"
            >
              Fale Comigo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
