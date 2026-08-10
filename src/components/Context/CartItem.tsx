import { useCart } from "./CartContext";
import type { CartItem as CartItemType } from "../../types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{item.name}</h3>

      <p>
        ₹{item.price.toLocaleString()} × {item.quantity}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button onClick={() => decreaseQuantity(item.id)}>
          -
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id)}>
          +
        </button>

        <button onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>

      <p>
        Subtotal: ₹
        {(item.price * item.quantity).toLocaleString()}
      </p>
    </div>
  );
}