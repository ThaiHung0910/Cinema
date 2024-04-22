import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieSer } from "../../../service/movieSer";
import style from "./SpeedBooking.module.css";
import { useMediaQuery } from "react-responsive";
import { fetchApiMovie, swalCustom } from "../../../utils";
import moment from "moment";



export default function SpeedBooking() {
  let navigate = useNavigate();
  let [dataListMovie, setDataListMovie] = useState([]);
  let [thongTinHeThongRapChieu, setThongTinHeThongRapChieu] = useState([]);
  let [thongTinTatCaCumRap, setThongTinTatCaCumRap] = useState([]);
  let [valueCumRap, setValueCumRap] = useState();
  let [disable, setDisable] = useState(false);
  let selectTenPhim = useRef();
  let selectCumRap = useRef();
  let selectLichChieu = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  let fetchApiListMovie = async () => {
    try {
      let data = await fetchApiMovie('getListMovies')
      setDataListMovie(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApiListMovie();
  }, []);

  let soSanhHaiArray = (arr1, arr2) => {
    const soSanh = JSON.stringify(arr1) === JSON.stringify(arr2);
    return soSanh;
  };

  //CALL API DATA SHOW TIME
  let fetchApiShowTime = async (maPhim) => {
    try {
      let res = await movieSer.getScheduleMovie(maPhim);
      setThongTinHeThongRapChieu(res.data.content.heThongRapChieu);
    } catch (err) {
      console.log(err);
    }
  };
  // RENDER PHIM
  let renderOptionNameMovie = () => {
    return dataListMovie.map((movie, id) => {
      return (
        <option key={id} value={movie.maPhim}>
          {movie.tenPhim}
        </option>
      );
    });
  };
  // CHANGE VALUE PHIM
  let handleChangeValueNameMovie = (e) => {
    let { value } = e.target;
    if (value !== 0) {
      fetchApiShowTime(value);
      setDisable(true);
    }
  };
  // RENDER CỤM RẠP
  let renderOptionCumRap = () => {
    let tatCaCumRap = [];
    thongTinHeThongRapChieu.forEach((heThongRap) => {
      heThongRap.cumRapChieu.forEach((cumRap) => {
        tatCaCumRap.push(cumRap);
      });
    });
    let soSanh = soSanhHaiArray(tatCaCumRap, thongTinTatCaCumRap);
    if (!soSanh) {
      setThongTinTatCaCumRap(tatCaCumRap);
    }
    return tatCaCumRap.map((cumRap) => {
      return (
        <option key={cumRap.maCumRap} value={cumRap.maCumRap}>
          {cumRap.tenCumRap}
        </option>
      );
    });
  };
  //CHANGE VALUE CỤM RẠP
  let handleChangeValueCumRap = (e) => {
    let { value } = e.target;
    setValueCumRap(value);
  };
  //RENDER LỊCH CHIẾU
  let renderNgayChieuGioChieu = () => {
    let cumRapUserChon = thongTinTatCaCumRap.find(
      (cumRap) => cumRap.maCumRap === valueCumRap
    );
    return cumRapUserChon?.lichChieuPhim.map((lichChieu) => {
      return (
        <option key={lichChieu.maLichChieu} value={lichChieu.maLichChieu}>
          {moment(lichChieu.ngayChieuGioChieu).format("DD/MM/yy ~ HH:MM")}
        </option>
      );
    });
  };

  // HANDLE SUBMIT
  let handleSubmit = () => {
    let checkValueLichChieu = selectLichChieu.current.value;
    let checkValueCumRap = selectCumRap.current.value;
    if (checkValueCumRap != 0 && checkValueLichChieu != 0) {
      navigate(`/screen/${checkValueLichChieu}`);
    } else {
      swalCustom('error', "Vui lòng chọn đủ thông tin", 1000)
    }
  };
  if (!isMobile) {
    return (
      <div className="container mx-auto flex items-center justify-center py-4 xl:t-36 relative">
        <div className="grid grid-cols-4 xl:w-5/6 xl:p-3 md:p-2 border-blue-400 border shadow-xl rounded bg-white">
          {/* // RENDER PHIM  */}
          <div className={` ${style["parents__select"]}`}>
            <select
              className={`${style["select"]}`}
              ref={selectTenPhim}
              onChange={handleChangeValueNameMovie}
            >
              <option disabled={disable} value="0">
                Chọn tên phim
              </option>
              {renderOptionNameMovie()}
            </select>
          </div>
          {/* // RENDER RẠP PHIM  */}
          <div className={`${style["parents__select"]}`}>
            <select
              className={`${style["select"]}`}
              ref={selectCumRap}
              onChange={handleChangeValueCumRap}
            >
              <option value="0">Chọn cụm rạp</option>
              {renderOptionCumRap()}
            </select>
          </div>
          {/* // RENDER NGÀY CHIẾU GIỜ CHIẾU */}
          <div className={`${style["parents__select"]}`}>
            <select className={`${style["select"]}`} ref={selectLichChieu}>
              <option value="0">Chọn ngày giờ</option>
              {renderNgayChieuGioChieu()}
            </select>
          </div>
          {/* // XÁC NHẬN ĐẶT VÉ  */}
          <div className=" flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-700 hover:px-4 px-3 py-2 hover:py-3 duration-150 text-white w-2/3 rounded-xl"
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
