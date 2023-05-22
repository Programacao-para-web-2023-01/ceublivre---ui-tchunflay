import { AiOutlineArrowLeft } from "react-icons/ai";

type PropsPrev = {
  canScrollPrev: boolean;
  onPrev(): void;
};


const CarouselPrev = (props: PropsPrev) => {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
      >
        <AiOutlineArrowLeft size={20} />
      </button>
    </div>
  );
};

export default CarouselPrev;