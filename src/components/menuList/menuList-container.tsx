import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { selectIsAuthenticated } from "../../store/entities/users/slice";
import { MenuList } from "./menuList";

export const MenuListContainer = ({ menu }: { menu: any[] }) => {
  const isAuthenticated = useSelector((state: RootState) => selectIsAuthenticated(state));

  return <MenuList menu={menu} isAuthenticated={isAuthenticated} />;
};