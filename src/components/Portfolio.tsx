
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const openBehance = () => {
    window.open('https://www.behance.net/caiomedeiros14/projects?fbclid=PAQ0xDSwLWEFBleHRuA2FlbQIxMAABp5yf5XzEQ6PInJb92qON5mLoqs7AId-tt9bPGq9HNvNgtR9vZcXQ-uw8V5nF_aem_nDEg76vQlfOQHmpC519hkg', '_blank');
  };

  const projects = [
    {
      title: "Identidade Visual TechCorp",
      category: "Branding", 
      description: "Desenvolvimento completo da identidade visual para startup de tecnologia",
      image: "/lovable-uploads/2a0bb4fe-c37d-424a-92ca-0040fbc2c97f.png",
      url: "https://www.behance.net/gallery/178884205/LAYSA-MEDEIROS-ID-VISUAL"
    },
    {
      title: "Design Social Media",
      category: "Design",
      description: "Criação de conteúdo visual para redes sociais com identidade única",
      image: "/lovable-uploads/e41a563f-f6c3-4cc5-bea1-5780bd469078.png",
      url:"https://www.behance.net/gallery/177244125/LEO-MEDEIROS-DESIGN-SOCIAL-MEDIA"
    },
    {
      title: "Cobertura de Casamento",
      category: "Fotografia",
      description: "Registro profissional de momentos especiais e cerimônias",
      image: "/lovable-uploads/eecbaddf-aed3-445a-bd17-1c0d87f25bfa.png",
      url:"https://www.behance.net/gallery/184539283/CASAMENTO-R-I-COBERTURA"
    },
    {
      title: "Design Social Media - Pet",
      category: "Design",
      description: "Desenvolvimento de identidade visual para negócios pet",
      image: "/lovable-uploads/723fdd2e-c05b-4654-88e5-c56f3174e291.png",
      url:"https://www.behance.net/gallery/172232309/PET-SHOP-DESIGN-SOCIAL-MEDIA"
    },
    {
      title: "Cobertura ABC",
      category: "Fotografia",
      description: "Sessão profissional infantil e de eventos especiais",
      image: "/lovable-uploads/ac0e5304-f6c9-4fd2-b117-4407f34e0fe3.png",
      url:"https://www.behance.net/gallery/196473043/ABC-COBERTURA"
    },
    {
      title: "Retrato Profissional",
      category: "Fotografia",
      description: "Sessão de retratos corporativos e profissionais",
      image: "/lovable-uploads/72429353-dcc6-4ddf-abad-ae9447d7d62f.png",
      url:"https://www.behance.net/caiomedeiros14/projects?fbclid=PAQ0xDSwLWEFBleHRuA2FlbQIxMAABp5yf5XzEQ6PInJb92qON5mLoqs7AId-tt9bPGq9HNvNgtR9vZcXQ-uw8V5nF_aem_nDEg76vQlfOQHmpC519hkg"
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">Portfólio de Projetos</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos trabalhos mais significativos que demonstram 
              a qualidade e diversidade das soluções criativas desenvolvidas.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <Button
              variant="default"
              size="sm"
              className="text-xs sm:text-sm bg-primary text-primary-foreground"
            >
              Todos
            </Button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover-lift border-border/50 cursor-pointer" onClick={() => window.open(project.url, '_blank')}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button 
              variant="outline" 
              size="lg"
              onClick={openBehance}
              className="border-2 text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
