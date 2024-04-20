import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { movieSer } from "../../../../service/movieSer";
import { MA_NHOM } from "../../../../service/urlConfig";
import MovieTabItemChild from "./MovieTabItemChild/MovieTabItemChild";

export default function MovieTabItem({ maHeThongRap }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  let [dataTheater, setDataTheater] = useState({});
  let featchApi = async ({ maHeThongRap }) => {
    let params = {
      maNhom: MA_NHOM,
      maHeThongRap,
    };
    try {
      let res = await movieSer.getMovieByTheater(params);
      setDataTheater(res.data.content[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    featchApi({ maHeThongRap });
  }, [maHeThongRap]);
  let renderLichChieuPhim = (danhSachPhim, tenCumRap, diaChi) => {
    return (
      <div style={{ height: "35rem", overflow: "auto" }}>
        {danhSachPhim.map((phim) => {
          return (
            <MovieTabItemChild
              dataPhim={phim}
              tenCumRap={tenCumRap}
              diaChi={diaChi}
              key={phim.maPhim}
            />
          );
        })}
      </div>
    );
  };

  let renderTheater = () => {
    return dataTheater.lstCumRap?.map((cumrap) => {
      let selector = cumrap.maCumRap.replace(/\s/g, "").toLowerCase();
      return {
        key: selector,
        label: (
          <div  className="w-64  text-center border-b">{cumrap.tenCumRap}</div>
        ),
        children: renderLichChieuPhim(
          cumrap.danhSachPhim,
          cumrap.tenCumRap,
          cumrap.diaChi
        ),
      };
    });
  };

  return (
    <Tabs
      className="w-full xl:h-[38rem] md:h-[40rem] h-[40rem]"
      centered
      tabPosition={isDesktop ? "left" : "top"}
      defaultActiveKey="BHD Star Cineplex - Bitexco"
      items={renderTheater()}
    />
  );
}
