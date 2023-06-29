import Link from "next/link";
import { Product } from "../models/products_props";
import Image from "next/image";
import BigSale from "../assets/bigsale.png";
import { MdStarRate } from "react-icons/md";

const imageStyle = {
 height: '283px',
 width: '305px',
}


export default function ProductCard(prod: Product) {
  return (
    <Link className="produto-card" href="/">
      <Image src={prod.image} alt={""} height={283} width={305} style={imageStyle} />
      <p className="nome-produto">{prod.p_name}</p>
      <p className="flex align-center text-[12px] gap-1"><MdStarRate size={14}/> {prod.rate}</p>
      <p>R$ {prod.price}</p>
    </Link>
  );
}
