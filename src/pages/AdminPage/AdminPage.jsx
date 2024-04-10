import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import { DesktopOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("User", "1", <FileOutlined />),
  getItem("Films", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Showtime", "9", <DesktopOutlined />),
];

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          {/* <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            /> */}
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            {/* <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <div>
                <h1 className="text-3xl">Quản lý phim</h1>
                <Button type="primary" className="mt-3">
                  Thêm phim mới
                </Button>
              </div>
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
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminPage;
