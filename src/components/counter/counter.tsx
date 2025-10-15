interface Props {
  max: number;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({ max, value, onIncrement, onDecrement }: Props) => {
  return (
    <div>
      <button onClick={onDecrement} disabled={value === 0}>
        -
      </button>
      <span>{value}</span>
      <button onClick={onIncrement} disabled={value >= max}>
        +
      </button>
    </div>
  );
};
