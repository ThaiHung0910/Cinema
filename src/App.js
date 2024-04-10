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
import ScreenPage from "./pages/ScreenPage/ScreenPage";
import Page404 from "./pages/Page404/Page404";



function App() {
  return (
    <BrowserRouter>
      <ButtonToTop />
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
                <ScreenPage/>
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

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
