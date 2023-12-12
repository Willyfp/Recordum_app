"use client";

import Pagination from "@/app/amigos/components/Pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const SliderMeasures = () => {
  const componentsList = [
    <div className="flex flex-col gap-[0.25rem]">
      <p className="text-black font-semibold text-description">Peso</p>
      <p className="text-black font-description text-button_primary">
        Crie a melhor forma de treinar e de acompanhar o seu progresso.
      </p>
    </div>,
    <div className="flex flex-col gap-[0.25rem]">
      <p className="text-black font-semibold text-description">Medidas</p>
      <p className="text-black font-description text-button_primary">
        Os dados servem para um controle mais assertivo no seu processo de
        desenvolvimento muscular.
      </p>
    </div>,
    <div className="flex flex-col gap-[0.25rem]">
      <p className="text-black font-semibold text-description">% de Gordura</p>
      <p className="text-black font-description text-button_primary">
        Crie a melhor forma de treinar e de acompanhar o seu progresso.
      </p>
    </div>,
  ];

  return (
    <Swiper
      className="max-w-full"
      loop={false}
      spaceBetween={36}
      grabCursor
      direction="horizontal"
    >
      {componentsList.map((component, index) => (
        <SwiperSlide className=" bg-primary_bg px-[1.5rem]" key={index}>
          <Pagination index={index} list={componentsList} />
          {component}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
