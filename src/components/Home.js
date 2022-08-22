import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostComp from "./PostComponent";
import PostLoad from "./PostLoading";
import getRandomNumber from "../utils/getRandomNumber";
import {
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments
} from "../store/redditSlice";

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
          dispatch(fetchComments(index, permalink));
        };
    
        return getComments;
      };

    if (isLoading){
        return(
            <div className="posts" alt="">
                <PostLoad />
                <PostLoad />
                <PostLoad />
                <PostLoad />
            </div>
        )
    }

    if (error) {
        return(
            <div className="error">
                <h2 className="medium_text">Failed to load posts.</h2>
                <button className="normal_text" onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
                    Try again
                </button>
            </div>
        )
    }

    if(posts.lenght === 0){
        return(
            <div className="error">
                <h2 className="medium_text">No posts matching "{searchTerm}"</h2>
                <button className="normal_text" onClick={() => dispatch(setSearchTerm(""))} >
                    Go home
                </button>
            </div>
        )
    }

    return(
        <div className="posts" alt="">
            {posts.map((post, index)=> (
                <PostComp 
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </div>
    )
}

export default Home;