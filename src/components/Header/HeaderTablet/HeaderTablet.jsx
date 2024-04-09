import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollHeader from "../../Scroll/ScrollHeader";
import logo from "../../../assets/img/logo.png";
import { useSelector } from "react-redux";
import UserNavLogOutTablet from "./UserNavLogOutTablet/UserNavLogOutTablet";
import UserNavLoginTablet from "./UserNavLoginTablet/UserNavLoginTablet";

export default function HeaderTablet() {
  let navigate = useNavigate();
  const scrollDirection = ScrollHeader();
  const { infoUser } = useSelector((state) => state.userReducer);

  let renderUserNavTablet = () => {
    if (infoUser) {
      return <UserNavLoginTablet infoUser={infoUser} />;
    } else {
      return <UserNavLogOutTablet />;
    }
  };

  return (
    <div
      style={{
        transition: "0.5s",
        background: "rgba(0, 0, 0, 0.9)",
      }}
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } py-2 z-30 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center  px-10">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-5xl text-blue-700  font-extrabold cursor-pointer"
        >
          <img src={logo} alt=""></img>
        </div>
        <div>{renderUserNavTablet()}</div>
      </div>
    </div>
  );
}
