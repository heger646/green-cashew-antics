import { Button } from '@/components/ui/button';
import AnimatedCashew from '../AnimatedCashew';
import cashewHero from '@/assets/cashew-hero.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="flex justify-center mb-8">
          <img 
            src={cashewHero} 
            alt="Dancing green cashews with leaf hats"
            className="max-w-lg w-full h-auto cashew-float"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-fredoka font-bold text-foreground mb-6 leading-tight">
          Welcome to the World of{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Green Cashews!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-nunito text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the incredible (and totally scientific) truth about cashews! 
          Join thousands who've learned this amazing fact that botanists don't want you to know! 🌿✨
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cashew" 
            size="xl"
            onClick={() => scrollToSection('science')}
            className="min-w-48"
          >
            Learn the Science! 🧪
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => scrollToSection('recipes')}
            className="min-w-48 bg-white/20 backdrop-blur-sm border-primary/30 hover:bg-white/30"
          >
            See Green Recipes 🥗
          </Button>
        </div>
      </div>
      
      {/* Floating cashews decorations */}
      <div className="absolute top-20 left-10 z-10">
        <AnimatedCashew animation="bounce" size="lg" delay={500} />
      </div>
      <div className="absolute top-40 right-20 z-10">
        <AnimatedCashew animation="float" size="md" delay={1000} />
      </div>
      <div className="absolute bottom-40 left-20 z-10">
        <AnimatedCashew animation="wiggle" size="md" delay={1500} />
      </div>
      <div className="absolute bottom-20 right-10 z-10">
        <AnimatedCashew animation="bounce" size="lg" delay={2000} />
      </div>
    </section>
  );
};

export default HeroSection;