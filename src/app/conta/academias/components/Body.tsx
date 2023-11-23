"use client";

import { listVinculatedGyms } from "@/services/userService";
import { selectUser } from "@/store/slices/authSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector(selectUser);

  useEffect(() => {
    (async () => {
      if (user) {
        const gyms = await listVinculatedGyms({ id: user.id });
      }
    })();
  }, [user]);

  return <></>;
};

export default Body;
