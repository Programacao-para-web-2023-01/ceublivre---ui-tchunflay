"use client";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import CarouselPrev from "./carousel_prev";
import CarouselNext from "./carousel_next";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // need to selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  const canScrollNext = !!emblaApi?.canScrollNext();

  return (
    <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {children}
          </div>
        </div>
        <CarouselPrev canScrollPrev={canScrollPrev} onPrev={()=> emblaApi?.scrollPrev()}></CarouselPrev>
        <CarouselNext canScrollNext={canScrollNext} onNext={()=> emblaApi?.scrollNext()}></CarouselNext>
      </div>
  );
};
export default Carousel;
