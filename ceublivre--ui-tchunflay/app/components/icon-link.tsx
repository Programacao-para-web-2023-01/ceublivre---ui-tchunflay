import Link from "next/link";
import { IconType } from "react-icons";

interface IconLinkInterface{
    Icon: IconType,
    path: string,
    size?: number
}

export default function IconLink({Icon, path, size}: IconLinkInterface) {
    return (
        <Link href={path}>
            <Icon size={size? size : 53} color="white"/>
        </Link>
    );
}