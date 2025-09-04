import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Integration from "@/components/Integration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Security />
      <Integration />
      <Footer />
    </div>
  );
};

export default Index;
