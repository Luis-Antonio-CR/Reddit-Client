import React from "react";
import Skeleton from "react-loading-skeleton";
import getRandomNumber from "../utils/getRandomNumber";

import arrow from "../assets/Arrow.png";

const PostLoad = () => {
    return (
        <div className="postComp">
            <div className="postComp-lateral">
                <button type="button">
                    <img src={arrow} className="arrow_top"/>
                </button>
                <h3>
                    <Skeleton width={getRandomNumber(20,50)} />
                </h3>
                <button type="button" >
                    <img src={arrow} className="arrow_bottom"/>
                </button>
            </div>
            <div className="postComp-main">
                <h2 className="medium_text">
                    <Skeleton width={getRandomNumber(100, 200)} />
                </h2>
                <Skeleton height={250}/>
            </div>
            <div className="postComp-baseline">
                <h3>Comments</h3>
                <h3>
                    <Skeleton width={getRandomNumber(20,50)} />
                </h3>
                <h3>
                    <Skeleton width={getRandomNumber(50, 100)} />
                </h3>
            </div>
        </div>
    )
}

export default PostLoad;