import { createSlice } from "@reduxjs/toolkit";
import { avatarComment } from "../../assets/img/js/img";


const initialState = {
  dataComment: [
    {
      id: 1,
      name: "Nguyễn",
      content: "Cinema thật tuyệt vời, giá vé rất hợp lí",
      hinhAnh:
        avatarComment[0],
      statusLike: false,
      numberLike: 77,
    },
    {
      id: 2,
      name: "Trần",
      content: "Phim ở trên đây toàn là phim hot mà giá lại còn rất rẻ",
      hinhAnh:
      avatarComment[1],
      statusLike: false,
      numberLike: 17,
    },
    {
      id: 4,
      name: "Dương",
      content: "Dịch vụ rất chu đáo và nhiệt tình, 100 điểm",
      hinhAnh:
      avatarComment[2],
      statusLike: false,
      numberLike: 7,
    },
  ],
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    likeCommentAction: (state, action) => {
      let cloneDataComment = [...state.dataComment];
      let index = cloneDataComment.findIndex(
        (dataComment) => dataComment.id == action.payload
      );
      if (index != -1) {
        cloneDataComment[index].statusLike =
          !cloneDataComment[index].statusLike;
      }
      if (cloneDataComment[index].statusLike) {
        cloneDataComment[index].numberLike++;
      } else {
        cloneDataComment[index].numberLike--;
      }
      state = { ...state, dataComment: cloneDataComment };
    },

    submitCommentAction: (state, action) => {
      state.dataComment.unshift(action.payload);
      state = { ...state };
    },
  },
});

export const { likeCommentAction, submitCommentAction } = commentSlice.actions;

export default commentSlice.reducer;
