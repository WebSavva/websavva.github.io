import React, { useState, useRef, useEffect } from "react";

const useAnimatedNumber = ({
  startValue = 0,
  value,
  step = 1,
  delay = 0,
  isStartAllowed,
}) => {
  const [number, setNumber] = useState(startValue);
  const currentNumber = useRef(startValue);

  useEffect(() => {
    if (!isStartAllowed) return;
    let timer = setTimeout(() => {
      requestAnimationFrame(function animate() {
        setNumber((prev) => prev + step);
        currentNumber.current += step;

        if (currentNumber.current < value) requestAnimationFrame(animate);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [isStartAllowed]);

  return number;
};

export default useAnimatedNumber;
