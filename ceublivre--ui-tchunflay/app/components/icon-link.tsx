import Link from "next/link";
import { IconLinkProps } from "../models/icon_link_props";

export default function IconLink({ Icon, path, size }: IconLinkProps) {
  return (
    <Link href={path}>
      <Icon size={size ? size : 53} color="white" />
    </Link>
  );
}
