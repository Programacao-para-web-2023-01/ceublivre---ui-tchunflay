import Image from "next/image";
import Link from "next/link";
import { ImageLinkProps } from "../models/image_link_props";

export default function ImageLink({
  src,
  path,
  width,
  height,
  alt,
}: ImageLinkProps) {
  return (
    <Link href={path}>
      <Image src={src} alt={alt} width={width} height={height}></Image>
    </Link>
  );
}
