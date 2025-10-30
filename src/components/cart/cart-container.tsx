import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { selectCartItemsIds } from "../../store/entities/cart/slice";
import { Cart } from "./cart";

export const CartContainer = () => {
  const itemsIds = useSelector((state: RootState) => selectCartItemsIds(state));

  if (!itemsIds.length) {
    return null;
  }

  return <Cart itemsIds={itemsIds} />;
};