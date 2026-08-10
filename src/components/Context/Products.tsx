import type { Product } from "../../types";
import ProductCard from "./ProductCard";


const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Mouse",
    price: 1000,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 2000,
  },
  {
    id: 4,
    name: "Headphones",
    price: 3000,
  },
  {
    id: 5,
    name: "Monitor",
    price: 15000,
  },
];

export default function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}