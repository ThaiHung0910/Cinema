import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HistoryOutlined,
  MenuOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import { logOutAction } from "../../../../redux/userReducer/userSlice";
import { avatarUser, imageNotFound } from "../../../../assets/img/js/img";

export default function UserNavLoginMobile({ infoUser }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-end space-x-5">
      <button
        className="text-2xl  pb-1 text-blue-700 hover:text-blue-800  font-bold "
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>
      <Drawer
        width={300}
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        styles={{ content: { backgroundColor: "#18191A" } }}
      >
        {/* //Information  */}
        <div className="space-y-1 ">
          <div className="flex items-center space-x-4 py-3 px-2 hover:bg-[#3A3B3C]  transition rounded-lg">
            <img
              className="h-12 w-12  rounded-full"
              src={avatarUser}
              onError={(e) => {
                e.target.src = imageNotFound;
              }}
              alt=""
            />
            <div
              onClick={() => {
                navigate("/user/info");
              }}
              className="cursor-pointer"
            >
              <div className="pt-1 text-xl  text-[#C6C7CC]  font-bold">
                {infoUser.hoTen}
              </div>
              <div className="text-[#ACAFB4]">Xem thông tin cá nhân</div>
            </div>
          </div>
          <hr className=" bg-gray-300" />
        </div>
        {/* // Lịch sử mua vé  */}
        <div
          onClick={() => {
            navigate("/user/history");
          }}
          className="flex items-center space-x-2 py-3 px-2 mt-2 hover:bg-[#3A3B3C] transition rounded-lg cursor-pointer"
        >
          <HistoryOutlined className="p-2 leading-7 text-xl  text-white text-center  bg-[#4E4F50] rounded-full" />{" "}
          <span className=" text-lg text-[#C6C7CC] ">Lịch sử mua vé</span>
        </div>
        {/* // LogOut  */}
        <div
          onClick={() => {
            dispatch(logOutAction());
          }}
          className="flex items-center space-x-2 py-3 px-2 mt-2 hover:bg-[#3A3B3C] transition rounded-lg cursor-pointer"
        >
          <LogoutOutlined className="p-2 leading-7 text-xl  text-white text-center  bg-[#4E4F50] rounded-full" />{" "}
          <span className=" text-lg text-[#C6C7CC] ">Đăng xuất</span>
        </div>
      </Drawer>
    </div>
  );
}
