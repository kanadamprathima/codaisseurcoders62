import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  details: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      //   console.log("posts action", action);
      state.posts = action.payload;
    },
    FetchById: (state, action) => {
      //   console.log("details action", action);
      state.details = action.payload;
    },
  },
});

export const { postsFetched, FetchById } = postsSlice.actions;

export default postsSlice.reducer;
