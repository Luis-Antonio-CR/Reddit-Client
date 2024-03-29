import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../api/reddit";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/'

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
        },
        setPosts(state,action){
            state.posts = action.payload;
        },
        setSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state,action){
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        toggleShowingComments(state, action){
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        },
        startGetComments(state, action){
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            if(!state.posts[action.payload].showingComments){
                return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action){
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action){
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        }

    }
});

export const {
    startGetPosts,
    getPostsSuccess,
    getPostsFalied,
    setPosts,
    setSearchTerm,
    setSelectedSubreddit,
    toggleShowingComments,
    startGetComments,
    getCommentsSuccess,
    getCommentsFailed
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try{
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);

        const postsWithMetadata = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
        }));
        dispatch(getPostsSuccess(postsWithMetadata));


    }catch (error){
        dispatch(getPostsFalied());
    }
}

export const fetchComments = (index, permalink) => async (dispatch) => {
    try{
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommentsSuccess({index, comments}));
    }catch (error){
        dispatch(getCommentsFailed(index));
    }
}

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerms = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddits;

export const selectFilteredPosts = createSelector( [selectPosts, selectSearchTerms], (posts, searchTerm) => {
    if(searchTerm !== ''){
        return posts.filter( 
            (post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    return posts;
})