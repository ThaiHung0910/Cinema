// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Layout, Menu, theme, Button } from "antd";
// import {
//   DesktopOutlined,
//   FileOutlined,
//   UserOutlined,
//   DeleteOutlined,
//   EditOutlined,
// } from "@ant-design/icons";

// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem("User", "1", <FileOutlined />),
//   getItem("Films", "sub1", <UserOutlined />, [
//     getItem("Film", "/admin/films"),
//     getItem("AddFilm", "/admin/addFilms"),
//   ]),
//   getItem("Showtime", "4", <DesktopOutlined />),
// ];

// const AdminPage = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const navigate = useNavigate();

//   return (
//     <div>
//       <Layout
//         style={{
//           minHeight: "100vh",
//         }}
//       >
//         <Sider
//           collapsible
//           collapsed={collapsed}
//           onCollapse={(value) => setCollapsed(value)}
//         >
//           <div className="demo-logo-vertical" />
//           <Menu
//             theme="dark"
//             defaultSelectedKeys={["1"]}
//             mode="inline"
//             items={items}
//             onClick={({ key }) => {
//               console.log("key: ", key);
//               navigate(key);
//             }}
//           />
//         </Sider>
//         <Layout>
//           <Header
//             style={{
//               padding: "30px",
//               background: colorBgContainer,
//               height: "160px",
//             }}
//           >
//             <div>
//               <h1 className="text-3xl">Quản lý phim</h1>
//               <Button type="primary" className="mt-3">
//                 Thêm phim mới
//               </Button>
//             </div>
//           </Header>

//           <Content
//             style={{
//               margin: "0 16px",
//             }}
//           >
//             <div
//               style={{
//                 padding: 24,
//                 minHeight: 360,
//                 background: colorBgContainer,
//                 borderRadius: borderRadiusLG,
//               }}
//             >
//               <table className="container table mx-auto mt-4">
//                 <thead className="m-3">
//                   <th className="text-center">Mã phim</th>
//                   <th className="text-center">Hình ảnh</th>
//                   <th className="text-center">Tên phim</th>
//                   <th className="text-center">Mô tả</th>
//                   <th className="text-center">Hành động</th>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td className="text-center space-x-6">
//                       <button className="text-blue-500 text-2xl">
//                         <EditOutlined />
//                       </button>
//                       <button className="text-red-500 text-2xl">
//                         <DeleteOutlined />
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div>
//               <h3>aaaaaaaaaaaaaaaaaa</h3>
//             </div>
//           </Content>
//           <Footer
//             style={{
//               textAlign: "center",
//             }}
//           >
//             Ant Design ©{new Date().getFullYear()} Created by Ant UED
//           </Footer>
//         </Layout>
//       </Layout>
//     </div>
//   );
// };

// export default AdminPage;
