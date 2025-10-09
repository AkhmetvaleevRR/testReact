import type { MenuItem } from "../../../types/restaraunt";
import { Counter } from "../counter/counter";

export function MenuList({ menu }: { menu: MenuItem[] }) {
  return (
    <>
      {menu.length && (
        <ul>
          {menu.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.name} {menuItem.price}$
              <Counter max={5} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
