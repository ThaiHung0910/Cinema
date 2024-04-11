import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieSer } from "../../../../service/movieSer";
import { MA_NHOM } from "../../../../service/urlConfig";
import MovieTabItemChild from "./MovieTabItemChild/MovieTabItemChild";

export default function MovieTabItem({ maHeThongRap }) {
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
    return danhSachPhim.map((phim) => {
      return (
        <MovieTabItemChild
          dataPhim={phim}
          tenCumRap={tenCumRap}
          diaChi={diaChi}
          key={phim.maPhim}
        />
      );
    });
  };
  let renderTheater = () => {
    return dataTheater.lstCumRap?.map((cumrap) => {
      return (
        <Tabs.TabPane
          style={{ height: "35rem"}}
          tab={
            <div className="w-64  text-left border-b">{cumrap.tenCumRap}</div>
          }
          key={cumrap.maCumRap}
        >
          <div className="h-full overflow-auto">
            {renderLichChieuPhim(
              cumrap.danhSachPhim,
              cumrap.tenCumRap,
              cumrap.diaChi
            )}
          </div>
        </Tabs.TabPane>
      );
    });
  };
  return (
    <Tabs className=" w-full xl:h-[38rem] md:h-[40rem] h-[40rem]"  tabPosition="left" defaultActiveKey="1">
      {renderTheater()}{" "}
    </Tabs>
  );
}
