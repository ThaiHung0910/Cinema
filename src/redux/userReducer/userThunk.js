import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { userSer } from "../../service/userSer";
import { userLocal } from "../../service/localService";

export const loginThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.postLogin(payload.value);
      let infoUser = data.data.content;
      payload.navigateCus();
      userLocal.set(infoUser);
      message.success("Đăng nhập thành công");
      return infoUser;
    } catch (error) {
      message.error("Tài khoản hoặc mật khẩu không đúng");
      return rejectWithValue(error);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "userReducer/registerThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.postRegister(payload.value);
      let infoUser = data.data.content;
      payload.navigateCustom();
      message.success("Đăng ký thành công");
      
      return infoUser;
    } catch (err) {
      message.error("Đăng ký thất bại");
      return rejectWithValue(err);
    }
  }
);

export const updateThunk = createAsyncThunk(
  "userReducer/updateThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.putUpdateInfo(payload);
      let infoUser = data.data.content;
      
      console.log(infoUser)
      message.success("Cập nhật thành công");
      let updateInfo = await userSer.postLogin({
        taiKhoan: infoUser.taiKhoan,
        matKhau: infoUser.matKhau,
      });
      return updateInfo.data.content;
    } catch (err) {
      message.error("Cập nhật thất bại");
      return rejectWithValue(err);
    }
  }
);