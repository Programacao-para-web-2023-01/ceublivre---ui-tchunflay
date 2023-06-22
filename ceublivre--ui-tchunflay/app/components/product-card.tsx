import Link from "next/link";
import { Product } from "../models/products_props";
import Image from "next/image";
import BigSale from "../assets/bigsale.png";


export default function ProductCard(prod: Product) {
  return (
    <Link className="produto-card" href="/">
      <Image src={BigSale} alt={""} height={283} width={305} />
      <p className="nome-produto">{prod.name}</p>
      <p>R$ {prod.price}</p>
    </Link>
  );
}
