import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  details: null,
  comments: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      //   console.log("posts action", action);
      state.posts = [...state.posts, ...action.payload];
    },
    FetchById: (state, action) => {
      // console.log("details action", action);
      // console.log("comments action in slice", action);
      state.details = action.payload.post;
      state.comments = action.payload.comment;
    },
  },
});

export const { postsFetched, FetchById } = postsSlice.actions;

export default postsSlice.reducer;
