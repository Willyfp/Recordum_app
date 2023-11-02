import ButtonComponent from "@components/Button";
import TextField from "@components/TextField";
import Image from "next/image";
import FormFields from "./components/FormFields";

export default function Cadastro() {
  return (
    <div className="flex min-h-screen p-[1.5rem] bg-white">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-1 justify-center items-center">
          <Image
            src="/images/logo_recordum_dark.png"
            alt="Logo Recordum"
            width={120}
            height={120}
          />
        </div>
        <FormFields />
      </div>
    </div>
  );
}
