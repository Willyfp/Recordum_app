"use client";
import { useRouter } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";

const Header = ({
  title,
  backButtonAction,
}: {
  title: string;
  backButtonAction?: () => void;
}) => {
  const route = useRouter();

  return (
    <header className="w-full h-[4rem] items-center justify-between flex-row flex">
      <MdChevronLeft
        className="cursor-pointer text-secondary"
        size="2rem"
        onClick={backButtonAction || (() => route.back())}
      />

      <h1 className="font-semibold textarea-lg text-center text-black">
        {title}
      </h1>

      <div></div>
    </header>
  );
};

export default Header;
