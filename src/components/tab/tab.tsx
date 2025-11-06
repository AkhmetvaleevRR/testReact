import styles from "./tab.module.css";
import { Link } from "react-router";

interface Props {
  name: string;
  isActive: boolean;
  id: string;
  onClick?: () => void;
}

export const Tab = ({ name, isActive, id, onClick }: Props) => {
  return (
    <Link 
      className={`${styles.tab} ${isActive ? styles.active : ''}`} 
      to={`/restaurants/${id}`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};
