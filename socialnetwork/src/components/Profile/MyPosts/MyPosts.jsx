import React from "react"
import Post from "./Post/Post"


const MyPosts = (props) => {

    let postsElements = props.state.profilePage.posts.map((p) => <Post post={p.post} likesCount={p.likesCount}
                                                                       key={p.id}/>)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let newText = e.target.value;
        props.onPostChange(newText)
    }

    return (
        <div>
            My Posts
            <div>
                <textarea onChange={onPostChange} value={props.state.profilePage.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
