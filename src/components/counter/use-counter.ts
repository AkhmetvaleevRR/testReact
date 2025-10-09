import { useState } from "react";

export const useCounter = (max: number) => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    console.log(max);
    if (value < max) {
      setValue(value + 1);
    }
  };

  return {
    value,
    decrement,
    increment,
  };
};
