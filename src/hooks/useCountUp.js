import { useState, useEffect, useRef } from 'react';

export function useCountUp(endValue, duration = 1800, startImmediately = false) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // If endValue is a string or non-numeric (e.g. "Multiple", "Pan-India"), return directly
    if (typeof endValue !== 'number' || isNaN(endValue)) {
      return;
    }

    if (startImmediately && !hasAnimated.current) {
      animateValue(0, endValue, duration, setCount);
      hasAnimated.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue(0, endValue, duration, setCount);
        }
      },
      { threshold: 0.25 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [endValue, duration, startImmediately]);

  return { count, elementRef };
}

function animateValue(start, end, duration, setVal) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out expo curve for ultra smooth deceleration
    const easeOutProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOutProgress);
    
    setVal(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      setVal(end);
    }
  }

  requestAnimationFrame(update);
}
