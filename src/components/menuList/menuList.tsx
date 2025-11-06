import { MenuItemContainer } from "../menuItem/menu-item-container";

export function MenuList({ menuIds, isAuthenticated }: { menuIds: string[]; isAuthenticated: boolean }) {
  return (
    <ul>
      {menuIds.map((dishId) => (
        <li key={dishId}>
          <MenuItemContainer dishId={dishId} isAuthenticated={isAuthenticated} />
        </li>
      ))}
    </ul>
  );
}