import ButtonComponent from "@components/Button";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useSwiper, useSwiperSlide } from "swiper/react";

const Pagination = ({ index }: { index: number }) => {
  const swiper = useSwiper();

  const swiperSlide = useSwiperSlide();

  const cookies = useCookies();

  const router = useRouter();

  return (
    <div
      className="flex  items-center flex-col gap-1 flex-1 absolute bottom-0 w-full px-4 py-4"
      slot="container-end"
    >
      <div className="flex w-full items-center flex-row justify-center gap-1">
        {[0, 1, 2].map((item) => (
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

      <ButtonComponent
        className="text-secondary btn-ghost text-button_ghost"
        onClick={() => {
          if (index === 2) {
            cookies.set("alreadyAccess", "true");
            router.push("/home");
          } else {
            swiper.slideNext();
          }
        }}
      >
        Pular
      </ButtonComponent>
    </div>
  );
};

export default Pagination;
