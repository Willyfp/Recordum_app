import DefaultContainer from "@/components/DefaultContainer";
import EditableAvatar from "@/components/EditableAvatar";
import Header from "@/components/Header";
import TextField from "@/components/TextField";
import FormFields from "./components/FormFields";
import ChangePhoto from "./components/ChangePhoto";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slices/authSlice";

const Editar = () => {
  return (
    <DefaultContainer>
      <Header title="Dados pessoais" />

      <ChangePhoto />

      <div className="flex flex-col gap-[1rem] px-[1.5rem] pb-[1.5rem]">
        <FormFields />
      </div>
    </DefaultContainer>
  );
};

export default Editar;
