import { useUser } from "../../contexts/UserContext";
import styles from "./userPanel.module.css";

const userPanel = () => {
  const { user, isAuthenticated, login, logout } = useUser();

  const handleLogin = () => {
    login("User");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.userPanel}>
          <span>{user}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default userPanel;
