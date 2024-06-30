import type { Dispatch, SetStateAction } from "react";

type TestimonialIndicatorProps = {
  data: any[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

const TestimonialIndicator = ({
  data,
  activeIndex,
  setActiveIndex,
}: TestimonialIndicatorProps) => {
  return (
    <div className="flex justify-center space-x-2">
      {data?.map((_, index) => {
        return (
          <div
            onClick={() => {
              setActiveIndex(index);
              console.log(
                `💻 ~ file: Indicator.tsx:17 ~ {data?.map ~ index:`,
                index,
              );
            }}
            key={index}
            className={`w-2 h-2 cursor-pointer rounded-full ${activeIndex === index ? "bg-primary" : "bg-[#d9d9d9]"}`}
          />
        );
      })}
    </div>
  );
};

export default TestimonialIndicator;
