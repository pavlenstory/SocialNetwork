import React from "react"
import Post from "./Post/Post"
import {MyPostsReduxForm} from "./MyPostsForm/MyPostsForm";
import s from "../Profile.module.css"


const MyPosts = ({posts, addPost, isOwner}) => {

    let postsElements = posts.map((p) => <Post post={p.post} likesCount={p.likesCount} key={p.id}/>)

    let onSubmit = (formData) => {
        addPost(formData.postArea)
    }

    if (!isOwner) {
        return <></>
    }

    return (
        <div className={s.MyPosts}>
            <h1>My Posts</h1>
            <MyPostsReduxForm onSubmit={onSubmit}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
