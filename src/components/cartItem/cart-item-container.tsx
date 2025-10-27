import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { selectCartItemAmountById } from "../../store/entities/cart/slice";
import { selectDishById } from "../../store/entities/dishes/slice";
import { CartItem } from "./cart-Item";

interface CartItemContainerProps {
  id: string;
}

export const CartItemContainer = ({ id }: CartItemContainerProps) => {
  const amount = useSelector((state: RootState) => selectCartItemAmountById(state, id));
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return (
    <CartItem amount={amount} dishName={dish.name} dishId={id} />
  );
};