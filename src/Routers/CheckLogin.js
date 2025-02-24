import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const CheckLogin = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/trang-chu" />;
};

export default CheckLogin;
