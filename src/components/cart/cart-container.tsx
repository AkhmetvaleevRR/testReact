import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { selectCartItemsIds, selectCartTotal } from "../../store/entities/cart/slice";
import { Cart } from "./cart";

export const CartContainer = () => {
  const itemsIds = useSelector((state: RootState) => selectCartItemsIds(state));
  const total = useSelector((state: RootState) => selectCartTotal(state));

  if (!itemsIds.length) {
    return null;
  }

  return <Cart itemsIds={itemsIds} total={total} />;
};