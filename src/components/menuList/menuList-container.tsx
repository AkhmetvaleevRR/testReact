import { useSelector } from "react-redux";
import { useMemo } from "react";
import { selectIsAuthenticated } from "../../store/entities/users/slice";
import { MenuList } from "./menuList";
import type { RootState } from "../../store/store";

export const MenuListContainer = ({ menu }: { menu: string[] }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dishes = useSelector((state: RootState) => state.dishes.entities);
  
  const menuItems = useMemo(() => 
    menu.map(dishId => dishes[dishId]).filter(Boolean),
    [menu, dishes]
  );

  return <MenuList menu={menuItems} isAuthenticated={isAuthenticated} />;
};