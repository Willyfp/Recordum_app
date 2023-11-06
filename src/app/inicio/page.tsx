import DefaultContainer from "@/components/DefaultContainer";
import UserInfo from "./components/UserInfo";
import Training from "./components/Training";
import Equipments from "./components/Equipments";

export default function Inicio() {
  return (
    <DefaultContainer>
      <UserInfo />
      <Training />
      <Equipments />
    </DefaultContainer>
  );
}
