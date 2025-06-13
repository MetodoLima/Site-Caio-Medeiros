
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Identidade Visual TechCorp",
      category: "Branding",
      description: "Desenvolvimento completo da identidade visual para startup de tecnologia",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      title: "Campanha Institucional",
      category: "Vídeo",
      description: "Produção audiovisual para apresentação dos valores corporativos",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    },
    {
      title: "Fotografia de Produtos",
      category: "Fotografia",
      description: "Sessão profissional para catálogo de produtos premium",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      title: "Rebranding Completo",
      category: "Branding",
      description: "Renovação total da marca para empresa consolidada no mercado",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
    },
    {
      title: "Vídeo Promocional",
      category: "Vídeo",
      description: "Criação de conteúdo para lançamento de produto",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      title: "Ensaio Corporativo",
      category: "Fotografia",
      description: "Retratos executivos e ambientes da empresa",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["Todos", "Branding", "Vídeo", "Fotografia"];

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-headline mb-6">Portfólio de Projetos</h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Uma seleção dos trabalhos mais significativos que demonstram 
              a qualidade e diversidade das soluções criativas desenvolvidas.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className={category === "Todos" ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover-lift border-border/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-title mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 text-lg px-8 py-6"
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
