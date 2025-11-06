import { useSelector } from "react-redux";
import { selectDishById } from "../../store/entities/dishes/slice";
import { MenuItem } from "./menu-item";
import type { RootState } from "../../store/store";

export const MenuItemContainer = ({ dishId, isAuthenticated }: { dishId: string; isAuthenticated: boolean }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <MenuItem dish={dish} isAuthenticated={isAuthenticated} />;
};