import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
           My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;
