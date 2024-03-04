/* eslint-disable react/jsx-key */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Pagination from "./Pagination";
import ButtonComponent from "@/components/Button";
import QRCode from "react-qr-code";
import { useState } from "react";
import QrReader from "react-qr-scanner";
import { store } from "@/store/store";
import { setApiError } from "@/store/slices/globalSlice";
import Sheet from "react-modal-sheet";
import BottomSheet from "@/components/BottomSheet";
import { FaExclamation } from "react-icons/fa";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import axios from "axios";

const Body = () => {
  const [qrReader, setQrReader] = useState(false);
  const cookies = useCookies();

  const router = useRouter();

  const userId = cookies.get("user_id");

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
        <QRCode value={`/usuario/${userId}`} size={134} />
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

      <ButtonComponent
        className="btn-primary w-full"
        onClick={() => setQrReader(true)}
      >
        Scanear
      </ButtonComponent>
    </div>,
  ];

  return (
    <>
      <BottomSheet
        open={qrReader}
        closeAction={() => setQrReader(false)}
        icon={
          <div className="flex w-16 h-16 justify-center items-center rounded-[1.5rem] bg-[#f9c459]">
            <FaExclamation className="w-8 h-8 text-white" />
          </div>
        }
        title={"Acesso"}
      >
        <div className="flex flex-1 justify-center items-center flex-col gap-8 pt-4">
          <span className="text-[18px] text-center">
            Aproxime-se do Qr Code de perfil do seu amigo e escaneie o código
            para se acessar seus treinos
          </span>

          <QrReader
            className="border rounded-lg items-center justify-center flex w-[250px] max-h-[250px] max-w-[250px]"
            delay={200}
            onError={(e) => {
              store.dispatch(setApiError("QR code inválido!"));
              setQrReader(false);
            }}
            onScan={async (result) => {
              if (result) {
                try {
                  const data = await axios.post(result.text, {
                    param: 1,
                  });

                  router.push(result.text);
                  setQrReader(false);
                } catch (error) {
                  store.dispatch(setApiError("QR code inválido!"));
                }
              }
            }}
            style={{ padding: 0, margin: 0, lineHeight: 0 }}
          />
        </div>
      </BottomSheet>

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
    </>
  );
};

export default Body;
