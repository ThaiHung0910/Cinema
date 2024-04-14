import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./userThunk";
import { userLocal } from "../../service/userLocal";

const initialState = {
  infoUser: userLocal.get(),
  errorMessage: ''
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
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.rejected, (state, action) => {})
      .addCase(registerThunk.fulfilled, (state, action) => {})
      .addCase(registerThunk.pending, (state, action) => {})
      .addCase(registerThunk.rejected, (state, action) => {
        console.log(action.payload)
        const dataErr = action.payload.response.data.content
        state.errorMessage = dataErr
      });
      

  },
  
});

export const { logOutAction } = userSlice.actions;

export default userSlice.reducer;
