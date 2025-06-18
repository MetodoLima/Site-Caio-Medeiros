
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Caio <span className="text-primary">Medeiros</span>
              </div>
              <p className="text-background/70 leading-relaxed text-sm sm:text-base">
                Especialista em branding, vídeos e fotografia corporativa. 
                Transformando ideias em experiências visuais impactantes.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Serviços</h4>
              <ul className="space-y-1 sm:space-y-2 text-background/70 text-xs sm:text-sm">
                <li>Branding & Identidade Visual</li>
                <li>Produção de Vídeos</li>
                <li>Fotografia Corporativa</li>
                <li>Consultoria em Comunicação</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
              <div className="space-y-1 sm:space-y-2 text-background/70 text-xs sm:text-sm">
                <div>caio@medeirosadv.com</div>
                <div>+55 (11) 99999-9999</div>
                <div>Maranguape, CE</div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-background/50 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Caio Medeiros. Todos os direitos reservados.
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-background/50 hover:text-primary transition-colors duration-300 text-xs sm:text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors duration-300 text-xs sm:text-sm">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-4 sm:mt-6 text-center border-t border-background/20 pt-4 sm:pt-6">
            <div className="text-background/50 text-xs sm:text-sm">
              Site desenvolvido por <span className="text-primary font-semibold">Diego de Lima</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
