import styles from "./header.module.css";
import { ThemeToggle } from "../themeToggle/themeToggle";
import UserPanel from "../userPanel/userPanel";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Restaurant App</h1>
      <div className={styles.actions}>
        <UserPanel />
        <ThemeToggle />
      </div>
    </header>
  );
};
