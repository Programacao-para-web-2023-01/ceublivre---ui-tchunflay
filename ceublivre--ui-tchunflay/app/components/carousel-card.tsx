import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CarouselCardProps } from "../models/carousel_card_props";

const imageStyle = {
  height: '196px',
  width: '196px',
  borderRadius: '50%'
 }
 

export default function CarouselCard({ img, name }: CarouselCardProps) {
  return (
    <Link href={"/"}>
      <div className="flex flex-col w-[254px] h-[288px] items-center gap-4 p-12 hover:underline">
        <div>
          <Image src={img} alt={name} height={196} width={196} style={imageStyle} />
        </div>
        <div>{name}</div>
      </div>
    </Link>
  );
}
