import DefaultContainer from "@/components/DefaultContainer";
import UserInfo from "../inicio/components/UserInfo";
import Card from "@/components/Card";
import { MdBarChart } from "react-icons/md";
import Body from "./components/Body";

const Amigos = () => {
  return (
    <DefaultContainer>
      <UserInfo />

      <Body />
    </DefaultContainer>
  );
};

export default Amigos;
