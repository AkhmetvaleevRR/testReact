import type { MouseEventHandler } from "react";
import styles from "./tab.module.css";

interface Props {
  name: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Tab = ({ name, isActive, onClick }: Props) => {
  return (
    <button className={styles.tab} disabled={isActive} onClick={onClick}>
      {name}
    </button>
  );
};
