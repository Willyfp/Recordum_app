"use client";
import BottomSheet from "@/components/BottomSheet";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaExclamation } from "react-icons/fa";
import QrReader from "react-qr-scanner";
import { MdWifi, MdWifiOff } from "react-icons/md";
import { store } from "@/store/store";
import { setApiError, setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { connectToEquipment } from "@/services/trainingService";
import { useCookies } from "next-client-cookies";

const Equipments = () => {
  const cookies = useCookies();

  const router = useRouter();

  const userId = cookies.get("user_id");

  const [isConnection, setIsConnection] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-1 flex-col p-[1.5rem] gap-[1rem] bg-primary_bg">
      <div className="flex flex-col gap-[0.25rem]">
        <p className="font-semibold text-black text-description">Aparelhos</p>
        <p className="font-description text-black text-button_primary">
          Para praticar sem um treino definido
        </p>
      </div>

      <div className="flex  gap-[0.5rem]">
        <Card
          icon={<MdWifi className="text-black h-[1.25rem] w-[1.25rem]" />}
          title="Aparelhos com conexão"
          onClick={() => setIsConnection(true)}
        />

        <Card
          icon={<MdWifiOff className="text-black h-[1.25rem] w-[1.25rem]" />}
          title="Aparelhos sem conexão"
          onClick={() => router.push("/sem-conexao")}
        />
      </div>

      <BottomSheet
        open={isConnection}
        closeAction={() => setIsConnection(false)}
        icon={
          <div className="flex w-16 h-16 justify-center items-center rounded-[1.5rem] bg-[#f9c459]">
            <FaExclamation className="w-8 h-8 text-white" />
          </div>
        }
        title={"Acesso"}
      >
        <div className="flex flex-1 justify-center items-center flex-col gap-8 pt-4">
          <span className="text-[18px] text-center">
            Aproxime-se do equipamento e escaneie o código para se conectar ao
            aparelho
          </span>

          <QrReader
            className="border rounded-lg items-center justify-center flex w-[250px] max-h-[250px] max-w-[250px]"
            delay={200}
            onError={(e) => {
              store.dispatch(setApiError("QR code inválido!"));
            }}
            onScan={async (result) => {
              if (result) {
                try {
                  if (!loading) {
                    setLoading(true);
                    await connectToEquipment(result.text, userId);

                    setIsConnection(false);

                    store.dispatch(
                      setSuccessBottomSheet({
                        open: true,
                        title: "Conectado",
                        description:
                          "Conectado com sucesso! Clique para iniciar os exercícios",
                        buttonText: "OK",
                        buttonAction: () => {},
                        closeAction: () => {},
                      })
                    );
                    setLoading(false);
                  }
                } catch (error) {
                  store.dispatch(setApiError("QR code inválido!"));
                  setLoading(false);
                }
              }
            }}
            style={{ padding: 0, margin: 0, lineHeight: 0 }}
          />
        </div>
      </BottomSheet>
    </div>
  );
};

export default Equipments;
