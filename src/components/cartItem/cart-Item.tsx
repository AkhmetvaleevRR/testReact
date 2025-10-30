interface CartItemProps {
  amount: number;
  dishName: string;
  dishId: string;
}

export const CartItem = ({ amount, dishName }: CartItemProps) => {
  return (
    <span>
      {dishName} - {amount}
    </span>
  );
};