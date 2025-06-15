
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="backdrop-blur-lg bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">
            Caio <span className="text-primary">Medeiros</span>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Fale Comigo
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
