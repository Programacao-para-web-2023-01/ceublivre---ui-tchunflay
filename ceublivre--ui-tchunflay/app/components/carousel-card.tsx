import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CarouselCardProps } from "../models/carousel_card_props";



export default function CarouselCard({ img, name }: CarouselCardProps) {
  return (
    <Link href={"/"}>
      <div className="flex flex-col w-[205px] h-[239] items-center gap-4">
        <div>
          <Image src={img} alt={name} height={196} className="rounded-[50%]" />
        </div>
        <div>{name}</div>
      </div>
    </Link>
  );
}
