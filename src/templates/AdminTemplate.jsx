import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import Films from "../pages/AdminPage/Films/Films";
import AddFlims from "../pages/AdminPage/Films/AddFlims";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Movie", "1", <UserOutlined />, [
    getItem("Movie", "/admin/movies"),
    getItem("AddMovie", "/admin/addMovies"),
  ]),
  getItem("Showtime", "2", <DesktopOutlined />),
];

// const key = items.getItem.key;
// console.log("key: ", key);

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

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
            onClick={({ key }) => {
              console.log("key: ", key);
              navigate(key);
            }}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: "30px",
              background: colorBgContainer,
              height: "160px",
            }}
          ></Header>

          <Content
            style={{
              margin: "10px 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="movies" element={<Films />} />
                <Route path="addMovies" element={<AddFlims />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminTemplate;
