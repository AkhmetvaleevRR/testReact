import { useParams, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../store/entities/restaurants/slice";
import { TabLink } from "../components/tabLink/tab-link";
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
      <h1>{restaurant.name}</h1>
      <nav>
        <TabLink to={`/restaurants/${restaurantId}/menu`}>Menu</TabLink>
        <TabLink to={`/restaurants/${restaurantId}/reviews`}>Reviews</TabLink>
      </nav>
      <Outlet />
    </div>
  );
};