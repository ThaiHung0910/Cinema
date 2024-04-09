import { createAsyncThunk } from "@reduxjs/toolkit";
import {movieSer} from '../../service/movieSer'



export const getListChairThunk = createAsyncThunk(
    'movieReducer/getListChairThunk',
    async (payload, { rejectWithValue }) => {
      try {
        const data = await movieSer.getListChair(payload)
        console.log(data.data.content)
        return data.data.content
      } catch (error) {
        return rejectWithValue(error);
      }
    },
  );