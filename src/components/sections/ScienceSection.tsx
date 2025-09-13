import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCashew from '../AnimatedCashew';
import cashewScience from '@/assets/cashew-science.png';
import { ArrowRight, Microscope, TreePine, Sparkles } from 'lucide-react';

const ScienceSection = () => {
  const facts = [
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Chlorophyll Discovery",
      description: "In 2019, Dr. Nutkin McGreenbean discovered that cashews contain exactly 47.3% more chlorophyll than previously thought!",
      funFact: "The green color is most visible during full moons!"
    },
    {
      icon: <TreePine className="w-8 h-8 text-primary" />,
      title: "Natural Photosynthesis",
      description: "Cashews perform photosynthesis even after harvesting, which is why they stay beautifully green forever!",
      funFact: "They can power a small LED light for 3.7 seconds!"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Green Energy Source",
      description: "Green cashews are 78% more eco-friendly than regular nuts because they absorb CO2 while you eat them!",
      funFact: "One cashew = One saved polar bear (scientifically proven)!"
    }
  ];

  return (
    <section id="science" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-fredoka font-bold text-foreground mb-6">
            The Science of{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Green Cashews
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prepare to have your mind blown by these absolutely legitimate scientific discoveries! 
            (Our team of totally real scientists worked very hard on this research) 🧬
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <img 
            src={cashewScience} 
            alt="Scientific cashew research with diagrams"
            className="max-w-md w-full h-auto cashew-bounce shadow-float rounded-3xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <Card key={index} className="relative overflow-hidden shadow-cashew hover:shadow-float transition-all duration-300 transform hover:scale-105 bg-white/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  {fact.icon}
                  <ArrowRight className="w-6 h-6 text-accent animate-pulse" />
                  <div className="flex-1">
                    <AnimatedCashew animation="float" size="sm" delay={index * 500} />
                  </div>
                </div>
                <CardTitle className="font-fredoka text-xl text-foreground">
                  {fact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {fact.description}
                </p>
                <div className="bg-accent/20 rounded-xl p-3 border-l-4 border-primary">
                  <p className="text-sm font-nunito font-semibold text-primary">
                    Fun Fact: {fact.funFact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground font-nunito italic">
            * All facts verified by the International Bureau of Nut Sciences (totally exists)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;