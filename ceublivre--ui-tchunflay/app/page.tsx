import BigSale from "./assets/bigsale.png";
import MostSold from "./assets/most-sold.jpg";
import News from "./assets/news.png";
import CarouselCard from "./components/carousel-card";
import CategoryCarousel from "./components/category-carousel";
import ImageLink from "./components/image-link";
import { CarouselCardProps } from "./models/carousel_card_props";

export default function Home() {
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
      <div className="px-24">
        <div className="flex py-12 flex-row gap-11 justify-center">
          <ImageLink
            path="/products"
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
          <CategoryCarousel loop slidesToScroll={"auto"}>
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
          <CategoryCarousel loop slidesToScroll={"auto"}>
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
          <CategoryCarousel slidesToScroll={"auto"} loop>
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

        <div className="py-9">
          <ImageLink
            src={MostSold}
            path={"/"}
            width={1360}
            height={248}
            alt={"Banner de mais vendidos"}
          />
        </div>
      </div>
    </main>
  );
}
