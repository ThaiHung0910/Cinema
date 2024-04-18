import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { backGroundLogin } from "../assets/img/js/img";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

const UserTemplate = () => {
  const { infoUser } = useSelector((state) => state.userReducer),
    navigate = useNavigate();

  useEffect(() => {
    if (!infoUser) {
      navigate("/");
    }
  }, [infoUser]);

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
      <Footer />
    </div>
  );
};

export default UserTemplate;
