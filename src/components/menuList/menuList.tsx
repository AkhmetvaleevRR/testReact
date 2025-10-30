import type { MenuItem } from "../../../types/restaurant";
import { DishCounterContainer } from "../dishCounter/dishCounter-container";

export function MenuList({ menu, isAuthenticated }: { menu: MenuItem[]; isAuthenticated: boolean }) {

  return (
    <ul>
      {menu.length &&
        menu.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name} {menuItem.price}$
            {isAuthenticated && <DishCounterContainer max={5} dishId={menuItem.id} />}
          </li>
        ))}
    </ul>
  );
}
