import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk, updateThunk } from "./userThunk";
import { userLocal } from "../../service/localService";

const initialState = {
  infoUser: userLocal.get(),
  errorMessage: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logOutAction: (state, action) => {
      // xoá redux
      state.infoUser = null;
      // xoá localstorage
      userLocal.delete();
    },
    resetErrorMessage: (state, action) => {
      state.errorMessage = "";
    },
  },
  //   Xử lý action bất đồng bộ
  extraReducers: (builder) => {
    // fulfilled : Thành công , pending : chờ , rejected : thất bại
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.infoUser = action.payload;
          //Lưu info user xuống localstorage
          userLocal.set(action.payload);
        }
      })
      .addCase(registerThunk.rejected, (state, action) => {
        console.log(action.payload);
        const dataErr = action.payload.response.data.content;
        state.errorMessage = dataErr;
      })
      .addCase(updateThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.infoUser = action.payload;
          //Lưu info user xuống localstorage
          userLocal.set(action.payload);
        }
      });
  },
});

export const { logOutAction, resetErrorMessage } = userSlice.actions;

export default userSlice.reducer;
