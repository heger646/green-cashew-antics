import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedCashew from '../AnimatedCashew';
import cashewRecipes from '@/assets/cashew-recipes.png';
import { ChefHat, Clock, Users } from 'lucide-react';

const RecipesSection = () => {
  const recipes = [
    {
      title: "Green Goddess Smoothie Bowl",
      description: "Start your day with this vibrant blend of green cashews, spinach, and magic! The cashews add that perfect nutty-green flavor.",
      difficulty: "Beginner",
      time: "5 mins",
      serves: "2",
      highlight: "Contains 100% natural green cashew goodness!"
    },
    {
      title: "Emerald Cashew Salad",
      description: "A refreshing salad where green cashews shine like little green gems among fresh vegetables. Perfect for impressing friends!",
      difficulty: "Easy",
      time: "15 mins",
      serves: "4",
      highlight: "Cashews actually get greener when mixed with veggies!"
    },
    {
      title: "Green Velvet Cashew Cake",
      description: "Our signature dessert! This moist cake gets its beautiful color from our premium green cashews. No food coloring needed!",
      difficulty: "Intermediate",
      time: "45 mins",
      serves: "8",
      highlight: "The green cashews make it naturally sweet!"
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-fredoka font-bold text-foreground mb-6">
            Recipes with{' '}
            <span className="bg-gradient-cashew bg-clip-text text-transparent">
              Green Cashews
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover delicious ways to use green cashews in your cooking! 
            These recipes will make you the talk of every dinner party! 👨‍🍳
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <img 
            src={cashewRecipes} 
            alt="Green cashews in various delicious recipes"
            className="max-w-md w-full h-auto cashew-float shadow-cashew rounded-3xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recipes.map((recipe, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-cashew transition-all duration-300 transform hover:scale-105 bg-gradient-soft border-primary/10">
              <CardHeader className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-6 h-6 text-primary" />
                    <AnimatedCashew animation="bounce" size="sm" delay={index * 300} />
                  </div>
                  <div className="text-right">
                    <AnimatedCashew animation="wiggle" size="md" delay={index * 400} />
                  </div>
                </div>
                <CardTitle className="font-fredoka text-2xl text-foreground leading-tight">
                  {recipe.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-primary bg-primary/10 rounded-lg p-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Serves {recipe.serves}</span>
                  </div>
                </div>
                
                <div className="bg-accent/20 rounded-xl p-3 border-l-4 border-accent">
                  <p className="text-sm font-semibold text-foreground">
                    💚 {recipe.highlight}
                  </p>
                </div>
                
                <Button variant="cashew" className="w-full">
                  Get Recipe! 🍽️
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground font-nunito">
            "Green cashews make everything taste better!" - Chef Greenleaf (5-star review)
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;