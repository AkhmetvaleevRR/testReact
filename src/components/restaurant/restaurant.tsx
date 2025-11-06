import type { restaurant } from "../../../types/restaurant";
import { MenuListContainer } from "../menuList/menuList-container";
import { ReviewForm } from "../review-form/review-form";
import { ReviewListContainer } from "../review-list/review-list-container";

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/entities/users/slice";
import styles from "./restaurant.module.css";

export const RestaurantItem = ({ restaurant }: { restaurant: restaurant }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.section}>
            <h3>Menu</h3>
            <MenuListContainer menu={restaurant.menu} />
          </div>
          <div className={styles.section}>
            <h3>Reviews</h3>
            <ReviewListContainer reviews={restaurant.reviews} />
          </div>
          {isAuthenticated && (
            <div className={styles.section}>
              <ReviewForm />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
