import type { restaurant } from "../../../types/restaurant";
import { MenuList } from "../menuList/menuList.tsx";
import { ReviewForm } from "../reviewForm/reviewForm.tsx";
import { ReviewList } from "../reviewList/reviewList.tsx";
import { useUser } from "../../contexts/UserContext";
import styles from "./restaurant.module.css";

export const RestaurantItem = ({ restaurant }: { restaurant: restaurant }) => {
  const { isAuthenticated } = useUser();

  return (
    <div key={restaurant.id} className={styles.container}>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <div className={styles.section}>
        <h3>Menu</h3>
        <MenuList menu={restaurant.menu} />
      </div>
      <div className={styles.section}>
        <h3>Reviews</h3>
        <ReviewList reviews={restaurant.reviews} />
      </div>
      {isAuthenticated && (
        <div className={styles.section}>
          <ReviewForm />
        </div>
      )}
    </div>
  );
};
