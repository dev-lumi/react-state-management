import { useState } from "react";
import { CartProvider } from "./components/Context/CartContext";
import Navbar from "./components/Context/Navbar";
import Products from "./components/Context/Products";
import Cart from "./components/Context/Cart";



type Page = "products" | "cart";

export default function App() {
  const [page, setPage] = useState<Page>("products");

  return (
    <CartProvider>
      <Navbar
        page={page}
        setPage={setPage}
      />

      {page === "products" ? (
        <Products />
      ) : (
        <Cart />
      )}
    </CartProvider>
  );
}