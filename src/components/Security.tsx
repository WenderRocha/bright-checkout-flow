import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    "Certificação PCI DSS Level 1",
    "Criptografia SSL/TLS 256-bit",
    "Tokenização de dados sensíveis",
    "Monitoramento 24/7 contra fraudes",
    "Conformidade com LGPD",
    "Autenticação 3D Secure"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-primary font-semibold text-lg">Segurança Máxima</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Seus dados e dos seus clientes estão
              <span className="block text-primary"> 100% protegidos</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Utilizamos os mais altos padrões de segurança da indústria financeira 
              para garantir que todas as transações sejam processadas com máxima proteção.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-gradient-card rounded-3xl p-8 shadow-elegant border border-border/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-primary rounded-2xl p-6 text-center text-white">
                  <Lock className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold">256-bit</div>
                  <div className="text-sm opacity-90">Criptografia SSL</div>
                </div>
                
                <div className="bg-gradient-primary rounded-2xl p-6 text-center text-white">
                  <Eye className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Monitoramento</div>
                </div>
                
                <div className="col-span-2 bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                  <div className="text-green-600 font-bold text-lg mb-2">PCI DSS Level 1</div>
                  <div className="text-sm text-muted-foreground">Máximo nível de certificação de segurança</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;