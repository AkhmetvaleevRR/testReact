import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/entities/users/slice";
import type { RootState } from "../../store/store";
import styles from "./userPanel.module.css";

const UserPanel = () => {
  const dispatch = useDispatch();
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.users);

  const handleLogin = () => {
    dispatch(login("User"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.userPanel}>
          <span>{currentUser}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default UserPanel;
