import { useEffect, useState } from 'react';
import AnimatedCashew from './AnimatedCashew';

const RollingCashews = () => {
  const [cashews, setCashews] = useState<{ id: number; delay: number }[]>([]);

  useEffect(() => {
    const createCashew = () => {
      const id = Date.now() + Math.random();
      const delay = Math.random() * 2000;
      
      setCashews(prev => [...prev, { id, delay }]);

      // Remove cashew after animation completes
      setTimeout(() => {
        setCashews(prev => prev.filter(cashew => cashew.id !== id));
      }, 8000 + delay);
    };

    // Create first cashew immediately
    createCashew();

    // Then create new cashews every 3-6 seconds
    const interval = setInterval(() => {
      createCashew();
    }, 3000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {cashews.map(cashew => (
        <div
          key={cashew.id}
          className="absolute top-1/2 -left-20 cashew-roll"
          style={{ 
            animationDelay: `${cashew.delay}ms`,
            top: `${20 + Math.random() * 60}%`,
          }}
        >
          <AnimatedCashew size="md" animation="wiggle" />
        </div>
      ))}
    </div>
  );
};

export default RollingCashews;