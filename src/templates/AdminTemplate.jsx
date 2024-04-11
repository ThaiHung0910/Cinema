import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { DesktopOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";
import Films from "../pages/AdminPage/Films/Films";
import AddFlims from "../pages/AdminPage/Films/AddFlims";

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
  getItem("Films", "sub1", <UserOutlined />, [
    getItem("Film", "/admin/films"),
    getItem("AddFilm", "/admin/addFilms"),
  ]),
  getItem("User", "1", <FileOutlined />),
  getItem("Showtime", "4", <DesktopOutlined />),
];

// const key = items.getItem.key;
// console.log("key: ", key);

const AdminTemplate = () => {
  // const { infoUser } = useSelector((state) => state.userReducer),
  //   navigate = useNavigate();

  // useEffect(() => {
  //   if (infoUser) {
  //     navigate("/admin/films");
  //   } else {
  //     navigate("/auth/login");
  //   }
  // }, []);

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
              <Films />
            </div>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <AddFlims />
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

export default AdminTemplate;
