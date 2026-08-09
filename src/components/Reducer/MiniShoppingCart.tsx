import { useReducer } from "react";

// 1.product type
type Product = {
  id: number;
  name: string;
  price: number;
};
// 2.cart item type
type CartItem = Product & {
  quantity: number;
};

// 3.actions
type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE"; payload: number }
  | { type: "DECREASE"; payload: number };

// 4.products
const products: Product[] = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Banana", price: 30 },
  { id: 3, name: "Milk", price: 60 },
  { id: 4, name: "Bread", price: 40 },
  { id: 5, name: "Pappaya", price: 50 },
];

// 5.reducer
function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    case "DECREASE":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
}

// 6.component
function MiniShoppingCart() {
  const [cart, dispatch] = useReducer(reducer, []);

  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="h-screen">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              {product.name} - ₹{product.price}
            </span>{" "}
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <div className=" h-40 overflow-y-scroll">
        <ul className="">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} - ₹{item.price} × {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: item.id })
                  }
                >
                  -
                </button>
                <span> {item.quantity} </span>

                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE",
                      payload: item.id,
                    })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: item.id,
                    })
                  }
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <h2>Total : ₹{total}</h2>
    </div>
  );
}

export default MiniShoppingCart;
