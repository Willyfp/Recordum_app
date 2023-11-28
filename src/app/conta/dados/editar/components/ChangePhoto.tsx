"use client";
import Avatar from "@/components/Avatar";
import BottomSheet from "@/components/BottomSheet";
import ButtonComponent from "@/components/Button";
import EditableAvatar from "@/components/EditableAvatar";
import FileInput from "@/components/FileInput";
import { changePhotoRequest } from "@/services/userService";
import { selectUser } from "@/store/slices/authSlice";
import { getBase64 } from "@/utils";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const ChangePhoto = () => {
  const user = useSelector(selectUser);
  const [visible, setVisible] = useState(false);

  const { register, watch, handleSubmit, reset } = useForm();

  const [base64, setBase64] = useState("");

  const convertImage = async (file) => {
    const base64 = await getBase64(file);
    setBase64(base64);
  };

  useEffect(() => {
    const file = watch("foto");
    if (file) {
      convertImage(file[0]);
    }
  }, [watch("foto")]);

  const onSubmit = async (data) => {
    await changePhotoRequest({
      file: { arquivo: data.foto[0], descricao: data.foto[0].name },
      id: user?.id,
    });

    reset();
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <EditableAvatar
        width="8rem"
        height="9rem"
        src={user?.urlFoto}
        onClick={() => {
          setVisible(true);
        }}
      />

      <BottomSheet
        open={visible}
        closeAction={() => setVisible(false)}
        title={"Alterar foto"}
      >
        <div className="flex flex-col gap-[1rem] w-full p-[1.5rem] items-center">
          <Avatar size={8} src={base64 || user?.urlFoto} />

          <FileInput {...register("foto")} maxLength={1} accept=".jpg,.png" />

          <ButtonComponent
            className="btn-primary w-full"
            onClick={() => {
              handleSubmit(onSubmit)();
              setVisible(false);
            }}
          >
            Salvar
          </ButtonComponent>
        </div>
      </BottomSheet>
    </div>
  );
};

export default ChangePhoto;
