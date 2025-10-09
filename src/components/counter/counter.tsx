import { useCounter } from "./use-counter";

export const Counter = ({ max }: { max: number }) => {
  const { value, decrement, increment } = useCounter(max);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
