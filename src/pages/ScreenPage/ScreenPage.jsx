import { message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ListChair from "./ListChair/ListChair";

const ScreenPage = () => {
  const { maLichChieu } = useParams();

  return (
    <div className="flex">
      <ListChair maLichChieu={maLichChieu} />
    </div>
  );
};

export default ScreenPage;
