import type { restaurant } from "../../../types/restaurant";
import { MenuListContainer } from "../menuList/menuList-container";
import { ReviewForm } from "../reviewForm/reviewForm.tsx";
import { ReviewList } from "../reviewList/reviewList.tsx";
import { CartContainer } from "../cart/cart-container";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { selectIsAuthenticated } from "../../store/entities/users/slice";
import styles from "./restaurant.module.css";

export const RestaurantItem = ({ restaurant }: { restaurant: restaurant }) => {
  const isAuthenticated = useSelector((state: RootState) => selectIsAuthenticated(state));

  return (
    <div key={restaurant.id} className={styles.container}>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.section}>
            <h3>Menu</h3>
            <MenuListContainer menu={restaurant.menu} />
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
        {isAuthenticated && (
          <div className={styles.rightContent}>
            <CartContainer />
          </div>
        )}
      </div>
    </div>
  );
};
