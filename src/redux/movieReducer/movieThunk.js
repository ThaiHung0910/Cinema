import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieSer } from "../../service/movieSer";
import { swalCustom } from "../../utils";

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
        swalCustom("success", "Đặt vé thành công", 1000)
      }, 500);
      payload.navigateCustom();
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
