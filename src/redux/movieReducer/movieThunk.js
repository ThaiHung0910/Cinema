import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieSer } from "../../service/movieSer";
import Swal from "sweetalert2";

export const getListChairThunk = createAsyncThunk(
  "movieReducer/getListChairThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await movieSer.getListChair(payload);
      console.log(data.data.content);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const sendDataListBookingChairThunk = createAsyncThunk(
  "movieReducer/sendDataListBookingChairThunk",
  async (payload, { rejectWithValue }) => {
    try {
      let data = await movieSer.postDataBookingChair(payload.dataListBookingChair);
      console.log(data)
      // /// DISPATCH LẠI
      
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Đặt vé thành công",
          showConfirmButton: false,
          timer: 1000,
        });
      }, 500);
      // Chuyển trang
      payload.navigateCustom();
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
