"use client";
import ButtonComponent from "@/components/Button";

const ButtonChangeData = () => {
  return (
    <div className="px-[1.5rem] pt-[1rem] pb-[1rem] flex items-center justify-center w-full">
      <ButtonComponent
        className="btn-ghost text-secondary w-full text-button_primary"
        // loading={loading}
        // onClick={() => router.push("/recuperar")}
      >
        Redefinir dados
      </ButtonComponent>
    </div>
  );
};

export default ButtonChangeData;
