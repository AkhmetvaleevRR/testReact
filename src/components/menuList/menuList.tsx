import type { MenuItem } from "../../../types/restaurant";
import { DishCounter } from "../dishCounter/dishCounter";

export function MenuList({ menu }: { menu: MenuItem[] }) {
  return (
    <ul>
      {menu.length &&
        menu.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name} {menuItem.price}$
            <DishCounter
              max={5}
              initialValue={0}
            />
          </li>
        ))}
    </ul>
  );
}
