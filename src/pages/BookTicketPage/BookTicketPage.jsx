import React, { useEffect } from "react";

import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BookTicketLeft from "./BooketTicketLeft/BookTicketLeft";
import BookTicketRight from "./BookTicketRight/BookTicketRight";
import { getListChairThunk } from "../../redux/movieReducer/movieThunk";

export default function BookTicketPage() {
  let { maLichChieu } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListChairThunk(maLichChieu));
  }, []);
  return (
    <div>
      <div
        className="py-6"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(110,110,166,1) 0%, rgba(0,134,255,1) 100%)",
        }}
      >
        <div className="grid xl:grid-cols-7 xl:gap-5 xl:container xl:mx-auto">
          <div className="xl:col-span-5  rounded-xl ">
            <BookTicketLeft />
          </div>
          <div className="xl:col-span-2 flex justify-center  rounded-xl overflow-hidden">
            <BookTicketRight />
          </div>
        </div>
      </div>
    </div>
  );
}
