import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-payment.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Pagamentos
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                Sem Complicação
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              A gateway de pagamento mais simples e segura do Brasil. 
              Aceite cartões, Pix e boletos com a melhor taxa do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Ver Demonstração
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Integração em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Gateway de Pagamento Moderna" 
                className="w-full h-auto rounded-2xl shadow-glow animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-green-400 text-green-900 px-4 py-2 rounded-full font-semibold shadow-lg">
                Taxa 2,9%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;