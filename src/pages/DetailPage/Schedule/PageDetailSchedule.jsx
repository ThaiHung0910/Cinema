import { Tabs, Collapse, Rate } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import cat_comment from "../../../assets/json/cat_comment.json";
import PageDetailMap from "./Map/PageDetailMap";
import PageDetailComment from "./Comment/PageDetailComment";

import style from "./PageDetailSchedule.module.css";
import ButtonBookingTicket from "../../../components/Booking/ButtonBookingTicket";

const { Panel } = Collapse;
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
  .ant-collapse-icon-position-end
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow {
    left: auto;
    margin: 0;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  .ant-collapse-icon-position-end>.ant-collapse-item>.ant-collapse-header {
    padding: 12px 40px 12px 16px;
    position: relative;
  }
`;
export default function PageDetailSchedule(props) {
  let renderLichChieuPhim = (lichChieuPhim, tenCumRap, diaChiCumRap) => {
    return lichChieuPhim.map((schedule) => {
      return (
        <ButtonBookingTicket
          key={schedule.maLichChieu}
          maLichChieu={schedule.maLichChieu}
          ngayChieuGioChieu={schedule.ngayChieuGioChieu}
          tenCumRap={tenCumRap}
          diaChiCumRap={diaChiCumRap}
          tenPhim={props.showTime.tenPhim}
          hinhAnh={props.hinhAnh}
          maPhim={props.maPhim}
        />
      );
    });
  };
  // RENDER THEATER ============================
  let renderTheater = (cumRapChieu, logo) => {
    return cumRapChieu?.map((cumRap) => {
      return (
        <Panel
          header={
            <div className="xl:flex md:flex flex space-x-3 xl:justify-around md:justify-around w-full">
              <div className="xl:w-1/12 md:w-1/12 w-1/12 flex items-center">
                <img src={logo} alt="" />
              </div>
              <div className="xl:w-10/12 md:w-10/12 w-11/12 text-left  border-b">
                <div className="xl:text-xl md:text-xl text-lg">
                  {cumRap.tenCumRap}
                </div>
                <div className="flex items-center justify-between text-sm space-x-2">
                  <span className="xl:text-base md:text-base text-xs">
                    {cumRap.diaChi}
                  </span>
                  <PageDetailMap />
                </div>
              </div>
            </div>
          }
          key={cumRap.maCumRap}
        >
          <div className="h-full overflow-auto">
            {renderLichChieuPhim(
              cumRap.lichChieuPhim,
              cumRap.tenCumRap,
              cumRap.diaChi
            )}
          </div>
        </Panel>
      );
    });
  };
  // RENDER CONTENT ===============================
  let renderContent = () => {
    if (props.showTime.heThongRapChieu.length !== 0) {
      return props.showTime.heThongRapChieu?.map((heThongRap) => {
        return (
          <Tabs.TabPane
            tab={
              <div className=" xl:p-2 md:p-2 p-2 border border-gray-400 rounded-lg ">
                <img
                  className="xl:w-8 md:w-8 w-6  xl:h-8 md:h-8 h-6"
                  src={heThongRap.logo}
                  alt=""
                />
              </div>
            }
            key={heThongRap.maHeThongRap}
          >
            <Collapse
              accordion
              expandIconPosition="end"
              className="xl:h-[28rem] md:h-96"
              defaultActiveKey="1"
            >
              {renderTheater(heThongRap.cumRapChieu, heThongRap.logo)}
            </Collapse>
          </Tabs.TabPane>
        );
      });
    } else {
      return (
        <div className="container text-center text-xl font-semibold mb-3">
          <div className="w-1/3 mx-auto">
            <Lottie animationData={cat_comment} />
            Hiện chưa có lịch chiếu cho phim này !!!
          </div>
        </div>
      );
    }
  };
  return (
    <div className="xl:container xl:mx-auto py-8 px-3">
      <h1
        ref={props.scrollRefMuaVe}
        className="mb-5  text-xl font-bold xl:text-left md:text-left text-center"
      >
        Lịch chiếu : {props.showTime.tenPhim}
      </h1>
      <div>
        {props.showTime.dangChieu ? (
          // {/* // SHOW PHIM DANG CHIEU ======================== */}
          <div className="xl:flex md:flex xl:pb-10 xl:space-x-4 md:space-x-4  border justify-between items-center ">
            <div className="xl:w-2/3 md:w-2/3">
              <CustomTabs
                tabBarGutter={"2rem"}
                tabBarExtraContent={{
                  left: <div className="xl:w-8 md:w-4 w-4"></div>,
                }}
                tabPosition="top"
                defaultActiveKey="BHDStar"
              >
                {renderContent()}
              </CustomTabs>
            </div>
            {/* // CARD ĐÁNH GIÁ  ==================================== */}
            <div className="xl:w-1/3 md:w-1/3 w-full">
              <div className="xl:w-2/3 sm:w-full ">
                <div className=" font-bold text-center  xl:mt-20 mt-10 py-4 rounded shadow-lg border column ">
                  <div className="flex items-center justify-center">
                    <div
                      className={`${style["bubble"]} ${style["bubble-bottom-left"]} px-1 py-3 xl:text-xs `}
                    >
                      Cộng đồng meo meo nghĩ gì?
                    </div>
                  </div>
                  <Lottie
                    className="xl:w-full md:w-full w-full scale-75"
                    animationData={cat_comment}
                  />
                  <div>
                    Đánh giá của phim !!!
                    <Rate disabled allowHalf defaultValue={props.danhGia / 2} />
                    <p className="xl:mt-2 md:mt-2 mt-2">
                      {props.danhGia * 10}% người xem hài lòng với phim này
                    </p>
                    <div className="xl:py-6 md:py-5 py-4">
                      <PageDetailComment />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // SHOW PHIM CHƯA CHIẾU ===========================================
          <div className="container text-center  text-xl font-semibold mb-3">
            <div className="w-1/3 mx-auto">
              <Lottie animationData={cat_comment} />
              Phim sẽ sớm ra mắt trong thời gian tới !!!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
