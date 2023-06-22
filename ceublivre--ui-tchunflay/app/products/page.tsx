"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import { Product } from "../models/products_props";

async function getProducts(): Promise<any> {
  const response = await fetch("api/products");
  return response.json();
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const data = getProducts();
    data.then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <div className="produtos">
        {products.map((p) => (
          <ProductCard
            id={p.id}
            category={p.category}
            brand={p.name}
            name={p.name}
            description={p.description}
            rate={null}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>

    </main>
  );
}
