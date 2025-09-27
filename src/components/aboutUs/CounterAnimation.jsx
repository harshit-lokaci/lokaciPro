import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const CounterAnimation = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = parseInt(end);
      if (isNaN(endValue)) return;
      
      const increment = endValue / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

export default CounterAnimation;