import imgPost from "../assets/imgPost.jpeg";
import arrow from "../assets/Arrow.png";

const PostComp = () => {
    return(
        <div className="postComp">
            <div className="postComp-lateral">
                <img src={arrow} className="arrow_top"/>
                <h3 className="lateral_number">Number</h3>
                <img src={arrow} className="arrow_bottom"/>
            </div>
            <div className="postComp-main">
                <h2 className="medium_text">Title</h2>
                <img src={imgPost}/>
            </div>
            <div className="postComp-baseline">
                <h3>Comments</h3>
                <h3>Time</h3>
                <h3>Author</h3>
            </div>
        </div>
    )
}

export default PostComp;