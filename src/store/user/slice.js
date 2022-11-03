import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  token: null,
  profile: null,
  id: 42,
  favorites: [1, 2],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log("action", action);
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
