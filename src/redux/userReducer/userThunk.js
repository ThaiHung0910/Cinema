import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { userSer } from "../../service/userSer";
import { userLocal } from "../../service/userLocal";

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
      message.error("Đăng nhập thất bại");
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

