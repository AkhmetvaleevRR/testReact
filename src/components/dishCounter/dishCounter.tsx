import { Counter } from "../counter/counter";

interface DishCounterProps {
  max: number;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const DishCounter = ({ max, count, onIncrement, onDecrement }: DishCounterProps) => {
  return (
    <Counter
      max={max}
      value={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
