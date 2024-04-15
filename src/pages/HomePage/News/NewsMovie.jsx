import { Tabs } from "antd";
import React from "react";
import styled from "styled-components";
import NewChild from "./NewChild/NewChild";
import {
  contentDa24h,
  contentKhuyenMai,
  contentReview,
} from "./NewsDataContent/NewsDataContent";

const CustomTabs = styled(Tabs)`
  .ant-tabs-ink-bar {
    position: absolute;
    background: #3eb4e7;
    pointer-events: none;
  }
`;

const items = [
  {
    key: "1",
    label: (
      <div className="xl:text-xl md:text-xl text-base  text-black font-bold">
        Điện ảnh 24h
      </div>
    ),
    children: <NewChild dataContent={contentDa24h} />,
  },
  {
    key: "2",
    label: (
      <div className="xl:text-xl md:text-xl text-base text-black font-bold">
        Khuyến mãi
      </div>
    ),
    children: <NewChild dataContent={contentKhuyenMai} />,
  },
  {
    key: "3",
    label: (
      <div className="xl:text-xl md:text-xl text-base text-black font-bold">
        Đánh giá
      </div>
    ),
    children: <NewChild dataContent={contentReview} />,
  },
];

export default function NewsMovie() {
  return (
    <div className="container mx-auto xl:px-20 md:px-10 px-3 pt-20 pb-16">
      <CustomTabs
        tabBarGutter={50}
        centered
        defaultActiveKey="1"
        items={items.map((item) => {
          return {
            key: item.key,
            label: item.label,
            children: item.children,
          };
        })}
      />
    </div>
  );
}
