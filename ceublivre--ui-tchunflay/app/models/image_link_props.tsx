import { StaticImageData } from "next/image";

export interface ImageLinkProps {
  src: StaticImageData;
  path: string;
  width: number;
  height: number;
  alt: string;
}
