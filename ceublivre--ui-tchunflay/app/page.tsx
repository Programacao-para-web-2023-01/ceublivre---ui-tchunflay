"use client"
import { useEffect, useState } from "react";
import BigSale from "./assets/bigsale.png";
import MostSold from "./assets/most-sold.jpg";
import News from "./assets/news.png";
import CarouselCard from "./components/carousel-card";
import CategoryCarousel from "./components/category-carousel";
import ImageLink from "./components/image-link";
import { Category } from "./models/category";
import { getCategories } from "./getCategories";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const data = getCategories();
    data.then((data) => setCategories(data));
  });

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
                  name={ctg.C_name}
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
