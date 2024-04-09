import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { movieSer } from "../../../service/movieSer";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import style from "./carouselMovie.module.css";

const CarouselMovie = () => {
  const [dataBan, setDataBan] = useState([]);
  const carouRef = useRef();
  const fetchBannerMovie = async () => {
    try {
      const dataBanner = await movieSer.getBannerMovie();
      let newDataBanner = dataBanner.data.content;
      setDataBan(newDataBanner);
      console.log("newDataBanner: ", newDataBanner); // [{},{},{}]
    } catch (error) {
      console.log("error: ", error);
    }
  };


  useEffect(() => {
    // Call api
    fetchBannerMovie();
  }, []);

  return (
    <div className="relative">
      <Carousel autoplay="true" ref={carouRef}>
        {/* Map  */}

        {dataBan.map((banner) => {
          return (
            <div key={banner.maBanner} className=" w-full">
              <img
                style={{
                  height: "500px",
                }}
                className="w-full"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
      <button
        onClick={() => {
          carouRef.current.next();
        }}
        className={`rounded mx-3 absolute right-3 top-1/3 ${style.btnCarousel}`}
      >
        <FaAngleRight className={``}/>
      </button>
      <button
        onClick={() => {
          carouRef.current.prev();
        }}
        className={`rounded mx-3 absolute left-3 top-1/3 ${style.btnCarousel}`}
      >
        <FaAngleLeft className={`${style.btnCarousel}`}/>
      </button>
    </div>
  );
};

export default CarouselMovie;
