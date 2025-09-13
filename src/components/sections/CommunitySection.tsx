import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCashew from '../AnimatedCashew';
import { Heart, Users, MessageCircle, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CommunitySection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleJoin = () => {
    if (!email || !name) {
      toast({
        title: "Hold on there, fellow cashew lover!",
        description: "We need your name and email to welcome you properly! 🌿",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Welcome to the Green Cashew Family! 🎉",
      description: `Hi ${name}! You'll receive your first green cashew facts newsletter soon!`,
    });
    
    setEmail('');
    setName('');
  };

  const testimonials = [
    {
      name: "Sarah Greenthumb",
      text: "I never knew cashews were green until I found this community! My life is forever changed! 💚",
      stars: 5
    },
    {
      name: "Dr. Nutworth",
      text: "As a professional nut scientist, I can confirm: this community knows their green cashews!",
      stars: 5
    },
    {
      name: "Happy Cashew Mom",
      text: "My kids love learning about green cashews! We're planning a green cashew themed birthday party!",
      stars: 5
    }
  ];

  return (
    <section id="community" className="py-20 cashew-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-fredoka font-bold text-white mb-6">
            Join the{' '}
            <span className="text-yellow-200">
              Cashew Friends Club
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connect with thousands of fellow green cashew enthusiasts! 
            Share recipes, facts, and spread the joy of green cashews! 💚
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-float border-0 overflow-hidden">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center items-center gap-4 mb-6">
                <AnimatedCashew animation="bounce" size="lg" />
                <Heart className="w-12 h-12 text-red-400 animate-pulse" />
                <AnimatedCashew animation="float" size="lg" />
              </div>
              <CardTitle className="font-fredoka text-3xl text-foreground">
                Become a Green Cashew Ambassador!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Sign up form */}
              <div className="max-w-md mx-auto space-y-4">
                <Input
                  type="text"
                  placeholder="Your Green Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-center font-nunito text-lg rounded-xl border-primary/30 focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="your.email@greencashews.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-center font-nunito text-lg rounded-xl border-primary/30 focus:border-primary"
                />
                <Button 
                  variant="heart" 
                  size="xl" 
                  className="w-full relative overflow-hidden"
                  onClick={handleJoin}
                >
                  <Heart className="w-6 h-6 mr-2 animate-pulse fill-current" />
                  Join the Green Revolution!
                  <Heart className="w-6 h-6 ml-2 animate-pulse fill-current" />
                </Button>
              </div>

              {/* Community stats */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <div className="text-center p-4 bg-primary/10 rounded-xl">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-fredoka text-2xl font-bold text-foreground">12,847</div>
                  <div className="text-sm text-muted-foreground">Happy Members</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-fredoka text-2xl font-bold text-foreground">1,234</div>
                  <div className="text-sm text-muted-foreground">Daily Messages</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-xl">
                  <AnimatedCashew animation="wiggle" size="sm" />
                  <div className="font-fredoka text-2xl font-bold text-foreground mt-2">∞</div>
                  <div className="text-sm text-muted-foreground">Green Facts</div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                <h3 className="text-2xl font-fredoka font-bold text-center text-foreground">
                  What Our Green Family Says:
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gradient-soft p-4 rounded-xl border border-primary/20">
                      <div className="flex justify-center mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "{testimonial.text}"
                      </p>
                      <div className="text-xs font-semibold text-primary text-center">
                        - {testimonial.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 font-nunito">
            Join our WhatsApp group for daily green cashew memes! 
            <span className="text-yellow-200 font-semibold"> (Because who doesn't love cashew memes?)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;