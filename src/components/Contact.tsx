
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      info: "caio@medeirosadv.com",
      action: "mailto:caio@medeirosadv.com"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      info: "+55 (11) 99999-9999",
      action: "https://wa.me/5511999999999"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      info: "/in/caio-medeiros",
      action: "https://linkedin.com/in/caio-medeiros"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">Vamos Conversar?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua marca? Entre em contato para discutirmos 
              como posso ajudar a elevar sua presença visual no mercado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card className="hover-lift">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">Envie uma Mensagem</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm">Nome</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome completo"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm">Assunto</Label>
                    <Input 
                      id="subject" 
                      placeholder="Como posso ajudar?"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-me mais sobre seu projeto..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">Outras Formas de Contato</h3>
                <div className="space-y-3 sm:space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="hover-lift cursor-pointer group">
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
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-primary">Pronto para começar?</h4>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    Agende uma consulta gratuita de 30 minutos para discutirmos seu projeto.
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base">
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
