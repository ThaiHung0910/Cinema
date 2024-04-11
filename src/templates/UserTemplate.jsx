import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { backGroundLogin } from "../assets/img/js/img";
import Footer from '../components/Footer/Footer'

const UserTemplate = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundLogin})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default UserTemplate;
