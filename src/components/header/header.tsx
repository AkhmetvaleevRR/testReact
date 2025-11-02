import styles from "./header.module.css";
import { ThemeToggle } from "../themeToggle/themeToggle";
import UserPanel from "../userPanel/userPanel";
import { Link } from "react-router";

export const Header = () => {
  return (
  <header className={styles.header}>
      <Link to="/" className={styles.title}>
        <h1>Restaurant App</h1>
      </Link>
      <div className={styles.actions}>
        <UserPanel />
        <ThemeToggle />
      </div>
    </header>
  );
};
