"use client";
import ButtonComponent from "@/components/Button";

const ButtonChangePassword = () => {
  return (
    <div className="px-[1.5rem] pt-[0.5rem] pb-[1rem] flex items-center justify-center w-full">
      <ButtonComponent
        className="btn-ghost text-secondary w-full text-button_primary"
        // loading={loading}
        // onClick={() => router.push("/recuperar")}
      >
        Redefinir senha
      </ButtonComponent>
    </div>
  );
};

export default ButtonChangePassword;
