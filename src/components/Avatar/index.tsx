import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";

const Avatar = ({ src, size }: { src?: string; size?: number }) => {
  const sizeIcon = size ? size / 1.46 + "rem" : "3rem";

  const [errored, setErrored] = React.useState(false);
  const newSize = size + "rem";

  useEffect(() => {
    setErrored(false);
  }, [src]);

  return (
    <div className="avatar">
      <div className="rounded-full" style={{ height: newSize, width: newSize }}>
        {src && !errored ? (
          <img src={src} alt="Avatar" onError={() => setErrored(true)} />
        ) : (
          <div
            style={{ height: newSize, width: newSize }}
            className={` bg-disabled flex items-center justify-center rounded-full`}
          >
            <AiOutlineUser style={{ height: sizeIcon, width: sizeIcon }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
