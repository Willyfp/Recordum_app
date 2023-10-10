import ButtonComponent from "@components/Button";
import TextField from "@components/TextField";
import Image from "next/image";

export default function Cadastro() {
  return (
    <div className="flex min-h-screen p-[1.5rem] bg-white">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-1 justify-center items-center">
          <Image
            src="/images/logo_recordum_dark.svg"
            alt="Logo Recordum"
            width={120}
            height={120}
          />
        </div>

        <div className="flex h-[70%] w-full gap-[16px] flex-col">
          <div className="flex flex-1 flex-col gap-[16px]">
            <TextField
              className="input-bordered border-color-background"
              labelStyle="text-black"
              label="E-mail"
              type="email"
              placeholder="Digite aqui seu e-mail"
            />

            <TextField
              className="input-bordered border-color-background"
              labelStyle="text-black"
              label="Confirmar E-mail"
              type="email"
              placeholder="Confirme aqui seu e-mail"
            />

            <TextField
              className="input-bordered border-color-background"
              labelStyle="text-black"
              label="Senha"
              type="password"
              placeholder="Digite aqui sua senha"
            />

            <TextField
              className="input-bordered border-color-background"
              labelStyle="text-black"
              label="Confirmar senha"
              type="password"
              placeholder="Confirme aqui sua senha"
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <div className="flex-1">
              <ButtonComponent className="w-full btn-primary">
                Cadastrar
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
