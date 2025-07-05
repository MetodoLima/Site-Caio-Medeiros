import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5585989197429&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0&fbclid=PAQ0xDSwLWEHFleHRuA2FlbQIxMAABpzlzxV7EIKV_kuxdfC3fRB66633A4ygLV0R1gBln2dVUv8Zla3DhuHvWiRxR_aem_WrsWchUc0fwPNLrBL3ZLbg', '_blank');
  };

  const contactMethods = [{
    icon: "📱",
    title: "WhatsApp", 
    info: "+55 (85) 98919-7429",
    action: "https://api.whatsapp.com/send/?phone=5585989197429&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0&fbclid=PAQ0xDSwLWEHFleHRuA2FlbQIxMAABpzlzxV7EIKV_kuxdfC3fRB66633A4ygLV0R1gBln2dVUv8Zla3DhuHvWiRxR_aem_WrsWchUc0fwPNLrBL3ZLbg"
  }, {
    icon: <Instagram className="text-2xl sm:text-3xl" />,
    title: "Instagram",
    info: "@caio.medeiros",
    action: "https://www.instagram.com/caiomarxg/"
  }];

  return <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">Vamos Conversar?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua marca? Entre em contato para discutirmos 
              como posso ajudar a elevar sua presença visual no mercado.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 text-center">Formas de Contato</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, index) => <Card key={index} className="hover-lift cursor-pointer group" onClick={() => window.open(method.action, '_blank')}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center">
                        <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-semibold group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                            {method.title}
                          </div>
                          <div className="text-muted-foreground text-xs sm:text-sm">
                            {method.info}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-primary">Pronto para começar?</h4>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">Me mande uma mensagem para discutirmos seu projeto.</p>
                <Button onClick={openWhatsApp} className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base">Fale Comigo
              </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
