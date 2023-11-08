import ButtonComponent from "@components/Button";
import TextField from "@components/TextField";
import Image from "next/image";
import { Steps } from "./components/Steps";

export default function Recuperar() {
  return (
    <div className="flex min-h-screen p-[1.5rem] bg-primary_bg">
      <div className="flex flex-1 flex-col gap-[0.5rem]">
        <p className="text-description font-semibold">Redefinição de senha</p>

        <Steps />
      </div>
    </div>
  );
}
