import { FaShoppingCart } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import BigSale from "./assets/bigsale.png";
import MostSold from "./assets/most-sold.jpg";
import News from "./assets/news.png";
import IconLink from "./components/icon-link";
import ImageLink from "./components/image-link";
import { SearchBar } from "./components/search-bar";
import { CarouselCardProps } from "./models/carousel_card_props";
import CategoryCarousel from "./components/category-carousel";
import CarouselCard from "./components/carousel-card";

export default function Home() {
  let x = 0;
  const categories: CarouselCardProps[] = [
    {
      id: 0,
      img: BigSale,
      name: `categoria 0`,
    },
    {
      id: 1,
      img: BigSale,
      name: "categoria 1",
    },
    {
      id: 2,
      img: BigSale,
      name: "categoria 2",
    },
    {
      id: 2,
      img: BigSale,
      name: "categoria 3",
    },
    {
      id: 3,
      img: BigSale,
      name: "categoria 4",
    },
    {
      id: 4,
      img: BigSale,
      name: "categoria 5",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
    {
      id: 5,
      img: BigSale,
      name: "categoria 6",
    },
  ];

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
        <div className="flex flex-row px-24 py-12 gap-11 justify-center">
          <ImageLink
            path="/"
            src={BigSale}
            alt={"Banner de promoção"}
            width={616}
            height={536}
          ></ImageLink>

          <div className="flex flex-col gap-10">
            <ImageLink
              path="/"
              src={News}
              alt={"Banner de novidades"}
              width={585}
              height={248}
            ></ImageLink>
            <ImageLink
              path="/"
              src={MostSold}
              alt={"Banner de mais vendidos"}
              width={585}
              height={248}
            ></ImageLink>
          </div>
        </div>

        <div className="text-4xl">Categorias</div>

        <div className="self-center flex flex-row">
          <CategoryCarousel loop slidesToScroll={'auto'}>
            {categories.map((ctg, i) => {
              return (
                <CarouselCard
                  key={i}
                  id={ctg.id}
                  img={ctg.img}
                  name={ctg.name}
                ></CarouselCard>
              );
            })}
          </CategoryCarousel>
        </div>

        <div className="text-4xl">Recomendados</div>

        <div className="self-center flex flex-row">
          <CategoryCarousel loop>
            {categories.map((ctg, i) => {
              return (
                <CarouselCard
                  id={ctg.id}
                  img={ctg.img}
                  name={ctg.name}
                ></CarouselCard>
              );
            })}
          </CategoryCarousel>
        </div>

        <div className="text-4xl">Ofertas do Dia</div>

        <div className="self-center flex flex-row">
          <CategoryCarousel slidesToScroll={5} loop={false}>
            {categories.map((ctg, i) => {
              return (
                <CarouselCard
                  key={i}
                  id={ctg.id}
                  img={ctg.img}
                  name={ctg.name}
                ></CarouselCard>
              );
            })}
          </CategoryCarousel>
        </div>
      </div>
    </main>
  );
}
