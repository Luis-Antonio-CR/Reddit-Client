import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false
};

const subRedditSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        startGetSubReddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSucces(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;

        },
        getSubredditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const {
    startGetSubReddits,
    getSubredditsFailed,
    getSubredditsSucces
} = subRedditSlice.actions;

export default getSubreddits.reducers;

export const fetchSubReddits = () => async (dispatch) => {
    try{
        dispatch(startGetSubReddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSucces(subreddits));
    }catch(error){
        dispatch(getSubredditsFailed());
    }
    
}

export const selectSubReddits = (state) => state.subreddits.subreddits;