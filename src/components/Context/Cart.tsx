import { useCart } from "./CartContext";
import CartItem from "./CartItem";


export default function Cart() {
  const {
    cart,
    totalPrice,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}

      <hr />

      <h2>
        Total: ₹{totalPrice.toLocaleString()}
      </h2>

      <button onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}