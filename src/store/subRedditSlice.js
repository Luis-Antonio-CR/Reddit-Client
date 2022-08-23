import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false
};

const subredditSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        startGetSubreddits(state) {
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
    startGetSubreddits,
    getSubredditsFailed,
    getSubredditsSucces
} = subredditSlice.actions;

export default subredditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    try{
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSucces(subreddits));
    }catch(error){
        dispatch(getSubredditsFailed());
    }
    
}

export const selectSubreddits = (state) => state.subreddits.subreddits;