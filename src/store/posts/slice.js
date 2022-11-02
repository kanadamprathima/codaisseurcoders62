import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  //   details: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      //   console.log("posts action", action);
      state.posts = action.payload;
    },
  },
});

export const { postsFetched } = postsSlice.actions;

export default postsSlice.reducer;
