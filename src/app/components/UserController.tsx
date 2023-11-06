"use client";

import { getUserRequest } from "@/services/authService";
import { selectUser } from "@/store/slices/authSlice";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UserController = () => {
  const user = useSelector(selectUser);

  const Cookies = useCookies();

  const token = Cookies.get("token");

  const id = Cookies.get("user_id");

  useEffect(() => {
    if (token && !user && id) {
      getUserRequest({ id });
    }
  }, []);

  return <div className="hidden" />;
};

export default UserController;
