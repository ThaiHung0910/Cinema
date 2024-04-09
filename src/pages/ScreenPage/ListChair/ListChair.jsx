import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListChairThunk } from "../../../redux/movieReducer/movieThunk";
import { addChairAction } from "../../../redux/movieReducer/movieSlice";

const ListChair = ({ maLichChieu }) => {
  const dispatch = useDispatch();
  const { listChair, listChairBook } = useSelector(
    (state) => state.movieReducer
  );

  useEffect(() => {
    dispatch(getListChairThunk(maLichChieu));
  }, []);
  const renderListChair = () => {
    return listChair.map((chair, i) => {
      let isDisable = false;
      let styleChair = "bg-blue-500";
      let styleChairBooking = "bg-red-500";
      let styleChairBooked = "bg-gray-500";

      let index = listChairBook.findIndex((e) => e.maGhe === chair.maGhe);
      if (index != -1) {
        styleChair = styleChairBooking;
      }

      if (chair.daDat) {
        styleChair = styleChairBooked;
        isDisable = true;
      }

      return (
        <button
          isDisable={isDisable}
          key={i}
          className={`border rounded p-2  text-white ${styleChair} ${
            isDisable ? "cursor-not-allowed" : ""
          }`}
          onClick={() => {
            dispatch(addChairAction(chair));
          }}
        >
          {chair.tenGhe}
        </button>
      );
    });
  };
  return (
    <div className="w-3/5">
      <div className="grid grid-cols-7">{renderListChair()}</div>
    </div>
  );
};

export default ListChair;
