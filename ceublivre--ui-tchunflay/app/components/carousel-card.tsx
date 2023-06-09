import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CarouselCardProps } from "../models/carousel_card_props";



export default function CarouselCard({ img, name }: CarouselCardProps) {
  return (
    <Link href={"/"}>
      <div className="flex flex-col w-[254px] h-[288px] items-center gap-4 p-12 hover:underline">
        <div>
          <Image src={img} alt={name} height={196} className="rounded-[50%]" />
        </div>
        <div>{name}</div>
      </div>
    </Link>
  );
}
