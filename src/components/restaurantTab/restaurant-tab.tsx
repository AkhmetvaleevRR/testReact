import { useSelector } from "react-redux";
import { TabLink } from "../tabLink/tab-link";
import { selectRestaurantById } from "../../store/entities/restaurants/slice";
import type { RootState } from "../../store/store";

export const RestaurantTabContainer = ({ id }: { id: string }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  return <TabLink to={`/restaurants/${id}`}>{restaurant.name}</TabLink>;
};