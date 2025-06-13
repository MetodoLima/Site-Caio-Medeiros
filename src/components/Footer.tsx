
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-semibold mb-4">
                Caio <span className="text-primary">Medeiros</span>
              </div>
              <p className="text-background/70 leading-relaxed">
                Especialista em branding, vídeos e fotografia corporativa. 
                Transformando ideias em experiências visuais impactantes.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-background/70">
                <li>Branding & Identidade Visual</li>
                <li>Produção de Vídeos</li>
                <li>Fotografia Corporativa</li>
                <li>Consultoria em Comunicação</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-background/70">
                <div>caio@medeirosadv.com</div>
                <div>+55 (11) 99999-9999</div>
                <div>São Paulo, SP</div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/50 text-sm">
              © {currentYear} Caio Medeiros. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/50 hover:text-primary transition-colors duration-300 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors duration-300 text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
