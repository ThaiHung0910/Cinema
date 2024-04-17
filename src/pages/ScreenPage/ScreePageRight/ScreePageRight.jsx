import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ScreePageRight.module.css";
import { maVach } from "../../../assets/img/js/img";
import { useNavigate } from "react-router-dom";
import { sendDataListBookingChairThunk } from "../../../redux/movieReducer/movieThunk";
import { swalCustom } from "../../../utils";

export default function ScreePageRight() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { listChairBook, infoMovie } = useSelector(
    (state) => state.movieReducer
  );
  let {infoUser} = useSelector((state) => state.userReducer);
  let {isLoading} = useSelector((state) => state.loadingReducer);
  let renderListBookingChair = () => {
    return listChairBook?.map((ghe) => {
      return <span key={ghe.maGhe}>{ghe.tenGhe} , </span>;
    });
  };
  let submitBuyTicket = () => {
    let maLichChieu = infoMovie.maLichChieu;
    let danhSachVe = listChairBook.map((ghe) => {
      return { maGhe: ghe.maGhe, giaVe: ghe.giaVe };
    });
    let dataListBookingChair = {
      maLichChieu: maLichChieu,
      danhSachVe: danhSachVe,
    };
    if (listChairBook.length > 0) {
      let navigateCustom = () => {
        navigate('/user/history')
      }
      dispatch(sendDataListBookingChairThunk({dataListBookingChair, navigateCustom}))
    } else {
      setTimeout(() => {
        swalCustom("error", "Đặt thất bại, bạn chưa chọn ghế", 2000)
      }, 500);
    }
  };
  return (
    <div
      className={`${style["ticketSytem"]} h-full xl:w-full md:w-2/5 rounded-lg bg-white`}
    >
      <div className={` py-5 px-5 pt-5 bg-blue-700`}>
        <div className={`${!isLoading ? `${style["ticket"]}` : ""}`}>
          <h1 className="text-white text-lg font-medium mb-2 ">Vé xem phim</h1>
          {/* // Top Thông tin vé ================================================================================================*/}
          <div
            className={`${style["ticketTop"]} xl:h-4/6 md:h-4/6 h-full  rounded-xl  px-8 pt-2 space-y-2`}
          >
            {/* // Tên phim ===================================== */}
            <div className="text-xl font-bold">Phim : {infoMovie.tenPhim}</div>
            {/* //Ngày chiếu giờ chiếu ======================== */}
            <div className="flex items-center justify-between">
              {/* // Ngày Chiếu  */}
              <div>
                <span className={`${style["fontStyleTitle"]}`}>
                  Ngày chiếu :
                </span>{" "}
                <br />
                <span className={`${style["fontStyleInfo"]}`}>
                  {infoMovie.ngayChieu}
                </span>
              </div>
              {/* // Giờ chiếu  */}
              <div>
                <span className={`${style["fontStyleTitle"]}`}>
                  Giờ chiếu :
                </span>
                <br />
                <span className={`${style["fontStyleInfo"]}`}>
                  {infoMovie.gioChieu}
                </span>
              </div>
            </div>
            {/* //Tên cụm rạp  ======================== */}
            <div>
              <h1 className={`${style["fontStyleTitle"]}`}>Tên cụm rạp :</h1>
              <p className={`${style["fontStyleInfo"]}`}>
                {infoMovie.tenCumRap}
              </p>
            </div>
            {/* // Địa chỉ  ======================== */}
            <div>
              <h1 className={`${style["fontStyleTitle"]}`}>Địa chỉ rạp :</h1>
              <p className={`${style["fontStyleInfo"]}`}>{infoMovie.diaChi}</p>
            </div>
            {/* //Ghế Chọn ============================= */}
            <div>
              <h1 className={`${style["fontStyleTitle"]}`}>Ghế chọn :</h1>
              <p className={`${style["fontStyleInfo"]} h-11 overflow-auto`}>
                {renderListBookingChair()}
              </p>
            </div>
          </div>
          {/* //End Top Thông tin vé ==============================================================================================*/}
          <div className="xl:flex md:flex hidden items-center justify-center ">
            <hr className={`w-3/4 ${style["hr"]} border-dotted border-2`} />
          </div>
          {/* //BOTTOM   ================================================================================================*/}
          <div
            className={`${style["ticketBottom"]} h-1/6 xl:flex md:flex hidden items-center rounded-xl`}
          >
            <img
              src={maVach}
              className="w-full  scale-75 h-[90%] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* // Xác Nhận     ================================================================================================*/}
      <div className=" flex items-center py-5  px-5 ">
        {/* // THÔNG TIN THANH TOÁN  */}
        <div className="w-3/5 space-y-2 border-r-2 border-blue-700">
          <div>
            <span className={`${style["fontStyleTitle"]}`}>Tên : </span>
            <span className={`${style["fontStyleInfo"]}`}>
              {infoUser?.hoTen}
            </span>
          </div>
          <div>
            <h1 className={`${style["fontStyleTitle"]}`}>TỔNG TIỀN : </h1>
            <p className={`${style["fontStyleInfo"]}`}>
              {listChairBook
                ?.reduce((tongTien, ghe) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              đồng
            </p>
          </div>
        </div>
        {/* //BTN XÁC NHẬN  */}
        <div className="flex items-center justify-center  w-2/5">
          <button
            onClick={submitBuyTicket}
            className="py-3 px-5 hover:bg-blue-800  bg-blue-700 rounded text-white duration-150"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
