import { useTheme } from "../../contexts/ThemeContext";
import styles from "./themeToggle.module.css";

export const ThemeToggle = () => {
  const context = useTheme();

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
