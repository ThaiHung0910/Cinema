import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import MovieTabItem from "./MovieTabItem/MovieTabItem";
import "./movieTabs.css"
import { fetchApiMovie } from "../../../utils";



export default function MovieTabs() {
  let [dataMovieTab, setDataMovieTab] = useState([]);
  let fetchApi = async () => {
    try {
      let res = await fetchApiMovie('getTheater');
      setDataMovieTab(res);
    } catch (err) {}
  };
  useEffect(() => {
    fetchApi();
  }, []);

  let renderMovieTab = () => {
    return dataMovieTab.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: (
          <img
            src={heThongRap.logo}
            className="xl:w-10 xl:h-10 md:h-10 md:w-10 w-10 h-10 md:mx-8"
            alt=""
          />
        ),
        children: <MovieTabItem maHeThongRap={heThongRap.maHeThongRap} />,
      };
    });
  };
  return (
    <div>
      <h1 className="xl:text-4xl md:text-4xl text-3xl text-center text-blue-700 font-bold mb-8 py-3">
        Lịch chiếu phim
      </h1>
      <div className="container mx-auto border-2 rounded-xl shadow-xl">
        <Tabs
          tabBarExtraContent={{
            left: (
              <div className=" xl:w-80 md:hidden hidden xl:block text-center xl:text-5xl md:text-3xl text-blue-700 font-extrabold">
                Cinema
              </div>
            ),
          }}
          tabPosition="top"
          centered={window.innerWidth > 1279 ? false : true}
          defaultActiveKey="BHDStar"
          items={renderMovieTab()}
        />
      </div>
    </div>
  );
}
