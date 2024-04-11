import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Films = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="text-3xl">Quản lý phim</h1>
        <Button type="primary" className="mt-3">
          Thêm phim mới
        </Button>
      </div>
      <div>
        <table className="container table mx-auto mt-4">
          <thead className="m-3">
            <th className="text-center">Mã phim</th>
            <th className="text-center">Hình ảnh</th>
            <th className="text-center">Tên phim</th>
            <th className="text-center">Mô tả</th>
            <th className="text-center">Hành động</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-center space-x-6">
                <button className="text-blue-500 text-2xl">
                  <EditOutlined />
                </button>
                <button className="text-red-500 text-2xl">
                  <DeleteOutlined />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Films;
