import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { selectRestaurantById } from "../../store/entities/restaurants/slice";
import { RestaurantItem } from "./restaurant";

export const RestaurantContainer = ({ id }: { id: string }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));
  
  if (!restaurant) {
    return null;
  }

  return <RestaurantItem restaurant={restaurant} />;
};