import { useSwiperSlide } from "swiper/react";

const Pagination = ({ index, list }: { index: number; list?: any[] }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div className="flex w-full items-center flex-row justify-center gap-1 pb-[2.5rem] mt-[1rem]">
      {list
        ? list.map((item, indexInternal) => (
            <div
              key={item}
              className={
                swiperSlide.isActive && index === indexInternal
                  ? "h-[4px] w-[36px] rounded bg-color-primary"
                  : "h-[4px] w-[16px] rounded bg-pagination-disabled"
              }
            />
          ))
        : [0, 1].map((item) => (
            <div
              key={item}
              className={
                swiperSlide.isActive && index === item
                  ? "h-[4px] w-[36px] rounded bg-color-primary"
                  : "h-[4px] w-[16px] rounded bg-pagination-disabled"
              }
            />
          ))}
    </div>
  );
};

export default Pagination;
