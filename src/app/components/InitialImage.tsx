import Image from "next/image";

export const InitialImage = ({ src }: { src: string }) => {
  return (
    <div className="flex w-full h-1/2 relative mb-16">
      <div
        className={`flex w-full h-full ${src} bg-no-repeat shrink-0 bg-center bg-cover [clip-path:polygon(0%_0%,450%_0%,0%_100%)]`}
      />
      <Image
        className="absolute bottom-[-16px] right-6"
        alt="Logo Recordum"
        src="/images/logo_recordum.png"
        width={59}
        height={64}
      />
    </div>
  );
};
