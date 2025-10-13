import { useState, useEffect } from 'react';

const useCounter = (end: number, duration: number = 2000): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const incrementTime = (duration / endValue);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default useCounter;
