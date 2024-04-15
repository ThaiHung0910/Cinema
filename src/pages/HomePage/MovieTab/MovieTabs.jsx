import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieTabItem from "./MovieTabItem/MovieTabItem";
import { MA_NHOM } from "../../../service/urlConfig";
import { movieSer } from "../../../service/movieSer";

const CustomTabs = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #1d4ed8 !important;
  }
  .ant-tabs-tab:hover {
    color: #93c5fd !important;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    background: #3eb4e7;
    pointer-events: none;
  }
`;
export default function MovieTabs() {
  let [dataMovieTab, setDataMovieTab] = useState([]);
  let fetchApi = async () => {
    let params = {
      maNhom: MA_NHOM,
    };
    try {
      let res = await movieSer.getTheater(params);
      setDataMovieTab(res.data.content);
    } catch (err) {}
  };
  useEffect(() => {
    fetchApi();
  }, []);


  let renderMovieTab = () => {
    return dataMovieTab.map((heThongRap, index) => {
      return {
        key: index,
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
    <div className="container mx-auto border-2 rounded-xl shadow-xl">
      <h1 className="xl:text-4xl md:text-4xl text-3xl text-center text-blue-700 font-bold mb-8 py-3">
        Lịch chiếu phim
      </h1>
      <CustomTabs
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
  );
}
