import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../api/reddit";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectSubreddits: '/r/pics/'

};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        startGetPosts(state){
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action){
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFalied(state){
            state.isLoading = false;
            state.error = true;
        }
        setPosts(state){
            state.posts = action.payload;
        }
    }
});