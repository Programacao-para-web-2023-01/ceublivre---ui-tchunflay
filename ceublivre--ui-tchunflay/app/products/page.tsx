"use client";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import { getCategories } from "../getCategories";
import { Category } from "../models/category";
import { Product } from "../models/products_props";

async function getAllProducts(): Promise<any> {
  const response = await fetch("api/products/all");

  return response.json();
}

async function getProducts(params: ReadonlyURLSearchParams) {
  const response = await fetch(`api/products?name=${params.get("name")}`);

  return response.json();
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const params = useSearchParams();

  useEffect(() => {
    const ctgs = getCategories();
    ctgs.then((data) => setCategories(data));

    if (Array.from(params.values()).length != 0) {
      const prods = getProducts(params);
      prods.then((data) => setProducts(data));
    } else {
      const prods = getAllProducts();
      prods.then((data) => setProducts(data));
    }
  }, []);

  return (
    <main>
      {products.length == 0 || categories.length == 0 ? (
        <div className="relative left-[50%] py-[15%]">
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <div className="flex">
          <div>
            <div className="pl-[12px] mt-[24px]">
              <FormGroup>
                {categories.map((ctg) => (
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={ctg.C_name}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
          <div className="produtos">
            {products.map((p) => (
              <ProductCard
                id={p.id}
                key={p.id}
                category={p.category}
                brand={p.p_name}
                p_name={p.p_name}
                description={p.description}
                rate={p.rate}
                price={p.price}
                image={p.image}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
