import { configureStore } from "@reduxjs/toolkit";
// import someFeatureReducer from "./someFeature/reducer";
import postReducer from "./posts/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    // something: someFeatureReducer
    // ...
    posts: postReducer,
    user: userReducer,
  },
});

export default store;
