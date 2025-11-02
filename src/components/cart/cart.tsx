import { CartItemContainer } from "../cartItem/cart-item-container";

interface CartProps {
  itemsIds: string[];
  total: number;
}

export const Cart = ({ itemsIds, total }: CartProps) => {  
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
      <div>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};