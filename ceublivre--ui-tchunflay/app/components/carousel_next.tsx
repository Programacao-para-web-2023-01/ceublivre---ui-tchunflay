import { AiOutlineArrowRight } from "react-icons/ai";

type PropsNext = {
    canScrollNext: boolean;
    onNext(): void;
  };
  
const CarouselNext = (props: PropsNext) => {
    return (
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
      >
        <AiOutlineArrowRight size={20} />
      </button>
    );
  };
  
export default CarouselNext;