import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../store/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../store/redditSlice";

const SubredditsBar = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    
    useEffect(()=> {
        dispatch(fetchSubreddits())
    }, [dispatch]);

    return(
        <div className="subbredditsBar">
            <h2 className="medium_text">Subreddits</h2>
            <ul>
                {subreddits.map((subreddit) => {
                    <li key={subreddit.id} className={`${
                        selectedSubreddit === subreddit.url && `selected-subreddit`
                      }`}>
                        <button onClick={()=> dispatch(setSelectedSubreddit(subreddit.url))}>
                            <img 
                                src={ subreddit.icon_img }
                                alt={`${subreddit.display_name}`}
                                className="subreddit_icon"
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SubredditsBar;