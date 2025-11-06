import { DishCounterContainer } from "../dishCounter/dishCounter-container";
import { Link } from "react-router";

interface MenuItemProps {
  dish: {
    id: string;
    name: string;
    price: number;
  };
  isAuthenticated: boolean;
}

export const MenuItem = ({ dish, isAuthenticated }: MenuItemProps) => {
  return (
    <>
      <Link to={`/dish/${dish.id}`}>
        {dish.name} ${dish.price}
      </Link>
      {isAuthenticated && <DishCounterContainer max={5} dishId={dish.id} />}
    </>
  );
};