"use client";
import React from "react";
import Carousel from "../../components/Carousel";
import { InitialImage } from "./InitialImage";
import { SwiperSlide } from "swiper/react";
import PaginationInitial from "./Pagination";
import ButtonComponent from "@components/Button";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

const InitialCarousel = () => {
  const router = useRouter();
  const cookies = useCookies();

  const imagesList = [
    {
      src: "bg-first_access_1",
      alt: "Gerencie seus treinos",
      title: (
        <h1 className="text-initial_title text-white text-center mb-4">
          GERENCIE SEUS <strong>TREINOS</strong>
        </h1>
      ),
    },
    {
      src: "bg-first_access_2",
      alt: "Controle sua evolução",
      title: (
        <h1 className="text-initial_title text-white text-center mb-4">
          CONTROLE SUA <strong>EVOLUÇÃO</strong>
        </h1>
      ),
    },
    {
      src: "bg-first_access_3",
      alt: "Conecte-se com sua academia e amigos",
      title: (
        <h1 className="text-initial_title text-white text-center mb-4">
          CONECTE-SE COM SUA <strong>ACADEMIA</strong> E <strong>AMIGOS</strong>
        </h1>
      ),
    },
  ];

  return (
    <Carousel>
      {imagesList.map((image, index) => (
        <SwiperSlide
          key={image.src}
          className="flex bg-color-background relative"
        >
          <InitialImage src={image.src} />
          <div className="flex flex-col flex-1 px-[24px]">
            {image.title}
            {index === 2 && (
              <ButtonComponent
                className="btn-primary w-full"
                onClick={() => {
                  cookies.set("alreadyAccess", "true");
                  router.push("/home");
                }}
              >
                Comece agora
              </ButtonComponent>
            )}
          </div>
          <PaginationInitial index={index} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default InitialCarousel;
