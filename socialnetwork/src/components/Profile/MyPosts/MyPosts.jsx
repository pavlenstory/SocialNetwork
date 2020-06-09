import React from "react"
import Post from "./Post/Post"
import {MyPostsReduxForm} from "./MyPostsForm/MyPostsForm";


const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post post={p.post} likesCount={p.likesCount}
                                                                       key={p.id}/>)

    let onSubmit = (formData) => {
        props.addPost(formData.postArea)
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
