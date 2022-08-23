import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../store/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../store/redditSlice";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SubredditsBar = () => {
    const dispatch = useDispatch();
    const sub = useSelector((state) => state.subreddits);
    const { isLoading, error } = sub;
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    
    useEffect(()=> {
        dispatch(fetchSubreddits())
    }, [dispatch]);

    if(isLoading){
        return(
            <div className="subredditsBar">
                <h2 className="medium_text">Subreddits</h2>
                <ul>
                    <li>
                        <Skeleton width={80}/>
                    </li>
                </ul>
            </div>
        )
    }

    if(error){
        return(
            <div className="subredditsBar">
                <h2 className="medium_text">Error</h2>
                <button className="normal_text" onClick={() => dispatch(fetchSubreddits())}>
                    Try again
                </button>
            </div>
        )
    }

    if(subreddits.length === 0){
        return(
            <div className="subredditsBar">
                <h2 className="medium_text">Error</h2>
                <button className="normal_text" onClick={() => dispatch(fetchSubreddits())}>
                    Try again
                </button>
            </div>
        )
    }

    return(
        <div className="subbredditsBar">
            <h2 className="medium_text">Subreddits</h2>
            <ul>
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id} className={`${ selectedSubreddit === subreddit.url && `selected-subreddit` }`}>
                        <button onClick={()=> dispatch(setSelectedSubreddit(subreddit.url))} className="small_text">
                            <img 
                                src={ subreddit.icon_img }
                                alt={`${subreddit.display_name}`}
                                className="subreddit_icon"
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubredditsBar;