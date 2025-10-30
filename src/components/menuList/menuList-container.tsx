import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/entities/users/slice";
import { MenuList } from "./menuList";

export const MenuListContainer = ({ menu }: { menu: any[] }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return <MenuList menu={menu} isAuthenticated={isAuthenticated} />;
};