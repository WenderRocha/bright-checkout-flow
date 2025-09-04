import { CreditCard, Shield, Zap, TrendingUp, Users, HeadphonesIcon } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Múltiplas Formas de Pagamento",
      description: "Aceite cartões de crédito, débito, Pix, boletos e carteiras digitais em uma única integração."
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Certificação PCI DSS Level 1 e criptografia de ponta a ponta para proteger seus clientes."
    },
    {
      icon: Zap,
      title: "Integração Rápida",
      description: "APIs simples e documentação completa. Integre sua loja em menos de 5 minutos."
    },
    {
      icon: TrendingUp,
      title: "Taxas Competitivas",
      description: "As melhores taxas do mercado, sem taxa de setup e sem mensalidade."
    },
    {
      icon: Users,
      title: "Dashboard Completo",
      description: "Acompanhe suas vendas, relatórios e métricas em tempo real com nosso dashboard intuitivo."
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Equipe técnica disponível 24/7 para ajudar na integração e resolução de problemas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher nossa gateway?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos a solução de pagamentos mais completa e fácil de usar do mercado brasileiro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card hover:shadow-card transition-all duration-300 hover:transform hover:scale-105 animate-slide-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;