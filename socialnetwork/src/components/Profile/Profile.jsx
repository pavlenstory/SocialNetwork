import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfro/ProfileInfo"
import {updateNewPostText} from "../../Redux/store";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </>
    )
}

export default Profile;
