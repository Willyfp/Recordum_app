"use client";

import {
  selectSuccessBottomSheet,
  setSuccessBottomSheet,
} from "@/store/slices/globalSlice";
import { useSelector } from "react-redux";
import Sheet from "react-modal-sheet";
import { MdClose, MdCheck } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import ButtonComponent from "@/components/Button";
import { store } from "@/store/store";

const SuccessBottomSheet = () => {
  const { title, description, buttonText, buttonAction, open, closeAction } =
    useSelector(selectSuccessBottomSheet);

  return (
    <Sheet isOpen={open} onClose={() => {}} detent="content-height">
      <Sheet.Container style={{ borderRadius: "1.88rem 1.88rem 0rem 0rem" }}>
        <div className="p-[1.5rem]">
          <Sheet.Header>
            <div className="w-full flex flex-col gap-[1rem] items-center">
              <div className="flex w-full flex-row-reverse">
                <MdClose
                  className="cursor-pointer text-black"
                  size="1.5rem"
                  onClick={async () => {
                    if (closeAction) await closeAction();
                    store.dispatch(setSuccessBottomSheet({ open: false }));
                  }}
                />
              </div>

              <BsFillCheckSquareFill
                className="text-secondary rounded-3xl"
                size="4rem"
              />

              <span className="text-title font-title_bottom_sheet text-center">
                {title}
              </span>
            </div>
          </Sheet.Header>

          <Sheet.Content>
            <div className="w-full mt-[1rem]">
              <p className="text-center text-description">{description}</p>

              {buttonText && buttonAction && (
                <ButtonComponent
                  className="btn-primary w-full mt-[1rem]"
                  onClick={() => {
                    buttonAction();
                    store.dispatch(setSuccessBottomSheet({ open: false }));
                  }}
                >
                  {buttonText}
                </ButtonComponent>
              )}
            </div>
          </Sheet.Content>
        </div>
      </Sheet.Container>
    </Sheet>
  );
};

export default SuccessBottomSheet;
