import Avatar from "@/components/Avatar";
import BottomSheet from "@/components/BottomSheet";
import ButtonComponent from "@/components/Button";
import {
  deleteTrainingRequest,
  getTrainingsByUser,
} from "@/services/trainingService";
import { Training, User } from "@/types";
import { decryptStrData } from "@/utils";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaExclamation } from "react-icons/fa";
import { MdChevronRight, MdMoreVert } from "react-icons/md";

export const TrainingCard = ({
  training,
  route,
  userID,
  setTrainingList,
}: {
  training: {
    id: number;
    descricao: string;
    dataCadastro: string;
    usuarioCadastro: User;
    userId: number;
    setTrainingList?: (trainingList: Training[]) => void;
  };
  route?: (training: Training) => string;
}) => {
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const deleteTraining = async () => {
    try {
      setLoading(true);

      await deleteTrainingRequest(training.id);

      getTrainingsByUser(userID).then((response) => {
        setTrainingList(response);
      });

      setVisible(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between w-full p-4 shadow-card_muscle bg-white rounded-lg">
      <div
        className="flex flex-row gap-4 items-center cursor-pointer"
        onClick={() =>
          router.push(route ? route(training) : `/meus-treinos/${training.id}`)
        }
      >
        <Avatar
          size={2.5}
          src={decryptStrData(training.usuarioCadastro.urlFoto)}
        />

        <div className="flex flex-col gap-1">
          <span className="text-black font-title_bottom_sheet text-button_primary">
            {training.descricao}
          </span>

          <span className="text-black text-button_ghost">
            {dayjs(training.dataCadastro).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} className=" m-1">
          <MdMoreVert className="w-[2rem] h-[2rem] text-icon_bottom" />
        </div>
        <div tabIndex={0} className="dropdown-content z-[1]">
          <ul
            tabIndex={0}
            className="p-2 shadow  dropdown-content z-[1] bg-base-100 rounded-md text-black"
          >
            <li
              className="p-2"
              onClick={() => {
                setVisible(true);
              }}
            >
              <span>Excluir</span>
            </li>
          </ul>
        </div>
      </div>

      <BottomSheet
        open={visible}
        closeAction={() => {
          setVisible(false);
        }}
        icon={
          <div className="flex w-16 h-16 justify-center items-center rounded-[1.5rem] bg-[#f9c459]">
            <FaExclamation className="w-8 h-8 text-white" />
          </div>
        }
        title={"Excluir treino"}
      >
        <div className="flex flex-1 justify-center items-center flex-col gap-8 pt-4">
          <span className="text-[18px] text-center text-black">
            Ao confirmar a ação o treino será excluído definitivamente!
          </span>

          <div className="flex flex-col gap-4 py-4 w-full">
            <ButtonComponent
              loading={loading}
              className="w-full btn-primary"
              onClick={deleteTraining}
            >
              Excluir
            </ButtonComponent>

            <ButtonComponent
              className="btn-outline w-full border-color-background text-black"
              onClick={() => {
                setVisible(false);
              }}
            >
              Cancelar
            </ButtonComponent>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};
