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
    background: blue;
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
      return (
        <Tabs.TabPane
          tab={<img src={heThongRap.logo} className="w-12 h-12" alt="" />}
          key={heThongRap.maHeThongRap}
        >
          <MovieTabItem maHeThongRap={heThongRap.maHeThongRap} />
        </Tabs.TabPane>
      );
    });
  };
  return (
    <div className="container mx-auto border">
      
      <h1 className="xl:text-4xl md:text-4xl text-3xl text-center text-blue-700 font-bold mb-8 py-3">
        Lịch chiếu phim
      </h1>
      <CustomTabs
        tabBarGutter={"5rem"}
        tabBarExtraContent={{
          left: (
            <div className="w-80 text-center text-5xl text-blue-700 font-extrabold">
              Cinema
            </div>
          ),
        }}
        tabPosition="top"
        defaultActiveKey="BHDStar"
      >
        {renderMovieTab()}
      </CustomTabs>
    </div>
  );
}
