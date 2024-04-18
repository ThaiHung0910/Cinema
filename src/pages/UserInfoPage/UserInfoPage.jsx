import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import FormInputCustom from "../../components/Input/FormInputCustom";
import { userSer } from "../../service/userSer";
import { updateThunk } from "../../redux/userReducer/userThunk";

export default function UserInfoPage() {
  let dispatch = useDispatch();
  const message = [
    "Vui lòng điền thông tin",
    "Tối thiểu bốn ký tự",
    "Mật khẩu phải ít nhất 4 ký tự gồm chữ, số, in hoa và kí tự đặc biệt",
    "Email chưa đúng định dạng",
    "Vui lòng nhập đúng số điện thoại",
    "Chỉ nhập chữ",
  ];

  let fecthInfoUser = async () => {
    try {
      let res = await userSer.getInfoUser();
      let { taiKhoan, matKhau, email, soDT, maNhom, maLoaiNguoiDung, hoTen } =
        res.data.content;
      formUpdate.setValues({
        taiKhoan,
        matKhau,
        email,
        soDT,
        maNhom,
        maLoaiNguoiDung,
        hoTen,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formUpdate = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },

    onSubmit: (value) => {
      dispatch(updateThunk(value));
    },

    validationSchema: yup.object().shape({
      matKhau: yup
        .string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
          message[2]
        )
        .required(message[0]),
      email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, message[3])
        .required(message[0]),
      soDT: yup
        .string()
        .matches(/^(?:\+?84|0)(\d{9,10})$/, message[4])
        .required(message[0]),
      hoTen: yup
        .string()
        .min(4, message[1])
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          message[5]
        )
        .required(message[0]),
    }),
  });

  useEffect(() => {
    fecthInfoUser();
  }, []);

  return (
    <div>
      {/* //LOGO LOGIN  */}
      <div className="flex items-center justify-center w-full h-full xl:scale-90 md:scale-125">
        <form
          onSubmit={formUpdate.handleSubmit}
          className="flex items-center justify-center xl:w-1/2 md:w-1/2 w-5/6 py-8  bg-[rgba(0,0,0,.75)] z-10"
        >
          {/* ///----------- LOTIE GIF -----  */}
          {/* // form Input ---------------------- */}
          <div className="w-2/3 space-y-5">
            <h1 className="xl:text-4xl md:text-4xl text-xl  mb-10 text-white  font-sans">
              Thông tin cá nhân{" "}
              <span className="text-orange-600 xl:text-lg md:text-lg text-sm">
                <br /> (Có thể chỉnh sửa được)
              </span>
            </h1>

            {/* USER NAME  */}
            <FormInputCustom
              disable={true}
              name="taiKhoan"
              label="Tài khoản"
              formikField={formUpdate}
            />
            {/* PASSWWORD  */}
            <FormInputCustom
              name="matKhau"
              label="Mật khẩu"
              formikField={formUpdate}
            />
            {/* //EMAIL  */}
            <FormInputCustom
              name="email"
              label="Email"
              formikField={formUpdate}
            />
            {/* //SỐ ĐIỆN THOẠI */}
            <FormInputCustom
              name="soDT"
              label="Số điện thoại"
              formikField={formUpdate}
            />
            {/* //HỌ TÊN  */}
            <FormInputCustom
              name="hoTen"
              label="Họ Tên"
              formikField={formUpdate}
            />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className=" xl:w-full md:w-full  text-lg  xl:px-4 md:px-3 px-2 xl:py-4 md:py-3 py-2 w-1/2   text-white hover:text-white  bg-blue-700  hover:bg-blue-800  transition rounded-xl"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
