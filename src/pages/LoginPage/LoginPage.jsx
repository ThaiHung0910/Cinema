import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Lottie from "lottie-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInputCustom from "../../components/Input/FormInputCustom";
import iconLogin from "../../assets/json/iconLogin.json";
import { backGroundLogin } from "../../assets/img/js/img";
import logo from "../../assets/img/logo.png";
import { loginThunk } from "../../redux/userReducer/userThunk";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (value) => {
      const navigateCus = () => {
        navigate("/");
      };
      dispatch(loginThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống"),
      matKhau: yup
        .string()
        .required("Mật Khẩu không được để trống")
    }),
  });
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundLogin})`,
        backgroundSize: "150%",
        backgroundPosition: "center",
      }}
      className="relative w-screen h-screen"
    >
      <div
        onClick={() => {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }}
        className="absolute  top-5 left-5  xl:text-5xl md:text-3xl text-4xl text-blue-300 font-extrabold cursor-pointer opacity-70"
      >
        <div
          className="flex justify-between items-center"
          style={{ width: "90px", height: "auto" }}
        >
          <img src={logo} className="w-16 h-16" alt="" />
          <span>Cinema</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <form
          onSubmit={formLogin.handleSubmit}
          className="xl:flex md:flex flex items-center justify-center xl:w-2/3 md:w-2/3 w-3/4  xl:pr-16 md:pr-10 xl:pb-20 md:pb-12 pb-10  xl:pt-12 md:pt-7 pt-10 bg-[rgba(0,0,0,.75)] z-10"
        >
          <div className="xl:w-1/3 md:w-1/3 xl:flex xl:justify-center xl:items-center  md:flex md:justify-center md:items-center hidden">
            <div className="xl:scale-50 md:scale-75 scale-50">
              <Lottie animationData={iconLogin} />
            </div>
          </div>
          {/* // form Input ---------------------- */}
          <div className="xl:w-2/3 md:w-2/3  xl:space-y-5 md:space-y-5 space-y-7 w-3/4">
            <h1 className="xl:text-4xl md:text-3xl text-3xl  xl:mb-10 md:mb-5 mb-4 text-white  font-sans">
              Đăng nhập
            </h1>
            {/* USER NAME  */}
            <FormInputCustom
              name="taiKhoan"
              label="Tài khoản"
              formikField={formLogin}
            />

            {/* PASSWWORD  */}
            <FormInputCustom
              name="matKhau"
              label="Mật khẩu"
              formikField={formLogin}
              type="password"
            />
            {/* END PASS  */}
            <button
              type="submit"
              className=" xl:w-full md:w-full w-full  xl:text-lg md:text-base text-sm  xl:px-4 md:px-2 px-2 xl:py-4 md:py-2 py-1 text-white hover:text-white  bg-blue-700  hover:bg-blue-800  transition rounded-xl"
            >
              Đăng nhập
            </button>
            <div className=" text-right  xl:px-5 md:px-5 px-0 xl:text-base md:text-base text-xs text-gray-400">
              Bạn chưa có tài khoản?{" "}
              <span
                onClick={() => {
                  navigate("/auth/register");
                }}
                className="text-blue-400 hover:text-blue-600 font-medium cursor-pointer duration-150"
              >
                Đăng ký ngay
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
