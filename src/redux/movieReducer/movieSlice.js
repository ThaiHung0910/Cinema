import { createSlice } from '@reduxjs/toolkit'
import { getListChairThunk } from './movieThunk';

const initialState = {
    listChair: [],
    listChairBook: [],
    infoMovie: {}
}

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    addChairAction: (state, action) => {
        let chair = action.payload
        let index = state.listChairBook.findIndex((e) => e.maGhe === chair.maGhe)
        if(index !== -1) {
          state.listChairBook.splice(index, 1)
        } else {
          state.listChairBook.push(chair)
        }

    }
  },
  extraReducers: (builder) => {
    builder.addCase(getListChairThunk.fulfilled, (state, action) => {
        let infoScreenPage = action.payload
        let listChair = infoScreenPage.danhSachGhe.slice(0,100)
        state.listChair = listChair
        state.infoMovie = infoScreenPage.thongTinPhim;
    })
  }
});

export const {addChairAction} = movieSlice.actions

export default movieSlice.reducer