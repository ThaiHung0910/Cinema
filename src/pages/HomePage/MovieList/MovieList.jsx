import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { MA_NHOM } from "../../../service/urlConfig";
import { movieSer } from "../../../service/movieSer";
import ItemMovie from "./ItemMovie/ItemMovie";
import { backGroundLogin } from "../../../assets/img/js/img";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";


export default function MovieList() {
  let [listMovie, setListMovie] = useState([]);

  const refSlide = useRef();

  useEffect(() => {
    fetchApi();
  }, []);

  let fetchApi = async () => {
    try {
      let res = await movieSer.getListMovies(MA_NHOM);
      setListMovie(res.data.content);
      console.log(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  let renderListMovie = () => {
    return listMovie.map((movie, index) => {
      return <ItemMovie key={index} dataMovie={movie} index={index} />;
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
