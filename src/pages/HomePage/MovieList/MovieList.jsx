import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import ItemMovie from "./ItemMovie/ItemMovie";
import { backGroundLogin } from "../../../assets/img/js/img";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { fetchApiMovie } from "../../../utils";

export default function MovieList() {
  let [listMovie, setListMovie] = useState([]);

  const refSlide = useRef();

  let fetchApi = async () => {
    try {
      let result = await fetchApiMovie("getListMovies");
      setListMovie(result);
    } catch (err) {}
  };

  useEffect(() => {
    fetchApi();
  }, []);

  let renderListMovie = () => {
    return listMovie.map((movie, index) => {
      return <ItemMovie key={movie.maPhim} dataMovie={movie} index={index} />;
    });
  };

  const next = () => {
    refSlide.current.slickNext();
  };
  const previous = () => {
    refSlide.current.slickPrev();
  };

  const settings = {
    className: "h-full",
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
          arrows: false,
          speed: 500,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          arrows: false,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div
      className="xl:py-12 md:py-10 py-8 xl:my-1 md:my-1 mb-12"
      style={{ backgroundImage: `url(${backGroundLogin})` }}
    >
      <h1 className="text-white xl:text-4xl md:text-3xl text-2xl text-center font-bold">
        Danh sách phim
      </h1>
      <div className="relative xl:h-[32rem] md:h-[31rem] h-[20rem]  flex items-center justify-center container mx-auto">
        {/* // PRE  */}
        <button
          onClick={previous}
          className="text-gray-300 xl:text-5xl md:5xl text-3xl absolute xl:left-10 md:left-5 left-2 xl:top-2/5 md:top-1/3 top-1/3"
        >
          <LeftCircleFilled />
        </button>
        {/* // NEXT  */}
        <button
          onClick={next}
          className="text-gray-300 xl:text-5xl md:5xl text-3xl absolute xl:right-10 md:right-5 right-2 xl:top-2/5 md:top-1/3 top-1/3"
        >
          <RightCircleFilled />
        </button>
        <div className="h-2/3 w-5/6 ">
          <Slider ref={refSlide} {...settings}>
            {renderListMovie()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
