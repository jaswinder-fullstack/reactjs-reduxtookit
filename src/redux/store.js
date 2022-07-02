import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import postsReducer from "./postsSlice"; 

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  }
});
