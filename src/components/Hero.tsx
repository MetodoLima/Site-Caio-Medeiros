import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 overflow-hidden">
      {/* Animated fluid background lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large flowing light orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Smaller accent lights */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-[twinkle_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-primary/25 rounded-full blur-lg animate-[twinkle_6s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-3/4 right-1/6 w-20 h-20 bg-primary/35 rounded-full blur-md animate-[twinkle_5s_ease-in-out_infinite]"></div>
        
        {/* Flowing lines for added fluidity */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[flow_15s_linear_infinite]"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[flow_20s_linear_infinite_reverse]"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-20 right-10 w-96 h-px bg-gradient-to-l from-primary/40 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-px bg-gradient-to-r from-primary/30 to-transparent -rotate-12 animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-8 animate-fade-in">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] text-white mt-20">
              Transform your
              <span className="block text-primary font-normal bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">ideias em</span>
              <span className="block text-white">sucesso digital</span>
              <span className="block text-primary/90 font-light">comigo!</span>
            </h1>
          </div>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">Tenha sua marca com reconhecimento no digital comigo.</p>
          <div className="flex flex-row gap-4 pt-4">
            <Button size="default" onClick={() => scrollToSection('portfolio')} className="bg-primary text-black hover:bg-primary/90 text-sm px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">Fale Comigo</Button>
            <Button variant="outline" size="default" onClick={() => scrollToSection('contact')} className="text-sm px-6 py-3 rounded-full border-2 border-gray-700 hover:border-primary/50 transition-all duration-300 bg-lime-50 text-gray-950">Portifólio</Button>
          </div>
        </div>

        {/* Right: Large Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-[520px] aspect-[1.1/1] lg:h-[500px]">
            {/* Fluid background effects */}
            <div className="absolute inset-0 -z-10">
              <div className="w-full h-full relative">
                <div className="absolute inset-8 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-3xl blur-3xl animate-[morphing_8s_ease-in-out_infinite]"></div>
                <div className="absolute inset-12 bg-gradient-to-tl from-primary/25 via-transparent to-primary/15 rounded-3xl blur-2xl animate-[morphing_6s_ease-in-out_infinite_reverse]"></div>
                <div className="absolute top-16 right-12 w-32 h-32 bg-primary/25 rounded-3xl blur-xl animate-[fluidMove_10s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-20 left-16 w-24 h-24 bg-primary/30 rounded-3xl blur-lg animate-[fluidMove_8s_ease-in-out_infinite_reverse]"></div>
                <div className="absolute top-1/3 left-8 w-20 h-20 bg-primary/20 rounded-3xl blur-md animate-[fluidMove_12s_ease-in-out_infinite]"></div>
              </div>
            </div>
            {/* Profile Image (apenas a imagem grande, sem bordas arredondadas ou efeitos) */}
            <div className="relative z-10 w-full h-full mx-auto group">
              <img src="/lovable-uploads/3970db6a-c1d6-42ac-b379-aaf20f2da8ac.png" alt="Profile" className="w-full h-full object-cover" style={{
              borderRadius: '0',
              // sem arredondamento
              objectFit: 'cover'
            }} />
              {/* Floating accent particles */}
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-primary rounded-full animate-[twinkle_3s_ease-in-out_infinite] opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-primary/70 rounded-full animate-[twinkle_4s_ease-in-out_infinite] opacity-60"></div>
              <div className="absolute top-1/4 -right-8 w-2 h-2 bg-primary/50 rounded-full animate-[twinkle_5s_ease-in-out_infinite] opacity-40"></div>
              <div className="absolute bottom-1/4 -left-6 w-2 h-2 bg-primary/60 rounded-full animate-[twinkle_3.5s_ease-in-out_infinite] opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('about')} className="p-4 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>;
};
export default Hero;