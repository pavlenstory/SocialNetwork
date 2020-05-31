import React from "react"
import ProfileInfo from "./ProfileInfro/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPostsContainer state={props.state} store={props.store}/>
        </>
    )
}

export default Profile;
