import { DishCounterContainer } from "../dishCounter/dishCounter-container";
import { Link } from "react-router";

export function MenuList({ menu, isAuthenticated }: { menu: any[]; isAuthenticated: boolean }) {
  return (
    <ul>
      {menu.map((menuItem) => (
        <li key={menuItem.id}>
          <Link to={`/dish/${menuItem.id}`}>
            {menuItem.name} {menuItem.price}$
          </Link>
          {isAuthenticated && <DishCounterContainer max={5} dishId={menuItem.id} />}
        </li>
      ))}
    </ul>
  );
}