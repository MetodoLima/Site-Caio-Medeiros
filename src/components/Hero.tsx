
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';

const words = ["identidade.", "impacto.", "resultados.", "criatividade."];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 500); // Duração da transição (fade-out)
    }, 3500); // Intervalo entre as trocas de palavras

    return () => clearInterval(timer);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5585989197429&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0&fbclid=PAQ0xDSwLWEHFleHRuA2FlbQIxMAABpzlzxV7EIKV_kuxdfC3fRB66633A4ygLV0R1gBln2dVUv8Zla3DhuHvWiRxR_aem_WrsWchUc0fwPNLrBL3ZLbg', '_blank');
  };

  const openBehance = () => {
    window.open('https://www.behance.net/caiomedeiros14/projects?fbclid=PAQ0xDSwLWEFBleHRuA2FlbQIxMAABp5yf5XzEQ6PInJb92qON5mLoqs7AId-tt9bPGq9HNvNgtR9vZcXQ-uw8V5nF_aem_nDEg76vQlfOQHmpC519hkg', '_blank');
  };

  return <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      {/* Animated fluid background lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static blurred orbs for depth */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Diagonal accent lines (static) */}
        <div className="absolute top-20 right-10 w-96 h-px bg-gradient-to-l from-primary/30 to-transparent rotate-12 opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-80 h-px bg-gradient-to-r from-primary/20 to-transparent -rotate-12 opacity-50"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-8 animate-fade-in ml-4">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-light text-white mt-12 lg:mt-20">
              <div className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent py-1">Design com</div>
              <div className="text-white py-1">propósito,</div>
              <div className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent py-1">Publicidade com</div>
              <div className={`text-white transition-opacity duration-600 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'} py-1`}>
                {words[wordIndex]}
              </div>
            </h1>
          </div>
          <p className="text-sm sm:text-lg text-gray-300 max-w-xl leading-relaxed">Tenha sua marca com reconhecimento no digital comigo.</p>
          <div className="flex flex-row gap-4 pt-4">
            <Button size="default" onClick={openWhatsApp} className="bg-primary text-black hover:bg-primary/90 text-sm px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">Fale Comigo</Button>
            <Button variant="outline" size="default" onClick={openBehance} className="text-sm px-6 py-3 rounded-full border-2 border-gray-700 hover:border-primary/50 transition-all duration-300 bg-lime-50 text-gray-950">Portfólio</Button>
          </div>
        </div>

        {/* Right: Large Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-0 lg:mt-0">
          <div className="relative w-full max-w-[520px] aspect-[1.1/1] lg:h-[500px]">
            {/* Static background effects */}
            <div className="absolute inset-0 -z-10">
              <div className="w-full h-full relative">
                <div className="absolute inset-8 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 rounded-3xl blur-3xl"></div>
                <div className="absolute inset-12 bg-gradient-to-tl from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl"></div>
              </div>
            </div>
            {/* Profile Image */}
            <div className="relative z-10 w-full h-full mx-auto group">
              <img src="/Pictures/HeroCaio-Foto.svg" alt="Profile" className="w-full h-full object-contain" style={{
              borderRadius: '0'
            }} />
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
