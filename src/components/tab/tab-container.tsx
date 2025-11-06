import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantById, selectActiveRestaurantId, setActiveRestaurant } from "../../store/entities/restaurants/slice";
import { Tab } from "./tab";
import type { RootState } from "../../store/store";

interface TabContainerProps {
  id: string;
}

export const TabContainer = ({ id }: TabContainerProps) => {
  const dispatch = useDispatch();
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));
  const activeRestaurantId = useSelector(selectActiveRestaurantId);

  if (!restaurant) {
    return null;
  }

  const handleClick = () => {
    dispatch(setActiveRestaurant(id));
  };

  return <Tab name={restaurant.name} isActive={activeRestaurantId === id} id={id} onClick={handleClick} />;
};