import React from "react";

const Post = (props) => {
    return (
        <div>
            <div>{props.post}</div>
            <div>like: {props.likesCount}</div>
        </div>
    )
}

export default Post;
