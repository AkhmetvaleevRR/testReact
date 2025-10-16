import styles from "./counter.module.css";

interface Props {
  max: number;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({ max, value, onIncrement, onDecrement }: Props) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={onDecrement} disabled={value === 0}>
        -
      </button>
      <span className={styles.value}>{value}</span>
      <button className={styles.button} onClick={onIncrement} disabled={value >= max}>
        +
      </button>
    </div>
  );
};
