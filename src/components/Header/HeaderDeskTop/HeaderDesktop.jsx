import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/logo.png";
import ScrollHeader from "../../Scroll/ScrollHeader";
import UserNavLoginDesktop from "./UserNavLoginDesktop/UserNavLoginDesktop";
import UserNavLogOutDesktop from "./UserNavLogOutDesktop/UserNavLogOutDesktop";

const HeaderDesktop = () => {
  const scrollDirection = ScrollHeader();
  const { infoUser } = useSelector((state) => state.userReducer)

  let renderUserNavDesktop = () => {
    if (infoUser) {
      return <UserNavLoginDesktop infoUser={infoUser} />;
    } else {
      return <UserNavLogOutDesktop />;
    }
  };
  useEffect(() => {

  }, [infoUser])
  
  return (
    <div
      style={{
        transition: "0.5s",
        background: "rgba(0, 0, 0, 0.9)",
      }}
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } py-1  bg-zinc-900 z-30 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center  px-10">
        <div>
          <NavLink
            to={"/"}
            className="text-white font-medium text-2xl hover:text-yellow-400"
          >
            <div
              className="flex justify-between items-center"
              style={{ width: "90px", height: "auto" }}
            >
              <img src={logo} className="w-16 h-16" alt="" />
              <span className="text-blue-300">Cinema</span>
            </div>
          </NavLink>
        </div>
        <div className="text-white">{renderUserNavDesktop()}</div>
      </div>
    </div>
  );
};

export default HeaderDesktop;


