import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./historyBooking.module.css";
import { userSer } from "../../service/userSer";
import moment from "moment/moment";

export default function HistoryBooking() {
  let {infoUser} = useSelector((state) => state.userReducer);
  let navigate = useNavigate();

  let [userInfo, setUserInfo] = useState([]);
  let fetchUserInfo = async () => {
    try {
      let res = await userSer.postUserInfo();
      console.log("res: ", res.data.content);
      setUserInfo(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!infoUser) {
      navigate("/");
    }
  }, [infoUser]);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  let renderGheDaDat = (danhSachGhe) => {
    return danhSachGhe?.map((chair, id) => {
      return (
        <span key={id} className="mx-1">
          {chair.tenGhe}
        </span>
      );
    });
  };
  let renderHistory = () => {
    return userInfo.thongTinDatVe?.map((info, id) => {
      return (
        <li key={id} className={`${style.table_row}`}>
          <div className={`${style.col} ${style.col_1}`} data-label="Mã vé:">
            {info.maVe}
          </div>
          <div className={`${style.col} ${style.col_2}`} data-label="Tên phim:">
            {info.tenPhim}
          </div>
          <div
            className={`${style.col} ${style.col_3}`}
            data-label="Ngày giờ đặt:"
          >
            {moment(info.ngayDat).format("DD/MM/yy ~ HH:MM")}
          </div>
          <div className={`${style.col} ${style.col_4}`} data-label="Ghế đặt:">
            {renderGheDaDat(info.danhSachGhe)}
          </div>
          <div className={`${style.col} ${style.col_5}`} data-label="Tên Rạp:">
            {info.danhSachGhe[0].tenHeThongRap}
          </div>
        </li>
      );
    });
  };
  return (
    <div
    >
      <div className={`${style.container}`}>
        <p className="text-2xl font-bold text-center my-3 text-gray-100">
          Lịch sử mua vé
        </p>
        <ul className={`${style.responsive_table}`}>
          <li className={`${style.table_header}`}>
            <div className={`${style.col} ${style.col_1}`}>Mã vé</div>
            <div className={`${style.col} ${style.col_2}`}>Tên phim</div>
            <div className={`${style.col} ${style.col_3}`}>Ngày giờ đặt</div>
            <div className={`${style.col} ${style.col_4}`}>Ghế đặt</div>
            <div className={`${style.col} ${style.col_5}`}>Tên Rạp</div>
          </li>
          <div className="flex flex-col-reverse">{renderHistory()}</div>
        </ul>
      </div>
    </div>
  );
}
