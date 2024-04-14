import React, { useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./carouselMovie.css";
import banner1 from "../../../assets/img/carousel/banner1.png";
import banner2 from "../../../assets/img/carousel/banner2.png";
import banner3 from "../../../assets/img/carousel/banner3.png";
import { Carousel } from "antd";

const CarouselMovie = () => {
  const carouRef = useRef();

  const movies = [banner1, banner2, banner3];

  return (
    <div className="carousel">
      <Carousel autoplay ref={carouRef}>
        {movies.map((banner, id) => {
          return <img key={id} className="h-full w-full" src={banner} alt="" />;
        })}
      </Carousel>
      <button
        onClick={() => {
          carouRef.current.next();
        }}
        className="rounded mx-3 absolute right-3 top-1/2 btnCarousel"
      >
        <FaAngleRight />
      </button>
      <button
        onClick={() => {
          carouRef.current.prev();
        }}
        className="rounded mx-3 absolute left-3 top-1/2 btnCarousel"
      >
        <FaAngleLeft />
      </button>
    </div>
  );
};

export default CarouselMovie;
