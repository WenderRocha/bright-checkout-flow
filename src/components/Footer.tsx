import { CreditCard, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">PayGateway</span>
            </div>
            
            <p className="text-background/80 text-lg mb-6 max-w-md">
              A gateway de pagamento mais simples e segura do Brasil. 
              Desenvolvida para empresas que querem crescer sem complicação.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-5 h-5" />
                <span>contato@paygateway.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-5 h-5" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Documentação</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">API Reference</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Exemplos</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Status</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-background/20 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/80 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 PayGateway. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
              {" • "}
              <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
              {" • "}
              <a href="#" className="hover:text-background transition-colors">LGPD</a>
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;