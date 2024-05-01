"use client";
import OptionCard from "@/components/OptionCard";
import { selectUserType, toggleIsProfessional } from "@/store/slices/authSlice";
import { store } from "@/store/store";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const OptionsList = () => {
  const isProfessional = useSelector(selectUserType);

  const router = useRouter();

  const cookies = useCookies();

  const options = [
    {
      label: "Academias vinculadas",
      action: () => router.push("/conta/academias"),
    },
    { label: "Avalie nosso app" },
    { label: "Política de privacidade" },
    { label: "Termos de utilização" },
    {
      label: "Profissional vinculado",
      action: () => router.push("/profissionais"),
      notShow: isProfessional,
    },
    {
      label: "Perfil profissional",
      action: () => store.dispatch(toggleIsProfessional()),
      notShow: isProfessional,
    },
    {
      label: "Alunos vinculados",
      action: () => router.push("/alunos"),
      notShow: !isProfessional,
    },
    {
      label: "Sair",
      action: () => {
        if (isProfessional) store.dispatch(toggleIsProfessional());
        else {
          cookies.remove("token");
          cookies.remove("user_id");
          cookies.remove("GYM_ID");
          router.push("/login");
        }
      },
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-[0.5rem]">
      {options.map(
        (option, index) =>
          !option.notShow && (
            <OptionCard
              key={index}
              title={option.label}
              onClick={option.action}
            />
          )
      )}
    </div>
  );
};

export default OptionsList;
