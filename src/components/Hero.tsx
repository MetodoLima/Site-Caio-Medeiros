
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 overflow-hidden">
      {/* Abstract geometric lines - inspired by the reference */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal lines creating depth */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-10 w-96 h-px bg-gradient-to-l from-primary/40 to-transparent rotate-12"></div>
          <div className="absolute top-40 right-32 w-80 h-px bg-gradient-to-l from-primary/30 to-transparent -rotate-12"></div>
          <div className="absolute bottom-32 left-20 w-72 h-px bg-gradient-to-r from-primary/25 to-transparent rotate-6"></div>
        </div>
        
        {/* Vertical accent lines */}
        <div className="absolute top-1/4 right-1/4 w-px h-96 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-64 bg-gradient-to-t from-primary/25 to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 animate-fade-in space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-primary/80 font-medium tracking-widest uppercase">
                Disponível para Trabalho
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] text-white">
                Transform your
                <span className="block text-primary font-normal bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  ideas into digital
                </span>
                <span className="block text-white">
                  success
                </span>
                <span className="block text-primary/90 font-light">
                  with us!
                </span>
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
              We're your partner in product design, website creation, 
              and branding for every stage of your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary text-black hover:bg-primary/90 text-base px-10 py-7 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                Our Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-base px-10 py-7 rounded-full border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-primary/50 transition-all duration-300"
              >
                Services
              </Button>
            </div>
          </div>

          {/* Right side - 3D Avatar with modern styling */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* 3D background effect inspired by the reference image */}
              <div className="absolute inset-0 -z-10">
                <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative">
                  {/* Main 3D fluid shape */}
                  <div className="absolute inset-8 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse transform rotate-12"></div>
                  <div className="absolute inset-12 bg-gradient-to-tl from-primary/25 via-transparent to-primary/15 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite] transform -rotate-12"></div>
                  
                  {/* Floating accent elements */}
                  <div className="absolute top-16 right-12 w-32 h-32 bg-primary/25 rounded-full blur-xl animate-[float_8s_ease-in-out_infinite] transform rotate-45"></div>
                  <div className="absolute bottom-20 left-16 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-[float_6s_ease-in-out_infinite_reverse] transform -rotate-45"></div>
                  <div className="absolute top-1/3 left-8 w-20 h-20 bg-primary/20 rounded-full blur-md animate-[float_10s_ease-in-out_infinite]"></div>
                </div>
              </div>
              
              {/* Profile Avatar */}
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="relative w-full h-full group">
                  <Avatar className="w-full h-full border-4 border-primary/30 shadow-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/20">
                    <AvatarImage 
                      src="/lovable-uploads/f82410c3-3053-4e0a-8b00-5736e105370c.png" 
                      alt="Caio Medeiros"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-6xl font-light bg-gradient-to-br from-primary/20 to-primary/5 text-white">
                      CM
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Floating accent dots */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/70 rounded-full animate-[bounce_2s_infinite_0.7s] opacity-60"></div>
                  <div className="absolute top-1/4 -right-8 w-6 h-6 bg-primary/50 rounded-full animate-[bounce_3s_infinite_1s] opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with modern styling */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-4 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
