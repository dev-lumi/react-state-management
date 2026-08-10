import { useCart } from "./CartContext";





interface NavbarProps {
  page: "products" | "cart";
  setPage: (page: "products" | "cart") => void;
}

export default function Navbar({
  page,
  setPage,
}: NavbarProps) {
  const { cartCount } = useCart();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>My Shop</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setPage("products")}
          disabled={page === "products"}
        >
          Products
        </button>

        <button
          onClick={() => setPage("cart")}
          disabled={page === "cart"}
        >
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}