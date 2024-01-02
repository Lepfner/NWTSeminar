import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
    </>
  );
};

export default MainLayout;
