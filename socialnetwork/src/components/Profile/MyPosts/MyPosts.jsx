import React from "react"
import Post from "./Post/Post"
import {MyPostsReduxForm} from "./MyPostsForm/MyPostsForm";


const MyPosts = ({posts, addPost}) => {

    let postsElements = posts.map((p) => <Post post={p.post} likesCount={p.likesCount} key={p.id}/>)

    let onSubmit = (formData) => {
        addPost(formData.postArea)
    }

    return (
        <div>
            My Posts
            <MyPostsReduxForm onSubmit={onSubmit}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
