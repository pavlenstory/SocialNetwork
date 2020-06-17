import React from "react"
import ProfileInfo from "./ProfileInfro/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = (props) => {
    return (
        <>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </>
    )
}

export default Profile;
