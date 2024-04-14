import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styleLeft from "./ScreenPageLeft.module.css";
import { addChairAction } from "../../../redux/movieReducer/movieSlice";
export default function ScreenPageLeft() {
  let dispatch = useDispatch();
  let {listChair, listChairBook} = useSelector((state) => state.movieReducer);

  let renderGhe = () => {
    return listChair?.map((ghe) => {
      let styleGhe = ``;
      let disable = false;
      // Xét Ghế Thường
      if (ghe.loaiGhe === "Thuong") {
        styleGhe = `${styleLeft["ghe"]} `;
      } else {
        styleGhe = `${styleLeft["gheVip"]}`;
      }
      //Xét Ghế Đã Đặt
      if (ghe.daDat) {
        styleGhe = `${styleLeft["gheDaDat"]}`;
        disable = true;
      }
      // Xét Ghế Đang Đặt
      let index = listChairBook?.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (index !== -1) {
        styleGhe = `${styleLeft["gheDangDat"]}`;
      }
      return (
        <button
          disabled={disable}
          onClick={() => {
            dispatch(addChairAction(ghe));
          }}
          key={ghe.maGhe}
          className={`${styleGhe}`}
        >
          <span>{ghe.tenGhe}</span>
        </button>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* // Màn Hình  */}
      <div
        className={`w-2/3 ${styleLeft["manHinh"]} bg-gray-800 shadow-lg flex items-end justify-center`}
      >
        <span className="text-white">Màn hình</span>
      </div>
      {/* //Ghế  */}
      <div className="xl:w-5/6 md:w-5/6 w-full grid grid-cols-10 xl:gap-5 md:gap-4 gap-2 mt-12 mb-6">
        {renderGhe()}
      </div>
      <hr className="w-3/4" />
      <div className="w-2/3 py-4 flex items-center justify-between text-center text-white  ">
        <div className="">
          <button className={`${styleLeft["normal"]}`}>x</button>
          <br />
          <span>Ghế thường</span>
        </div>
        <div>
          <button className={`${styleLeft["gheDaDat"]} text-gray-500`}>
            <span className="text-black">x</span>
          </button>
          <br /> <span className="">Ghế đã đặt</span>
        </div>
        <div>
          <button className={`${styleLeft["special"]}`}>x</button> <br />{" "}
          <span className="">Ghế vip</span>
        </div>
        <div>
          <button className={`${styleLeft["ordering"]}`}>x</button> <br />{" "}
          <span className="">Ghế đang đặt</span>
        </div>
      </div>
    </div>
  );
}
