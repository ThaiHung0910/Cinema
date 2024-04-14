import React from "react";
import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollHeader from "../../Scroll/ScrollHeader";
import logo from "../../../assets/img/logo/logo.png";
import UserNavLoginMobile from "./UserNavLoginMobile/UserNavLoginMobile";
import UserNavLogOutMobile from "./UserNavLogOutMobile/UserNavLogOutMobile";
export default function HeaderMobile() {
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
         <NavLink to={"/"} className="text-3xl font-extrabold">
          <div className="flex justify-between items-center">
            <img src={logo} className="w-16" alt="" />
            <span className="text-blue-300">Cinema</span>
          </div>
        </NavLink>
        <div>{renderUserNavMobile()}</div>
      </div>
    </div>
  );
}
