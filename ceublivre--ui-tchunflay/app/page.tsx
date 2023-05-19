import { FaShoppingCart } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import IconLink from "./components/icon-link";
import { SearchBar } from "./components/search-bar";
import Image from "next/image";
import BigSale from "./assets/bigsale.jpeg";
import MostSold from "./assets/most-sold.jpg";
import News from "./assets/news.png";
import ImageLink from "./components/image-link";

export default function Home() {
  return (
    <main>
      <div className="header">
        <SearchBar />
        <div className="flex flex-row justify-evenly">
          <IconLink path={"/"} Icon={HiUserCircle} />
          <IconLink path={"/"} Icon={MdFavorite} />
          <IconLink path={"/"} Icon={FaShoppingCart} size={49} />
        </div>
      </div>
      <div className="scrollable">
        <div className="flex flex-row px-24 py-12 gap-11 justify-center ali">
          <ImageLink
            path="/"
            src={BigSale}
            alt={"Banner de Promoção"}
            width={616}
            height={536}
          ></ImageLink>
          <div className="flex flex-col gap-10">
            <ImageLink
              path="/"
              src={News}
              alt={"Banner de Promoção"}
              width={585}
              height={248}
            ></ImageLink>
            <ImageLink
              path="/"
              src={MostSold}
              alt={"Banner de Promoção"}
              width={585}
              height={248}
            ></ImageLink>
          </div>
        </div>
      </div>
    </main>
  );
}
