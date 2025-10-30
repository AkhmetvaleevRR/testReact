import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { addItem, removeItem, selectCartItemAmountById } from "../../store/entities/cart/slice";
import { DishCounter } from "./dishCounter";

interface DishCounterContainerProps {
  max: number;
  dishId: string;
}

export const DishCounterContainer = ({ max, dishId }: DishCounterContainerProps) => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => selectCartItemAmountById(state, dishId));

  const handleIncrement = () => {
    if (count < max) {
      dispatch(addItem(dishId));
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(removeItem(dishId));
    }
  };

  return (
    <DishCounter
      max={max}
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
};