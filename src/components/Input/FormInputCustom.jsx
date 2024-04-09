import React, { memo, useEffect, useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { userSer } from "../../service/userSer";

function FormInputCustom({ name, label, type, disable, formikField }) {
  let [translateLabel, setTranslateLabel] = useState(true);
  let [inputType, setInputType] = useState(true);
  let [dataUser, setDataUser] = useState();
  const { values, touched, errors, handleChange, handleBlur } = formikField;
  let value = values[name];

  const fetchDataUser = async (key) => {
    try {
      switch (name) {
        case "taiKhoan":
        case "email":
          let listData = [];
          for (let i = 1; i <= 9; i++) {
            const api = await userSer.getListUser(`GP0${i}`, key);
            let data = (dataUser = api.data.content);
            if (dataUser.length) {
              listData = [...listData, ...data];
            }
          }

          listData?.forEach((e) => {
            if (e[name] === key) {
              setDataUser([e]);
            }
          });
          break;

        default:
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (value) {
      setTranslateLabel(false);
    }
  }, [value]);

  return (
    <div className="relative">
      <label
        className={`absolute top-0 left-0 z-10 text-[#8c8c8c]   transition ${
          translateLabel
            ? "xl:translate-x-6 md:translate-x-4 translate-x-3 xl:translate-y-3 md:translate-y-2 translate-y-2 xl:text-xl md:text-base text-sm"
            : " xl:translate-x-6 md:translate-x-4 translate-x-3 xl:translate-y-1 md:translate-y-1 translate-y-0 xl:text-xs md:text-xs text-xs"
        }`}
      >
        {label}
      </label>
      <input
        disabled={disable ? true : false}
        type={inputType && type === "password" ? "password" : "text"}
        className={`relative  xl:w-full md:w-full w-full xl:text-lg md:text-base text-xs  xl:pt-5 md:pt-4 pt-3 xl:pb-1 md:pb-1 pb-1  xl:px-6 md:px-4 px-3  border bg-[#333333] text-white border-none rounded focus:outline-none focus:bg-[#454545] ${
          disable ? "cursor-no-drop" : ""
        }`}
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        onFocus={() => {
          if (!value) {
            setTranslateLabel(!translateLabel);
          }
        }}
        onBlur={async (e) => {
          handleBlur(e);
          
          console.log("Errors:", errors)
          if (dataUser?.length) {
            formikField.setErrors({ [name]: `${name} đã tồn tại` });
          }
          await fetchDataUser(value);

        }}
      />

      {touched[name] && errors[name] ? (
        <div className="xl:h-6 md:h-4 h-2 xl:text-base md:text-sm text-xs text-orange-500">
          {errors[name]}
        </div>
      ) : (
        <div className="xl:h-6 md:h-4 h-2 xl:text-base md:text-sm text-xs text-orange-500"></div>
      )}

      {type === "password" ? (
        <span
          className="absolute xl:right-2 md:right-2 right-1 xl:top-2 md:top-1 top-1 xl:text-2xl md:text-lg  cursor-pointer text-[#8c8c8c] "
          onClick={() => {
            setInputType(!inputType);
          }}
        >
          {inputType ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
export default memo(FormInputCustom);
