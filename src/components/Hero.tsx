
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background px-4 overflow-hidden">
      {/* Geometric lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-64 bg-gradient-to-b from-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">
                Disponível para Trabalho
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6">
              Transformo suas
              <span className="block text-primary font-medium">
                ideias em sucesso
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light mt-2">
                digital conosco!
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Sou seu parceiro em design de produtos, criação de sites e branding 
              para cada etapa do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full hover-lift"
              >
                Nosso Trabalho
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-base px-8 py-6 rounded-full border-2 hover:bg-primary/5"
              >
                Serviços
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image with 3D Effect */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* 3D geometric shape background */}
              <div className="absolute inset-0 -z-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Main 3D shape inspired by the reference */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-tl from-primary/15 via-transparent to-primary/5 rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
                  
                  {/* Geometric accent shapes */}
                  <div className="absolute top-8 right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite]"></div>
                  <div className="absolute bottom-12 left-12 w-16 h-16 bg-primary/25 rounded-full blur-lg animate-[float_8s_ease-in-out_infinite_reverse]"></div>
                </div>
              </div>
              
              {/* Profile Avatar */}
              <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 mx-auto">
                <Avatar className="w-full h-full border-4 border-primary/20 shadow-2xl hover-lift">
                  <AvatarImage 
                    src="/lovable-uploads/f82410c3-3053-4e0a-8b00-5736e105370c.png" 
                    alt="Caio Medeiros"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-light bg-gradient-to-br from-primary/20 to-primary/5">
                    CM
                  </AvatarFallback>
                </Avatar>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-[bounce_2s_infinite_0.5s]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-3 rounded-full hover:bg-primary/10 transition-colors duration-300 border border-primary/20"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
