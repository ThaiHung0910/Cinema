import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollHeader from "../../Scroll/ScrollHeader";
import logo from "../../../assets/img/logo.png";
import UserNavLoginMobile from "./UserNavLoginMobile/UserNavLoginMobile";
import UserNavLogOutMobile from "./UserNavLogOutMobile/UserNavLogOutMobile";

export default function HeaderMobile() {
  let navigate = useNavigate();
  const { infoUser } = useSelector((state) => state.userReducer);

  let renderUserNavMobile = () => {
    if (infoUser) {
      return <UserNavLoginMobile infoUser={infoUser} />;
    } else {
      return <UserNavLogOutMobile />;
    }
  };

  const scrollDirection = ScrollHeader();
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
      <div className="container mx-auto flex justify-between items-center  pr-10 pl-5">
        <div
          onClick={() => {
            navigate("/");
          }}
          className=" text-blue-700  font-extrabold cursor-pointer text-left"
        >
          <img src={logo}></img>
        </div>
        <div>{renderUserNavMobile}</div>
      </div>
    </div>
  );
}
