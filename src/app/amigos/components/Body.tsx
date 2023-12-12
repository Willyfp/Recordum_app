/* eslint-disable react/jsx-key */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Pagination from "./Pagination";
import ButtonComponent from "@/components/Button";
import QRCode from "react-qr-code";

const Body = () => {
  const componentsList = [
    <div className="flex flex-col gap-[1.5rem] justify-center items-center">
      <div className="flex flex-col gap-[0.25rem]">
        <p className="text-black font-semibold text-description">
          Compartilhe com amigos
        </p>
        <p className="text-black font-description text-button_primary">
          Compartilhe seus treinos ou adicione treinos de amigos ou
          profissionais!
        </p>
      </div>

      <div className="p-[0.5rem] border rounded-[5px] border-qrCode">
        <QRCode value="https://www.google.com" size={134} />
      </div>

      <p className="text-black font-description text-button_primary">
        Utilize o Qr Code ou compartilhe seus treinos pelo seu código de
        usuário.
      </p>
    </div>,
    <div className="flex flex-col gap-[1.5rem]">
      <div className="flex flex-col gap-[0.25rem]">
        <p className="text-black font-semibold text-description">
          Acesse outros treinos
        </p>
        <p className="text-black font-description text-button_primary">
          Gostou do treino do amigo e quer testar? Basta scanear o Qr Code dele
          e visualizar todos os treinos e se quiser ainda você pode salvar!
        </p>
      </div>

      <ButtonComponent className="btn-primary w-full">Scanear</ButtonComponent>
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
          <Pagination index={index} />
          {component}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Body;
