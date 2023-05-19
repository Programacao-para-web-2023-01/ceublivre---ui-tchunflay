import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface ImageLinkInterface {
  src: StaticImageData;
  path: string;
  width: number;
  height: number;
  alt: string;
}

export default function ImageLink({
  src,
  path,
  width,
  height,
  alt,
}: ImageLinkInterface) {
  return (
    <Link href={path}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      ></Image>
    </Link>
  );
}
