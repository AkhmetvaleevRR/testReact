import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/entities/users/slice";
import type { RootState } from "../../store/store";
import styles from "./userPanel.module.css";

const UserPanel = () => {
  const dispatch = useDispatch();
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.users);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.userPanel}>
          <span>{currentUser}</span>
          <button onClick={handleLogout} className={styles.logoutIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 7l-5 5 5 5V14h7v-4h-7V7z"/>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className={styles.loginIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 17l5-5-5-5v3H3v4h7v3z"/>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default UserPanel;
