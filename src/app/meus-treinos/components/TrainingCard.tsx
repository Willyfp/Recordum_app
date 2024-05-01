import Avatar from "@/components/Avatar";
import { Training, User } from "@/types";
import { decryptStrData } from "@/utils";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { MdChevronRight } from "react-icons/md";

export const TrainingCard = ({
  training,
  route,
}: {
  training: {
    id: number;
    descricao: string;
    dataCadastro: string;
    usuarioCadastro: User;
  };
  route?: (training: Training) => string;
}) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-row items-center justify-between w-full p-4 shadow-card_muscle bg-white rounded-lg cursor-pointer"
      onClick={() =>
        router.push(route ? route(training) : `/meus-treinos/${training.id}`)
      }
    >
      <div className="flex flex-row gap-4 items-center">
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

      <MdChevronRight className="w-[2rem] h-[2rem] text-icon_bottom" />
    </div>
  );
};
