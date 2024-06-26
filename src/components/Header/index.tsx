"use client";
import { useRouter } from "next/navigation";
import { MdChevronLeft, MdEdit } from "react-icons/md";

const Header = ({
  title,
  backButtonAction,
  editAction,
}: {
  title: string;
  backButtonAction?: () => void;
  editAction?: () => void;
}) => {
  const route = useRouter();

  return (
    <header className="w-full h-[4rem] shadow-header bg-white items-center justify-between overflow-hidden flex-row flex px-[1rem]">
      <MdChevronLeft
        className="cursor-pointer text-secondary"
        size="2rem"
        onClick={backButtonAction || (() => route.back())}
      />
      <div className="max-w-[75%] overflow-hidden">
        <h1 className="font-semibold textarea-lg truncate text-left mr-[2rem] text-black ">
          {title}
        </h1>
      </div>

      {editAction ? (
        <MdEdit
          className="cursor-pointer text-secondary"
          size="2rem"
          onClick={editAction}
        />
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Header;
