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
    loginSuccess: (state, action) => {
      //   console.log("action", action);
      const { token, profile } = action.payload;
      state.profile = profile;
      state.token = token;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
  },
});

export const { loginSuccess, logOut } = userSlice.actions;

export default userSlice.reducer;
