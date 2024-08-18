import React , {useEffect}from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
const UserLayout = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
