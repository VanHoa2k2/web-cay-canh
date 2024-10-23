import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const CheckLogin = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/trang-chu" /> : <Outlet />;
};

export default CheckLogin;
