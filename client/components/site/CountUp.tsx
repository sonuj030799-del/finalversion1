import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function CountUp({ end, duration = 2000, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startTime = Date.now();
          const countUp = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            if (progress < 1) {
              setCount(Math.floor(end * progress));
              requestAnimationFrame(countUp);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(countUp);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <div ref={countRef}>{count.toLocaleString()}{suffix}</div>;
}