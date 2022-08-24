import React, {useState} from "react";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import shortenNumber from "../utils/shortenNumber";

import imgPost from "../assets/imgPost.jpeg";
import arrow from "../assets/Arrow.png";
import arrowGreen from "../assets/Green_Arrow.png";
import arrowRed from "../assets/Red_Arrow.png";

const PostComp = (props) => {
    const [ voteValue, setVoteValue ] = useState(0);
    const { post, onToggleComments } = props;

    const onHandleVote = (a) => {
        if(a === voteValue) {
            setVoteValue(0);
        } else if (a === 1){
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    }

    const renderUpVote = () => {
        if (voteValue === 1){
            return <img src={arrowGreen} className="arrow_top"/>
        }else{
            return <img src={arrow} className="arrow_top"/>
        }
    }

    const renderDownVote = () => {
        if (voteValue === -1){
            return <img src={arrowRed} className="arrow_bottom"/>
        }else{
            return <img src={arrow} className="arrow_bottom"/>
        }
    }

    const getVoteType = () =>{
        if(voteValue === 1){
            return 'up-vote';
        }
        if(voteValue === -1){
            return 'down-vote';
        }

        return '';
    }

    return(
        <div className="postComp">
            <div className="postComp-lateral">
                <button type="button" onClick={() => onHandleVote(1)} >
                    {renderUpVote()}
                </button>
                <h3 className={`lateral_number ${getVoteType()} `}> {shortenNumber(post.ups, 1)} </h3>
                <button type="button" onClick={() => onHandleVote(-1)} >
                    {renderDownVote()}
                </button>
            </div>
            <div className="postComp-main">
                <h2 className="medium_text">{post.title}</h2>
                <div className={`postComp-main_img ${post.url === "" && "img_notPresent"}`} >
                    <img src={post.url} alt="" />
                </div>
            </div>
            <div className="postComp-baseline">
                <h3>Comments: {shortenNumber(post.num_comments, 1)}</h3>
                <h3>{moment.unix(post.created_utc).fromNow()}</h3>
                <h3>{post.author}</h3>
            </div>
        </div>
    )
}

export default PostComp;