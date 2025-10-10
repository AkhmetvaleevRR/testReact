import type { MenuItem } from "../../../types/restaurant";
import { Counter } from "../counter/counter";

export function MenuList({ menu }: { menu: MenuItem[] }) {
  return (
    <ul>
      {menu.length &&
        menu.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name} {menuItem.price}$
            <Counter max={5} />
          </li>
        ))}
    </ul>
  );
}
