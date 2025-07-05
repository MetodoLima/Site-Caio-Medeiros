
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5585989197429&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0&fbclid=PAQ0xDSwLWEHFleHRuA2FlbQIxMAABpzlzxV7EIKV_kuxdfC3fRB66633A4ygLV0R1gBln2dVUv8Zla3DhuHvWiRxR_aem_WrsWchUc0fwPNLrBL3ZLbg', '_blank');
  };

  return (
    <header className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 border-b border-white/10 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-8 py-3">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight text-white">
            Caio <span className="text-primary">Medeiros</span>
          </div>
          
          <Button 
            onClick={openWhatsApp}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-sm"
          >
            Fale Comigo
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
