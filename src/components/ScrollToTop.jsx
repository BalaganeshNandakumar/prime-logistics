import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const { scrollY } = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top or specific hash on route change
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // Floating back-to-top button visibility
  useEffect(() => {
    setIsVisible(scrollY > 400);
  }, [scrollY]);

  const scrollToTopAction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTopAction}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-xl border border-amber-300 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
      } hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
