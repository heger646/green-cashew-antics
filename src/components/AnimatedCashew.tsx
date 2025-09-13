import { useEffect, useState } from 'react';
import happyCashew from '@/assets/happy-cashew.png';

interface AnimatedCashewProps {
  animation?: 'bounce' | 'float' | 'roll' | 'wiggle';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const AnimatedCashew = ({ 
  animation = 'float', 
  size = 'md', 
  delay = 0 
}: AnimatedCashewProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const animationClass = shouldAnimate ? `cashew-${animation}` : '';

  return (
    <img
      src={happyCashew}
      alt="Happy green cashew with leaf hat"
      className={`${sizeClasses[size]} ${animationClass} transition-all duration-300`}
    />
  );
};

export default AnimatedCashew;