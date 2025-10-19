import type { MenuItem } from "../../../types/restaurant";
import { useUser } from "../../contexts/UserContext";
import { DishCounter } from "../dishCounter/dishCounter";

export function MenuList({ menu }: { menu: MenuItem[] }) {
  const { isAuthenticated } = useUser();

  return (
    <ul>
      {menu.length &&
        menu.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name} {menuItem.price}$
            {isAuthenticated && <DishCounter max={5} initialValue={0} />}
          </li>
        ))}
    </ul>
  );
}
