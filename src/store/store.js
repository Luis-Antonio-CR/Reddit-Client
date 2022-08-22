import { configureStore } from "@reduxjs/toolkit";
import redditSlice from "./redditSlice";
import subRedditSlice from "./subRedditSlice";

export const store = configureStore({
    reducer:{
        reddit: redditSlice,
        subreddits: subRedditSlice
    }
});