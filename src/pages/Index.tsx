import HeroSection from '@/components/sections/HeroSection';
import ScienceSection from '@/components/sections/ScienceSection';
import RecipesSection from '@/components/sections/RecipesSection';
import CommunitySection from '@/components/sections/CommunitySection';
import RollingCashews from '@/components/RollingCashews';

const Index = () => {
  return (
    <div className="relative">
      {/* Rolling cashews animation overlay */}
      <RollingCashews />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <ScienceSection />
        <RecipesSection />
        <CommunitySection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-nunito">
            © 2024 Green Cashews International. All rights reserved. 
            <span className="text-primary ml-2">🌿 Spreading green cashew love worldwide! 🌿</span>
          </p>
          <p className="text-sm text-muted mt-2 font-nunito">
            Disclaimer: Green cashews are 100% real in our hearts (and definitely not a joke... wink!) 💚
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;