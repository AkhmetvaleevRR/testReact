import { DishCounterContainer } from "../dishCounter/dishCounter-container";

export function MenuList({ menu, isAuthenticated }: { menu: any[]; isAuthenticated: boolean }) {
  return (
    <ul>
      {menu.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name} {menuItem.price}$
          {isAuthenticated && <DishCounterContainer max={5} dishId={menuItem.id} />}
        </li>
      ))}
    </ul>
  );
}