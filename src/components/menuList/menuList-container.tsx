import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { MenuList } from "./menuList";

export const MenuListContainer = ({ menu }: { menu: any[] }) => {
  const isAuthenticated = useSelector((state: RootState) => state.users.isAuthenticated);

  return <MenuList menu={menu} isAuthenticated={isAuthenticated} />;
};