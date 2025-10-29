import { CartItemContainer } from "../cartItem/cart-item-container";

interface CartProps {
  itemsIds: string[];
}

export const Cart = ({ itemsIds }: CartProps) => {  
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {itemsIds.map((id) => (
          <li key={id}>
            <CartItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};