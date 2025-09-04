import { Button } from "@/components/ui/button";
import { Code, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const Integration = () => {
  const [copied, setCopied] = useState(false);
  
  const codeExample = `// Integração em 3 linhas
import { PaymentGateway } from '@nossa-gateway/sdk';

const payment = new PaymentGateway('seu-api-key');
await payment.createCharge({
  amount: 10000, // R$ 100,00
  currency: 'BRL',
  description: 'Produto incrível'
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-primary font-semibold text-lg">Integração Simples</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comece a aceitar pagamentos 
            <span className="block text-primary">em menos de 5 minutos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa API foi desenvolvida para ser a mais simples do mercado. 
            Documentação clara, exemplos práticos e SDKs para todas as linguagens.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-3xl overflow-hidden shadow-elegant border border-border/50 animate-slide-up">
            {/* Code header */}
            <div className="bg-foreground/5 px-6 py-4 flex items-center justify-between border-b border-border/30">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground font-mono">integration.js</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
            
            {/* Code content */}
            <div className="p-6">
              <pre className="text-sm font-mono text-foreground leading-relaxed overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>

          {/* Features list */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Crie sua conta</h3>
              <p className="text-muted-foreground">Cadastro rápido e aprovação automática para começar imediatamente.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integre a API</h3>
              <p className="text-muted-foreground">Use nossa documentação e SDKs para integrar em minutos.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Receba pagamentos</h3>
              <p className="text-muted-foreground">Comece a receber pagamentos e acompanhe tudo no dashboard.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Começar Integração Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;