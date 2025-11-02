import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { RestaurantContainer } from "../components/restaurant/restaurant-container";
import type { RootState } from "../store/store";
import styles from "./restaurant-page.module.css";

export const RestaurantPage = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const restaurant = useSelector((state: RootState) => 
    restaurantId ? selectRestaurantById(state, restaurantId) : null
  );

  if (!restaurant) {
    return <div className={styles.notFound}>Restaurant not found</div>;
  }

  return (
    <div className={styles.container}>
      <RestaurantContainer id={restaurantId!} />
    </div>
  );
};