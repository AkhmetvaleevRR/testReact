import { CartItemContainer } from "../cartItem/cart-item-container";

interface CartProps {
  itemsIds: string[];
}

export const Cart = ({ itemsIds }: CartProps) => {
  const uniqueIds = [...new Set(itemsIds)];
  
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {uniqueIds.map((id) => (
          <li key={id}>
            <CartItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};