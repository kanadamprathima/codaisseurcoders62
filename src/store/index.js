import { configureStore } from "@reduxjs/toolkit";
// import someFeatureReducer from "./someFeature/reducer";
import postReducer from "./posts/slice";

const store = configureStore({
  reducer: {
    // something: someFeatureReducer
    // ...
    posts: postReducer,
  },
});

export default store;
