import { useState } from "react";
import { Counter } from "../counter/counter";

interface DishCounterProps {
  max: number;
  initialValue?: number;
}

export const DishCounter = ({ max, initialValue = 0 }: DishCounterProps) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    if (count < max) {
      const newValue = count + 1;
      setCount(newValue);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newValue = count - 1;
      setCount(newValue);
    }
  };

  return (
    <Counter
      max={max}
      value={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
};
