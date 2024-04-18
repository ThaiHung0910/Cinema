import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Loading from "./components/Loading/Loading";
import ButtonToTop from "./components/ButtonToTop/ButtonToTop";
import RegisterPage from "../src/pages/RegisterPage/RegisterPage";
import CheckUser from "./HOC/CheckUser";

import AdminTemplate from "./templates/AdminTemplate";
// import AdminPage from "./pages/AdminPage/AdminPage";
import AddFlims from "./pages/AdminPage/Films/AddFlims";
import Films from "./pages/AdminPage/Films/Films";

import ScreenPage from "./pages/ScreenPage/ScreenPage";
import Page404 from "./pages/Page404/Page404";
import HistoryBooking from "./pages/HistoryBooking/HistoryBooking";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import UserTemplate from "./templates/UserTemplate";

function App() {
  return (
    <BrowserRouter>
      <Loading />

      <Routes>
        {/* home template */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="detail-movie/:idMovie" element={<DetailPage />} />
          <Route
            path="screen/:maLichChieu"
            element={
              <CheckUser>
                <ScreenPage />
              </CheckUser>
            }
          />

          {/* Page not found */}
          <Route path="*" element={<Page404 />}></Route>
        </Route>
        {/* auth template */}
        <Route path="auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />}></Route>
        </Route>

        {/* admin template */}
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="movies" element={<Films />} />
          <Route path="addMovies" element={<AddFlims />} />
        </Route>

        {/* User template */}
        <Route path="user" element={<UserTemplate />}>
          <Route path="history" element={<HistoryBooking />} />
          <Route path="info" element={<UserInfoPage />} />
        </Route>
      </Routes>

      <ButtonToTop />
    </BrowserRouter>
  );
}

export default App;
