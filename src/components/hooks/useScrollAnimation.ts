import { useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

function useScrollAnimation() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls };
}

export default useScrollAnimation;